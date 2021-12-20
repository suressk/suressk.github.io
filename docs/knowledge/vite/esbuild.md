---
title: 依赖预构建功能分析
---

#### 主要流程

1. 开启 dev-server 之前进行 [依赖预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html)

2. 读取 `package-lock.json`，`yarn.lock`，`pnpm-lock.yaml` 文件，生成 `depHash`

3. 读取上次 [文件缓存的预构建文件](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache) 信息，若有，则将获取到的 hash 和上一步的 depHash 进行比较，一样则返回缓存的内容，否则重新构建。没有缓存或设置了 [--force 参数](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache)，则重新构建

4. 利用 `esbuild`，对项目文件进行扫描，获取项目依赖；将 [项目依赖的模块化方式转换为 ESM 格式](https://cn.vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling)

5. 将转换后的模块存入 [cacheDir（vite2.x 默认为 node_modules/.vite）](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache)

6. 浏览器请求资源时，判断请求的资源是否是 依赖（即 bare import），若是则替换为缓存文件路径，加载对应的文件

7. 启动 dev-server 后，每当依赖变化，则重新进行依赖构建，执行 2，3，4，5 过程

#### 分析

1. 构建入口

若不是中间件模式，则在 dev-server 启动前，首先执行 `plugin.buildStart` 钩子函数，再执行构建函数
若是中间件模式，则直接执行构建函数，此处的 `container` 是一个 plugin 的集合体，按运行顺序一次执行相关钩子函数

```ts
// src/node/server/index.ts
export async function createServer(
  inlineConfig: InlineConfig = {}
): Promise<ViteDevServer> {
  // ... other code

  if (!middlewareMode && httpServer) {
    let isOptimized = false
    // overwrite listen to run optimizer before server start
    const listen = httpServer.listen.bind(httpServer)
    httpServer.listen = (async (port: number, ...args: any[]) => {
      if (!isOptimized) {
        try {
          await container.buildStart({})
          await runOptimize()
          isOptimized = true
        } catch (e) {
          httpServer.emit('error', e)
          return
        }
      }
      return listen(port, ...args)
    }) as any
  } else {
    await container.buildStart({})
    await runOptimize()
  }

  return server // 返回创建的 server 对象
}
```

2. `runOptimize` 函数
    
    - `_isRunningOptimizer` 添加构建状态
    - `optimizeDeps` 函数返回构建过程 3，4，5 步中返回的预构建信息，
    - `_registerMissingImport` 返回一个预构建函数可以随时进行预构建，当运行的服务中有新的依赖引入时重新构建，同时 `_isRunningOptimizer` 状态可以有效避免构建时的数据请求

    ```ts
    // src/node/server/index.ts
    const runOptimize = async () => {
      if (config.cacheDir) {
        server._isRunningOptimizer = true
        try {
          server._optimizeDepsMetadata = await optimizeDeps(
            config,
            config.server.force || server._forceOptimizeOnRestart
          )
        } finally {
          server._isRunningOptimizer = false
        }
        server._registerMissingImport = createMissingImporterRegisterFn(server)
      }
    }
    ```

3. `optimizeDeps` 函数

    - 获取上次预构建的信息，对比此次构建的信息，从而决定是否需要重新构建
    - 扫描源码或根据参数，获取依赖
    - 利用 `es-module-lexer` 扁平化嵌套的源码依赖
    - 解析 [开发者依赖优化配置](https://cn.vitejs.dev/config/#dep-optimization-options)，调用 `esbuild`，并存入 `cacheDir`
    - 存储构建的文件到 `cacheDir`

    ```ts
    async function optimizeDeps(
      config: ResolvedConfig,
      force = config.server.force,
      asCommand = false,
      /* missing imports encountered after server has started */
      newDeps?: Record<string, string>,
      ssr?: boolean
    ): Promise<DepOptimizationMetadata | null> {
      config = {
        ...config,
        command: 'build'
      }
      // 
      const dataPath = path.join(cacheDir, '_metadata.json')
      // 生成此次构建 hash
      const mainHash = getDepHash(root, config)
      const data: DepOptimizationMetadata = {
        hash: mainHash,
        browserHash: mainHash,
        optimized: {}
      }
      // 开发者的 force 参数决定是否每次都重新构建
      if (!force) {
        let prevData: DepOptimizationMetadata | undefined
        try {
          // 加载上次构建的信息
          prevData = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
        } catch (e) {}
        // hash is consistent, no need to re-bundle
        // 对比上次构建的 hash，相同则直接返回上次构建的结果
        if (prevData && prevData.hash === data.hash) {
          log('Hash is consistent. Skipping. Use --force to override.')
          return prevData
        }
      }
      // 判断缓存目录（node_modules/.vite）是否存在
      if (fs.existsSync(cacheDir)) {
        // 存在则清空缓存目录
        emptyDir(cacheDir)
      } else {
        // 否则创建缓存目录
        fs.mkdirSync(cacheDir, { recursive: true })
      }

      // newDeps 参数是在服务启动后加入依赖时传入的依赖信息
      let deps: Record<string, string>, missing: Record<string, string>
      if (!newDeps) {
        // 借助 esbuild 扫描源码，获取依赖
        ;({ deps, missing } = await scanImports(config))
      } else {
        deps = newDeps
        missing = {}
      }

      // ...

      const include = config.optimizeDeps?.include
      if (include) {
        // 加入开发者指定的 include
      }

      // 加入开发者指定的 esbuildOptions
      const { plugins = [], ...esbuildOptions } =
        config.optimizeDeps?.esbuildOptions ?? {}

      // use in CommonJS
      await init // es-module-lexer exports.init

      // 扁平化依赖
      for (const id in deps) {
        flatIdDeps[flattenId(id)] = deps[id]
        // ...
        // 允许对 .js 文件使用 JSX parser 进行解析
        esbuildOptions.loader = {
          '.js': 'jsx',
          ...esbuildOptions.loader
        }
      }

      // 调用 esbuild.build 进行打包
      const result = await build({
        absWorkingDir: process.cwd(),
        entryPoints: Object.keys(flatIdDeps), // 入口
        bundle: true,
        format: 'esm', // esmodule 模式
        target: config.build.target || undefined,
        external: config.optimizeDeps?.exclude, // 剔除 exclude 配置的文件
        logLevel: 'error',
        splitting: true,
        sourcemap: true,
        outdir: cacheDir, // 输出目录（node_module/.vite）
        ignoreAnnotations: true, // 忽略注解
        metafile: true,
        define,
        plugins: [
          ...plugins,
          esbuildDepPlugin(flatIdDeps, flatIdToExports, config, ssr)
        ],
        ...esbuildOptions
      })

    }
    ```