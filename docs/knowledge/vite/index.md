# Vite 源码解读

> `版本： 2.7.0-bate.9`

## 目录结构

> `vite`
> | + `bin`
> | — | — openChrome.applescript // apple
> | — | — vite.js // vite 命令执行入口
> | + `scripts`
> | — | + patchTypes.cjs
> | + `src`
> | — | + `client`
> | — | — | — client.ts
> | — | — | — env.ts
> | — | — | — overlay.ts
> | — | — | — tsconfig.json
> | — | + `node`
> | — | — | — `__tests__`
> | — | — | — `optimizer`
> | — | — | — `plugins`
> | — | — | — `server`
> | — | — | — `ssr`
> | — | — | — build.ts
> | — | — | — cli.ts
> | — | — | — config.ts
> | — | — | — constants.ts
> | — | — | — http.ts
> | — | — | — importGlob.ts
> | — | — | — index.ts
> | — | — | — logger.ts
> | — | — | — packages.ts
> | — | — | — plugin.ts
> | — | — | — preview.ts
> | — | — | — utils.ts
> | — | — | — tsconfig.json
> | + `types`
