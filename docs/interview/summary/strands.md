---
title: 面试题分析（二）
---

### 1. webpack 与 rollup 的区别？webpack5 与 webpack4？

#### `webpack` vs `rollup`：

`webpack` 最初用于构建复杂的单页应用程序（SPA），特别是它的两个特性：

- **代码拆分（Code Splitting）**：可以将应用程序分解成可管理的代码块

- **静态资源导入（Static Assets）**：如图像、CSS 资源，我们无需关心它们是不是在正确的项目目录，也不用关心文件 URL 的 hash 值问题

`rollup` 是一个模块化打包工具，专门针对于类库打包，在打包时默认进行 `Tree-shaking`，所以打包后的文件体积相比 webpack 会小很多。它利用 `ES2015` 巧妙的模块设计，尽可能高效地构建出能够直接被其它 JavaScript 库引用的模块

rollup 虽说可以通过插件机制处理大多数的 CommonJS 模块，但有些东西确实无法转换为 ES2015 语法，也不支持 HMR（热模块替换）；而 webpack 通过将模块封装成一个个函数的方式，可以处理任何你丢给它的东西

#### `webpack5` vs `webpack4`：

- 新增 `Tree-shaking` 功能

    ```js
    // webpack.config.js 配置开启
    module.exports = {
        optimization: {
            usedExports: true, // 只导出被使用的模块
            minimize : true // 启动压缩
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
            }
        ]
    }
    ```

    `webpack5` 的 `mode = production` 默认开启 `Tree-shaking` 功能

### 2. composition-api 与 hooks 的异同点？

react 对 hook 的定义是：

> 它可以让你在不编写 class 的情况下，让你在函数组件里 “钩入” React state 及生命周期等特性的函数

vue 的 composition-api（我们也可称为 `Vue Hooks`）：

它受到了 React Hooks 的启发，但也有些不同，规避了一些 react 的问题

在 hook 思想出来之前，针对业务上的逻辑复用功能：vue 采用 mixins 方案，react 采用 `render props`、高阶组件 的方案处理

- mixins 与组件之前是隐式依赖，可能会产生冲突（比如我们定义的方法名、数据名重名的情况）
- 高阶组件和 `render props` 容易导致组件嵌套层次过深，增大复杂度和维护成本

不同点：

1. React Hooks 是基于 `链表` 实现的，不能在循环内部、条件语句中或嵌套函数里调用 Hooks；Vue Hooks 定义在 `setup` 函数中，由于它数据的响应式是基于 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 实现的，只要更改数据就会触发对应的依赖函数执行更新操作，所以避开了 react 可能遇到的性能问题

2. 代码执行时机：React hooks 在组件每次渲染时都会运行；Vue Hooks 定义在 `setup()` 函数中，它会早于 `beforeCreate` 和 `created` 生命周期函数，且仅执行一次

3. React 使用 `useState` Hook 来声明数据，传入一个参数作为数据初始值（只会在初次运行这个函数时使用这个值进行初始化）；Vue 中使用 `ref` 和 `reactive` 这两个函数来定义数据

### 3. vue 中的 jsx 与 react 的 jsx 区别？

vue 组件使用 jsx 需要使用插件进行编译，react 组件中是默认支持的

vue template 与 react jsx 的区别：

vue 中提供一系列指令帮助我们构建页面

### 4. 说说 XSS 攻击与防范？

`XSS` 攻击（`Cross-Site Scripting`，跨站脚本攻击），它是页面中被注入了恶意的代码

<!-- 它是注入攻击的一种，攻击者通过将代码注入被攻击者的网站中，用户一旦访问访问网页便会执行被注入的恶意脚本。XSS 攻击主要分为反射性 XSS 攻击（`Reflected XSS attack`）、存储型 XSS 攻击（`Stored XSS Attack`）和 `DOM Based XSS`

反射型 XSS 只是简单的把用户输入的数据 “反射” 给浏览器 -->

一般，XSS 攻击有下列注入方式：

- 在 HTML 中内嵌的文本中，恶意内容以 script 标签形成注入
- 在内联的 JavaScript 中，拼接的数据突破了原本的限制（字符串，变量，方法名等）
- 在标签属性中，恶意内容包含引号，从而突破属性值的限制，注入其他属性或者标签
- 在标签的 href、src 等属性中，包含 `javascript:` 等可执行代码
- 在 onload、onerror、onclick 等事件中，注入不受控制代码
- 在 style 属性和标签中，包含类似 `background-image:url("javascript:...");` 的代码（新版本浏览器已经可以防范）
- 在 style 属性和标签中，包含类似 `expression(...)` 的 CSS 表达式代码（新版本浏览器已经可以防范）

防范手段（可能并不全面）：

- `输入过滤`，这也仅限于明确类型的用户输入，比如 `数字`、`URL`、`邮箱` 等内容进行必要的过滤处理

- `输入长度限制`，虽不能完全防止，但可以增加 XSS 攻击的难度

- `做纯前端渲染`，将数据与代码分隔开，对 HTML 做充分 `转义`（输出 HTML 时进行）

- 纯前端渲染方案中，尽量采用 `.innerText`、`.textContent`、`.setAttribute` 等 API，避免使用 `.innerHTML`、`.outerHTML`、`.document.write()` 等 API；在 vue/react 框架中，避免使用 `v-html`/`dangerouslySetInnerHTML` 功能；注意关注 DOM 内联事件或 `<a>` 标签的 `href` 属性，js 的 `eval()`、`setTimeout()`、`setImmediate()`、`setInterval()` 等 API 均能将 **字符串** 作为代码直接执行

### 5. 说说 cors 跨站脚本攻击防范？

`CORS`：跨域资源共享（Cross-origin resource sharing）

### 6. devOps（如 jenkins 等）

### 7. 测试框架（jest）

### 8. 说一说 `qiankun` 的路由匹配原理
