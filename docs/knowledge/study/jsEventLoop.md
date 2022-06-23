---
title: JS EventLoop
---

## 浏览器线程

浏览器宿主环境包含 5 个线程：

1. JS 引擎：负责执行执行栈最顶部的代码
2. GUI 线程：负责页面的渲染
3. 事件监听线程：负责监听页面的各种事件
4. 计时线程：负责计时（如 setTimeout 等）
5. 网络线程：负责网络通信

## Event Loop 事件循环

> 描述：当执行栈 (call stack) 已清空的情况下，JS 引擎对事件队列的取出执行方式，以及与宿主环境的配合，称之为事件循环

他人 [Event Loop](https://juejin.cn/post/6876456872036007944#heading-1) 描述：

> 1. js 分为同步任务和异步任务，所有的同步任务都在主线程上执行
> 2. 另外存在着一个 "任务队列"，只要异步的任务有了结果，便在任务队列里面加入一个事件
> 3. 当主线程的的同步任务都执行完了，执行栈清空，这个时候会去读取任务队列，依次把他们扔到主线程执行
> 4. 这个过程不断循环，就成了 js 的事件循环机制

对比以上，讲一下本人自己关于事件循环的理解：

> 1. js 同步代码逐行解析并推入执行栈，再 js 执行引擎解析执行执行栈最顶部的代码（因为可能调用其他函数，则会不断创建栈帧入栈，执行完毕达到出栈条件则出栈）
> 2. 遇到类似 setTimeout，setInterval 等宏任务，由计时线程或其他线程开启监听，等待触发时机将其推入宏任务队列
> 3. 遇到类似 Promise.resolve，MutationObserver 等微任务，等待条件触发再将其推入微任务队列
> 4. 同步代码执行栈清空的状态下，进入事件循环（先去检查微任务队列中是否有微任务，若有，则压入执行栈并进行解析执行，直到清空当前微任务队列）
> 5. 若无微任务，则去检查宏任务队列（有则压入执行栈进行执行）

> 另外补充一点，如在：async 修饰的异步函数中，使用 await 语句的情况
>
> - 若 await 后紧跟函数执行，则跳去执行那个函数内部的同步代码
>   然后跳出当前函数 (若还有其他代码，则推入微任务队列，之后的 await 语句同理)
> - 若 await 后紧跟一个常量 (如：await 1)，则直接推入微任务队列等待执行栈清空

```js
console.log(0);
async function func1() {
  await func2(); // 若此句是 await 999
  // 最终打印结果为：0, 5, 8, 1, 3, 6, '1 end', 7, 4
  console.log(1);
  await func3();
  console.log("1 end");
}
async function func2() {
  console.log(2);
}
async function func3() {
  console.log(3);
}
func1();
setTimeout(() => {
  console.log(4);
}, 0);
new Promise((resolve) => {
  console.log(5);
  resolve();
})
  .then(() => {
    console.log(6);
  })
  .then(() => {
    console.log(7);
  });
console.log(8);
// 打印结果： 0, 2, 5, 8, 1, 3, 6, '1 end', 7, 4
```

### 宏任务 与 微任务

除同步任务外，我们将异步任务分为 `宏任务` 和 `微任务`

#### 宏任务（macrotask）

js 是一门解释型的语言，它先要生成 AST 语法树存在内存中，然后边解释边执行。包括把任务队列的事件加入到主线程的执行，一个宏任务的执行相当于一个 task，浏览器会在一个宏任务结束之后，另一个宏任务开始之前，对页面进行重新渲染（[事件循环图示](https://juejin.cn/post/6876456872036007944#heading-4)）

常见的 macrotask：setTimeout、setInterval、setImmediate、I/O、UI render 等

#### 微任务（microtask）

当执行栈的同步代码都执行完毕之后，接下来会把它在执行期间产生等所有微任务都进行执行，也就是要把微任务队列执行清空掉，接下来浏览器开始对页面进行重新渲染 **`(所以说浏览器重新渲染的时机是在清空微任务队列之后，若没有微任务，则在每一个宏任务结束之后，另一个宏任务开始之前进行重新渲染)`**

常见的 microtask：process.nextTick(Node 环境)、Promise、async/await(本质是 Promise)、MutationObserver(H5 新增)

```js
// 举个栗子
console.log(1);
const task = () => {
  return new Promise((resolve) => {
    console.log(2);
    setTimeout(() => {
      resolve("promise resolved");
    }, 5000);
  });
};
let pro = task();
pro = pro.then((res) => {
  setTimeout(() => {
    console.log(3);
  }, 0);
  console.log("4", res);
  return "pro.then end";
});
pro.then((res) => {
  console.log("5", res);
});
setTimeout(() => {
  console.log(6);
}, 0);
console.log(7);

// 打印结果：1, 2, 7, 6,【等待 5s 后】 4 promise resolved, 5 pro.then end, 3

/**
执行顺序分析：
1. 全局上下文入栈，log 的执行上下文压入执行栈，打印【1】，log 的上下文出栈
2. task 函数执行，task 的执行上下文压入执行栈，new Promise 内同步代码执行，打印【2】，setTimeout (5s) 交给计时线程监听，出栈
3. 继续执行同步代码，setTimeout (0s) 交给计时线程监听，计时线程监听到 0s 时间已到，则立即将它放入宏任务队列
4. log 的执行上下文压入执行栈，打印【7】，log 的上下文出栈（同步代码执行结束），全局上下文出栈
5. 执行栈已清空，则进入事件循环。检查微任务队列发现并无微任务，则去检查宏任务队列，有一个任务，则将其入栈，打印【6】，上下文出栈
6. 5s 后，计时线程将之前监听的任务放入宏任务队列，重复第五步，宏任务回调函数入栈执行，
   执行到 resolve('promise resolved') 将 pro.then 的回调函数放入微任务队列，此宏任务函数执行完毕，出栈
7. 重复第五步，发现微任务有一个任务，则入栈执行。遇到 setTimeout (0s) 函数，计时线程将其放入宏任务队列等待执行，
   打印【'4 promise resolved'】，运行 return 语句将 pro.then 放入微任务队列
8. 重复第五步，取出微任务队列的任务入栈执行，打印【'5 pro.then end'】，执行上下文出栈，进入下一个事件循环
9. 微任务队列为空，则取出宏任务队列的第一个任务入栈执行，打印【3】，执行上下文出栈，整个程序执行完毕
*/
```

```js
// 再举个栗子
console.log(0);
async function func1() {
  await func2();
  console.log(1);
}
async function func2() {
  console.log(2);
}
func1();
setTimeout(() => {
  console.log(3);
}, 0);
new Promise((resolve) => {
  console.log(4);
  resolve();
})
  .then(() => {
    console.log(5);
  })
  .then(() => {
    console.log(6);
  });
console.log(7);
// 打印结果：0, 2, 4, 7, 1, 5, 6, 3

/**
执行顺序分析：
1. 全局上下文入栈，log 的执行上下文压入执行栈，打印【0】，log 的上下文出栈
2. 异步函数 func1 执行，func1 的执行上下文压入执行栈，await 语句执行异步函数 func2，打印【2】
   并将 func1 的后续代码放入微任务队列 (执行一句 await 语句后，它会跳出当前函数，去执行同步代码)
3. 解析到 setTimeout (0s)，计时进程监听执行条件已满足，将其放入宏任务队列
4. new Promise 回调函数的同步代码执行，打印【4】，resolve 语句将 .then 推入微任务队列
5. 继续执行同步代码，打印【7】
6. 检查微任务队列，有两个微任务，按推入队列的顺序取出执行，打印【1】，再打印【5】，此微任务执行完毕，
   将后续 .then 推入微任务队列
7. 下一轮循环，取出微任务队列的任务执行，打印【6】
8. 取出宏任务队列的任务执行，打印【3】，程序执行完毕
*/
```
