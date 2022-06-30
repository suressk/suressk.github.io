---
title: vite HMR - 热更新机制
---

## 实现原理

`Vite` 以原生 `ES Module` 模式，通过 `websocket` 实现浏览器与 `dev-server` 的通信，当代码被修改时，服务端发送消息通知客户端去请求修改模块的代码，完成热更新，从而实现热更新

### 大致流程

> - 创建 `websocket` 服务器
> - 创建一个 `ws client` 文件，并在 `html` 中引入，加载 `ws client` 文件
> - 服务端监听文件变化，发送 `websocket` 消息，告诉客户端变化类型，变化文件等
> - 客户端接受到消息，根据消息内容决定重新刷新页面还是重新加载变化文件，并执行相关文件注入 `ws client` 时设置的 `hmr hook` 函数

## 创建 ws：`createWebSocketServer`

在 [`createServer` 中调用 `createWebSocketServer`（入口 🔗）](/knowledge/vite/vitejs.html#createserver) 方法，在 `createWebSocketServer` 中调用 `ws` 库创建 `ws 服务器`（如下）

```ts
import { WebSocketServer as WebSocketServerRaw } from 'ws'

export function createWebSocketServer(
  server: Server | null /* 'http' pkg type 'Server' */,
  config: ResolvedConfig /* 类型 vite/src/node/config.ts */,
  httpsOptions?: HttpsServerOptions /* 'https' pkg type 'ServerOptions' */
): WebSocketServer {
  let wss: WebSocketServerRaw
  let httpsServer: Server | undefined = undefined

  const hmr = isObject(config.server.hmr) && config.server.hmr
  const hmrPort = hmr && hmr.port
  const wsServer =
    (hmr && hmr.server) ||
    ((!hmrPort || hmrPort === config.server.port) && server)

  if (wsServer) {
    // 无服务器模式创建 ws 服务器
    wss = new WebSocketServerRaw({ noServer: true })
    // wsServer 服务器监听到更新
    wsServer.on('upgrade', (req, socket, head) => {
      // HMR_HEADER = 'vite-hmr'
      if (req.headers['sec-websocket-protocol'] === HMR_HEADER) {
        wss.handleUpgrade(req, socket as Socket, head, ws => {
          wss.emit('connection', ws, req)
        })
      }
    })
  } else {
    // ... other code
    // vite dev server in middleware mode
    wss = new WebSocketServerRaw(websocketServerOptions)
  }

  return {
    /* 触发事件 */
    on: ((event: string, fn: () => void) => {
      // ...
    }) as WebSocketServer['on'],

    /* 移除事件 */
    off: ((event: string, fn: () => void) => {
      // ...
    }) as WebSocketServer['off'],

    get clients() {
      return new Set(Array.from(wss.clients).map(getSocketClient))
    },

    /* 发送消息给客户端 */
    send(...args: any[]) {
      let payload: HMRPayload /* vite/types/hmrPayload.d.ts */
      // ... payload 赋值
      const stringified = JSON.stringify(payload)
      wss.clients.forEach(client => {
        // readyState 1 means the connection is open
        if (client.readyState === 1) {
          client.send(stringified)
        }
      })
    },

    /* 关闭 ws server */
    close() {
      return new Promise((resolve, reject) => {
        wss.clients.forEach(client => {
          client.terminate()
        })
        wss.close(err => {
          // ...
        })
      })
    }
  }
}
```

<!--
`WebSocketServer` 类型定义

```ts
export interface WebSocketServer {
  /**
   * Get all connected clients.
   */
  clients: Set<WebSocketClient>
  /**
   * Boardcast events to all clients
   */
  send(payload: HMRPayload): void
  /**
   * Send custom event
   */
  send<T extends string>(event: T, payload?: InferCustomEventPayload<T>): void
  /**
   * Disconnect all clients and terminate the server.
   */
  close(): Promise<void>
  /**
   * Handle custom event emitted by `import.meta.hot.send`
   */
  on: WebSocketTypes.Server['on'] & {
    <T extends string>(
      event: T,
      listener: WebSocketCustomListener<InferCustomEventPayload<T>>
    ): void
  }
  /**
   * Unregister event listener.
   */
  off: WebSocketTypes.Server['off'] & {
    (event: string, listener: Function): void
  }
}
```
-->

## 创建 `ws client` 文件，并加载

启动一个 `vite` 创建的项目文件，浏览器控制台查看 `Elements` 栏，`html` 头部会有插入一个 `<script>` 标签：

```html
<script type="module" src="/@vite/client"></script>
```

其中加载的文件就是：

```js
// 这篇是看的 vite@2.9.9 版本，与初始描述版本有些许更新
// 因为我这里用的是 pnpm 包管理器，所以在 .pnpm 目录下
import '/node_modules/.pnpm/vite@2.9.9/node_modules/vite/dist/client/env.mjs'
// ... code
```

在加载这个 js 文件并执行之后，就会创建客户端（浏览器端）的 `WebSocket` 示例对象，通过监听 `message` 事件得到服务器发来的消息，再根据类型进行相应的处理

**过程如下：**

## 1. 插入 `<script>` 标签

在处理 `index.html` 时，通过 `transformIndexHtml` Hook 将 `/@vite/client` `<script>` 标签插入 `html` 中

```ts
// vite/src/node/server/middlewares/indexHtml.ts
export function createDevHtmlTransformFn(
  server: ViteDevServer
): (url: string, html: string, originalUrl: string) => Promise<string> {
  const [preHooks, postHooks] = resolveHtmlTransforms(server.config.plugins)
  return (url: string, html: string, originalUrl: string): Promise<string> => {
    return applyHtmlTransforms(html, [...preHooks, devHtmlHook, ...postHooks], {
      path: url,
      filename: getHtmlFilename(url, server),
      server,
      originalUrl
    })
  }
}

const devHtmlHook: IndexHtmlTransformHook = async (
  html,
  { path: htmlPath, filename, server, originalUrl }
) => {
  /* other handling code... */
  return {
    html,
    tags: [
      {
        tag: 'script',
        attrs: {
          type: 'module',
          /* CLIENT_PUBLIC_PATH 即为 `/@vite/client` */
          /* path.posix: 允许在任意操作系统上使用linux的方式来操作路径 */
          src: path.posix.join(base, CLIENT_PUBLIC_PATH)
        },
        injectTo: 'head-prepend'
      }
    ]
  }
}
```

## 2. 插入 `ws client` 文件所需的变量

在 [`插件机制` 一文中 🔗](/knowledge/vite/plugin.html#resolveplugins) 的 `resolveplugins` 函数末尾对开发环境会添加 `clientInjectionsPlugin` 插件，为 `ws client` 文件插入所需的变量：

```ts
export function clientInjectionsPlugin(config: ResolvedConfig): Plugin {
  return {
    name: 'vite:client-inject',
    transform() {
      /* ... other code */
      return code
        .replace(`__MODE__`, JSON.stringify(config.mode))
        .replace(`__BASE__`, JSON.stringify(config.base))
        .replace(`__DEFINES__`, serializeDefine(config.define || {}))
        .replace(`__HMR_PROTOCOL__`, JSON.stringify(protocol))
        .replace(`__HMR_HOSTNAME__`, JSON.stringify(host))
        .replace(`__HMR_PORT__`, JSON.stringify(port))
        .replace(`__HMR_TIMEOUT__`, JSON.stringify(timeout))
        .replace(`__HMR_ENABLE_OVERLAY__`, JSON.stringify(overlay))
    }
  }
}
```

## 3. 添加 `message` 事件监听

在 [`resolveConfig` 一文 🔗](/knowledge/vite/resolveConfig.html#_6-解析-resolve-参数：alias、dedupe) 中就有说到对 `/@vite/client` 路径开头的文件请求进行重定向，从而去获取打包后的 `dist/client/client.mjs` 文件，对应其源码位置如下：

```ts
// vite/src/client/client.ts
const socketProtocol =
  __HMR_PROTOCOL__ || (location.protocol === 'https:' ? 'wss' : 'ws')

let socket: WebSocket
try {
  /* ================================================== */
  socket = new WebSocket(`${socketProtocol}://${socketHost}`, 'vite-hmr')
  /* 添加 message 事件监听，根据事件类型进行相应的处理 */
  socket.addEventListener('message', async ({ data }) => {
    handleMessage(JSON.parse(data))
  })
  /* ================================================== */
  /* 监听 close 事件，尝试重连 */
} catch (error) {
  /* 浏览器端 websocket 连接失败提示 */
  console.error(`[vite] failed to connect to websocket (${error}). `)
}

async function handleMessage(payload: HMRPayload) {
  switch (payload.type) {
    case 'connected':
      /* 连接 ws server */
      break
    case 'update':
      /* 通知 beforeUpdate 类型的监听器 */
      notifyListeners('vite:beforeUpdate', payload)
      /* 遍历 payload.updates，执行相应的更新操作 */
      break
    case 'custom':
      /* 通知 payload.event 类型的监听器 */
      notifyListeners(payload.event, payload.data)
      break
    case 'full-reload':
      /* 通知 beforeFullReload 类型的监听器 */
      notifyListeners('vite:beforeFullReload', payload)
      location.reload() /* 页面重载 */
      break
    case 'prune':
      /* 通知 beforePrune 类型的监听器 */
      notifyListeners('vite:beforePrune', payload)
      /*
       HMR 更新后，页面上不再导入某些模块，
       但它们可能留下了需要清理的副作用
       （比如 style 样式的注入）
       因而需要去清理掉
      */
      break
    case 'error':
      /* 通知错误回调，并提示 */
      notifyListeners('vite:error', payload)
      break
    default: {
      /* 默认：啥也不干 */
      const check: never = payload
      return check
    }
  }
}

/* createHotContext 创建热更新上下文 hook 中添加对应的事件监听 */
const customListenersMap = new Map<string, ((data: any) => void)[]>()

function notifyListeners<T extends string>(
  event: T,
  data: InferCustomEventPayload<T> | any
): void {
  const cbs = customListenersMap.get(event)
  if (cbs) {
    cbs.forEach(cb => cb(data))
  }
}
```

## 4. 监听文件变化

我们在 [`从 vite 到 createServer` 一文中 🔗](/knowledge/vite/vitejs.html#_7-createserver) 的 `createServer` 函数的第 4 点注释说明中就已经看到了，通过 `chokidar.watch` 去进行文件变动的监听事件处理

```ts
// vite/src/node/server/index.ts
const watcher = chokidar.watch(path.resolve(root), {
  /* ... 相关配置参数  */
})

/* 文件内容变更触发 */
watcher.on('change', async file => {
  // 格式化文件路径
  file = normalizePath(file)
  // 若是 package.json 文件变化，校验依赖是否变更
  // 删除 packageCache 中的缓存记录
  if (file.endsWith('/package.json')) {
    return invalidatePackageData(packageCache, file)
  }
  // 若是其他文件变更，更新 moduleGraph 缓存
  moduleGraph.onFileChange(file)
  // 判断是否开启 hmr（默认开启）
  if (serverConfig.hmr !== false) {
    try {
      // 触发热更新
      await handleHMRUpdate(file, server)
    } catch (err) {
      // 更新失败，发送错误事件及错误信息
      ws.send({
        type: 'error',
        err: prepareError(err)
      })
    }
  }
})

/* 根据 server.moduleGraph 判定是文件新增还是删除 */
/* 新增文件触发 */
watcher.on('add', file => {
  handleFileAddUnlink(normalizePath(file), server)
})

/* 删除文件触发 */
watcher.on('unlink', file => {
  handleFileAddUnlink(normalizePath(file), server)
})
```
