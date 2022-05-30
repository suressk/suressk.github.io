---
title: webpack
---

`Webpack` 最初的目标是实现前端项目的模块化，旨在更高效地管理和维护项目中的每一个资源

## 模块化的探索阶段

1. 通过 `文件划分模块` 的方案，将每个功能及其相关状态数据各自单独放到不同的 JS 文件中，约定每个文件是一个单独的模块，最后通过 `<script>` 标签引入页面（`存在的问题`：模块全部挂载在全局对象上，大量模块成员污染了环境，可以随意修改模块内部内容，模块与模块之间并没有依赖关系、维护困难、没有私有空间等）
2. 出现 `命名空间`，规定每个模块只暴露一个全局对象，模块的内容都挂载到这个对象上（同样存在可以随意修改，模块依赖关系不明等问题）
3. 通过 `立即执行函数` 为模块提供私有空间，通过参数的形式作为依赖声明（明显看来上面罗列的问题都被此方案解决了）

但还存在其他的问题：我们是通过 `<script>` 标签在页面引入这些模块的，这些模块的加载并不受代码的控制（一次性全加载），时间一久维护起来也十分的麻烦

> 理想的解决方式是：在页面中引入一个 JS 入口文件，其余用到的模块可以通过代码控制，按需加载进来

## 在开发阶段我们会遇到的问题/想要的方式

1. 通过模块化的方式开发
2. 通过一些高级特性来加快我们的开发效率或者安全性，如：`ES6+` 语法，`TypeScript` 开发脚本逻辑，`sass`、`less` 编写样式等
3. 监听文件的变化来并且时时热更新反映到浏览器上，提升开发效率
4. js 代码需要模块化，同样还有其他类型的文件，如 css，图片等资源
5. 开发完成后需要将代码进行压缩、合并以及其他相关的优化

`webpack` 的出现恰好可以解决这些问题

## webpack 是什么

`webpack` 是一个用于现代 `JavaScript` 应用程序的 **静态模块** 打包工具

静态模块：指的是开发阶段，可以被 `webpack` 直接引用的资源（可以直接被获取打包进 `bundle.js` 的资源）

当 `webpack` 处理应用程序时，它会在内部构建一个依赖图，此依赖图对应映射到项目所需的每个模块（不再局限 `js文件`），并生成一个或多个 `bundle`（如下图所示）

![webpack功能示意图](https://static.vue-js.com/9ce194a0-a578-11eb-85f6-6fac77c0c9b3.png)

## webpack 的能力

1. **`代码编译能力`**，提高效率，解决浏览器兼容问题（将开发阶段的 ES6+ 语法、TypeScript 脚本编译为 ES5 低版本代码）
2. **`模块整合能力`**，提高性能，可维护性，解决浏览器频繁请求文件的问题（将多个模块文件打包成一个 bundle） 
3. **`万物皆可模块化`**，项目维护性增强，支持不同种类的前端模块类型，统一的模块化方案，所有资源文件的加载都可以通过代码控制（`.ts`、`.js`、`.png`、`.scss` 文件等)

## webpack 的构建流程

`webpack` 的运行流程是一个串行的过程，它的工作流程就是将各个插件串联起来；在运行过程中会 `广播事件`，插件只需要监听它所关心的事件，就能加入到这条 `webpack` 机制中，去改变 `webpack` 的运作，使得整个系统扩展性良好

从启动到结束会依次执行以下三大步骤：

1. `初始化流程`：从配置文件和 Shell 语句中读取与合并参数，并初始化需要使用的插件和配置插件等执行环境所需要的参数
2. `编译构建流程`：从 `Entry` 出发，针对每个 `Module` 串行调用对应的 `Loader` 去翻译文件内容，再找到该 `Module` 依赖的 `Module`，递归地进行编译处理
3. `输出流程`：对编译后的 `Module` 组合成 `Chunk`，把 `Chunk` 转换成文件，输出到文件系统

### 初始化流程

从配置文件（`webpack.config.js`，或者通过命令的形式指定配置文件）和 `shell` 命令（或是 `scripts` 配置的命令）中读取并合并参数，得到最终参数。主要作用是用于激活 `webpack` 的加载项（loader）和插件（plugin）

```js
// webpack.config.js 示例配置如下
const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const resolvePath = pathStr => path.resolve(__dirname, pathStr)

module.exports = {
    mode: 'development',
    // 入口文件，是模块构建的起点，一个入口文件对应最后生成的一个 chunk
    entry: './src/main.ts',
    // entry: {}, // 多入口可配为 数组/对象 格式
    // 模块文件别名
    resolve: {
        alias: {
            '@': resolvePath('src'),
            '@comp': resolvePath('src/components'),
        }
    },
    // 生成文件，是模块构建的终点，包括输出文件与输出路径
    output: {
        path: resolvePath('dist'),
        filename: 'foo.bundle.js'
    },
    module: {
        // 配置 loader
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            noIeCompat: true
                        }
                    }
                ]
            }
        ]
    },
    // 配置 plugin
    plugins: [
        new HotModuleReplacementPlugin()
    ]
}
```

- `webpack` 将 `webpack.config.js` 中的配置项拷贝到 `options` 对象中，并加载用户配置的 `plugins`

- 之后，开始初始化 `Compiler` 编译对象，该对象掌控着 `webpack` 生命周期，定义了很多钩子函数，不执行具体的任务，只是进行一些调度工作

    ```js
    class Compiler {
        constructor(context, options = ({})) {
            this.hooks = Object.freeze({
                initialize: new SyncHook([]), // 来自 tapable
                shouldEmit: new SyncBailHook(["compilation"]),
                done: new AsyncSeriesHook(["stats"]),
                afterDone: new SyncHook(["stats"]),
                additionalPass: new AsyncSeriesHook([]),
                beforeRun: new AsyncSeriesHook(["compiler"]),
                run: new AsyncSeriesHook(["compiler"]),
                emit: new AsyncSeriesHook(["compilation"]),
                assetEmitted: new AsyncSeriesHook(["file", "info"]),
                afterEmit: new AsyncSeriesHook(["compilation"]),
                // ... 定义很多类型的 钩子函数
            })
            // ...
        }
    }

    const webpack = (options, callback) => {
        const create = () => {
            // 根据 Array.isArray(options) 区分
            // new MultiCompiler(compilers, options)

            // new Compiler()
            // 得到如下 compiler 对象，watch 监听开关（boolean），watchOptions
            return { compiler, watch, watchOptions }
        }
        // 有 callback 函数，则开启监听
        if (callback) {
            const { compiler, watch, watchOptions } = create()
            if (watch) {
                compiler.watch(watchOptions, callback)
            } else {
                compiler.run((err, stats) => {
                    compiler.close(err2 => {
                        callback(err || err2, stats)
                    })
                })
            }
            return compiler // 返回 compiler 对象
        } else {
            const { compiler, watch } = create()
            return compiler
        }
    }
    ```

### 编译构建流程

- 根据配置中的 `entry` 找出所有的入口文件
- 初始化完成后，调用 `compiler.watch` / `compiler.run` 来启动编译构建流程，主要流程为：

    + `compile` 开始编译
    + `make` 从入口点分析模块及其依赖的模块，创建这些模块对象
    + `build-module` 构建模块
    + `seal` 封装构建结果
    + `emit` 把各个chunk输出到结果文件

- `compile` 编译
    > 主要是构建一个 `Compilation` 对象，它是编译阶段的主要执行者，主要会依次进行 `执行模块创建`、`依赖收集`、`分块`、`打包` 等主要任务的对象

- `make` 编译模块
    > 得到 `Compilation` 对象后，就开始从 `entry` 入口文件开始读取，主要执行 `addModuleChain`，执行 `buildModule` 进入真正的构建模块 `module` 内容的过程

- `build-module` 完成模块编译
    > 主要调用配置的 `loaders`，将我们的模块转成标准的 `JS模块`，在用Loader 对一个模块转换完后，使用 `acorn` 解析转换后的内容，输出对应的抽象语法树（`AST`），以方便 `Webpack` 后面对代码的分析；从配置的入口模块开始，分析其 `AST`，当遇到 `require` 等导入其它模块语句时，便将其加入到依赖的模块列表，同时对新找出的依赖模块递归分析，最终搞清 `所有模块的依赖关系`

### 输出流程

- `seal` 输出资源
    > 主要是要生成chunks，对chunks进行一系列的优化操作，并生成要输出的代码；`webpack` 会根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表

- `emit` 输出完成
    > 根据 `webpack.config.js` `output` 配置确定输出的路径和文件名；在 `Compiler` 开始生成文件前，钩子 `emit` 会被执行，这是我们修改最终文件的 `最后一个机会`

示意图如下：

![打包流程示意图](https://static.vue-js.com/d77fc560-a658-11eb-85f6-6fac77c0c9b3.png)

### 