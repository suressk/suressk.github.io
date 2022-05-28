---
title: React Fiber
---

React 16 引入 Fiber 架构，这是 React 核心算法的重构

## 为什么要引入 Fiber

我们知道，在浏览器中，页面是一帧一帧地绘制出来的，渲染的帧率与设备的刷新率保持一致，一般的频率是 60Hz（也就是每秒绘制60次），当每秒内绘制的帧数（FPS）超过60时，页面渲染是流畅的；而当FPS小于60时，会出现一定程度的卡顿现象

完整的一帧中，具体做的事情有这些：

- 首先处理 `input`、`event` 事件（`I/O` 事件），让用户得到最早的反馈（`click`、`touch`、`wheel` 等）
- 接下来处理定时器，检查定时器是否到时间，并执行对应的回调
- 处理 `Begin Frame`（开始帧），即每一帧的事件，包括 `window.resize`、`scroll`、`media query change` 等
- 执行请求动画帧 `requestAnimationFrame（rAF）`，它会在每次绘制之前执行
- 进行 Layout 操作，包括计算布局和更新布局
- 进行绘制（paint）
- 浏览器绘制任务结束，进入空闲期（`Idle Peroid`），可以在此阶段执行 `requestIdleCallback` 注册的任务

js 引擎和页面渲染引擎是在 `同一个渲染线程` 之内，两者是互斥关系。所以如果在某个阶段执行任务特别长，例如在处理定时器阶段或 `Begin Frame`阶段执行时间非常长，时间已经明显超过了16ms（`1000ms/60帧`），那么就会阻塞页面的渲染，从而出现卡顿现象

React 16 引入 Fiber 架构之前，React 采用递归遍历对比虚拟 DOM 树（传统方案是利用同步 `深度优先` 递归的堆栈），找出需要变动的节点，然后同步更新它们，这个过程 react 称之为 `reconcilation（协调）`。在这期间，react 会一直占用浏览器资源，会导致用户触发的事件不能及时响应，即出现页面卡顿的现象

这种方案存在的问题：

- 因为这种遍历方案属于递归调用，执行栈会越来越深
- 递归遍历不能中断，如果中断也不可恢复
- 递归如果非常深，JS 的运行就会阻塞其他主线程任务的执行，造成页面卡顿

因此，React 希望能够彻底解决主线程长时间占用问题，于是引入了 Fiber 来改变这种不可控的现状，把 `渲染/更新` 过程拆分为一个个小块的任务，通过合理的调度机制来调控时间，指定任务执行的时机，从而降低页面卡顿的概率，提升页面交互体验。通过 `Fiber 架构`，让 reconcilation 过程变得可被中断。适时地让出 `CPU 执行权`，可以让浏览器及时地响应用户的交互

既然 React 16 使用 Fiber 进行架构层优化，但 Vue 是没有 Fiber 架构的，这是为什么呢？原因就是二者的优化思路不同：

1. Vue 是基于 `template` 和 `watcher` 的组件级更新，把每个更新任务分割得足够小，不需要使用到 Fiber 架构，将任务进行更细粒度的拆分
2. React 中不管是哪里调用了 `setState`，都是从根节点开始更新的，更新任务还是很大，需要使用到 Fiber 将大任务分割为多个小任务，可以中断和恢复，不阻塞主进程执行高优先级的任务

## 什么是 Fiber

Fiber 可以理解为一种 `执行单元`，也是一种 `数据结构`

1. 从执行单元角度去理解：每次（在一帧中）执行完一个任务，react 就会去检查还剩多少时间，如果没有时间则将控制权交还给浏览器。结合上面的完整的一帧：

    - react 会向浏览器请求调度，浏览器在一帧中是否还有空闲时间，无时间则将控制权交还浏览器（进入下一帧）
    - 有时间就去判断是否有执行任务单元，无任务则将控制权交还浏览器（响应用户操作或等待进入下一帧）
    - 有任务执行任务单元，执行完毕后再次检测这一帧中是否还有空闲时间，回到上面两步（循环）

    Fiber 可以理解为将原本的整棵树的递归对比的大任务拆分成一个一个的小执行单元（小任务），小任务当然是一次性执行完的，不存在暂停或中断；但每块小任务执行完毕后可以通过条件判定将控制权移交给浏览器响应用户的操作，而不用像之前那样需要等到整个大任务执行完毕才能响应

2. 数据结构层面理解：

    > 文件位置：packages/react-reconciler/src/ReactFiber.js

    它是一个 `js对象`，每一个 React 元素就对应一个 Fiber 对象，它是基于链表实现的，主要利用其 `child`、`return`、`sibling` 属性来实现 React Fiber 机制（可控中断操作等）；fiber 对象的主要属性如下：

    ```ts
    type Fiber = {
        // 标识 fiber 类型的标签 // 文件位置：packages/shared/ReactWorkTags.js
        tag: WorkTag,
        // 指向父节点
        return: Fiber | null,
        // 指向子节点
        child: Fiber | null,
        // 指向兄弟节点
        sibling: Fiber | null,
        // 在开始执行时设置 props 值
        pendingProps: any,
        // 在结束时设置的 props 值
        memoizedProps: any,
        // 当前 state
        memoizedState: any,
        // Effect 类型，详情查看以下 effectTag
        effectTag: SideEffectTag,
        // effect 节点指针，指向下一个 effect
        nextEffect: Fiber | null,
        // effect list 是单向链表，第一个 effect
        firstEffect: Fiber | null,
        // effect list 是单向链表，最后一个 effect
        lastEffect: Fiber | null,
        // work 的过期时间，可用于标识一个 work 优先级顺序
        expirationTime: ExpirationTime,
        // ... 还有一些其他属性
    }
    ```

## Fiber 是如何工作的


