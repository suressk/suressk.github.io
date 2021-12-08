# Vite 源码解读

> `版本： 2.7.0-bate.9`

## 目录结构

> `vite`<br>
> | + `bin`<br>
> | — | — openChrome.applescript<br>
> | — | — vite.js<br>
> | + `scripts`<br>
> | — | - patchTypes.cjs<br>
> | + `src`<br>
> | — | + `client`<br>
> | — | — | — client.ts<br>
> | — | — | — env.ts<br>
> | — | — | — overlay.ts<br>
> | — | — | — tsconfig.json<br>
> | — | + `node`<br>
> | — | — | + `__tests__`<br>
> | — | — | + `optimizer`<br>
> | — | — | + `plugins`<br>
> | — | — | + `server`<br>
> | — | — | + `ssr`<br>
> | — | — | — build.ts<br>
> | — | — | — cli.ts<br>
> | — | — | — config.ts<br>
> | — | — | — constants.ts<br>
> | — | — | — http.ts<br>
> | — | — | — importGlob.ts<br>
> | — | — | — index.ts<br>
> | — | — | — logger.ts<br>
> | — | — | — packages.ts<br>
> | — | — | — plugin.ts<br>
> | — | — | — preview.ts<br>
> | — | — | — utils.ts<br>
> | — | — | — tsconfig.json<br>
> | + `types`<br>
> | + ... // other files<br>

<!-- [vite-dev Map XMind](profiles/vite-dev.xmind) -->

<!-- <a :href="$withBase('/profiles/vite-dev.xmind')" target="_blank">vite-dev Map XMind</a> -->

#### 原理梗概

它做的事情大概就是：

> Vite，一个基于浏览器原生 ES Module 的开发服务器，利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。同时搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打包

我们可以注意到两个点：

1. `vite` 对应的场景是开发模式，原理是拦截浏览器发出的请求并做相应的处理

2. `vite` 在开发模式下不需要打包（这里不包含第三方模块），只需要编译浏览器发出的 HTTP 请求对应的文件即可，所以热更新速度很快

vite 的实现离不开现代浏览器原生 ES 模块化的支持，当声明一个 `<script>` 标签，`type` 属性置为 `module` 时，浏览器就会发起一个 HTTP 请求来获取，解析内容中的一个 import 语句也同样会发起一个请求来获取。vite 就劫持了这些请求，并在开启的 dev-server 中进行处理再返回给浏览器

由于浏览器只会对需要用到的模块发起请求，所以就不需要像 webpack 一样将所有的内容进行打包 📦 再一起返回，而是只编译浏览器发起 HTTP 请求的模块，这就相当于是 `“按需加载”` 了

这里我简单实现了一个非常粗糙的简易版 vite ➡️ [sure-vite](https://github.com/suressk/sure-vite)，可以用来大致理解一下 vite 的工作逻辑是什么（模拟 vite 1.x 版本的）：

- 基于 Koa 框架启动一个服务

- 基于其洋葱模型去编写一系列中间件拦截相应的请求或文件进行处理

- 首先得有一个静态服务吧，访问静态路径加载对应的 html 文件

- 我们写的 `.vue` / `.tsx` 等文件，浏览器是不认识的，我们就需要进行对它们编译，转换成浏览器能够识别的 `js 文件`

- 我们导入第三方模块儿时，是直接 `import x from 'x'` 写它的模块名，而由于 ES Module / 浏览器路径识别的规则，浏览器是无法识别 `非` **`./`**、**`../`** 或 **`/`** 开头的路径的，那么我们就需要重写它的引用路径

  ```jsx
  // 比如这样： /@modules/ 为任意你想命名的文件夹（当然你得去创建）
  import React from "react"; // 无法识别的路径

  import React from "/@modules/react"; // 可以识别的路径

  // ------------=+=------------

  import { createApp } from "vue"; // 无法识别的路径

  import { createApp } from "/@modules/vue"; // 可以识别的路径
  ```

- 上面那步你加了 `/@modules/` 路径，但要么你去创建这个文件夹，将打包后的结果放到这个目录下；或者拦截这个路径开头的请求，将它重定向到 node_modules 目录下的真实模块路径

- 然后，再向 html 文件中插入环境变量、添加热更新等额外功能

以上，便是最简单浅显的功能描述了

#### Bundle vs BundleLess

从下面两张图片，我们可以清晰地看到二者的区别（代表：webpack vs vite）：

<div style="display: flex;">
  <img src="https://tse1-mm.cn.bing.net/th/id/R-C.1a8c61df3258cfc5f819a7436d67b685?rik=xFz78GT4rZuHog&riu=http%3a%2f%2fcdn.xuedingmiao.com%2fwebpack-dev.png&ehk=08uWnivUiwe69BLT3IcWE7IhIgJk18h3xhc19a91%2bSA%3d&risl=&pid=ImgRaw&r=0" width="50%" style="box-sizing: border-box; padding-right: 2px;">

  <img src="https://tse1-mm.cn.bing.net/th/id/R-C.e03bec7f8db104a75d714b3493ace4ae?rik=%2fl7fCXrZ3VPlHg&riu=http%3a%2f%2fcdn.xuedingmiao.com%2fvite-esm.png&ehk=rLslDZBKO%2bVgaKEg%2fZRdAygMTs2s697ceNTcgfRT0IQ%3d&risl=&pid=ImgRaw&r=0" width="50%" style="box-sizing: border-box; padding-left: 2px;">
</div>

Bundle Server 的思想就是不管你有没有用到这块儿的代码，我都在启动 dev-server 之前进行一次性打包，形成一个 bundle 后再来启动开发服务器（所以，当我们的一个项目比较大的时候，往往启动它可能就得花费几分钟的时间），另外我们在改动某个模块儿的代码后，热更新也是基于打包后的内容，所以相关依赖会再走一遍打包流程，然后形成新的 bundle 交给 dev-server

BundleLess Server 的思想就是，你一个文件里的 import 更新，那么它只会去重新获取你这个更新的模块儿，其他没有更新的模块儿就会从之前请求的缓存中直接获取，几乎是毫秒级更新页面

至于为什么是 BundleLess 而不是 UnBundle 呢？那是因为 vite 还是做了打包处理的，我们知道一个 import 就会发起一个 http 请求来获取，那当我们使用第三方包的时候，它里面又大量引用其他第三方包，那初次加载如此多的模块儿就极有可能让浏览器崩溃，所以针对第三方不怎么变动的模块就需要进行打包 📦 处理成一个模块，从而降低浏览器的压力
