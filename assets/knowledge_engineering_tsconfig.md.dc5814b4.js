import{_ as s,c as n,o as a,b as o}from"./app.4c329b38.js";const u=JSON.parse('{"title":"tsconfig.json 配置一览","description":"","frontmatter":{"title":"tsconfig.json 配置一览"},"headers":[{"level":2,"title":"tsconfig.json 配置项","slug":"tsconfig-json-配置项","link":"#tsconfig-json-配置项","children":[]},{"level":2,"title":"compilerOptions","slug":"compileroptions","link":"#compileroptions","children":[]},{"level":2,"title":"","slug":"","link":"#","children":[]}],"relativePath":"knowledge/engineering/tsconfig.md"}'),l={name:"knowledge/engineering/tsconfig.md"},p=o(`<p>如果一个目录下存在一个 <code>tsconfig.json</code> 文件，那么它意味着这个目录是 <code>TypeScript</code> 项目的根目录。 <code>tsconfig.json</code> 文件中指定了用来编译这个项目的根文件和编译选项</p><blockquote><p><a href="https://www.typescriptlang.org/tsconfig" target="_blank" rel="noreferrer">官方链接 🔗 English</a><br> <a href="https://www.tslang.cn/docs/handbook/compiler-options.html" target="_blank" rel="noreferrer">中文链接 🔗 (不全)</a></p></blockquote><h2 id="tsconfig-json-配置项" tabindex="-1"><code>tsconfig.json</code> 配置项 <a class="header-anchor" href="#tsconfig-json-配置项" aria-hidden="true">#</a></h2><ul><li><strong><code>extends</code></strong>: [<code>string</code>] 包含指向另一个要继承文件的路径</li><li><strong><code>compilerOptions</code></strong>: [<code>json</code>] 编译选项</li><li><strong><code>files</code></strong>: [ <code>string[]</code> ] 指定 <strong>需要</strong> 编译的文件，默认目录下的所有 <code>.ts</code>, <code>.d.ts</code>, <code>.tsx</code> 文件，指定的文件总会包含在内，<strong>不会</strong> 被 <code>exclude</code> 过滤</li><li><strong><code>include</code></strong>: [ <code>string[]</code> ] 同 <code>files</code>，但配置的文件 <strong>可以</strong> 使用 <code>exclude</code> 属性过滤</li><li><strong><code>exclude</code></strong>: [ <code>string[]</code> ] 指定 <strong>不需要</strong> 编译的文件</li></ul><h2 id="compileroptions" tabindex="-1"><code>compilerOptions</code> <a class="header-anchor" href="#compileroptions" aria-hidden="true">#</a></h2><p>下面仅列出常用的配置项：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      解析非相对模块名的基准目录</span></span>
<span class="line"><span style="color:#676E95;">      默认相对路径相对于 \`tsconfig.json\` 文件路径查找</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">baseUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 编译输出路径 */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">outDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 生成相应的 \`.map\` 文件，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">sourceMap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      指定类型文件查找的目录仅为 \`./typings\`，不包含</span></span>
<span class="line"><span style="color:#676E95;">      ./node_modules/@types,</span></span>
<span class="line"><span style="color:#676E95;">      ../node_modules/@types,</span></span>
<span class="line"><span style="color:#676E95;">      ../../node_modules/@types,</span></span>
<span class="line"><span style="color:#676E95;">      ...</span></span>
<span class="line"><span style="color:#676E95;">      目录下的包</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">typeRoots</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./typings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      指定要包含的类型声明文件名列表，默认 ./node_modules/@types 目录</span></span>
<span class="line"><span style="color:#676E95;">      若如下例所示，那么将不包含 ./node_modules/@types 目录下其他的包</span></span>
<span class="line"><span style="color:#676E95;">      置为 \`[]\` 则表示禁用所有类型文件</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">express</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">lodash</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 指定编译结果的 ECMAScript 目标版本，默认 &quot;ES3&quot; */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">target</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esnext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      指定生成哪个模块系统代码</span></span>
<span class="line"><span style="color:#676E95;">      默认：target === ES6 ? &quot;es6&quot; : &quot;commonjs&quot;</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">module</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esnext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      决定如何处理模块</span></span>
<span class="line"><span style="color:#676E95;">      默认：module === &quot;AMD&quot; or &quot;System&quot; or &quot;ES6&quot; ? &quot;Classic&quot; : &quot;Node&quot;</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">moduleResolution</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">node</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 允许编译javascript文件，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">allowJs</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      启用所有严格类型检查选项，默认 false</span></span>
<span class="line"><span style="color:#676E95;">      置为 true，相当于：</span></span>
<span class="line"><span style="color:#676E95;">      noImplicitAny: true </span></span>
<span class="line"><span style="color:#676E95;">      noImplicitThis: true</span></span>
<span class="line"><span style="color:#676E95;">      alwaysStrict: true</span></span>
<span class="line"><span style="color:#676E95;">      strictNullChecks: true</span></span>
<span class="line"><span style="color:#676E95;">      strictFunctionTypes: true</span></span>
<span class="line"><span style="color:#676E95;">      strictPropertyInitialization: true</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">strict</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 若有未使用的 局部变量 则抛错，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">noUnusedLocals</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 若有未使用的 参数 则抛错，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">noUnusedParameters</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 启用实验性的ES装饰器，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">experimentalDecorators</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 允许解析 \`.json\` 的文件，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">resolveJsonModule</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      ES Module 语法能在 node 环境被识别</span></span>
<span class="line"><span style="color:#676E95;">      import { readFileSync } from &#39;fs&#39;</span></span>
<span class="line"><span style="color:#676E95;">      表现上等同于</span></span>
<span class="line"><span style="color:#676E95;">      const { readFileSync } = require(&#39;fs&#39;)</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">esModuleInterop</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 编译结果移除注释，默认 false */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">removeComments</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      在 .tsx 文件里支持 JSX： &quot;React&quot; 或 &quot;Preserve&quot;</span></span>
<span class="line"><span style="color:#676E95;">      默认 &quot;Preserve&quot;</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">jsx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preserve</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      指定生成目标为 react JSX 时，使用的 JSX 工厂函数</span></span>
<span class="line"><span style="color:#676E95;">      默认 &quot;React.createElement&quot;</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">jsxFactory</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">React.createElement</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/*</span></span>
<span class="line"><span style="color:#676E95;">      编译过程中需要引入的库文件的列表</span></span>
<span class="line"><span style="color:#676E95;">      ES5 ~ ESNext, DOM, DOM.Iterable ...</span></span>
<span class="line"><span style="color:#676E95;">    */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">esnext</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dom</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">/* 仅用来控制输出的目录结构: outDir */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">rootDir</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2>`,8),e=[p];function t(c,r,D,y,F,i){return a(),n("div",null,e)}const A=s(l,[["render",t]]);export{u as __pageData,A as default};
