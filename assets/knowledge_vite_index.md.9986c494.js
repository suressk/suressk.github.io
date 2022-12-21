import{_ as e,c as s,o,b as l}from"./app.4c329b38.js";const y=JSON.parse('{"title":"Vite 源码解读","description":"","frontmatter":{"title":"Vite 源码解读"},"headers":[{"level":2,"title":"目录结构","slug":"目录结构","link":"#目录结构","children":[]},{"level":2,"title":"原理梗概","slug":"原理梗概","link":"#原理梗概","children":[]},{"level":2,"title":"sure-vite","slug":"sure-vite","link":"#sure-vite","children":[]},{"level":2,"title":"Bundle vs BundleLess","slug":"bundle-vs-bundleless","link":"#bundle-vs-bundleless","children":[]}],"relativePath":"knowledge/vite/index.md"}'),c={name:"knowledge/vite/index.md"},n=l(`<blockquote><p><code>版本： 3.0.0-alpha.1</code> (当然，部分内容是基于 <code>2.7.0-bate.9</code> 版看的，可能有些许更新，但差别应该不大)</p></blockquote><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-hidden="true">#</a></h2><blockquote><p><code>vite</code><br> | + <code>bin</code><br> | — | — openChrome.applescript<br> | — | — vite.js<br> | + <code>scripts</code><br> | — | - patchTypes.ts<br> | — | - tsconfig.json<br> | + <code>src</code><br> | — | + <code>client</code><br> | — | — | — client.ts<br> | — | — | — env.ts<br> | — | — | — overlay.ts<br> | — | — | — tsconfig.json<br> | — | + <code>node</code><br> | — | — | + <code>__tests__</code><br> | — | — | + <code>optimizer</code><br> | — | — | + <code>plugins</code><br> | — | — | + <code>server</code><br> | — | — | + <code>ssr</code><br> | — | — | — build.ts<br> | — | — | — certificate.ts<br> | — | — | — cli.ts<br> | — | — | — config.ts<br> | — | — | — constants.ts<br> | — | — | — http.ts<br> | — | — | — index.ts<br> | — | — | — logger.ts<br> | — | — | — packages.ts<br> | — | — | — plugin.ts<br> | — | — | — preview.ts<br> | — | — | — publicUtils.ts<br> | — | — | — tsconfig.json<br> | — | — | — utils.ts<br> | + <code>types</code><br> | + ... // other files<br></p></blockquote><h2 id="原理梗概" tabindex="-1">原理梗概 <a class="header-anchor" href="#原理梗概" aria-hidden="true">#</a></h2><blockquote><ul><li>基于浏览器原生 <code>ES Module</code> 的开发服务器，利用浏览器去解析 <code>imports</code><br></li><li>对于第三方依赖包（不常变动的）使用 <code>esbuild</code> 进行编译打包后放置于 <code>node_modules/.vite</code> 目录下进行缓存<br></li><li>在服务器端按需编译返回，基本跳过了打包这个概念，服务器随起随用<br></li><li>同时搞定热更新，而且热更新的速度不会随着模块增多而变慢<br></li><li>针对生产环境可以把同一份代码用 <code>rollup</code> 打包成适应不同环境使用的代码</li></ul></blockquote><p>我们可以注意到两个点：</p><ol><li><p><code>vite</code> 对应的场景是开发模式，原理是拦截浏览器发出的请求并做相应的处理</p></li><li><p><code>vite</code> 在开发模式下不需要打包（这里不包含第三方模块），只需要编译浏览器发出的 <code>HTTP</code> 请求对应的文件即可，所以热更新速度很快</p></li></ol><p>vite 的实现离不开现代浏览器原生 <code>ES</code> 模块化的支持，当声明一个 <code>&lt;script&gt;</code> 标签，<code>type</code> 属性置为 <code>module</code> 时，浏览器就会发起一个 <code>HTTP</code> 请求来获取，解析内容中的一个 <code>import</code> 语句也同样会发起一个请求来获取。<code>vite</code> 就劫持了这些请求，并在开启的 <code>dev-server</code> 中进行处理再返回给浏览器</p><p>由于浏览器只会对需要用到的模块发起请求，所以就不需要像 <code>webpack</code> 一样将所有的内容进行打包 📦 再一起返回，而是只编译浏览器发起 <code>HTTP</code> 请求的模块，这就相当于是 <code>“按需加载”</code> 了</p><h2 id="sure-vite" tabindex="-1">sure-vite <a class="header-anchor" href="#sure-vite" aria-hidden="true">#</a></h2><p>这里我简单实现了一个非常粗糙的简易版 vite ➡️ <a href="https://github.com/suressk/sure-vite" target="_blank" rel="noreferrer">sure-vite</a>，可以用来大致理解一下 vite 的工作逻辑是什么（参照 <code>vite 1.x</code>）：</p><ul><li><p>基于 Koa 框架启动一个服务，并通过访问静态路径加载 html 入口文件</p></li><li><p>编写一系列中间件拦截相应的请求或文件进行处理（洋葱模型）</p></li><li><p>我们写的 <code>.vue</code> / <code>.tsx</code> 等文件，浏览器是不认识的，我们就需要进行对它们编译，转换成浏览器能够识别的 <code>js 文件</code></p></li><li><p>我们导入第三方模块时，是直接 <code>import x from &#39;x&#39;</code> 写它的模块名，而由于 ES Module / 浏览器路径识别的规则，浏览器是无法识别 <code>非</code> <strong><code>./</code></strong>、<strong><code>../</code></strong> 或 <strong><code>/</code></strong> 开头的路径的，那么我们就需要重写它的引用路径</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 比如这样： /@modules/ 为任意你想命名的文件夹（当然你得去创建）</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* 浏览器无法识别的路径 */</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@modules/react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* 浏览器可以识别的路径 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// ------------=+=------------</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* 浏览器无法识别的路径 */</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/@modules/vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* 浏览器可以识别的路径 */</span></span>
<span class="line"></span></code></pre></div></li><li><p>上面那步我们重写为 <code>/@modules/</code> 路径（本身是不存在 <code>@modules</code> 目录的），但要么去创建这个文件夹（否则请求就会由于找不到路径而返回 404），将打包后的结果放到这个目录下；或者拦截这个路径开头的请求，将它重定向到 <code>node_modules</code> 目录下的真实模块路径（我这里是方案二：重定向）</p></li><li><p>然后，再向 html 文件中插入环境变量、添加热更新等额外功能</p></li></ul><p>以上，便是最简单浅显的功能描述了</p><h2 id="bundle-vs-bundleless" tabindex="-1">Bundle vs BundleLess <a class="header-anchor" href="#bundle-vs-bundleless" aria-hidden="true">#</a></h2><p>从下面两张图片，我们可以清晰地看到二者的区别（代表：webpack vs vite）：</p><div style="display:flex;"><img src="https://tse1-mm.cn.bing.net/th/id/R-C.1a8c61df3258cfc5f819a7436d67b685?rik=xFz78GT4rZuHog&amp;riu=http%3a%2f%2fcdn.xuedingmiao.com%2fwebpack-dev.png&amp;ehk=08uWnivUiwe69BLT3IcWE7IhIgJk18h3xhc19a91%2bSA%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0" width="50%" style="box-sizing:border-box;padding-right:2px;"><img src="https://tse1-mm.cn.bing.net/th/id/R-C.e03bec7f8db104a75d714b3493ace4ae?rik=%2fl7fCXrZ3VPlHg&amp;riu=http%3a%2f%2fcdn.xuedingmiao.com%2fvite-esm.png&amp;ehk=rLslDZBKO%2bVgaKEg%2fZRdAygMTs2s697ceNTcgfRT0IQ%3d&amp;risl=&amp;pid=ImgRaw&amp;r=0" width="50%" style="box-sizing:border-box;padding-left:2px;"></div><ul><li><p><code>Bundle Server</code> 的思想就是不管有没有用到这块儿的代码，都会在启动 <code>dev-server</code> 之前进行一次性打包，形成一个 <code>bundle</code> 后再来启动开发服务器（所以，当我们的一个项目比较大的时候，往往启动它可能就得花费几分钟的时间），另外我们在改动某个模块儿的代码后，热更新也是基于打包后的内容，所以相关依赖会再走一遍打包流程，然后形成新的 <code>bundle</code> 交给 <code>dev-server</code></p></li><li><p><code>BundleLess Server</code> 的思想就是，你一个文件里的 <code>import</code> 更新，那么它只会去重新获取你这个更新的模块儿，其他没有更新的模块儿就会从之前请求的缓存中直接获取，几乎是毫秒级更新页面</p></li><li><p><code>BundleLess</code> or <code>UnBundle</code> ？那是因为构建工具（以 <code>vite</code> 为例）还是做了打包处理的，我们知道一个 <code>import</code> 就会发起一个 <code>http</code> 请求来获取，那当我们使用第三方包的时候，它里面又大量引用其他第三方包（以 <code>lodash</code> 为例就有几百上千个 api 吧），那加载如此多的模块就会让浏览器资源造成极大的浪费，所以针对第三方不怎么变动的模块及其依赖项就需要进行打包 📦 处理成一个模块，还能结合浏览器的缓存机制将打包后不太变动的包进行缓存，等到依赖变动重新打包才更新缓存文件，从而降低浏览器的压力</p></li></ul>`,17),a=[n];function p(t,d,r,i,b,u){return o(),s("div",null,a)}const h=e(c,[["render",p]]);export{y as __pageData,h as default};
