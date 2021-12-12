---
title: resolveConfig 参数解析
---

本文旨在分析 vite 源码中解析 config 参数的函数 `resolveConfig`

#### config 来源

1. inlineConfig：来自命令行或配置的 `npm scripts`

2. vite.config.ts/vite.config.js：用户配置的文件

3. Plugin.config：插件的 config 方法返回的配置项

#### 涉及功能

1. 设置 `--configFile false` 参数来禁用配置文件

2. 按需加载插件

3. 插件强制顺序

4. 加载 `.env` 文件

5. `plugin.config` 钩子函数

6. `plugin.configResolved` 钩子函数

#### 流程

1. 入口：

```ts
// /src/node/config.ts
import { resolveConfig, InlineConfig, ResolvedConfig } from '../config'

const config = await resolveConfig(inlineConfig, 'serve', 'development')
```

2. 参数：

```ts
function resolveConfig(
  inlineConfig: InlineConfig,
  command: 'build' | 'serve',
  defaultMode = 'development'
): Promise<ResolvedConfig>
```

3. 设置 `config`，`mode`，`configFileDependencies`

```ts
let config = inlineConfig // 存储配置
let configFileDependencies: string[] = [] // 存储配置依赖
let mode = inlineConfig.mode || defaultMode // 设置 mode

if (mode === 'production') {
  process.env.NODE_ENV = 'production'
}

const configEnv = {
  mode,
  command
}
```

4. 加载配置文件，重置配置 `mode`，同时知道可以使用 **`--configFile false`** 来禁用配置文件

```ts
let { configFile } = config
if (configFile !== false) {
  const loadResult = await loadConfigFromFile(
    configEnv,
    configFile,
    config.root,
    config.logLevel
  )
  if (loadResult) {
    config = mergeConfig(loadResult.config, config)
    configFile = loadResult.path
    configFileDependencies = loadResult.dependencies
  }
}

mode = inlineConfig.mode || config.mode || mode
configEnv.mode = mode
```

`loadConfigFromFile` 就是根据项目目录，获取相关的配置文件，当使用配置文件类型是 ts 且使用 ES Module 时，会被 esbuild 转义读取，然后删除转义后的文件

```ts
function loadConfigFromFile(
  configEnv: ConfigEnv,
  configFile?: string,
  configRoot: string = process.cwd(),
  logLevel?: LogLevel
): Promise<{
  path: string
  config: UserConfig
  dependencies: string[]
} | null> {
  let resolvedPath: string | undefined // 路径
  let isTS = false // 是否是 ts
  let isESM = false // 是否是 ES Module
  let dependencies: string[] = [] // 依赖

  // 检查 package.json 并检测类型，将 isESM 置为 true
  try {
    const pkg = lookupFile(configRoot, ['package.json'])
    if (pkg && JSON.parse(pkg).type === 'module') {
      isESM = true
    }
  } catch (e) {}

  // 判定是否有 configFile 参数
  if (configFile) {
    resolvedPath = path.resolve(configFile)
    isTS = configFile.endsWith('.ts')

    if (configFile.endsWith('.mjs')) {
      isESM = true
    }
  } else {
    // 依次检测 configRoot 路径下是否有以下配置文件（fs.existsSync）：
    // vite.config.js
    // vite.config.mjs（存在则取其配置，并将 isESM = true）
    // vite.config.ts（存在则取其配置，并将 isESM = true）
    // 按上面检测顺序优先级，取配置文件路径存储到 resolvedPath
    resolvedPath = path.resolve(configRoot, 'vite.config.[xx]')
  }

  // 若均为取到配置文件的路径
  if (!resolvePath) {
    debug('no config file found.')
    return null
  }

  let userConfig: UserConfigExport | undefined

  if (isESM && isTS) {
    const fileUrl = require('url').pathToFileURL(resolvedPath)
    // esbuild 打包
    const bundled = await bundleConfigFile(resolvedPath, true)
    dependencies = bundled.dependencies

    fs.writeFileSync(resolvedPath + '.js', bundled.code) // 暂存读取的配置
    userConfig = (await dynamicImport(`${fileUrl}.js?t=${Date.now()}`))
      .default
    fs.unlinkSync(resolvedPath + '.js') // 删除临时文件
  }
}
```

5. 解析应用插件，[按需加载 plugin.apply 属性](https://cn.vitejs.dev/guide/using-plugins.html#conditional-application)，[强制插件排序 plugin.enforce 属性](https://cn.vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering)，[执行 plugin.config 钩子函数](https://cn.vitejs.dev/guide/api-plugin.html#config)，添加用户配置

```ts
// resolve plugins
// 扁平数组，筛选应用在当前 command 下的插件
const rawUserPlugins = (config.plugins || []).flat().filter((p) => {
  if (!p) {
    return false
  } else if (!p.apply) {
    return true
  } else if (typeof p.apply === 'function') {
    return p.apply({ ...config, mode }, configEnv)
  } else {
    return p.apply === command
  }
}) as Plugin[]
// sortUserPlugins 方法根据插件的 enforce 参数进行排序：
// pre： Vite 核心插件之【前】调用
// 默认： Vite 核心插件之【后】调用
// post： Vite 核心插件之【后】调用
const [prePlugins, normalPlugins, postPlugins] =
  sortUserPlugins(rawUserPlugins)
// 执行 plugin.config 钩子函数，再次配置
const userPlugins = [...prePlugins, ...normalPlugins, ...postPlugins]
for (const p of userPlugins) {
  if (p.config) {
    const res = await p.config(config, configEnv)
    if (res) {
      config = mergeConfig(config, res)
    }
  }
}
```

6. 解析 `resolve` 参数：`alias`、`dedupe`。这两个参数可以用于 resolve 同级，此处解析 `/^[\/]?@vite\/env/` 和 `/^[\/]?@vite\/client/`，是为了解析 hmr 的客户端文件路径

```ts
const clientAlias = [
  { find: /^[\/]?@vite\/env/, replacement: () => ENV_ENTRY },
  { find: /^[\/]?@vite\/client/, replacement: () => CLIENT_ENTRY }
]
const resolvedAlias = mergeAlias(
  clientAlias,
  config.resolve?.alias || config.alias || []
)
const resolveOptions: ResolvedConfig['resolve'] = {
  dedupe: config.dedupe,
  ...config.resolve,
  alias: resolvedAlias
}
```

7. 加载 [.env 文件](https://cn.vitejs.dev/guide/env-and-mode.html#env-files) 配置用户环境变量，官网 [区分 pro/dev 环境和模式](https://cn.vitejs.dev/guide/env-and-mode.html#modes) 也有体现。至此，用户有三次改变 pro/dev 的环境和模式：1. 命令行指定；2. 配置文件；3. `.env` 文件。而且，这里有通过 `--envFile false` 禁用加载 `.env` 文件，但可见上一篇 `cli 并未配置这个 option`

```ts
const resolvedRoot = normalizePath(
  config.root ? path.resolve(config.root) : process.cwd()
)

const envDir = config.envDir
  ? normalizePath(path.resolve(resolvedRoot, config.envDir))
  : resolvedRoot

const userEnv =
  inlineConfig.envFile !== false &&
  loadEnv(mode, envDir, resolveEnvPrefix(config))

const isProduction = (process.env.VITE_USER_NODE_ENV || mode) === 'production'
if (isProduction) {
  // in case default mode was not production and is overwritten
  process.env.NODE_ENV = 'production'
}
```

`loadEnv` 方法就是根据 mode 使用 `dotenv` (npm pkg) 加载环境下的 .env 文件，并 [判断 'VITE__' 前缀](https://cn.vitejs.dev/guide/env-and-mode.html#env-files)，同时根据 [用户配置的 NODE_ENV](https://cn.vitejs.dev/guide/env-and-mode.html#modes) 配置 `VITE_USER_NODE_ENV` 变量

```ts
function loadEnv(
  mode: string,
  envDir: string,
  prefixes: string | string[] = 'VITE_'
): Record<string, string> {
  prefixes = arraify(prefixes) // string => string[]
  const env: Record<string, string> = {}
  const envFiles = [
    `.env.${mode}.local`,
    `.env.${mode}`,
    `.env.local`,
    `.env`
  ]

  for (const key in process.env) {
    if (
      prefixes.some((prefix) => key.startsWith(prefix)) &&
      env[key] === undefined
    ) {
      env[key] = process.env[key] as string
    }
  }

  for (const file of envFiles) {
    const path = lookupFile(envDir, [file], true)
    if (path) {
      const parsed = dotenv.parse(fs.readFileSync(path), {
        debug: !!process.env.DEBUG || undefined
      })

      // let environment variables use each other
      dotenvExpand({
        parsed,
        // prevent process.env mutation
        ignoreProcessEnv: true
      } as any)

      // only keys that start with prefix are exposed to client
      for (const [key, value] of Object.entries(parsed)) {
        if (
          prefixes.some((prefix) => key.startsWith(prefix)) &&
          env[key] === undefined
        ) {
          env[key] = value
        } else if (key === 'NODE_ENV') {
          // NODE_ENV override in .env file
          process.env.VITE_USER_NODE_ENV = value
        }
      }
    }
  }
  return env
}
```

8. 解析 [BASE_URL](https://cn.vitejs.dev/config/#base)，[buildOptions](https://cn.vitejs.dev/config/#build-options)，[cacheDir](https://cn.vitejs.dev/config/#cachedir)，[assetsFilter](https://cn.vitejs.dev/config/#assetsinclude)，[publicDir](https://cn.vitejs.dev/config/#publicdir)

```ts
const BASE_URL = resolveBaseUrl(config.base, command === 'build', logger)
const resolvedBuildOptions = resolveBuildOptions(resolvedRoot, config.build)
// resolve cache directory
const pkgPath = lookupFile(
  resolvedRoot,
  [`package.json`],
  true /* pathOnly */
)
const cacheDir = config.cacheDir
  ? path.resolve(resolvedRoot, config.cacheDir)
  : pkgPath && path.join(path.dirname(pkgPath), `node_modules/.vite`)

const assetsFilter = config.assetsInclude
  ? createFilter(config.assetsInclude)
  : () => false

const { publicDir } = config
const resolvedPublicDir =
  publicDir !== false && publicDir !== ''
    ? path.resolve(
        resolvedRoot,
        typeof publicDir === 'string' ? publicDir : 'public'
      )
    : ''
```

9. 添加内置插件，如 css 解析，ts 解析等，并对所有插件 [排序](https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate)

```ts
(resolved.plugins as Plugin[]) = await resolvePlugins(
  resolved,
  prePlugins,
  normalPlugins,
  postPlugins
)
// call configResolved hooks
await Promise.all(userPlugins.map((p) => p.configResolved?.(resolved)))

async function resolvePlugins(
  config: ResolvedConfig,
  prePlugins: Plugin[],
  normalPlugins: Plugin[],
  postPlugins: Plugin[]
): Promise<Plugin[]> {
  const isBuild = config.command === 'build'

  const buildPlugins = isBuild
    ? (await import('../build')).resolveBuildPlugins(config)
    : { pre: [], post: [] }

  return [
    isBuild ? null : preAliasPlugin(),
    aliasPlugin({ entries: config.resolve.alias }),
    ...prePlugins,
    config.build.polyfillModulePreload
      ? modulePreloadPolyfillPlugin(config)
      : null,
    resolvePlugin({
      ...config.resolve,
      root: config.root,
      isProduction: config.isProduction,
      isBuild,
      packageCache: config.packageCache,
      ssrConfig: config.ssr,
      asSrc: true
    }),
    config.build.ssr ? ssrRequireHookPlugin(config) : null,
    htmlInlineScriptProxyPlugin(config),
    cssPlugin(config),
    config.esbuild !== false ? esbuildPlugin(config.esbuild) : null,
    jsonPlugin(
      {
        namedExports: true,
        ...config.json
      },
      isBuild
    ),
    wasmPlugin(config),
    webWorkerPlugin(config),
    assetPlugin(config),
    ...normalPlugins,
    definePlugin(config),
    cssPostPlugin(config),
    ...buildPlugins.pre,
    ...postPlugins,
    ...buildPlugins.post,
    // internal server-only plugins are always applied after everything else
    ...(isBuild
      ? []
      : [clientInjectionsPlugin(config), importAnalysisPlugin(config)])
  ].filter(Boolean) as Plugin[]
}
```

10. createResolver，创建一个内部使用的插件解析器，执行所有的插件

```ts
// create an internal resolver to be used in special scenarios, e.g.
// optimizer & handling css @imports
const createResolver: ResolvedConfig['createResolver'] = (options) => {
  let aliasContainer: PluginContainer | undefined
  let resolverContainer: PluginContainer | undefined
  return async (id, importer, aliasOnly, ssr) => {
    let container: PluginContainer
    // 创建 container
    return (await container.resolveId(id, importer, { ssr }))?.id
  }
}
```

11. 执行钩子函数 [plugin.configResolved](https://cn.vitejs.dev/guide/api-plugin.html#configresolved)

```ts
await Promise.all(userPlugins.map((p) => p.configResolved?.(resolved)))
```

12. 汇总 `resolved`，这里有 [用户env中额外的数据](https://cn.vitejs.dev/guide/env-and-mode.html#env-variables)

```ts
const resolved: ResolvedConfig = {
  ...config,
  configFile: configFile ? normalizePath(configFile) : undefined,
  configFileDependencies,
  inlineConfig,
  root: resolvedRoot,
  base: BASE_URL,
  resolve: resolveOptions,
  publicDir: resolvedPublicDir,
  cacheDir,
  command,
  mode,
  isProduction,
  plugins: userPlugins,
  server,
  build: resolvedBuildOptions,
  preview: resolvePreviewOptions(config.preview, server),
  env: {
    ...userEnv,
    BASE_URL,
    MODE: mode,
    DEV: !isProduction,
    PROD: isProduction
  },
  assetsInclude(file: string) {
    return DEFAULT_ASSETS_RE.test(file) || assetsFilter(file)
  },
  logger,
  packageCache: new Map(),
  createResolver,
  optimizeDeps: {
    ...config.optimizeDeps,
    esbuildOptions: {
      keepNames: config.optimizeDeps?.keepNames,
      preserveSymlinks: config.resolve?.preserveSymlinks,
      ...config.optimizeDeps?.esbuildOptions
    }
  }
}
```
