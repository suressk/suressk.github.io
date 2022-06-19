---
title: 认识 Tapable
---

我们要了解 `Webpack` 中的 `Plugin` 机制时，就需要掌握 `Tapable` 这个前置知识

## Tapable 使用

在 `webpack` 的编译过程中，本质上通过 `Tapable` 实现了在编译过程中的一种 **发布订阅者模式** 的插件 `Plugin` 机制；`Tapable` 提供了一系列事件的发布订阅 `API` ，通过 `Tapable` 我们可以注册事件，从而在不同时机去触发注册的事件进行执行

`Tapable` 官方文档提供了这九种钩子：

```js
const {
    SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require('tapable')
```