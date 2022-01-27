# vue nextTick

尽管 MVVM 框架并不推荐访问 DOM，但有时候确实会有这样的需求，免不了要进行 DOM 操作。而 nextTick 就提供了一个桥梁，确保我们操作的是更新后的 DOM，而能监听到 DOM 改动的 API 好像只有 HTML5 新增的 MutationObserver 了

##### 理解 MutationObserver

MutationObserver ([MDN 参考](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)) 是 HTML5 新增的属性，用于监听 DOM 修改事件，能够监听到节点的属性、文本内容、子节点等的改动，基本用法如下：

```js
// MutationObserver 构造函数，创建并返回一个新的 MutationObserver，它会在指定的DOM发生变化时被调用
// 方法：
// 1. disconnect()：阻止 MutationObserver 实例继续接收的通知，直到再次调用其observe()方法
// 2. observe()：监听 DOM 元素，接收 DOM 元素更新的通知
// 3. takeRecords()：从MutationObserver的通知队列中删除所有待处理的通知，并将它们返回到MutationRecord对象的新Array中

const callback = (mutationList, observer) => {
  // DOM 更新后的回调函数
  console.log("DOM has been changed");
  // for(let mutation of mutationsList) {
  //     mutation.type === 'childList' => 子节点新增或移除
  //     mutation.type === 'attributes' => 目标节点属性变更 (mutation.attributeName：变化的属性名)
  // }
};

const observer = new MutationObserver(callback);
const targetNode = document.getElementById("observeNode");

// 观察器的配置（需要观察什么变动）
const config = {
  attributes: true, // 监听 DOM 元素属性变化
  childList: true, // 监听子列表变化
  subtree: true, // 深层监听子孙及更深级子树变化
};

observer.observe(targetNode, config); // 监听目标节点的变化 (targetNode：目标 DOM 元素)

// observer.disconnect() // 取消监听
```

##### Vue nextTick

通过看这部分源码 (vue 2.6.14) 得知其实现方案：

```js
/**
1. 声明一个数组 callbacks，收集需处理的回调函数
2. 调用 nextTick 函数，将传入的回调函数用新函数容错处理包裹后，放进 callbacks 数组暂存
3. 检查当前是否是 pending 状态，若为 false，则置为 true 并遍历执行 callbacks 中存放的函数
4. 遍历调用的降级策略为：Promise => MutationObserver => setImmediate => setTimeout
   - 优先判定是否支持 Promise 微任务方案，若支持，则将遍历 callbacks 数组执行的任务推入微任务队列
   - 若不支持 Promise 且非 IE 浏览器，判定是否支持 MutationObserver API，若支持，则创建一个 TextNode 节点，
     更改其节点值 0/1，触发 observer 的回调函数遍历 callbacks 数组执行(也是微任务)
   - 若前两种都不支持，则使用宏任务 setImmediate 和 setTimeout 推入宏任务队列，遍历执行
*/
```

vue 通过事件队列的控制来达到访问更新后的 DOM [Link](https://juejin.cn/post/6844903590293684231#heading-2)，vue 进行 DOM 更新内部也是调用 nextTick 来做异步队列控制。而当我们自己调用 nextTick 的时候，它就在更新 DOM 的那个 microtask 后追加了我们自己的回调函数，从而确保我们的代码在 DOM 更新后执行，同时也避免了 setTimeout 可能存在的多次执行问题

总结其实现原理就是：

1. vue 用异步队列的方式来控制 DOM 更新和 nextTick 回调的先后执行
2. microtask 因为在事件循环中的优先级更高，能够保证微任务在一次事件循环前被执行完毕，之后再进行 UI 渲染
3. 因为兼容性问题，所以 vue 做了降级处理：Promise => MutationObserver => setImmediate => setTimeout (vue 2.6.14)
