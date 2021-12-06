---
title: 执行 vite 命令做了什么事
---

我们知道，`package.json` 文件的 `bin` 字段是用来指定命令及命令执行的文件

vite 的配置如下：

```json
{
  "bin": {
    "vite": "bin/vite.js"
  }
}
```

好了，我们知道启动 dev-server 的 `vite` 命令，实际运行的就是 `bin/vite.js` 文件，那我们进去看看：

1. 判断当前目录是否包含 `node_modules` 目录，若不包含，则需要 `source-map` 支持

   ```js
   #!/usr/bin/env node // 固定格式，用来指定命令运行的环境（node）

   if (!__dirname.includes("node_modules")) {
     try {
       // only available as dev dependency
       require("source-map-support").install();
     } catch (e) {}
   }
   ```

2. 检查 `process.argv` 是否是 `debug` 模式

   ```js
   // check debug mode first before requiring the CLI.
   const debugIndex = process.argv.findIndex((arg) =>
     /^(?:-d|--debug)$/.test(arg)
   );
   const filterIndex = process.argv.findIndex((arg) =>
     /^(?:-f|--filter)$/.test(arg)
   );

   if (debugIndex > 0) {
     let value = process.argv[debugIndex + 1];
     if (!value || value.startsWith("-")) {
       value = "vite:*";
     } else {
       // support debugging multiple flags with comma-separated list
       value = value
         .split(",")
         .map((v) => `vite:${v}`)
         .join(",");
     }
     process.env.DEBUG = value;

     if (filterIndex > 0) {
       const filter = process.argv[filterIndex + 1];
       if (filter && !filter.startsWith("-")) {
         process.env.VITE_DEBUG_FILTER = filter;
       }
     }
   }
   ```

3. 导入编译后的 `cli` 脚本

   ```js
   const profileIndex = process.argv.indexOf("--profile");

   function start() {
     require("../dist/node/cli");
   }

   // 如果配置了 profile 参数
   if (profileIndex > 0) {
     // 截掉 '--profile'
     process.argv.splice(profileIndex, 1);
     const next = process.argv[profileIndex];
     if (next && !next.startsWith("-")) {
       process.argv.splice(profileIndex, 1);
     }
     // 创建会话连接
     const inspector = require("inspector");
     const session = (global.__vite_profile_session = new inspector.Session());
     session.connect();
     session.post("Profiler.enable", () => {
       session.post("Profiler.start", start);
     });
   } else {
     // 正常启动
     start();
   }
   ```

4. 进入编译后的 `dist/node/cli.js`，即 `src/node/cli.ts`

   ```ts
   import { cac } from "cac"; /* 一个简单且强大的命令行库，比 commander 更轻量 */
   import chalk from "chalk"; /* 美化控制台日志记录 */
   import { performance } from "perf_hooks"; /* node.js 收集性能指标的对象 */
   import { BuildOptions } from "./build"; /* 打包 📦 配置项 */
   import { ServerOptions } from "./server"; /* 启动服务的配置项 */
   import { createLogger, LogLevel } from "./logger"; /* 打印日志 */
   import { resolveConfig } from "."; /* 处理配置项的方法 */
   import { preview } from "./preview"; /* 打包结果预览方法 */

   // 使用 cac 生成 cli 实例
   const cli = cac("vite");
   ```

5. 全局 cli 选项及清理选项

   ```ts
   // global options
   interface GlobalCLIOptions {
     "--"?: string[];
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
    * removing global flags before passing as command specific sub-configs
    */
   function cleanOptions<Options extends GlobalCLIOptions>(
     options: Options
   ): Omit<Options, keyof GlobalCLIOptions> {
     const ret = { ...options };
     delete ret["--"];
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

6. cli 参数定义，这里我们就只研究一下开发环境下的功能实现，后续生产环境/预览环境再考虑要不要加上吧

   ```ts
   // 下面是一些核心参数，如 -c 指定配置文件等
   cli
     .option("-c, --config <file>", `[string] use specified config file`)
     .option("--base <path>", `[string] public base path (default: /)`)
     .option("-l, --logLevel <level>", `[string] info | warn | error | silent`)
     .option(
       "--clearScreen",
       `[boolean] allow/disable clear screen when logging`
     )
     .option("-d, --debug [feat]", `[string | boolean] show debug logs`)
     .option("-f, --filter <filter>", `[string] filter debug logs`)
     .option("-m, --mode <mode>", `[string] set env mode`);

   // dev 开发环境，主要针对 server 的参数配置
   cli
     .command("[root]") // default command
     .alias("serve") // the command is called 'serve' in Vite's API
     .alias("dev") // alias to align with the script name
     .option("--host [host]", `[string] specify hostname`)
     .option("--port <port>", `[number] specify port`)
     .option("--https", `[boolean] use TLS + HTTP/2`)
     .option("--open [path]", `[boolean | string] open browser on startup`)
     .option("--cors", `[boolean] enable CORS`)
     .option(
       "--strictPort",
       `[boolean] exit if specified port is already in use`
     )
     .option(
       "--force",
       `[boolean] force the optimizer to ignore the cache and re-bundle`
     )
     .action(devAction); // 这里将 action 函数抽出来单独写，免得篇幅过长
   ```

   `devAction 函数`：

   ```ts
   const devAction = async (
     root: string,
     options: ServerOptions & GlobalCLIOptions
   ) => {
     // output structure is preserved even after bundling so require()
     // is ok here
     const { createServer } = await import("./server"); // 动态导入创建 dev-server
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

       if (!server.httpServer) {
         throw new Error("HTTP server not available");
       }

       await server.listen();

       const info = server.config.logger.info;

       info(
         chalk.cyan(`\n  vite v${require("vite/package.json").version}`) +
           chalk.green(` dev server running at:\n`),
         {
           clear: !server.config.logger.hasWarned,
         }
       );

       server.printUrls();

       // __vite_start_time 在执行 vite 命令时
       // 赋值为 performance.now()，记录启动服务的开始时间
       if (global.__vite_start_time) {
         // 服务启动时间（ms）
         const startupDuration = performance.now() - global.__vite_start_time;
         info(
           `\n  ${chalk.cyan(`ready in ${Math.ceil(startupDuration)}ms.`)}\n`
         );
       }
     } catch (e) {
       // 打印服务启动失败的日志
       createLogger(options.logLevel).error(
         chalk.red(`error when starting dev server:\n${e.stack}`),
         { error: e }
       );
       // 结束进程
       process.exit(1);
     }
   };
   ```
