---
title: 实际面试题分享
---

<!-- bytedance first-interview -->

- 浏览器输入 URL 到页面展示的整个过程
- 讲一下小程序双线程（多线程）

    - [微信官方文档 ➡️](https://developers.weixin.qq.com/miniprogram/dev/framework/workers.html) /// [另一个说明文档 ➡️](https://qunarcorp.github.io/anu/documents/two-threaded.html)

    - 与 Web 网站相比，以微信为宿主的小程序更需要考虑 **安全**、**性能** 等因素，保障小程序不会对微信App本身产生安全隐患，同时要尽量达到接近原生应用的性能和用户体验。故而小程序采用自己实现的双线程模型，而不直接使用浏览器的线程模型

    - 这种架构中，小程序的渲染层使用 WebView 作为渲染载体，而逻辑层则由独立的 JsCore 线程运行 JS 脚本，双方并不具备数据直接共享的通道，因此渲染层和逻辑层的通信要由 Native 的 JSBrigde 做中转

    - Worker 与主线程之间的数据传输，双方使用 `Worker.postMessage()` 来发送数据，`Worker.onMessage()` 来接收数据，传输的数据并不是直接共享，而是被复制的

- 小程序与 H5 的区别
- 图片懒加载方案
- React Hook 有哪些？ => `useCallback` 有什么作用？
- 说一下重绘与重排？
- 如何解决上下边距（`margin`）合并的问题？

<!-- tencent first-interview -->

- react 源码部分，如何完成页面渲染？关键步骤有哪些？
- `qiankun` 微应用方案？与 `iframe` 的区别？
- `qiankun` 的路由匹配原理（源码）
- `CI/CD` 流程方案

### 代码编写

- 手写实现 `Promise.all()`：[实现方案参见 ➡️](/knowledge/study/promise)

- 实现一个 `convertTree` 方法：

```js
// 原数据格式
const data = [
    ['a1', 'b1', 'c1'],
    ['a1', 'b1', 'c2'],
    ['a1', 'b2', 'c1'],
    ['a1', 'b2', 'c2'],
    ['a2', 'b3', 'd1'],
    ['a2', 'b3', 'd2'],
    ['a2', 'b4', 'd1'],
    ['a2', 'b4', 'd2']
]
// 转换后数据格式为：
// [
//     {
//         key: 'a1',
//         children: [
//             {
//                 key: 'b1',
//                 children: [{ key: 'c1' }, { key: 'c2' }]
//             },
//             {
//                 key: 'b2',
//                 children: [{ key: 'c1' }, { key: 'c2' }]
//             }
//         ]
//     },
//     {
//         key: 'a2',
//         children: [
//             {
//                 key: 'b3',
//                 children: [{ key: 'd1' }, { key: 'd2' }]
//             },
//             {
//                 key: 'b4',
//                 children: [{ key: 'd1' }, { key: 'd2' }]
//             }
//         ]
//     }
// ]

function convertTree(data) {
    // you need to achieve it here...
}
```