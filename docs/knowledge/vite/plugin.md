---
title: vite plugin - 插件机制
---

plugin 是 vite 的核心功能，通过 plugin 实现预构建资源路径替换、解析 alias、转译 js、转译 css、注入 define、注入 hmr 辅助代码等功能

> [vite 可以使用插件进行扩展，这得益于 Rollup 优秀的插件接口设计和一部分 Vite 独有的额外选项。这意味着 Vite 用户可以利用 Rollup 插件的强大生态系统，同时根据需要也能够扩展开发服务器和 SSR 功能](https://cn.vitejs.dev/guide/using-plugins.html)

## 本篇目标

> 1. plugin 的各个 hook 函数的作用
> 2. vite 独有的 hook 函数的执行时间
> 3. 内置的插件如何使 vite 对各种文件开箱即用
> 4. 所有插件集中之后各个 hook 函数的使用流程

**[vite 插件](https://vite-rollup-plugins.patak.dev/)基于 [rollup 插件](https://rollupjs.org/guide/en/#plugin-development)，插件的 hook 函数返回值和参数类型完全依照 rollup，但并没有全部接受 rollup 的 hook 函数。目前只使用了 rollup 的 [7 个 hook 函数](https://cn.vitejs.dev/guide/api-plugin.html#universal-hooks)，另外提供了 vite 独有的 [5 个 hook 函数](https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks)**

[rollup build-hooks](https://rollupjs.org/guide/en/#build-hooks) 分四个种类：

- `async`：返回解析类型为 Promise 的异步 hook
- `first`：若多个插件实现了这个 hook 函数，它们会按指定的插件顺序串行执行，直到一个 hook 返回的不是 `null` 或 `undefined`（也就是说会存在在某个插件终止的情况）
- `sequential`：若多个插件都实现了这个 hook 函数，它们会按指定的插件顺序串行执行。如果某个 hook 是异步的，后续的 hook 会等待当前 hook 执行结束再继续运行
- `parallel`：若多个插件都实现了这个 hook 函数，它们会按指定的插件顺序串行执行。如果某个 hook 是异步的，后续的这种 hook 函数将并行运行，而不是等待当前的 hook 执行结束

## 一个完整的插件示例

插件本质上就是一个实现了各个 hook 的对象，按 hook 的使用顺序如下排列：

```ts
const vitePlugin = {
  name: 'vite-plugin-sure' /* [必须] 插件名称，用于错误消息和警告 */,
  apply: 'build' | 'serve' /* 表明此插件的运行模式 */,
  enforce: 'post' | 'pre' /* 插件排序 */,

  /* rollup 通用插件，ctx 是一个 plugins 集合的上下文 */
  options(ctx, pluginOptions) {},

  /*
   * 在服务启动前开始执行
   * 类型: [async, parallel]
   */
  buildStart(ctx, pluginOptions) {},

  /**
   * srouce 为资源路径，importer 为引入此资源的文件
   * 如果有返回值，则将替换掉importer中引入的路径，
   * 同时将返回值传递给其他hook
   * 类型: [async, first]
   */
  resolveId(ctx, srouce, importer, pluginOptions) {
    // ...
    return srouceId
  },

  /**
   * id 为 resolveId 返回的值
   * 加载资源并返回
   * 类型: [async, first]
   */
  load(ctx, id, srr) {
    // ...
    return code
  },

  /**
   * code 为 load ⬆️ 返回的值，id 为 resolveId 返回的值
   * 转译code并返回转译结果
   * 类型: [async, first]
   */
  transform(ctx, code, id, ssr) {
    // ...
    return transformCode
  },

  /**
   * 构建结束的回调，可以捕获错误
   * 类型: [async, parallel]
   */
  buildEnd(err) {},

  /**
   * 构建结束的最终回调
   * 类型: [async, parallel]
   */
  closeBundle() {},

  //  vite 独有插件
  /**
   * 返回一个配置对象，merge 到最终 config 中
   * 类型: [async, sequential]
   */
  config(config, env) {
    // ...
    return mergeConfig
  },

  /**
   * 解析 Vite 配置后调用
   * 类型: [async, parallel]
   */
  configResolved(config) {},

  /**
   * 服务器配置完后的 hook
   * 类型: [async, parallel]
   */
  configureServer(server) {},

  /**
   * 转换 index.html 的专用钩子
   * 钩子接收当前的 HTML 字符串和转换上下文
   * 类型: [async, sequential]
   */
  transformIndexHtml() {},

  /**
   * 触发热更新时的 hook，可以更加精确的控制 hmr
   */
  handleHotUpdate(HmrContext) {}
}
```

## 解析插件

插件的解析步骤发生在 `resolveConfig` 过程中，这里关注于插件 (`plugin`) 的解析

```ts
async function resolveConfig(
  inlineConfig: InlineConfig,
  command: 'build' | 'serve',
  defaultMode = 'development'
): Promise<ResolvedConfig> {
  let config = inlineConfig // 存储配置
  // ... other code

  // 首先扁平化 plugins 数组，可能存在多维数组的错误配置形式：[[pulginA, pulginB], pulginC]
  // 筛选应用apply设置应用场景(serve|build)的插件
  const rawUserPlugins = (config.plugins || []).flat(Infinity).filter(p => {
    if (!p) {
      return false
    } else if (!p.apply) {
      return true
    } else if (typeof p.apply === 'function') {
      return p.apply({ ...config, mode }, configEnv)
    }
    return p.apply === command
  }) as Plugin[]

  /**
   * sortUserPlugins 函数根据 enforce 字段对插件进行排序
   * pre： Vite 核心插件之【前】调用
   * 默认： Vite 核心插件之【后】调用
   * post： Vite 核心插件之【后】调用
   */
  const [prePlugins, normalPlugins, postPlugins] =
    sortUserPlugins(rawUserPlugins)

  // 执行 plugin.config hook, 可再次设置配置参数
  const userPlugins = [...prePlugins, ...normalPlugins, ...postPlugins]
  for (const p of userPlugins) {
    if (p.config) {
      const res = await p.config(config, configEnv)
      if (res) {
        // 将插件 config hook 执行得到的配置进行合并
        config = mergeConfig(config, res)
      }
    }
  }
}
```
