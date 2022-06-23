---
title: 基于构建策略优化应用打包
---

功能强大的 `webpack` 配置繁多，很多配置字段零零散散地分布，再加上 `Loader` 与 `Plugin` 的配置，要让 `webpack` 打包时间更短打包体积更小还是需要做一些事情的

## 构建策略

对 `webpack` 做相关构建策略是为了让应用打包达到 `最优化`。简而言之，就是做好 `webpack` 的性能优化工作。那么就要从 `时间层面` 与 `体积层面` 入手，因为这两方面是最直接可观的，无需修改源码或增加流程，利用 `webpack` 与其他第三方应用提供的多元化配置完成上述操作

> 注：⏱ 表示减少 `打包时间`，📦 表示减少 `打包体积`

总结下来大概是：

- ⏱ 减少打包时间：`缩减范围`、`缓存副本`、`定向搜索`、`提前构建`、`并行构建`、`可视结构`
- 📦 减小打包体积：`分割代码`、`摇树优化`、`动态垫片`、`按需加载`、`作用提升`、`压缩资源`

➡️ [`webpack 优化指南文档 🔗 https://webpack.docschina.org/configuration/optimization`](https://webpack.docschina.org/configuration/optimization/)

## 减少打包时间方案

1. ⏱ 缩减打包范围

    配置 `include/exclude` 缩小 `Loader` 对文件的搜索范围，好处是避免不必要的转译（一般 `loader` 都会有这个配置项）

    ```js
    export default {
      // ...
      module: {
        rules: [{
          exclude: /node_modules/, /* 忽略处理的目录 */
          include: /src/, /* 包含处理的目录 */
          test: /\.js$/,
          use: "babel-loader"
        }]
      }
    }
    ```

2. ⏱ 缓存副本

    配置 `cache` 缓存 `loader` 对文件的编译副本，好处是 `再次编译时只编译变动的文件`。`Loader/Plugin` 可能会提供一个可用编译缓存的选项，通常包括 `cache` 字眼，以 `babel-loader` 与 `eslint-webpack-plugin` 为例

    ```js
    import EslintPlugin from "eslint-webpack-plugin"

    export default {
      // ...
      module: {
        rules: [{
          exclude: /node_modules/,
          include: /src/,
          test: /\.js$/,
          use: [{
            loader: "babel-loader",
            options: { cacheDirectory: true }
          }]
        }]
      },
      plugins: [
        new EslintPlugin({ cache: true })
      ]
    }
    ```
3. ⏱ 定向搜索

    配置 `resolve` 提高文件的搜索效率，可以定向指定所需文件的路径。`alias` 表示映射路径，`extensions` 表示文件后缀，`noParse` 表示过滤无依赖文件；通常配置 `alias` 与 `extensions` 就足够了

    ```js
    import { resolve } from 'path'

    const resolvePath = relativePath => resolve(__dirname, relativePath)
    export default {
      // ...
      resolve: {
        alias: {
          "@": resolvePath('src'),
          // ... others
          swiper: "swiper/js/swiper.min.js"
        },
        /* 导入模块省略后缀 */
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
      }
    }
    ```

4. ⏱ 提前构建

    配置 `DllPlugin` 将第三方依赖提前打包，好处是 `将DLL与业务代码完全分离` 且每次 `只构建业务代码`（已不推荐使用，故不作说明）

5. ⏱ 并行构建

    配置 `Thread` 将 `Loader` 单进程转换为多进程，`释放CPU多核并发的优势`。在使用 `webpack` 构建项目时会有大量文件需解析与处理，随着文件增多会使构建过程变得越慢

    在 `Node` 中运行的 `webpack` 是单线程的，简而言之，`webpack` 待处理的任务需一件件处理，不能同一时刻处理多件任务。但 `CPU` 是多核的，我们就可以借助 [`thread-loader 🔗`](https://github.com/webpack-contrib/thread-loader) 来根据 `CPU` 的核心数开启多个线程（当然要考虑是否有必要开启多个线程，毕竟开多个线程也有额外开销，若处理文件量并不大，则不推荐开启多线程）

    ```js
    import path from 'path'

    export default {
      module: {
        rules: [
          {
            test: /\.js$/,
            include: path.resolve('src'),
            use: [
              'thread-loader'
              // your expensive loader (e.g babel-loader)
            ]
          }
        ]
      }
    }
    ```

    ```js
    import Os from "os";

    export default {
      // ...
      module: {
        rules: [{
          // ...
          test: /\.js$/,
          use: [
            {
              loader: "thread-loader",
              /* 使用 os 模块获取 cpu 核心数 */
              options: { workers: Os.cpus().length }
            },
            {
              loader: "babel-loader",
              options: { cacheDirectory: true }
            }
          ]
        }]
      }
    }
    ```

6. ⏱ 可视结构

    配置 `BundleAnalyzer` 分析打包文件结构，通过分析原因得出优化方案减少打包时间。`BundleAnalyzer`（[`webpack-bundle-analyzer 🔗`](https://github.com/webpack-contrib/webpack-bundle-analyzer)）是 `webpack` 官方插件，可直观分析打包文件的模块组成部分、模块体积占比、模块包括关系、模块依赖关系、文件是否重复、压缩体积对比等可视化数据

    ```js
    import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

    export default {
      // ... others
      plugins: [
        new BundleAnalyzerPlugin()
      ]
    }
    ```

## 减小打包体积方案

1. 📦 分割代码

    分割各个模块代码，提取相同部分代码，减少重复代码的出现频率。`webpack v4+` 使用 `splitChunks` 替代 `CommonsChunksPlugin` 实现代码分割（详情可见 [`optimizationsplitchunks 🔗`](https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks)

    ```js
    export default {
      // ...
      optimization: {
        /* 抽离WebpackRuntime函数 */
        runtimeChunk: { name: "manifest" },
        splitChunks: {
          /* 缓存 */
          cacheGroups: {
            common: {
              minChunks: 2, /* 代码块出现最少次数 */
              name: "common", /* 代码块名称 */
              priority: 5, /* 优先级别 */
              reuseExistingChunk: true, /* 重用已存在代码块 */
              test: AbsPath("src")
            },
            vendor: {
              chunks: "initial", /* 代码分割类型 */
              name: "vendor",
              priority: 10,
              test: /node_modules/
            }
          },
          /* 代码分割类型：all全部模块，async异步模块，initial入口模块 */
          chunks: "all"
        }
      }
    }
    ```

2. 📦 摇树优化（`Tree-shaking`）

    删除项目中未被引用代码及重复代码，由于 `Tree-shaking` 仅针对静态结构分析，故仅 `ESM` 模块化规范生效，其他规范（比如 `commonjs` 规范）并不会生效

    `webpack v5` 的 `mode = "production"` 的情况下会默认开启 `Tree-shaking` 功能，业务代码同样需要使用 `ESM` 模块化方式编写；`v2+` 版本需要配置预设环境为 `ESM`

    ```js
    export default {
      module: {
        rules: [
          {
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                  /* set modules: false by default */
                  presets: ['env', { modules: false }]
                }
            }
          }
        ]
      }
    }
    ```
3. 📦 动态垫片

    参考文章可见 [`一文搞清楚前端 polyfill 🔗`](https://zhuanlan.zhihu.com/p/71640183)
    
    通过垫片服务根据UA返回当前浏览器代码垫片，无需将繁重的代码垫片打包进去

    - 方案一：通过 `@babel/preset-env` 提供的 `useBuiltIns` 可按需导入 `Polyfill`

    - 方案二：通过 `HtmlWebpackPlugin` 插件，在打包时自动加入 `polyfill.js` 文件链接

    ```js
    import HtmlTagsPlugin from "html-webpack-tags-plugin";

    export default {
      // ...
      plugins: [
        // ...
        new HtmlTagsPlugin({
          append: false, /* 在生成资源后加入 */
          publicPath: false, /* 使用公共路径 */
          /* polyfill 资源路径，如 polyfill.io，alicdn 等资源 */
          tags: ["https://[xxx]/polyfill.min.js"]
        })
      ]
    }
    ```

4. 📦 按需加载

    将路由页面/触发性功能单独打包为一个文件，使用时才加载，减轻首屏渲染的负担。首屏渲染时只需加载首页的JS代码，`webpack v4+` 提供模块按需切割加载功能，配合 `import() 方法` 可做到首屏渲染减包的效果，以加快首屏渲染速度。只有当触发某些功能时才会加载当前功能的JS代码

    在 `webpack v4` 中通过注解（`webpackChunkName`）来拆分，`v5` 则无需注解

    ```js
    // v4 示例：
    const Login = () => import(/* webpackChunkName: "login" */ '../views/login')
    ```

    可能需要配合 [`@babel/plugin-syntax-dynamic-import 🔗`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import.html) 插件使用

    ```json
    // v4 示例：
    {
      "babel": {
        "plugins": [
          "@babel/plugin-syntax-dynamic-import"
        ]
      }
    }
    ```

5. 📦 作用提升

    分析模块间依赖关系，把打包好的模块合并到一个函数中，可以 `减少函数声明与内存花销`（`webpack` 借鉴自 `rollup`）

    在未开启此功能前，构建好的代码会存在大量函数闭包，因为模块依赖，通过 `webpack` 打包后会转换为 `IIFE`（立即执行函数），大量函数闭包包裹代码会导致打包体积增大，模块越多越明显；开启后，构建好的代码会根据引用顺序放到一个函数作用域中，通过适当重命名某些变量以防止变量名冲突，以减少函数声明与内存花销

    在 `webpack` 中只需将打包环境设置为生产环境就能让作用提升生效，或显式设置 `concatenateModules`

    ```js
    export default {
      // ...
      mode: "production"
    }
    // 显示设置
    export default {
      // ...
      optimization: {
        // ... others
        concatenateModules: true
      }
    }
    ```

6. 📦 压缩资源

    压缩 `HTML/CSS/JS` 代码，压缩 `字体/图像/音频/视频`，更有效地减少打包体积。极致地优化代码都有可能不及优化一个资源文件的体积更有效

    针对 `HTML`，使用 [`html-webpack-plugin 🔗`](https://github.com/jantimon/html-webpack-plugin)

    ```js
    import HtmlWebpackPlugin from "html-webpack-plugin";

    export default {
      // ...
      plugins: [
        // ...
        new HtmlWebpackPlugin({
          /* 压缩HTML */
          minify: {
            collapseWhitespace: true, /* 压缩空格/换行符等 */
            removeComments: true /* 移除注释 */
          }
        })
      ]
    }
    ```

    针对 `JS` 代码，有 `Uglifyjs`（压缩 `ES5`） / `Teser`（压缩 `ES6`，`v5` 已内置）；针对 `CSS` 代码，有 `OptimizeCssAssets`（`v4` 版） / `CssMinimizer`（`v5` 版）

    - [`optimize-css-assets-webpack-plugin 🔗`](https://github.com/NMFR/optimize-css-assets-webpack-plugin)：`webpack v4` 用于压缩 `CSS` 代码
    - [`css-minimizer-webpack-plugin 🔗`](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)： `webpack v5` 用于压缩 `CSS` 代码
    - ~~[`uglifyjs-webpack-plugin 🔗`](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)：压缩 `ES5版本` 的 `JS` 代码~~
    - [`terser-webpack-plugin 🔗`](https://github.com/webpack-contrib/terser-webpack-plugin)：压缩 `ES6版本` 的 `JS` 代码（`webpack v5` 已内置此插件，且均可压缩 `ES5` & `ES6` `JS` 代码；`v5` 若需要自定义配置，依旧需要安装此插件进行配置，`v4` 则为必须安装）

    ```js

    ```