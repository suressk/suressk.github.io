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
