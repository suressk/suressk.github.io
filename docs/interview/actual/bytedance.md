---
title: 字节面试
---

### 一面

时间：2022.05.09 大概 50 分钟

1. 自我介绍（穿插项目、业务问题了解）
2. 浏览器输入 URL 到页面展示的整个过程
3. 讲一下小程序双线程（多线程）

    - [微信官方文档 ➡️](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html) /// [另一个说明文档 ➡️](https://qunarcorp.github.io/anu/documents/two-threaded.html)

    - 与 Web 网站相比，以微信为宿主的小程序更需要考虑 **安全**、**性能** 等因素，保障小程序不会对微信App本身产生安全隐患，同时要尽量达到接近原生应用的性能和用户体验。故而小程序采用自己实现的双线程模型，而不直接使用浏览器的线程模型

    - 这种架构中，小程序的渲染层使用 WebView 作为渲染载体，而逻辑层则由独立的 JsCore 线程运行 JS 脚本，双方并不具备数据直接共享的通道，因此渲染层和逻辑层的通信要由 Native 的 JSBrigde 做中转

    - Worker 与主线程之间的数据传输，双方使用 `Worker.postMessage()` 来发送数据，`Worker.onMessage()` 来接收数据，传输的数据并不是直接共享，而是被复制的

4. 小程序与 H5 的区别
5. 图片懒加载方案
6. React Hook 有哪些？ => `useCallback` 有什么作用？
7. 说一下重绘与重排？
8. 如何解决上下边距（`margin`）合并的问题？

代码，手写实现 `Promise.all()` 方法：[实现方案可见 ➡️](/knowledge/study/promise)
