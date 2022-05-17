---
title: 实战面试题分享
---

<!-- bytedance first-interview -->

- 浏览器输入 URL 到页面展示的整个过程 [参见](/interview/summary/index.html#_2-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F)
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
    // ]

    function convertTree(data) {
        // you need to achieve it here...
    }
    ```

- 实现 `new` 操作符方法 （[相关知识点详见 ➡️](/interview/summary/basis.html#原型)）

    ```js
    // 我们协商第一个参数传递我们需要生成实例的构造函数，
    // 构造函数需要的参数，后面依次传入即可
    function newFunc(Fn, ...args) {
        if (typeof Fn !== 'function') {
            throw new Error('The params of Fn is not a function')
        }
        if (!Fn.prototype) {
            throw new Error('The function doesnot have the prototype property')
        }
        // 创建一个对象，并将它的隐式原型指向 构造函数 Fn 的原型
        const obj = Object.create(Fn.prototype)
        const res = Fn.call(obj, ...args)
        // const res = Fn.apply(obj, [...args])
        return (typeof res === 'object') ? res : obj
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
    const weights = [1,2,3,4,5,6,7,8,9,10], D = 5

    function getShipWithinDays(weights, days) {
        const len = weights.length
        // 货物不可分割，则船🚢至少要能装下最大货物
        const minWeight = Math.max(...weights) // 最小载货
        // 最少一天运完，则船最大只需要装下所有货物总和即可
        const maxWeight = weights.reduce((pre, next) => (pre + next), 0) // 最大载货
        
        // 最小载货 => 最大载货
        for (let weight = minWeight; weight <= maxWeight; weight++) {
            let dayCount = 1 // 天数
            let curWeight = 0 // 当前统计质量
            // 遍历所有货物
            for (const item of weights) {
                curWeight += item
                if (curWeight === weight) {
                    dayCount++
                    curWeight = 0
                } else if (curWeight > weight) {
                    dayCount++
                    curWeight = item
                }
            }
            if (dayCount === days) {
                return weight
            }
        }
    }
    getShipWithinDays(weights, D)
    ```