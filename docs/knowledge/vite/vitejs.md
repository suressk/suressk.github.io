---
title: vite 命令到 createServer
---

我们知道， `package.json` 文件的 `bin` 字段是用来指定要运行的命令及运行命令所要执行的文件

## vite 命令执行的文件

vite 的配置如下：

```json
{
  "bin": {
    "vite": "bin/vite.js"
  }
}
```

好了，我们知道启动 dev-server 的 `vite` 命令，实际运行的就是 `bin/vite.js` 文件，那我们进去看看：

## 1. 入口：`vite/bin/vite.js`

判断当前目录是否包含 `node_modules` 目录，若不包含，则需要 `source-map` 支持

```js
#!/usr/bin/env node // 固定格式，用来指定命令运行的环境（node）

if (!__dirname.includes('node_modules')) {
  try {
    // only available as dev dependency
    require('source-map-support').install();
  } catch (e) {}
}
```

## 2. 检查 `process.argv` 是否是 `debug` 模式

```js
// check debug mode first before requiring the CLI.
const debugIndex = process.argv.findIndex((arg) =>
  /^(?:-d|--debug)$/.test(arg),
);
const filterIndex = process.argv.findIndex((arg) =>
  /^(?:-f|--filter)$/.test(arg),
);

if (debugIndex > 0) {
  let value = process.argv[debugIndex + 1];
  if (!value || value.startsWith('-')) {
    value = 'vite:*';
  } else {
    // support debugging multiple flags
    // with comma-separated list
    value = value
      .split(',')
      .map((v) => `vite:${v}`)
      .join(',');
  }
  process.env.DEBUG = value;

  if (filterIndex > 0) {
    const filter = process.argv[filterIndex + 1];
    if (filter && !filter.startsWith('-')) {
      process.env.VITE_DEBUG_FILTER = filter;
    }
  }
}
```

## 3. 导入编译后的 `cli` 脚本

```js
const profileIndex = process.argv.indexOf('--profile');

function start() {
  require('../dist/node/cli');
}

// 如果配置了 profile 参数
if (profileIndex > 0) {
  // 截掉 '--profile'
  process.argv.splice(profileIndex, 1);
  const next = process.argv[profileIndex];
  if (next && !next.startsWith('-')) {
    process.argv.splice(profileIndex, 1);
  }
  // 创建会话连接（webkit inspector）
  const inspector = require('inspector');
  const session = (global.__vite_profile_session = new inspector.Session());
  session.connect();
  session.post('Profiler.enable', () => {
    session.post('Profiler.start', start);
  });
} else {
  // 正常启动
  start();
}
```

## 4. 进入 `cli.js`，源码：`vite/src/node/cli.ts`

```ts
import { cac } from 'cac'; /* 一个简单且强大的命令行库，比 commander 更轻量 */
import chalk from 'chalk'; /* 美化控制台日志记录 */
import { performance } from 'perf_hooks'; /* node.js 收集性能指标的对象 */
import { BuildOptions } from './build'; /* 打包 📦 配置项 */
import { ServerOptions } from './server'; /* 启动服务的配置项 */
import { createLogger, LogLevel } from './logger'; /* 打印日志 */
import { resolveConfig } from '.'; /* 处理配置项的方法 */
import { preview } from './preview'; /* 打包结果预览方法 */

// 使用 cac 生成 cli 实例
const cli = cac('vite');
```

## 5. 全局 `cli` 选项及清理选项

```ts
// global options
interface GlobalCLIOptions {
  '--'?: string[];
  c?: boolean | string;
  config?: string;
  base?: string;
  l?: LogLevel;
  logLevel?: LogLevel;
  clearScreen?: boolean;
  d?: boolean | string;
  debug?: boolean | string;
  f?: string;
  filter?: string;
  m?: string;
  mode?: string;
}
/**
 * removing global flags before passing
 * as command specific sub-configs
 * 删除全局 cli 配置
 */
function cleanOptions<Options extends GlobalCLIOptions>(
  options: Options,
): Omit<Options, keyof GlobalCLIOptions> {
  const ret = { ...options };
  delete ret['--'];
  delete ret.c;
  delete ret.config;
  delete ret.base;
  delete ret.l;
  delete ret.logLevel;
  delete ret.clearScreen;
  delete ret.d;
  delete ret.debug;
  delete ret.f;
  delete ret.filter;
  delete ret.m;
  delete ret.mode;
  return ret;
}
```

## 6. cli 参数定义

这里我们就只研究一下开发环境下的功能实现，生产环境/预览环境后续再考虑吧～

```ts
// 下面是一些核心参数，如 -c 指定配置文件等
cli
  .option('-c, --config <file>', `[string] use specified config file`)
  .option('--base <path>', `[string] public base path (default: /)`)
  .option('-l, --logLevel <level>', `[string] info | warn | error | silent`)
  .option('--clearScreen', `[boolean] allow/disable clear screen when logging`)
  .option('-d, --debug [feat]', `[string | boolean] show debug logs`)
  .option('-f, --filter <filter>', `[string] filter debug logs`)
  .option('-m, --mode <mode>', `[string] set env mode`);

// dev 开发环境，主要针对 server 的参数配置
cli
  .command('[root]') // default command
  .alias('serve') // the command is called 'serve' in Vite's API
  .alias('dev') // alias to align with the script name
  .option('--host [host]', `[string] specify hostname`)
  .option('--port <port>', `[number] specify port`)
  .option('--https', `[boolean] use TLS + HTTP/2`)
  .option('--open [path]', `[boolean | string] open browser on startup`)
  .option('--cors', `[boolean] enable CORS`)
  .option('--strictPort', `[boolean] exit if specified port is already in use`)
  .option(
    '--force',
    `[boolean] force the optimizer to ignore the cache and re-bundle`,
  )
  .action(devAction);
/* 这里将 action 函数抽出来单独看，免得篇幅过长，拎不清注意点 */

cli.help(); // 命令行使用 -h / --help 参数，输出帮助信息
cli.version(require('../../package.json').version); // vite 版本号

cli.parse(); // 解析命令行参数
```

`devAction 函数` ：

```ts
const devAction = async (
  root: string,
  options: ServerOptions & GlobalCLIOptions,
) => {
  // output structure is preserved even after bundling so require()
  // is ok here
  const { createServer } = await import('./server'); // 导入创建 dev-server
  try {
    const server = await createServer({
      root,
      base: options.base,
      mode: options.mode,
      configFile: options.config,
      logLevel: options.logLevel,
      clearScreen: options.clearScreen,
      server: cleanOptions(options),
    });
    // native Node http server instance or null
    if (!server.httpServer) {
      throw new Error('HTTP server not available');
    }
    await server.listen(); // 启动 dev-server
    const info = server.config.logger.info; // info 日志

    info(
      chalk.cyan(`\n  vite v${require('vite/package.json').version}`) +
        chalk.green(` dev server running at:\n`),
      {
        clear: !server.config.logger.hasWarned,
      },
    );
    // 调用 logger.ts 的 printCommonServerUrls 方法打印 dev-server 运行的 url
    server.printUrls();

    // __vite_start_time 在执行 vite 命令时
    // 赋值为 performance.now()，记录启动服务的开始时间
    if (global.__vite_start_time) {
      // 服务启动时间（ms）
      const startupDuration = performance.now() - global.__vite_start_time;
      info(`\n  ${chalk.cyan(`ready in ${Math.ceil(startupDuration)}ms.`)}\n`);
    }
  } catch (e) {
    // 打印服务启动失败的日志
    createLogger(options.logLevel).error(
      chalk.red(`error when starting dev server:\n${e.stack}`),
      { error: e },
    );
    // 结束进程
    process.exit(1);
  }
};
```

## 7. `createServer`

```ts
// vite/src/node/server/index.ts
export async function createServer(
  inlineConfig: InlineConfig = {},
): Promise<ViteDevServer> {
  // 这个方法里，大概做了下面这些事：
  // 1. 处理服务的启动配置
  const config = await resolveConfig(inlineConfig, 'serve', 'development');
  const httpsOptions = await resolveHttpsConfig(config.server.https);

  // 2. 检查 config.server.middlewareMode 是否 === true，若是将其置为 'ssr'
  // connect 包创建连接（方便使用中间件来扩展的 node http server 框架）
  const middlewares = connect() as Connect.Server;
  const httpServer = middlewareMode
    ? null
    : await resolveHttpServer(serverConfig, middlewares, httpsOptions);
  // resolveHttpServer 方法用来区分使用 http / https / http2 (npm package)来
  // 创建 server 并返回赋值给 httpServer

  // 3. 创建 webSocket 实例
  const ws = createWebSocketServer(httpServer, config, httpsOptions);

  // 4. 使用 chokidar 监听 文件 修改
  const { ignored = [], ...watchOptions } = serverConfig.watch || {};
  const watcher = chokidar.watch(path.resolve(root), {
    ignored: [
      '**/node_modules/**',
      '**/.git/**',
      ...(Array.isArray(ignored) ? ignored : [ignored]),
    ],
    ignoreInitial: true,
    ignorePermissionErrors: true,
    disableGlobbing: true,
    ...watchOptions,
  }) as FSWatcher;

  // 5. 创建 pluginContainer，创建模块映射表
  const container = await createPluginContainer(config, moduleGraph, watcher);

  const moduleGraph: ModuleGraph = new ModuleGraph((url) =>
    container.resolveId(url),
  );
  const closeHttpServer = createServerCloseFn(httpServer);

  // 6. 创建 server 对象
  const server: ViteServer = {
    config,
    middlewares,
    get app() {
      // 过期的 api
      return middlewares;
    },
    httpServer,
    watcher,
    pluginContainer: container,
    ws,
    moduleGraph,
    transformWithEsbuild,
    transformRequest(url, options) {
      return transformRequest(url, server, options);
    },
    transformIndexHtml: null!, // to be immediately set
    ssrLoadModule(url) {
      // ... 服务端渲染加载 module
    },
    listen(port?: number, isRestart?: boolean) {
      // 启动 dev-server 方法
      return startServer(server, port, isRestart);
    },
    async close() {
      // 退出 dev-server
      // watcher，ws，container，httpServer
    },
    printUrls() {
      // 打印日志
    },
    async restart(forceOptimize: boolean) {
      // 调用 restartServer 方法，重启 dev-server
    },
    // _xxxx  一些私有属性
  };

  // 立即创建转换 html 的方法
  server.transformIndexHtml = createDevHtmlTransformFn(server);

  // 7. package 缓存
  const { packageCache } = config;
  const setPackageData = packageCache.set.bind(packageCache);
  packageCache.set = (id, pkg) => {
    if (id.endsWith('.json')) {
      watcher.add(id);
    }
    return setPackageData(id, pkg);
  };

  // 8. watcher 监听文件变化：change, add, unlink
  // 具体可见 【热更新机制】
  watcher.on('change', async (file) => {
    /* ...other code */
  });

  // 9. 一堆中间件的应用
  // /node/server/middlewares/*.ts

  return server; // 返回创建的 server 对象
}
```
