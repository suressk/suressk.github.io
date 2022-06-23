---
title: 打包工具对比
---

## `webpack` vs `rollup`：

`webpack` 最初用于构建复杂的单页应用程序（SPA），特别是它的两个特性：**代码拆分（Code Splitting）**：可以将应用程序分解成可管理的代码块；**静态资源导入（Static Assets）**：如 `图片`、`CSS` 资源，我们无需关心它们是不是在正确的项目目录，也不用关心文件 URL 的 hash 值问题

- `rollup` 是一个模块化打包工具，专门针对于类库打包，在打包时默认进行 `Tree-shaking`，所以打包后的文件体积相比 webpack 会小很多。它利用 `ES2015` 巧妙的模块设计，尽可能高效地构建出能够直接被其它 JavaScript 库引用的模块

- `rollup` 虽说可以通过插件机制处理大多数的 CommonJS 模块，但有些东西确实无法转换为 ES2015 语法，也不支持 HMR（热模块替换 / 热更新）；而 webpack 通过将模块封装成一个个函数的方式，可以处理任何你丢给它的东西

## `webpack5` vs `webpack4`（以下简称 v5，v4）：

- 新增 `Tree-shaking` 功能

    ```js
    // webpack.config.js 配置开启
    module.exports = {
        optimization: {
            usedExports: true // 只导出被使用的模块
        }
    }
    ```

    由于 `CommonJS` 是动态导入，`Tree-shaking` 是只能工作在静态编译阶段的代码优化方案，因而只支持 `ES6 Module`，因而在 `babel-loader` 预设环境需要配置

    ```json
    {
        "presets": [
            "@babel/preset-env",
            {
                "modules": false
            },
            "@babel/preset-react",
            "@babel/preset-typescript"
        ]
    }
    ```

    `modules: false` 将开启的 ESModule 模式 [内容描述可见 ➡️](https://github.com/babel/babel-loader/issues/521)，防止 `Babel` 将任何类型的模块都转换成 `CommonJS` 模块

    `webpack5` 的 `mode = "production"` 默认开启 `Tree-shaking` 功能

- v5 默认内置 `terser-webpack-plugin` 插件进行代码压缩，且在 `mode = "production"` 的模式下默认开启；v4 则需要我们先安装此插件，再进行配置

    ```js
    // webpack.config.js in v5
    module.exports = {
        optimization: {
            minimize : true // 启动压缩
        }
    }

    // webpack.config.js in v4
    const TerserPlugin = require('terser-webpack-plugin')

    module.exports = { 
        optimization: {
            minimize: !isDev, // 非开发环境开启压缩
            minimizer: [
                new TerserPlugin({
                    // 注释是否需要提取到一个单独的文件中
                    extractComments: false,
                    terserOptions: { 
                        compress: {
                            // 去除打印内容
                            pure_funcs: ['console.log'] 
                        }
                    }
                })
            ]
        }
    }
    ```

- 