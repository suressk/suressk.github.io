---
title: 面试题分析（二）
---

## 1. webpack 与 rollup 的区别？webpack5 与 webpack4？

见 [打包工具对比 🔗](/knowledge/engineering/compare)

## 2. composition-api 与 hooks 的异同点？

react 对 hook 的定义是：

> 它可以让你在不编写 class 的情况下，让你在函数组件里 “钩入” React state 及生命周期等特性的函数

vue 的 composition-api（我们也可称为 `Vue Hooks`），它受到了 React Hooks 的启发，但也有些不同，规避了一些 react 的问题

在 hook 思想出来之前，针对业务上的逻辑复用功能：vue 采用 `mixins` 方案，react 采用 `render props`、`高阶组件` 的方案处理

- mixins 与组件之前是隐式依赖，可能会产生冲突（比如我们定义的方法名、数据名重名的情况）
- 高阶组件和 `render props` 容易导致组件嵌套层次过深，增大复杂度和维护成本

不同点：

1. React Hooks 是基于 `链表` 实现的，不能在循环内部、条件语句中或嵌套函数里调用 Hooks；Vue Hooks 定义在 `setup` 函数中，由于它数据的响应式是基于 [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 实现的，只要更改数据就会触发对应的依赖函数执行更新操作，所以避开了 react 可能遇到的性能问题

2. 代码执行时机：React hooks 在组件每次渲染时都会运行；Vue Hooks 定义在 `setup()` 函数中，它会早于 `beforeCreate` 和 `created` 生命周期函数，且仅执行一次

3. React 使用 `useState` Hook 来声明数据，传入一个参数作为数据初始值（只会在初次运行这个函数时使用这个值进行初始化）；Vue 中使用 `ref` 和 `reactive` 这两个函数来定义数据

## 3. vue 中的 jsx 与 react 的 jsx 区别？

vue 组件使用 jsx 需要使用插件进行编译，react 组件中是默认支持的

vue template 与 react jsx 的区别：

vue 中提供一系列指令帮助我们构建页面

## 4. 说说 XSS 攻击与防范？

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

## 5. DNS 劫持

域名解析需要由专门的域名解析服务器来完成，`DNS` 就是进行域名解析的服务器（`Domain Name System` 或`Domain Name Service`）

在网络中，机器之间是通过 `ip` 地址互相访问与通信的，但是为了便于记忆，就可以为每个 `ip` 配置对应的 `域名`，然后我们直接通过访问域名的方式，由浏览器去进行 `DNS` 解析获取到对应的 `ip` 地址，达到访问目标的目的（这也是常规八股文 [`浏览器输入 URL 发生了什么 🔗`](/interview/summary/index.html#_2-浏览器输入-url-发生了什么？) 的第一步 `DNS 域名解析` 做的事情）

`DNS 劫持` 又称为 `域名劫持`，它是指通过某些手段获得某些域名的解析控制权，在你访问某个域名时，给你返回错误的 `ip` 地址，结果就是网址无法访问或者假网址（比如攻击者搭建一个跟原网址 `长得一样` 的页面，你在这个网站的一切操作，比如登录的账号、密码等信息，可能都被其记录并发送到攻击者手里了）。`DNS 劫持` 并不是说 `黑掉了` 对方的网站，而是一种 `冒名顶替` 或 `无响应` 的攻击方式

**DNS 劫持方法：**

- 利用 DNS 劫持进行 [`DDoS` 攻击 🔗](https://help.aliyun.com/document_detail/28401.html)

  > 由于在 DNS 缓存未命中的情况下，会向 DNS 服务器发起递归查询，拿到映射结果后逐级缓存。假如在此过程中攻击者已知我们的 IP 地址，且攻击者拥有足够数量的 `肉鸡`，反复的进行如上操作，那么我们就会受到来自于 DNS 服务器的响应信息 DDoS 攻击（结果就是 `我们的网络被拖垮至发生中断`）

- DNS 缓存感染

  > 攻击者使用 DNS 请求，将数据放入一个具有漏洞的的 DNS 服务器的缓存当中，我们在进行 DNS 访问时拿到这些污染的缓存信息，从而将我们正常的域名访问 `导向访问攻击者设置的钓鱼 🎣 网站，或通过其他伪造手段获取用户账号密码信息等的攻击手段`

- DNS 信息劫持

  > 假设攻击者如果通过监听客户端和 DNS 服务器的对话，在 DNS 服务器之前将虚假的响应交给用户，从而 `欺骗客户端去访问恶意的网站`

- DNS 重定向

  > 攻击者将 DNS 名称查询重定向到恶意 DNS 服务器上，被劫持 `域名的解析就完全在攻击者的控制之下`

- ARP 欺骗

  > ARP 攻击就是通过伪造 IP 地址和 MAC 地址实现 ARP 欺骗，能够在网络中产生大量的 ARP 通信量使网络阻塞，`造成网络中断 或 中间人攻击`

- 本机劫持

  > 本机的计算机系统被木马或流氓软件感染后，DNS 缓存被修改导致域名访问异常。本机 DNS 劫持方式包括 `hosts 文件篡改`、`本机 DNS 劫持`、`SPI 链注入`、`BHO 插件` 等方式

**防止 DNS 劫持方法（网络层）：**

- 准备多个域名，可能出现一个被攻击的情况下，能够有其他域名可以正常访问

- 手动修改路由器 `首选DNS` 和 `备用DNS` IP

  > - 地址栏输入 `192.168.0.1` / `192.168.1.1` 登录进入路由器管理界面
  > - 在 `DHCP服务器—DHCP` 服务中，填写 `主选DNS服务器` 为更可靠的 `114.114.114.114` 地址，`备用DNS服务器` 为 `8.8.8.8`
  > - 隔段时间重新设置路由器登录密码

<!-- **防止 DNS 劫持方法（应用层）：**

- `LocalDNS` vs `HTTP DNS`

- -->

## 6. 说说 cors 跨站脚本攻击防范？

`CORS`：跨域资源共享（`Cross-origin resource sharing`），它使用额外的 `HTTP` 头来告诉浏览器让运行在一个 `origin` (`domain`) 上的 Web 应用被准许访问来自不同源服务器上的指定的资源

cors 将请求分为两种：

- `简单请求（simple request）`
- `非简单请求（preflight request）`，会首先发送一个 `OPTIONS` 预检请求

**简单请求** 需要满足以下条件：

- 请求的方法只能是 `GET`, `POST`, `HEAD` 的一种
- 请求的 `header` 的只能是 `Accept`，`Accept-Language`, `Content-Language`，`Content-Type` 这些字段，不能超出这些字段
- `Content-Type` 字段，只能是以下值：
    - `text/plain`
    - `multipart/form-data`
    - `application/x-www-form-urlencoded`

除此之外，均是非简单请求

非简单请求，先发出预检请求，检查当前请求是否符合服务器的 cors 配置，如果符合，则再发出真正的请求；不符合则直接返回跨域

> 如果预检请求通过了，在一定时间内重复请求是不用再次发起预检请求

## 7. 说说 CSRF 跨站请求伪造防范？

## 8. devOps（如 jenkins 等）

## 9. 测试框架（jest）

## 10. 说一说 `qiankun` 的路由匹配原理
