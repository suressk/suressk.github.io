---
title: 前端缓存
---

:::tip Tips
web缓存是高级前端工程师必修技能
:::

## 1. 什么是web缓存（前端缓存）

:::tip Cache
web缓存主要指的是两部分：`浏览器缓存` 和 `http缓存`

其中 `http缓存` 是web缓存的核心, 是最难懂的那一部分, 也是最重要的那一部分
:::

- 浏览器缓存：如 `localStorage`, `sessionStorage`, `cookie`等； 这些功能主要用于缓存一些必要的数据，比如用户信息、需要携带到后端的参数等
  - ⚠️ `localStorage`、`sessionStorage` 这种用户缓存数据的功能，他只能保存 `5M` 左右的数据
  - ⚠️ `cookie` 则更少，大概只能有 `4kb` 的数据

- http 缓存

  :::tip Introduction
  Web缓存（或HTTP缓存）是用于临时存储Web文档（如HTML页面和图像）以减少服务器延迟的信息技术，既指设备也指程序
  :::

**_⚠️ 我们的缓存主要是针对 `html`, `css`, `img` 等静态资源，常规情况下，我们不会去缓存一些动态资源_**

## 2. 缓存可以解决什么问题？它的缺点是什么？

- 先说说可以解决的问题：
  - 减少不必要的网络传输，节约宽带 —— 就是`省钱`
  - 更快地加载页面 —— 就是`加速`
  - 减少服务器负载，避免服务器过载的情况出现 —— 就是`减载`

- 缺点
  - 占内存

`http缓存` 又分为两种：**`强制缓存`** 和 **`协商缓存`**

## 3. 强制缓存原理

强制缓存，我们简称：`强缓存`

如果浏览器判断请求的目标资源有效命中强缓存，则可以直接从内存中读取目标资源，无需与服务器做任何通讯

### 3.1 基于 `Expires` 字段实现的强缓存 (已废弃⚠️)

在以前，我们通常会使用响应头的 `Expires` 字段去实现强缓存

```ts
// 示例代码如下 (node server)
import { createServer } from 'http';

createServer((req, res) => {
  // ... other handlers ...
  if (req.url === './xxx.png') {
    res.writeHead(200, {
      // 假设 2026 年底前有效
      Expires: new Date('2026-12-31 23:59:59').toUTCString(),
    });
  }
}).listen(8000, () => {
  console.log('Http server has started...');
});
```

⚠️ 因为 `Expires` 判断强缓存是否过期的机制是: 获取 **本地时间戳**，并对先前拿到的资源文件中的 `Expires` 字段的时间做比较，来判断是否需要对服务器发起请求。这里有一个巨大的漏洞：“如果我本地时间不准咋办？”

由于 `Expires` 过度依赖本地时间，如果本地与服务器时间不同步，就会出现资源 `无法被缓存` 或者 `资源永远被缓存` 的情况；所以，在现在的项目中，我们并不推荐使用 `Expires`，强缓存功能通常使用 **`cache-control`** 字段来代替 `Expires` 字段

### 3.2 基于 `Cache-control` 实现的强缓存

`Cache-control` 这个字段在 `http1.1` 中被增加，`Cache-control` 完美解决了 `Expires` 本地时间和服务器时间不同步的问题

`Cache-control` 的使用方法也很简单，只要在资源的 `响应头` 上写上需要缓存多久就好了，单位是 **`秒`** （示例如下↓）

```ts
res.writeHead(200, {
  // 假设 10s 内有效
  'Cache-Control': 'max-age=10',
});
```

其表达的含义为：从该资源第一次返回的时候开始，往后的 `10秒钟内` 如果该资源被再次请求，则从缓存中读取

`Cache-Control:max-age=N`，`N` 就是需要缓存的秒数。从第一次请求资源的时候开始，往后 `N秒内`，资源若再次请求，则直接从磁盘（或内存中读取），不与服务器做任何交互

`Cache-control` 中因为 `max-age` 后面的值是一个 **滑动时间**，从服务器第一次返回该资源时开始倒计时。所以也就 `不需要比对` 客户端和服务端的时间，解决了 `Expires` 所存在的巨大漏洞

`Cache-control` 具体取值可见：【[MDN Cache-Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Reference/Headers/Cache-Control)】；这里挑选几个常用的属性作说明：

- `max-age`: 设置缓存存储的最大周期，超过这个时间缓存被认为过期，单位为：秒
- `s-maxage`: 可以被代理服务器缓存（需配合 `public` 使用）
- `no-cache`: 强制进行 `协商缓存`
- `no-store`: `禁止` 使用缓存策略
- `private`: 只能被客户端（浏览器）缓存（中间代理服务器不能缓存它）
- `public`: 响应可以被任何对象缓存（包括：发送请求的客户端，代理服务器等等）

```ts
// Cache-Control 多值示例:
res.writeHead(200, {
  // 客户端+代理服务器可缓存 & 一年有效
  'Cache-Control': 'public,max-age=31536000',
});

res.writeHead(200, {
  // 协商缓存 & 仅客户端缓存
  'Cache-Control': 'no-cache,private',
});
```

`no-cache` 并不像字面意思一样禁用缓存，而是强制使用 `协商缓存`，该资源会直接跳过强缓存的校验，直接去服务器进行协商缓存；`no-store` 则是禁止所有的缓存策略

:::danger ⚠️
`no-cache` 和 `no-store` 是一组 `互斥属性`，这两个不能同时出现在响应头的 `Cache-Control` 中

`public` 和 `private` 也是一组 `互斥属性`，这两个也不能同时出现在响应头的 `Cache-Control` 中（如未显性设置，其默认值为 `private`）
:::

## 4. 协商缓存原理

### 4.1 基于 `Last-Modified` 实现的协商缓存

基于 `Last-Modified` 的协商缓存实现方式是:

- 首先需要在服务器端读出文件修改时间
- 将读出来的修改时间赋给响应头的 `Last-Modified` 字段。
- 最后设置 `Cache-Control:no-cache`

**三步缺一不可**

```ts
import { createServer } from 'http';
import fs from 'fs';

createServer((req, res) => {
  // ... other handlers ...
  if (req.url === './xxx.png') {
    // 协商缓存
    const data = fs.readFileSync('./xxx.png');
    const { mtime } = fs.statSync('./xxx.png'); // 读出最后修改时间
    res.setHeader('Last-Modified', mtime.toUTCString()); // 设置响应头
    res.setHeader('Cache-Control', 'no-cache'); // 设置 no-cache
    res.end(data);
  }
}).listen(8000, () => {
  console.log('Http server has started...');
});
```

在此次响应被客户端拿到之后，客户端读取 `Last-Modified` ，会在下次的请求头中携带一个字段: `If-Modified-Since`，它的值即为上次服务器响应的 `Last-Modified` 响应头带回来的时间；那么之后每次对该资源的请求，都会带上 `If-Modified-Since` 这个字段，而务端就需要拿到这个时间并再次读取该资源的修改时间，让他们两个做一个比对来决定是读取缓存还是返回新的资源

```ts
import { createServer } from 'http';
import fs from 'fs';

createServer((req, res) => {
  // ... other handlers ...
  if (req.url === './xxx.png') {
    // 协商缓存
    const { mtime } = fs.statSync('./xxx.png'); // 读出最后修改时间
    const ifModifiedSince = req.headers['If-Modified-Since'];
    // 比对上次的修改时间和资源文件当前的修改时间是否一致
    if (ifModifiedSince === mtime.toUTCString()) {
      // 如果一致，说明文件未被修改过，状态码置为 304，缓存已生效，不响应资源数据
      res.statusCode = 304;
      res.end();
      return;
    }
    const data = fs.readFileSync('./xxx.png');
    res.setHeader('Last-Modified', mtime.toUTCString()); // 设置响应头
    res.setHeader('Cache-Control', 'no-cache'); // 设置 no-cache
    res.end(data);
  }
}).listen(8000, () => {
  console.log('Http server has started...');
});
```

通过上面的示例代码，我们可以轻易找出两个非常明显的 bug（均是基于文件通过比较修改时间操作而来）：

:::danger Question

1. 由于是基于文件 `修改时间` 来判断的，则在文件内容不修改的情况下，如：修改文件名再改回来，这样虽然内容不变，但文件修改时间更新了

2. 文件在极短时间内修改（如代码操作几百毫秒内完成多次更新），而文件修改时间记录的最小单位是 `秒`，如果刚好请求在这个尚未反映到文件修改时间上时，即使文件内容更新了，依然不会返回新文件

:::

为了解决上述两个问题，`http 1.1` 新增了一个头信息 —— `ETag`（Entity 实体标签）

### 4.2 基于 `ETag` 实现的协商缓存

`ETag` 就是将原先协商缓存的比较 `时间戳` 的形式修改成了比较 `文件指纹 🫆`

:::info Intro

文件指纹: 根据文件内容计算出的唯一哈希值。文件内容一旦改变则 指纹改变

:::

流程如下：

1. 第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的 `etag` 字段中跟资源一起返回给客户端

2. 第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的 `ETag` 也就是文件指纹。并赋给请求头的 `If-None-Match`字段，让上一次的文件指纹跟随请求一起回到服务端

3. 服务端拿到请求头中的 `If-None-Match` 字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回 `304状态码` 并结束响应。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的 `ETag` 中并返回给客户端

```ts
import { createServer } from 'http';
import fs from 'fs';
import etag from 'etag';

createServer((req, res) => {
  // ... other handlers ...
  if (req.url === './xxx.png') {
    // 协商缓存 基于 ETag
    const data = fs.readFileSync('./xxx.png');
    const etagContent = etag(data); // 根据文件资源生成唯一标识符
    const ifNoneMatch = req.headers['If-None-Match']; // 上一次文件指纹
    // 比对文件指纹是否一致
    if (ifNoneMatch === etagContent) {
      // 如果一致，说明文件未被修改过，状态码置为 304，缓存已生效，不响应资源数据
      res.statusCode = 304;
      res.end();
      return;
    }
    res.setHeader('ETag', etagContent); // 设置响应头 文件唯一标识符
    res.setHeader('Cache-Control', 'no-cache'); // 设置 no-cache
    res.end(data);
  }
}).listen(8000, () => {
  console.log('Http server has started...');
});
```

从校验流程上看，协商缓存的 修改时间比对 和 文件指纹比对 几乎一模一样

#### ETag 也有缺点

- `ETag` 需要计算文件指纹 🫆，这样意味着，服务端需要更多的计算开销。如果文件尺寸大，数量多，并且计算频繁，那么 `ETag` 的计算就会影响服务器的性能

- `ETag` 有强验证和弱验证；所谓将 `强验证`，`ETag` 生成的哈希码深入到 `每个字节`。哪怕文件中只有一个字节改变了，也会生成不同的哈希值，它可以保证文件内容绝对的不变。但同时，`强验证非常消耗计算量`。ETag还有一个 `弱验证`，弱验证是提取文件的部分属性来生成哈希值。因为不必精确到每个字节，所以他的整体速度会比强验证快，但 `准确率不高，会降低协商缓存的有效性`

:::tip 值得注意的一点是

- `Cache-control` 是 `Expires` 的完全替代方案 (说人话：能用 `Cache-control`就不要用 `Expires`)

- `ETag` 并不是 `Last-Modified` 的完全替代方案，而是 `Last-Modified` 的补充方案 (说人话：项目中到底是用 `ETag` 还是 `Last-Modified` 完全取决于 `业务场景`，这两个没有谁更好谁更坏)

:::

## 如何设置缓存

- 从 `前端` 的角度来说：虽然资源是缓存在客户端的，但代码实现是在后端的，需要做的事就是通知后端同学加对应的响应头即可

- 从 `后端` 的角度来说：没得说，加！（参照上面的示例 node 代码）

## 哪些文件对应哪些缓存

- `有 哈希值` 的文件设置强缓存

  ```ts
  // 如 webpack / rollup / rolldown 打包 生成的 chunks 文件
  📃 41.090df45bd.chunk.css
  📃 67.1ed54n8e.async.js
  ```

- `没 哈希值` 的文件设置协商缓存

  ```ts
  // 如 网站入口 html 文件
  📃 index.html
  ```

## 总结

- `http缓存` 可以减少宽带流量，加快响应速度

- 关于强缓存，`Cache-Control` 是 `Expires` 的完全替代方案，在可以使用 `Cache-Control` 的情况下不要使用 `expires`

- 关于协商缓存，`ETag` 并不是 `Last-Modified` 的完全替代方案，而是补充方案，具体用哪一个，取决于业务场景

- 有些缓存是从磁盘读取，有些缓存是从内存读取，二者的区别是：从内存读取的缓存更快

- 所有带 `304` 的资源都是 `协商缓存`，所有标注（从内存中读取/从磁盘中读取）的资源都是 `强缓存`
