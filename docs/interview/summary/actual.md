---
title: 实战面试题分享
---

## 问题

<!-- bytedance first-interview -->

- 浏览器输入 URL 到页面展示的整个过程 [参见](/interview/summary/strands.html#_2-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F)
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
- DNS 劫持
- React Fiber？Fiber 对象有哪些属性？

<!-- tencent first-interview -->

- react 源码部分，如何完成页面渲染？关键步骤有哪些？
- `qiankun` 微应用方案？与 `iframe` 的区别？
- `qiankun` 的路由匹配原理（源码层面）
- `CI/CD` 流程方案

## 代码题

- 手写实现 `Promise.all()`：[实现方案参见 →](/knowledge/study/promise) - ByteDance
- 手写实现 `Promise.race()`：[实现方案参见 →](/knowledge/study/promise) - ByteDance
- ES5 实现继承：[实现方案参见 →](/interview/summary/basis.html#原型链的应用) - ByteDance
- 实现一个方法，输出数组的全排列方案（[LeetCode 46题](https://leetcode.cn/problems/permutations/)）： - ByteDance

  ```js
  // 输入：[1, 2, 3]
  /* 输出：
  [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 2, 1],
      [3, 1, 2]
  ]
  */
  function solution(arr) {
    // achieve it
  }
  ```

- 实现一个方法，统计括号内的表达式： - ByteDance

  ```js
  // 输入：'((2 + 3) + (2 * 4)) + 2'
  /* 输出：
  [
      '(2 + 3) + (2 * 4)',
      '2 + 3',
      '2 * 4'
  ]
  */
  function solution(str) {
    // achieve it
  }
  ```

- 实现一个任务队列 `TaskQueue`：

  ```js
  // 支持添加任务，启动任务队列，停止任务队列，按顺序执行任务
  // 任务都是函数，支持异步函数，支持设置每个任务的执行等待时间
  class TaskQueue {
    add(fn: Function, time: number): TaskQueue
  }

  // 调用示例：
  const task = new TaskQueue()
  task.start()
  task.add(() => console.log(1), 0)
  task.add(() => console.log(2), 1000)
  task.add(() => console.log(3), 2000)
  task.stop()

  // 输出：
  1
  // 等待1000ms
  2
  // 等待2000ms
  3

  // 实现
  class TaskQueue {
    constructor() {
      this.tasks = []
    }

    add(fn, time) {
      this.tasks.push(() => {
        return new Promise((resolve) => {
          setTimeout(() => {
            fn()
            resolve()
          }, time)
        })
      })
      return this
    }

    start() {
      this.tasks.length = 0
    }

    stop() {
      // 开启任务
      if (this.tasks.length > 0) {
        // 每次拿一个
        const task = this.tasks.splice(0, 1)[0]
        task().then(() => {
          // 递归
          this.stop()
        })
      }
    }
  }
  ```

- 实现一个 `convertTree` 方法：

  ```js
  // 原数据格式
  const data = [
    ["a1", "b1", "c1"],
    ["a1", "b1", "c2"],
    ["a1", "b2", "c1"],
    ["a1", "b2", "c2"],
  ];
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
  // ]

  function convertTree(data) {
    // you need to achieve it here...
  }
  ```

- 实现 `new` 操作符方法 （[相关知识点详见 →](/interview/summary/basis.html#原型)）

  ```js
  // 我们协商第一个参数传递我们需要生成实例的构造函数，
  // 构造函数需要的参数，后面依次传入即可
  function newFunc(Fn, ...args) {
    if (typeof Fn !== "function") {
      throw new TypeError("The params of Fn is not a function");
    }
    if (!Fn.prototype) {
      throw new Error("The function doesnot have the prototype property");
    }
    // 创建一个对象，并将它的隐式原型指向 构造函数 Fn 的原型
    const obj = Object.create(Fn.prototype);
    const res = Fn.call(obj, ...args);
    // const res = Fn.apply(obj, [...args])
    return typeof res === "object" ? res : obj;
  }
  ```

- 问题描述如下：

  ```js
  /**
   * 有货船需要运输一批货物，给定一个正整数数组 weights 和一个正整数 D，
   * 其中 weights 代表一系列货物，即 weights[i] 的值代表第 i 件物品的重量，
   * 货物是不可分割且必须按顺序运输，请计算货船能够在 D 天内运完所有货物的最低运载能力
   * 函数签名： int shipWithinDays(int[] weights, int D)
   * 示例：weights = [1,2,3,4,5,6,7,8,9,10]  D = 5，则函数返回 15
   */
  // 实现如下：
  const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const D = 5;

  function getShipWithinDays(weights, days) {
    const len = weights.length;
    // 货物不可分割，则船🚢至少要能装下最大货物
    const minWeight = Math.max(...weights); // 最小载货
    // 最少一天运完，则船最大只需要装下所有货物总和即可
    const maxWeight = weights.reduce((pre, next) => pre + next, 0); // 最大载货

    // 最小载货 => 最大载货
    for (let weight = minWeight; weight <= maxWeight; weight++) {
      let dayCount = 1; // 天数
      let curWeight = 0; // 当前统计质量
      // 遍历所有货物
      for (const item of weights) {
        curWeight += item;
        if (curWeight === weight) {
          dayCount++;
          curWeight = 0;
        } else if (curWeight > weight) {
          dayCount++;
          curWeight = item;
        }
      }
      if (dayCount === days) {
        return weight;
      }
    }
  }
  getShipWithinDays(weights, D);
  ```

- 消除 `异步函数的传染性`，以下面的例子为例，去除 `async`、`await`、`then` 等异步操作

  ```ts
  /**
   * 比如，我们有一个 getUsers 的方法获取 users 数据
   * 在后续一系列函数中，相互依赖的情况下，每个函数都需要
   * await 来保证顺利拿到对应的数据
   */
  function getUsers() {
    // 乱编的 url
    return fetch("https://suressk.com/get/users?id=xxx").then((resp) =>
      resp.json(),
    );
  }
  async function func1() {
    // do something
    return await getUsers();
  }
  async function func2() {
    // do something
    return await func1();
  }
  async function func3() {
    // do something
    return await func2();
  }
  async function main() {
    const users = await func3();
    console.log(users);
  }
  ```

  要消除异步，我们只能在 `fetch` 方法那步去处理，但 `fetch` 方法是个异步函数，发起网络请求没法立即结束，所以我们只能通过手动 **`抛错`** 来立即结束它，但同时我们等到请求数据结束时缓存请求拿到的数据，再重新执行这个方法，交付缓存的 数据，所以我们就可以这样处理：

  ```ts
  function getUsers() {
    // 乱编的 url
    return fetch("https://suressk.com/get/users?id=xxx");
  }
  function func1() {
    // do something
    return getUsers();
  }
  function func2() {
    // do something
    return func1();
  }
  function func3() {
    // do something
    return func2();
  }
  function main() {
    const users = func3();
    console.log(users);
  }

  // 主逻辑实现
  function run(func) {
    const cache = [];
    let idx = 0;
    const _originFetch = window.fetch;
    window.fetch = (...args) => {
      // 命中缓存，交付数据
      if (cache[idx].status === "fulfilled") {
        return cache[idx].data;
      } else if (cache[idx].status === "rejected") {
        throw cache[idx].err;
      }
      // 缓存数据
      const result = {
        status: "pending",
        data: null,
        err: null,
      };
      cache[idx++] = result;
      // 发送请求
      const prom = _originFetch(...args)
        .then((resp) => resp.json())
        .then((data) => {
          result.data = data;
          result.status = "fulfilled";
        })
        .catch((err) => {
          result.err = err;
          result.status = "rejected";
        });
      // 抛错
      throw prom;
    };
    try {
      func();
    } catch (e) {
      if (e instanceof Promise) {
        const reRun = () => {
          idx = 0;
          func();
        };
        e.then(reRun, reRun);
      }
    }
  }

  run(main); // 调用上面的 main 方法
  ```
