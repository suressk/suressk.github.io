import{_ as s,o,c as a,b as e}from"./app.85987840.js";const y=JSON.parse('{"title":"webpack 热更新","description":"","frontmatter":{"title":"webpack 热更新"},"headers":[{"level":2,"title":"HMR","slug":"hmr","link":"#hmr","children":[]}],"relativePath":"knowledge/engineering/hotUpdate.md"}'),n={name:"knowledge/engineering/hotUpdate.md"},p=e(`<p>刷新我们一般分为两种：</p><ul><li>一种是页面刷新，不保留页面状态，就是简单粗暴，直接 <code>window.location.reload()</code></li><li>另一种是基于 <code>WDS (webpack-dev-server)</code> 的模块热替换，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态（比如复选框的选中状态、输入框的输入等）</li></ul><h2 id="hmr" tabindex="-1">HMR <a class="header-anchor" href="#hmr" aria-hidden="true">#</a></h2><p><code>HMR</code> 全称 <code>Hot Module Replacement</code>，直译为 <code>模块热替换</code>（或许 <code>热更新</code> 更好听一点），它指在应用程序运行过程中，替换、添加、删除模块，而无需重新刷新整个应用</p><p>通过此功能，实现只将修改的模块实时替换至应用中，不必完全刷新整个应用导致整个页面的状态信息丢失（从 <code>webpack4</code> 开始，<code>HMR</code> 功能是默认开启的）</p><p>我们启动一个基于 <code>webpack</code> 构建的项目后，修改某个文件保存后，控制台会出现 <code>Compiling...</code> 字样，然后生成新的 <code>hash</code> 文件。每次重新编译后，浏览器会发出两个新的请求，也就是本次编译得到的两个新文件（<code>[hash].hot-update.json</code> 和 <code>[hash].hot-update.js</code>），从浏览器控制台看 <code>json</code> 文件大概长这样：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">c</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">/* h 代表本次编译新生成的 Hash 值 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">h</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ajjhoaisfghagha29862njbkjb</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">/* 乱写的 hash 值 */</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><code>hash</code> 值代表每次编译结果的标识，同时也会作为编译文件的文件名作为文件的标识，而且会作为两次编译结果的比对标识</p>`,8),l=[p];function c(t,r,d,i,D,h){return o(),a("div",null,l)}const C=s(n,[["render",c]]);export{y as __pageData,C as default};
