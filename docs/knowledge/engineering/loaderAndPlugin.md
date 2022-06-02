---
title: webpack loaders & plugins
---

`webpack` 做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包📦 生成到指定的文件中

## Loaders

`loader` 则是用于对模块的 `源代码` 进行转换，在 `import` 或 `require` 模块（加载模块）时预处理文件

在 `webpack` 中，任何文件都是模块，默认情况下，在遇到 `import` 或者 `require` 加载模块的时候，`webpack` 只支持对 `js` 和 `json` 文件打包；像 `css`、`sass`、`png` 等这些类型的文件，`webpack` 则无能为力，这时候就需要配置对应的 `loader` 进行文件内容的解析

在加载模块的时候，执行顺序为： `入口 entry` ➡️ `loaders` ➡️ `output 输出`

当 `webpack` 碰到无法识别的模块时，则去配置的 `loaders` 中查找该文件的解析规则（一般推荐配置在 `webpack.config.js` 中）

```js
// webpack.config.js 示例配置
module.exports = {
    entry: './src/main.ts',
    // ... 其他配置
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    /* 创建 <style> 标签插入 html */
                    'style-loader',
                    /* 使 webpack 可以识别解析 css 语法 ⬆️ */
                    'css-loader',
                    /* 使 webpack 可以识别解析 sass 语法 ⬆️ */
                    'sass-loader'
                ]
            }
        ]
    }
}
```

### loader 特性

- `loader` 支持 **链式调用**
    > 链中的每个 `loader` 会处理之前已处理过的资源，最终变为 `js代码`。顺序为 **相反** 的顺序执行，即上述执行方式为 `sass-loader`、`css-loader`、`style-loader`

- `loader` 可以是同步的，也可以是异步的
- `loader` 运行在 `Node.js` 环境中，并且能够执行任何操作
- 插件(`plugin`)可以进一步增强 `loader` 的功能
- `loader` 能够产生额外的任意文件

使用 loader 可以将各功能模块进行更细粒度的拆分

### 常见 loader

- `style-loader`：将 `css` 添加到 `DOM` 的内联样式标签 `<style>` 里
- `css-loader` :允许将 `css` 文件通过require的方式引入，并返回css代码
- `less-loader`：处理 `less`
- `sass-loader`：处理 `sass`
- `postcss-loader`：用 `postcss` 来处理 `css` （如：添加浏览器兼容类名前缀 `-webkit-`）
- `file-loader`：分发文件到 `output` 目录并返回相对路径
- `url-loader`：和 `file-loader` 类似，但是当文件小于设定的 `limit` 时可以返回一个 `Data Url`
- `html-minify-loader`：压缩 `HTML`
- `babel-loader`：用 `babel` 来转换 `ES6` 文件到 `ES5`

## Plugins

`plugin` 释义：

> 是一种计算机应用程序，它和主应用程序（`host application`）互相交互，以提供特定的功能

`webpack` 中的 `plugin` 是遵循一定规范编写出来的程序，为 `webpack` 赋予灵活的功能，如：打包优化、资源管理、环境变量注入等，它们会运行在 `webpack` 的不同阶段（`钩子` / `生命周期`），贯穿了 **`webpack` 整个编译周期**

> 它们与 `loader` 不同，`loader` 是串行运行的，只在某个阶段运行，`plugin` 则是贯穿编译的整个周期，旨在解决 `loader` 无法解决的问题

```js
// webpack.config.js 示例配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/main.ts',
    // ... 其他配置
    plugins: [
        new HtmlWebpackPlugin({ template: './public/index.html' })
    ]
}
```

### 特性

本质上它是一个具有 `apply` 方法的 `javascript` （类）对象；`apply` 方法会被 `webpack compiler` 调用，并且在整个编译生命周期都可以访问 `compiler` 对象

```js
// 示例
class HtmlWebpackPlugin {
    constructor (options) {
        this.userOptions = options || {};
        this.version = HtmlWebpackPlugin.version;
    }
    apply(compiler) {
        compiler.hooks.initialize.tap('HtmlWebpackPlugin', () => {
            const userOptions = this.userOptions;
            const defaultOptions = { /* ... default options */ }
            const options = Object.assign(defaultOptions, userOptions)
            this.options = options
            // ...
        })
    }
}

module.exports = HtmlWebpackPlugin;
```

从上面的示例代码，我们可以知道，`compiler.hooks` `tap` 方法的第一个参数就是插件名称（大驼峰命名）

钩子函数类型来自[Tapable 🔗](https://github.com/webpack/tapable#tapable)，暴露的钩子函数有[webpack plugin hooks 🔗](https://webpack.docschina.org/api/compiler-hooks/)，比如：

- `entryOption`：[`SyncBailHook`] 初始化 `option`，在 `webpack` 选项中的 `entry` 被处理过之后调用（回调参数：`context`, `entry`）
    ```js
    compiler.hooks.entryOption.tap('MyPlugin', (context, entry) => {
        /* ... */
    })
    ```

- `run`：[`AsyncSeriesHook`] 在开始读取 `records` 之前调用
- `compile`：[`SyncHook`] `beforeCompile` 之后立即调用，但在一个新的 `compilation` 创建之前。这个钩子 **不会** 被复制到子编译器
- `compilation`：[`SyncHook`] `compilation` 创建之后执行（回调参数：`compilation`, `compilationParams`）
- `make`：[`AsyncParallelHook`] `compilation` 结束之前执行。这个钩子 **不会** 被复制到子编译器（回调参数：`compilation`）
- `afterCompile`：[`AsyncSeriesHook`] 编译 `build` 过程结束，`compilation` 结束和封印之后执行（回调参数：`compilation`）
- `emit`：[`AsyncSeriesHook`] 输出 `asset` 到 `output` 目录之前执行。这个钩子 **不会** 被复制到子编译器
- `afterEmit`：[`AsyncSeriesHook`] 输出 `asset` 到 `output` 目录之后执行。这个钩子 **不会** 被复制到子编译器
- `done`：[`AsyncSeriesHook`] 在 `compilation` 完成时执行。这个钩子 **不会** 被复制到子编译器
- `failed`：[`SyncHook`] 在 `compilation` 失败时执行（回调参数：`error`）

### 常见 plugin

- `html-webpack-plugin`：在打包结束后，⾃动生成⼀个 `html` ⽂文件，并把打包生成的 `js` 模块引⼊到该 `html` 中
- `clean-webpack-plugin`：删除（清理）构建目录（每次打包都清除上次打包生成的文件）
- `copy-webpack-plugin`：复制文件或目录到打包结果目录中

## 二者的区别

> - `loader` 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中
> - `plugin` 赋予了 `webpack` 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 `loader` 无法实现的其他事

- 在运行时机上：

    > - `loader` 运行在打包之前
    > - `plugins` 在整个编译周期都起作用

- 在功能扩展上：

    > - `webpack` 运行的生命周期中会广播出许多事件，`Plugin` 可以监听这些事件，在合适的时机通过 `webpack` 提供的 `API` 改变输出结果
    > - 对于 `loader`，实质是一个转换器，将 `A文件` 进行编译形成 `B文件`，操作的是 **文件**，比如将 `A.scss` 或 `A.less` 转变为 `B.css`，单纯的文件转换过程

## 编写 Loader

`loader` 的本质：

> - `loader` 的本质就是函数，函数中的 `this` 作为上下文会被 `webpack` 填充，因此我们 **不能** 将 `loader` 设为一个箭头函数<br/>
> - 这个函数接受一个参数，为 `webpack` 传递给 `loader` 的 **文件源内容**<br/>
> - 函数中 `this` 是由 `webpack` 提供的对象，能够获取当前 `loader` 所需要的各种信息
> - 函数中有异步操作或同步操作，异步操作通过 `this.callback` 返回，返回值要求为 **`String`** 或者 **`Buffer`**

示例：

```js
// 导出一个函数，source 为 webpack 传递给 loader 的文件源内容
module.exports = function(source) {
    const content = doSomeThing2JsString(source);
    
    // 如果 loader 配置了 options 对象，那么this.query将指向 options
    const options = this.query;
    
    // 可以用作解析其他模块路径的上下文
    console.log('this.context', this.context);

    /* this.callback(
     *    // 当 loader 出错时向外抛出一个 error
     *    err: Error | null,
     *    // 经过 loader 编译后需要导出的内容
     *    content: string | Buffer,
     *    // 可选参数，返回 source-map（为方便调试生成的编译后内容的 source-map）
     *    sourceMap?: SourceMap,
     *    // 可选参数，返回 meta（官方表示：ignored by webpack, can be anything）
     *    meta?: any 
     * );
     */
    this.callback(null, content); // 异步
    return content; // 同步
}
```

原则：在编写 `loader` 时，尽量保持功能单一，方便维护与查找问题

## 编写 Plugin

> 由于 `webpack` 基于发布订阅模式，在运行的生命周期中会广播出许多事件，插件通过监听这些事件，就可以在特定的阶段执行自己的插件任务

`webpack` 编译会创建两个核心对象：

- `compiler`：包含了 `webpack` 环境的所有的配置信息，包括 `options`，`loader` 和 `plugin`，和 `webpack` 整个生命周期相关的钩子
- `compilation`：作为 `plugin` 内置事件回调函数的参数，包含了当前的模块资源、编译生成资源、变化的文件以及被跟踪依赖的状态信息。当检测到一个文件变化，一次新的 `Compilation` 将被创建

编写 `plugin` 要遵循的规范：

- 插件必须是一个函数或者是一个包含 `apply` 方法的对象（一般是 `class` 类），这样才能访问 `compiler` 实例
- 由于传给每个插件的 `compiler` 和 `compilation` 对象都是同一个引用，因此不建议修改
- 异步的事件需要在插件处理完任务时调用回调函数通知 `webpack` 进入下一个流程，不然会卡住

示例：

```js
class MyPlugin {
    // webpack 会调用 MyPlugin 实例的 apply 方法给插件实例传入 compiler 对象
    apply (compiler) {
        // 找到合适的事件钩子，实现自己的插件功能
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            // compilation: 当前打包构建流程的上下文
            console.log(compilation);
            // do something...
        })
    }
}
```

在 `emit` 事件发生时，代表源文件的转换和组装已经完成，可以读取到最终将 `输出的资源`、`代码块`、`模块及其依赖`，并且可以修改输出资源的内容