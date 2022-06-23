---
title: 依赖预构建功能分析
---

## 主要流程

1. 开启 dev-server 之前进行 [依赖预构建](https://cn.vitejs.dev/guide/dep-pre-bundling.html)

2. 读取 `package-lock.json`，`yarn.lock`，`pnpm-lock.yaml` 文件，生成 `depHash`

3. 读取上次 [文件缓存的预构建文件](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache) 信息，若有，则将获取到的 hash 和上一步的 depHash 进行比较，一样则返回缓存的内容，否则重新构建。没有缓存或设置了 [--force 参数](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache)，则重新构建

4. 利用 `esbuild`，对项目文件进行扫描，获取项目依赖；将 [项目依赖的模块化方式转换为 ESM 格式](https://cn.vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling)

5. 将转换后的模块存入 [cacheDir（vite2.x 默认为 node_modules/.vite）](https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache)

6. 浏览器请求资源时，判断请求的资源是否是 依赖（即 bare import），若是则替换为缓存文件路径，加载对应的文件

7. 启动 dev-server 后，每当依赖变化，则重新进行依赖构建，执行 2，3，4，5 过程

## 分析

1. 构建入口

若不是中间件模式，则在 dev-server 启动前，首先执行 `plugin.buildStart` 钩子函数，再执行构建函数
若是中间件模式，则直接执行构建函数，此处的 `container` 是一个 plugin 的集合体，按运行顺序依次执行相关钩子函数

```ts
// src/node/server/index.ts
export async function createServer(
  inlineConfig: InlineConfig = {},
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
           config.server.force || server._forceOptimizeOnRestart,
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
     ssr?: boolean,
   ): Promise<DepOptimizationMetadata | null> {
     config = {
       ...config,
       command: 'build',
     }
     // 构建模块映射关系 json 数据，包含每次构建的 hash 值与 browserHash
     /** 例如：
      * "optimized": {
      *   "vue": {
      *      "file": "[__dirname]/node_modules/.vite/vue.js", // 打包后的 vue 模块
      *      "src": "[__dirname]/node_modules/vue/dist/vue.runtime.esm-bundler.js", // 源文件
      *      "needsInterop": true
      *   }
      * }
      */
     const dataPath = path.join(cacheDir, '_metadata.json')
     // 生成此次构建 hash
     const mainHash = getDepHash(root, config)
     // .vite/_metadata.json 文件内容
     const data: DepOptimizationMetadata = {
       hash: mainHash,
       browserHash: mainHash,
       optimized: {},
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
         ...esbuildOptions.loader,
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
       metafile: true, // 生成映射关系 json
       define,
       plugins: [
         ...plugins,
         esbuildDepPlugin(flatIdDeps, flatIdToExports, config, ssr),
       ],
       ...esbuildOptions,
     })

     // 重新写入 _metadata.json 文件
     for (const id of deps) {
       const entry = deps[id]
       data.optimized[id] = {
         /* normalizePath 为 path.posix.normalize 格式化路径 */
         file: normalizePath(path.resolve(cacheDir, flattenId(id) + '.js')),
         src: entry,
         needsInterop: needsInterop(
           id,
           idToExports[id],
           meta.outputs,
           cacheDirOutputPath,
         ),
       }
     }
     writeFile(dataPath, JSON.stringify(data, null, 2))
     return data
   }
   ```

4. 获取依赖时，替换返回打包缓存的依赖包文件

   过程：访问有引入依赖包的文件时，匹配依赖包名称，返回 cacheDir 内的文件

   - 解析 config 时在 plugins 中引入 preAliasPlugin 插件
   - 匹配依赖包名称，返回添加缓存路径

   `plugin.resolveId` 的作用是：如果返回一个值，则会替换源码中依赖，否则将名字传递给下一个插件处理，当匹配到依赖包名称后，通过 `tryOptimizedResolve` 函数修改依赖的路径
   通过浏览器的 devtool，可以看到文件里的 vue 路径变更为了 `node_modules/.vite/vue.js?v=3sf954g7`

   ```ts
   const bareImportRE = /^[\w@](?!.*:\/\/)/
   function preAliasPlugin(): Plugin {
     let server: ViteDevServer
     return {
       name: 'vite:pre-alias',
       configureServer(_server) {
         server = _server
       },
       resolveId(id, importer, options) {
         if (!options?.ssr && bareImportRE.test(id)) {
           return tryOptimizedResolve(id, server, importer)
         }
       },
     }
   }

   function tryOptimizedResolve(
     id: string,
     server: ViteDevServer,
     importer?: string,
   ): string | undefined {
     // 构建结果缓存目录
     const cacheDir = server.config.cacheDir
     // 预构建生成的构建信息
     const depData = server._optimizeDepsMetadata

     if (!cacheDir || !depData) return

     const getOptimizedUrl = (
       optimizedData: typeof depData.optimized[string],
     ) => {
       // 返回构建结果的依赖路径
       return (
         optimizedData.file +
         `?v=${depData.browserHash}${
           optimizedData.needsInterop ? `&es-interop` : ``
         }`
       )
     }

     // 检查依赖包是否被构建过，是则返回构建结果路径
     const isOptimized = depData.optimized[id]
     if (isOptimized) {
       return getOptimizedUrl(isOptimized)
     }

     if (!importer) return
     let resolvedSrc: string | undefined
     for (const [pkgPath, optimizedData] of Object.entries(depData.optimized)) {
       // 遍历 _metadata.json 的 optimized 内的依赖包映射
       // 依赖包名不存在则检测 _metadata.json 存储的下一个依赖包
       if (!pkgPath.endsWith(id)) continue
       // 匹配上，则比较导入源码路径与 _metadata.json 存的 src 路径是否匹配

       // == resolvedSrc 赋值

       // 若匹配，则返回修改后的模块路径
       // 若不匹配，则不处理
       if (optimizedData.src === resolvedSrc) {
         return getOptimizedUrl(optimizedData)
       }
     }
   }
   ```

5. 服务运行中检测依赖更新时重新构建

   大致流程是：请求新的依赖资源时，`preAliasPlugin` 的 `resolveId` 函数并未取到模块路径（`tryOptimizedResolve`），则将依赖包名称传递给 `resolvePlugin 插件`，判断引入依赖的文件是否也是依赖，是则重新构建

   ```ts
   function resolvePlugin(baseOptions: InternalResolveOptions): Plugin {
     const {
       root,
       isProduction,
       asSrc,
       ssrConfig,
       preferRelative = false,
     } = baseOptions

     let server: ViteDevServer | undefined
     const { target: ssrTarget, noExternal: ssrNoExternal } = ssrConfig ?? {}

     return {
       name: 'vite:resolve',
       configureServer(_server) {
         server = _server
       },
       resolveId(id, importer, resolveOpts) {
         /*
          1. 检测依赖包名称是否是 '__vite-browser-external' 开头
          2. 是则直接返回包名
          3. 检测依赖是否包含 commonjs 字段或是 commonjsHelrt.js 文件，不做处理，直接返回
         */
         const browserExternalId = '__vite-browser-external'
         if (id.startsWith(browserExternalId)) {
           return id
         }
         if (/\?commonjs/.test(id) || id === 'commonjsHelpers.js') {
           return
         }
         // other code...

         /*
          判断依赖包路径从 baseDir 截取后是否是 /node_modules/ 开头
         */
         // relative
         if (id.startsWith('.') || (preferRelative && /^\w/.test(id))) {
           const basedir = importer ? path.dirname(importer) : process.cwd()
           const fsPath = path.resolve(basedir, id)
           // handle browser field mapping for relative imports
           const normalizedFsPath = normalizePath(fsPath)
           const pathFromBasedir = normalizedFsPath.slice(basedir.length)
           if (pathFromBasedir.startsWith('/node_modules/')) {
             // normalize direct imports from node_modules to bare imports, so the
             // hashing logic is shared and we avoid duplicated modules #2503
             const bareImport = pathFromBasedir.slice('/node_modules/'.length)
             if (
               (res = tryNodeResolve(
                 bareImport,
                 importer,
                 options,
                 targetWeb,
                 server,
                 ssr,
               )) &&
               res.id.startsWith(normalizedFsPath)
             ) {
               return res
             }
           }
         }

         // other code...
         // 这里太多太杂了...
       },
     }
   }
   ```
