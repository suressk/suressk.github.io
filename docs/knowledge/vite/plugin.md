---
title: vite plugin - 插件机制
---

plugin 是 vite 的核心功能，通过 plugin 实现预构建资源路径替换、解析 alias、转译 js、转译 css、注入 define、注入 hmr 辅助代码等功能

> [vite 可以使用插件进行扩展，这得益于 Rollup 优秀的插件接口设计和一部分 Vite 独有的额外选项。这意味着 Vite 用户可以利用 Rollup 插件的强大生态系统，同时根据需要也能够扩展开发服务器和 SSR 功能](https://cn.vitejs.dev/guide/using-plugins.html)

##### 本篇目标

> 1. plugin 的各个 hook 函数的作用
> 2. vite 独有的 hook 函数的执行时间
> 3. 内置的插件如何使 vite 对各种文件开箱即用
> 4. 所有插件机中之后各个 hook 函数的使用流程

**[vite 插件](https://vite-rollup-plugins.patak.dev/)基于 [rollup 插件](https://rollupjs.org/guide/en/#plugin-development)，插件的 hook 函数返回值和参数类型完全依照 rollup，但并没有全部接受 rollup 的 hook 函数。目前只使用了 rollup 的 [7 个 hook 函数](https://cn.vitejs.dev/guide/api-plugin.html#universal-hooks)，另外提供了 vite 独有的 [5 个 hook 函数](https://cn.vitejs.dev/guide/api-plugin.html#vite-specific-hooks)**

[rollup build-hooks](https://rollupjs.org/guide/en/#build-hooks) 分四个种类：

- `async`：返回解析类型为 Promise 的异步 hook
- `first`：若多个插件实现了这个 hook 函数，它们会按指定的插件顺序串行执行，直到一个 hook 返回的不是 `null` 或 `undefined`（也就是说会存在在某个插件终止的情况）
- `sequential`：若多个插件都实现了这个 hook 函数，它们会按指定的插件顺序串行执行。如果某个 hook 是异步的，后续的 hook 会等待当前 hook 执行结束再继续运行
- `parallel`：若多个插件都实现了这个 hook 函数，它们会按指定的插件顺序串行执行。如果某个 hook 是异步的，后续的这种 hook 函数将并行运行，而不是等待当前的 hook 执行结束

##### 一个完整的插件示例

插件本质上就是一个实现了各个 hook 的对象，按 hook 的使用顺序如下排列：

```ts
const vitePlugin = {
  name: 'vite-plugin-sure' /* 【必须】的插件名称，用于错误消息和警告 */,
  apply: 'build' | 'serve' /* 表明此插件的运行模式 */,
  enforce: 'post' | 'pre' /* 插件排序 */,

  /*  */
  options() {},
}
```
