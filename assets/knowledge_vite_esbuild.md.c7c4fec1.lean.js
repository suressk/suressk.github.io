import{_ as n,c as s,o as a,b as t}from"./app.8ece6300.js";const f='{"title":"\u4F9D\u8D56\u9884\u6784\u5EFA\u529F\u80FD\u5206\u6790","description":"","frontmatter":{"title":"\u4F9D\u8D56\u9884\u6784\u5EFA\u529F\u80FD\u5206\u6790"},"relativePath":"knowledge/vite/esbuild.md","lastUpdated":1652557867988}',p={},o=t(`__VP_STATIC_START__<h4 id="\u4E3B\u8981\u6D41\u7A0B" tabindex="-1">\u4E3B\u8981\u6D41\u7A0B <a class="header-anchor" href="#\u4E3B\u8981\u6D41\u7A0B" aria-hidden="true">#</a></h4><ol><li><p>\u5F00\u542F dev-server \u4E4B\u524D\u8FDB\u884C <a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html" target="_blank" rel="noopener noreferrer">\u4F9D\u8D56\u9884\u6784\u5EFA</a></p></li><li><p>\u8BFB\u53D6 <code>package-lock.json</code>\uFF0C<code>yarn.lock</code>\uFF0C<code>pnpm-lock.yaml</code> \u6587\u4EF6\uFF0C\u751F\u6210 <code>depHash</code></p></li><li><p>\u8BFB\u53D6\u4E0A\u6B21 <a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache" target="_blank" rel="noopener noreferrer">\u6587\u4EF6\u7F13\u5B58\u7684\u9884\u6784\u5EFA\u6587\u4EF6</a> \u4FE1\u606F\uFF0C\u82E5\u6709\uFF0C\u5219\u5C06\u83B7\u53D6\u5230\u7684 hash \u548C\u4E0A\u4E00\u6B65\u7684 depHash \u8FDB\u884C\u6BD4\u8F83\uFF0C\u4E00\u6837\u5219\u8FD4\u56DE\u7F13\u5B58\u7684\u5185\u5BB9\uFF0C\u5426\u5219\u91CD\u65B0\u6784\u5EFA\u3002\u6CA1\u6709\u7F13\u5B58\u6216\u8BBE\u7F6E\u4E86 <a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache" target="_blank" rel="noopener noreferrer">--force \u53C2\u6570</a>\uFF0C\u5219\u91CD\u65B0\u6784\u5EFA</p></li><li><p>\u5229\u7528 <code>esbuild</code>\uFF0C\u5BF9\u9879\u76EE\u6587\u4EF6\u8FDB\u884C\u626B\u63CF\uFF0C\u83B7\u53D6\u9879\u76EE\u4F9D\u8D56\uFF1B\u5C06 <a href="https://cn.vitejs.dev/guide/features.html#npm-dependency-resolving-and-pre-bundling" target="_blank" rel="noopener noreferrer">\u9879\u76EE\u4F9D\u8D56\u7684\u6A21\u5757\u5316\u65B9\u5F0F\u8F6C\u6362\u4E3A ESM \u683C\u5F0F</a></p></li><li><p>\u5C06\u8F6C\u6362\u540E\u7684\u6A21\u5757\u5B58\u5165 <a href="https://cn.vitejs.dev/guide/dep-pre-bundling.html#file-system-cache" target="_blank" rel="noopener noreferrer">cacheDir\uFF08vite2.x \u9ED8\u8BA4\u4E3A node_modules/.vite\uFF09</a></p></li><li><p>\u6D4F\u89C8\u5668\u8BF7\u6C42\u8D44\u6E90\u65F6\uFF0C\u5224\u65AD\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u662F \u4F9D\u8D56\uFF08\u5373 bare import\uFF09\uFF0C\u82E5\u662F\u5219\u66FF\u6362\u4E3A\u7F13\u5B58\u6587\u4EF6\u8DEF\u5F84\uFF0C\u52A0\u8F7D\u5BF9\u5E94\u7684\u6587\u4EF6</p></li><li><p>\u542F\u52A8 dev-server \u540E\uFF0C\u6BCF\u5F53\u4F9D\u8D56\u53D8\u5316\uFF0C\u5219\u91CD\u65B0\u8FDB\u884C\u4F9D\u8D56\u6784\u5EFA\uFF0C\u6267\u884C 2\uFF0C3\uFF0C4\uFF0C5 \u8FC7\u7A0B</p></li></ol><h4 id="\u5206\u6790" tabindex="-1">\u5206\u6790 <a class="header-anchor" href="#\u5206\u6790" aria-hidden="true">#</a></h4><ol><li>\u6784\u5EFA\u5165\u53E3</li></ol><p>\u82E5\u4E0D\u662F\u4E2D\u95F4\u4EF6\u6A21\u5F0F\uFF0C\u5219\u5728 dev-server \u542F\u52A8\u524D\uFF0C\u9996\u5148\u6267\u884C <code>plugin.buildStart</code> \u94A9\u5B50\u51FD\u6570\uFF0C\u518D\u6267\u884C\u6784\u5EFA\u51FD\u6570 \u82E5\u662F\u4E2D\u95F4\u4EF6\u6A21\u5F0F\uFF0C\u5219\u76F4\u63A5\u6267\u884C\u6784\u5EFA\u51FD\u6570\uFF0C\u6B64\u5904\u7684 <code>container</code> \u662F\u4E00\u4E2A plugin \u7684\u96C6\u5408\u4F53\uFF0C\u6309\u8FD0\u884C\u987A\u5E8F\u4F9D\u6B21\u6267\u884C\u76F8\u5173\u94A9\u5B50\u51FD\u6570</p><div class="language-ts"><pre><code><span class="token comment">// src/node/server/index.ts</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... other code</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>middlewareMode <span class="token operator">&amp;&amp;</span> httpServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> isOptimized <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token comment">// overwrite listen to run optimizer before server start</span>
    <span class="token keyword">const</span> listen <span class="token operator">=</span> httpServer<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>
    httpServer<span class="token punctuation">.</span>listen <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span>port<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isOptimized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
          <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
          isOptimized <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          httpServer<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
          <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">any</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">buildStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">await</span> <span class="token function">runOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> server <span class="token comment">// \u8FD4\u56DE\u521B\u5EFA\u7684 server \u5BF9\u8C61</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li><p><code>runOptimize</code> \u51FD\u6570</p><ul><li><code>_isRunningOptimizer</code> \u6DFB\u52A0\u6784\u5EFA\u72B6\u6001</li><li><code>optimizeDeps</code> \u51FD\u6570\u8FD4\u56DE\u6784\u5EFA\u8FC7\u7A0B 3\uFF0C4\uFF0C5 \u6B65\u4E2D\u8FD4\u56DE\u7684\u9884\u6784\u5EFA\u4FE1\u606F\uFF0C</li><li><code>_registerMissingImport</code> \u8FD4\u56DE\u4E00\u4E2A\u9884\u6784\u5EFA\u51FD\u6570\u53EF\u4EE5\u968F\u65F6\u8FDB\u884C\u9884\u6784\u5EFA\uFF0C\u5F53\u8FD0\u884C\u7684\u670D\u52A1\u4E2D\u6709\u65B0\u7684\u4F9D\u8D56\u5F15\u5165\u65F6\u91CD\u65B0\u6784\u5EFA\uFF0C\u540C\u65F6 <code>_isRunningOptimizer</code> \u72B6\u6001\u53EF\u4EE5\u6709\u6548\u907F\u514D\u6784\u5EFA\u65F6\u7684\u6570\u636E\u8BF7\u6C42</li></ul><div class="language-ts"><pre><code><span class="token comment">// src/node/server/index.ts</span>
<span class="token keyword">const</span> <span class="token function-variable function">runOptimize</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>cacheDir<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    server<span class="token punctuation">.</span>_isRunningOptimizer <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      server<span class="token punctuation">.</span>_optimizeDepsMetadata <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">optimizeDeps</span><span class="token punctuation">(</span>
        config<span class="token punctuation">,</span>
        config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>force <span class="token operator">||</span> server<span class="token punctuation">.</span>_forceOptimizeOnRestart<span class="token punctuation">,</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
      server<span class="token punctuation">.</span>_isRunningOptimizer <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    server<span class="token punctuation">.</span>_registerMissingImport <span class="token operator">=</span> <span class="token function">createMissingImporterRegisterFn</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><code>optimizeDeps</code> \u51FD\u6570</p><ul><li>\u83B7\u53D6\u4E0A\u6B21\u9884\u6784\u5EFA\u7684\u4FE1\u606F\uFF0C\u5BF9\u6BD4\u6B64\u6B21\u6784\u5EFA\u7684\u4FE1\u606F\uFF0C\u4ECE\u800C\u51B3\u5B9A\u662F\u5426\u9700\u8981\u91CD\u65B0\u6784\u5EFA</li><li>\u626B\u63CF\u6E90\u7801\u6216\u6839\u636E\u53C2\u6570\uFF0C\u83B7\u53D6\u4F9D\u8D56</li><li>\u5229\u7528 <code>es-module-lexer</code> \u6241\u5E73\u5316\u5D4C\u5957\u7684\u6E90\u7801\u4F9D\u8D56</li><li>\u89E3\u6790 <a href="https://cn.vitejs.dev/config/#dep-optimization-options" target="_blank" rel="noopener noreferrer">\u5F00\u53D1\u8005\u4F9D\u8D56\u4F18\u5316\u914D\u7F6E</a>\uFF0C\u8C03\u7528 <code>esbuild</code>\uFF0C\u5E76\u5B58\u5165 <code>cacheDir</code></li><li>\u5B58\u50A8\u6784\u5EFA\u7684\u6587\u4EF6\u5230 <code>cacheDir</code></li></ul><div class="language-ts"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">optimizeDeps</span><span class="token punctuation">(</span>
  config<span class="token operator">:</span> ResolvedConfig<span class="token punctuation">,</span>
  force <span class="token operator">=</span> config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>force<span class="token punctuation">,</span>
  asCommand <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">/* missing imports encountered after server has started */</span>
  newDeps<span class="token operator">?</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
  ssr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>DepOptimizationMetadata <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  config <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">,</span>
    command<span class="token operator">:</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u6784\u5EFA\u6A21\u5757\u6620\u5C04\u5173\u7CFB json \u6570\u636E\uFF0C\u5305\u542B\u6BCF\u6B21\u6784\u5EFA\u7684 hash \u503C\u4E0E browserHash</span>
  <span class="token comment">/** \u4F8B\u5982\uFF1A
   * &quot;optimized&quot;: {
   *   &quot;vue&quot;: {
   *      &quot;file&quot;: &quot;[__dirname]/node_modules/.vite/vue.js&quot;, // \u6253\u5305\u540E\u7684 vue \u6A21\u5757
   *      &quot;src&quot;: &quot;[__dirname]/node_modules/vue/dist/vue.runtime.esm-bundler.js&quot;, // \u6E90\u6587\u4EF6
   *      &quot;needsInterop&quot;: true
   *   }
   * }
   */</span>
  <span class="token keyword">const</span> dataPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token string">&#39;_metadata.json&#39;</span><span class="token punctuation">)</span>
  <span class="token comment">// \u751F\u6210\u6B64\u6B21\u6784\u5EFA hash</span>
  <span class="token keyword">const</span> mainHash <span class="token operator">=</span> <span class="token function">getDepHash</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
  <span class="token comment">// .vite/_metadata.json \u6587\u4EF6\u5185\u5BB9</span>
  <span class="token keyword">const</span> data<span class="token operator">:</span> DepOptimizationMetadata <span class="token operator">=</span> <span class="token punctuation">{</span>
    hash<span class="token operator">:</span> mainHash<span class="token punctuation">,</span>
    browserHash<span class="token operator">:</span> mainHash<span class="token punctuation">,</span>
    optimized<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5F00\u53D1\u8005\u7684 force \u53C2\u6570\u51B3\u5B9A\u662F\u5426\u6BCF\u6B21\u90FD\u91CD\u65B0\u6784\u5EFA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>force<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> prevData<span class="token operator">:</span> DepOptimizationMetadata <span class="token operator">|</span> <span class="token keyword">undefined</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u52A0\u8F7D\u4E0A\u6B21\u6784\u5EFA\u7684\u4FE1\u606F</span>
      prevData <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// hash is consistent, no need to re-bundle</span>
    <span class="token comment">// \u5BF9\u6BD4\u4E0A\u6B21\u6784\u5EFA\u7684 hash\uFF0C\u76F8\u540C\u5219\u76F4\u63A5\u8FD4\u56DE\u4E0A\u6B21\u6784\u5EFA\u7684\u7ED3\u679C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>prevData <span class="token operator">&amp;&amp;</span> prevData<span class="token punctuation">.</span>hash <span class="token operator">===</span> data<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hash is consistent. Skipping. Use --force to override.&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> prevData
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5224\u65AD\u7F13\u5B58\u76EE\u5F55\uFF08node_modules/.vite\uFF09\u662F\u5426\u5B58\u5728</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">existsSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B58\u5728\u5219\u6E05\u7A7A\u7F13\u5B58\u76EE\u5F55</span>
    <span class="token function">emptyDir</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5426\u5219\u521B\u5EFA\u7F13\u5B58\u76EE\u5F55</span>
    fs<span class="token punctuation">.</span><span class="token function">mkdirSync</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token punctuation">{</span> recursive<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// newDeps \u53C2\u6570\u662F\u5728\u670D\u52A1\u542F\u52A8\u540E\u52A0\u5165\u4F9D\u8D56\u65F6\u4F20\u5165\u7684\u4F9D\u8D56\u4FE1\u606F</span>
  <span class="token keyword">let</span> deps<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> missing<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>newDeps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u501F\u52A9 esbuild \u626B\u63CF\u6E90\u7801\uFF0C\u83B7\u53D6\u4F9D\u8D56</span>
    <span class="token punctuation">;</span><span class="token punctuation">(</span><span class="token punctuation">{</span> deps<span class="token punctuation">,</span> missing <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">scanImports</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    deps <span class="token operator">=</span> newDeps
    missing <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// ...</span>

  <span class="token keyword">const</span> include <span class="token operator">=</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>include
  <span class="token keyword">if</span> <span class="token punctuation">(</span>include<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u52A0\u5165\u5F00\u53D1\u8005\u6307\u5B9A\u7684 include</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u52A0\u5165\u5F00\u53D1\u8005\u6307\u5B9A\u7684 esbuildOptions</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> plugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>esbuildOptions <span class="token punctuation">}</span> <span class="token operator">=</span>
    config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>esbuildOptions <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// use in CommonJS</span>
  <span class="token keyword">await</span> init <span class="token comment">// es-module-lexer exports.init</span>

  <span class="token comment">// \u6241\u5E73\u5316\u4F9D\u8D56</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> id <span class="token keyword">in</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flatIdDeps<span class="token punctuation">[</span><span class="token function">flattenId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    <span class="token comment">// ...</span>
    <span class="token comment">// \u5141\u8BB8\u5BF9 .js \u6587\u4EF6\u4F7F\u7528 JSX parser \u8FDB\u884C\u89E3\u6790</span>
    esbuildOptions<span class="token punctuation">.</span>loader <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token string">&#39;.js&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jsx&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>esbuildOptions<span class="token punctuation">.</span>loader<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u8C03\u7528 esbuild.build \u8FDB\u884C\u6253\u5305</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    absWorkingDir<span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    entryPoints<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>flatIdDeps<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u5165\u53E3</span>
    bundle<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    format<span class="token operator">:</span> <span class="token string">&#39;esm&#39;</span><span class="token punctuation">,</span> <span class="token comment">// esmodule \u6A21\u5F0F</span>
    target<span class="token operator">:</span> config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>target <span class="token operator">||</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
    external<span class="token operator">:</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>exclude<span class="token punctuation">,</span> <span class="token comment">// \u5254\u9664 exclude \u914D\u7F6E\u7684\u6587\u4EF6</span>
    logLevel<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    splitting<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    sourcemap<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    outdir<span class="token operator">:</span> cacheDir<span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u76EE\u5F55\uFF08node_module/.vite\uFF09</span>
    ignoreAnnotations<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5FFD\u7565\u6CE8\u89E3</span>
    metafile<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u751F\u6210\u6620\u5C04\u5173\u7CFB json</span>
    define<span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token operator">...</span>plugins<span class="token punctuation">,</span>
      <span class="token function">esbuildDepPlugin</span><span class="token punctuation">(</span>flatIdDeps<span class="token punctuation">,</span> flatIdToExports<span class="token punctuation">,</span> config<span class="token punctuation">,</span> ssr<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>esbuildOptions<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u91CD\u65B0\u5199\u5165 _metadata.json \u6587\u4EF6</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> id <span class="token keyword">of</span> deps<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> entry <span class="token operator">=</span> deps<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
    data<span class="token punctuation">.</span>optimized<span class="token punctuation">[</span>id<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token comment">/* normalizePath \u4E3A path.posix.normalize \u683C\u5F0F\u5316\u8DEF\u5F84 */</span>
      file<span class="token operator">:</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>cacheDir<span class="token punctuation">,</span> <span class="token function">flattenId</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      src<span class="token operator">:</span> entry<span class="token punctuation">,</span>
      needsInterop<span class="token operator">:</span> <span class="token function">needsInterop</span><span class="token punctuation">(</span>
        id<span class="token punctuation">,</span>
        idToExports<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">,</span>
        meta<span class="token punctuation">.</span>outputs<span class="token punctuation">,</span>
        cacheDirOutputPath<span class="token punctuation">,</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token function">writeFile</span><span class="token punctuation">(</span>dataPath<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> data
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u83B7\u53D6\u4F9D\u8D56\u65F6\uFF0C\u66FF\u6362\u8FD4\u56DE\u6253\u5305\u7F13\u5B58\u7684\u4F9D\u8D56\u5305\u6587\u4EF6</p><p>\u8FC7\u7A0B\uFF1A\u8BBF\u95EE\u6709\u5F15\u5165\u4F9D\u8D56\u5305\u7684\u6587\u4EF6\u65F6\uFF0C\u5339\u914D\u4F9D\u8D56\u5305\u540D\u79F0\uFF0C\u8FD4\u56DE cacheDir \u5185\u7684\u6587\u4EF6</p><ul><li>\u89E3\u6790 config \u65F6\u5728 plugins \u4E2D\u5F15\u5165 preAliasPlugin \u63D2\u4EF6</li><li>\u5339\u914D\u4F9D\u8D56\u5305\u540D\u79F0\uFF0C\u8FD4\u56DE\u6DFB\u52A0\u7F13\u5B58\u8DEF\u5F84</li></ul><p><code>plugin.resolveId</code> \u7684\u4F5C\u7528\u662F\uFF1A\u5982\u679C\u8FD4\u56DE\u4E00\u4E2A\u503C\uFF0C\u5219\u4F1A\u66FF\u6362\u6E90\u7801\u4E2D\u4F9D\u8D56\uFF0C\u5426\u5219\u5C06\u540D\u5B57\u4F20\u9012\u7ED9\u4E0B\u4E00\u4E2A\u63D2\u4EF6\u5904\u7406\uFF0C\u5F53\u5339\u914D\u5230\u4F9D\u8D56\u5305\u540D\u79F0\u540E\uFF0C\u901A\u8FC7 <code>tryOptimizedResolve</code> \u51FD\u6570\u4FEE\u6539\u4F9D\u8D56\u7684\u8DEF\u5F84 \u901A\u8FC7\u6D4F\u89C8\u5668\u7684 devtool\uFF0C\u53EF\u4EE5\u770B\u5230\u6587\u4EF6\u91CC\u7684 vue \u8DEF\u5F84\u53D8\u66F4\u4E3A\u4E86 <code>node_modules/.vite/vue.js?v=3sf954g7</code></p><div class="language-ts"><pre><code><span class="token keyword">const</span> bareImportRE <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\w@](?!.*:\\/\\/)</span><span class="token regex-delimiter">/</span></span>
<span class="token keyword">function</span> <span class="token function">preAliasPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Plugin <span class="token punctuation">{</span>
  <span class="token keyword">let</span> server<span class="token operator">:</span> ViteDevServer
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;vite:pre-alias&#39;</span><span class="token punctuation">,</span>
    <span class="token function">configureServer</span><span class="token punctuation">(</span>_server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      server <span class="token operator">=</span> _server
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resolveId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> importer<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token operator">?.</span>ssr <span class="token operator">&amp;&amp;</span> bareImportRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">tryOptimizedResolve</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> server<span class="token punctuation">,</span> importer<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">tryOptimizedResolve</span><span class="token punctuation">(</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> ViteDevServer<span class="token punctuation">,</span>
  importer<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6784\u5EFA\u7ED3\u679C\u7F13\u5B58\u76EE\u5F55</span>
  <span class="token keyword">const</span> cacheDir <span class="token operator">=</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>cacheDir
  <span class="token comment">// \u9884\u6784\u5EFA\u751F\u6210\u7684\u6784\u5EFA\u4FE1\u606F</span>
  <span class="token keyword">const</span> depData <span class="token operator">=</span> server<span class="token punctuation">.</span>_optimizeDepsMetadata

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>cacheDir <span class="token operator">||</span> <span class="token operator">!</span>depData<span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token keyword">const</span> <span class="token function-variable function">getOptimizedUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
    optimizedData<span class="token operator">:</span> <span class="token keyword">typeof</span> depData<span class="token punctuation">.</span>optimized<span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD4\u56DE\u6784\u5EFA\u7ED3\u679C\u7684\u4F9D\u8D56\u8DEF\u5F84</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>
      optimizedData<span class="token punctuation">.</span>file <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">?v=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>depData<span class="token punctuation">.</span>browserHash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>
        optimizedData<span class="token punctuation">.</span>needsInterop <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&amp;es-interop</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>
      <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u68C0\u67E5\u4F9D\u8D56\u5305\u662F\u5426\u88AB\u6784\u5EFA\u8FC7\uFF0C\u662F\u5219\u8FD4\u56DE\u6784\u5EFA\u7ED3\u679C\u8DEF\u5F84</span>
  <span class="token keyword">const</span> isOptimized <span class="token operator">=</span> depData<span class="token punctuation">.</span>optimized<span class="token punctuation">[</span>id<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isOptimized<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">getOptimizedUrl</span><span class="token punctuation">(</span>isOptimized<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>importer<span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">let</span> resolvedSrc<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>pkgPath<span class="token punctuation">,</span> optimizedData<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>depData<span class="token punctuation">.</span>optimized<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u904D\u5386 _metadata.json \u7684 optimized \u5185\u7684\u4F9D\u8D56\u5305\u6620\u5C04</span>
    <span class="token comment">// \u4F9D\u8D56\u5305\u540D\u4E0D\u5B58\u5728\u5219\u68C0\u6D4B _metadata.json \u5B58\u50A8\u7684\u4E0B\u4E00\u4E2A\u4F9D\u8D56\u5305</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pkgPath<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">continue</span>
    <span class="token comment">// \u5339\u914D\u4E0A\uFF0C\u5219\u6BD4\u8F83\u5BFC\u5165\u6E90\u7801\u8DEF\u5F84\u4E0E _metadata.json \u5B58\u7684 src \u8DEF\u5F84\u662F\u5426\u5339\u914D</span>

    <span class="token comment">// == resolvedSrc \u8D4B\u503C</span>

    <span class="token comment">// \u82E5\u5339\u914D\uFF0C\u5219\u8FD4\u56DE\u4FEE\u6539\u540E\u7684\u6A21\u5757\u8DEF\u5F84</span>
    <span class="token comment">// \u82E5\u4E0D\u5339\u914D\uFF0C\u5219\u4E0D\u5904\u7406</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>optimizedData<span class="token punctuation">.</span>src <span class="token operator">===</span> resolvedSrc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">getOptimizedUrl</span><span class="token punctuation">(</span>optimizedData<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u670D\u52A1\u8FD0\u884C\u4E2D\u68C0\u6D4B\u4F9D\u8D56\u66F4\u65B0\u65F6\u91CD\u65B0\u6784\u5EFA</p><p>\u5927\u81F4\u6D41\u7A0B\u662F\uFF1A\u8BF7\u6C42\u65B0\u7684\u4F9D\u8D56\u8D44\u6E90\u65F6\uFF0C<code>preAliasPlugin</code> \u7684 <code>resolveId</code> \u51FD\u6570\u5E76\u672A\u53D6\u5230\u6A21\u5757\u8DEF\u5F84\uFF08<code>tryOptimizedResolve</code>\uFF09\uFF0C\u5219\u5C06\u4F9D\u8D56\u5305\u540D\u79F0\u4F20\u9012\u7ED9 <code>resolvePlugin \u63D2\u4EF6</code>\uFF0C\u5224\u65AD\u5F15\u5165\u4F9D\u8D56\u7684\u6587\u4EF6\u662F\u5426\u4E5F\u662F\u4F9D\u8D56\uFF0C\u662F\u5219\u91CD\u65B0\u6784\u5EFA</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">resolvePlugin</span><span class="token punctuation">(</span>baseOptions<span class="token operator">:</span> InternalResolveOptions<span class="token punctuation">)</span><span class="token operator">:</span> Plugin <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span>
    root<span class="token punctuation">,</span>
    isProduction<span class="token punctuation">,</span>
    asSrc<span class="token punctuation">,</span>
    ssrConfig<span class="token punctuation">,</span>
    preferRelative <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span> <span class="token operator">=</span> baseOptions

  <span class="token keyword">let</span> server<span class="token operator">:</span> ViteDevServer <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> target<span class="token operator">:</span> ssrTarget<span class="token punctuation">,</span> noExternal<span class="token operator">:</span> ssrNoExternal <span class="token punctuation">}</span> <span class="token operator">=</span> ssrConfig <span class="token operator">??</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;vite:resolve&#39;</span><span class="token punctuation">,</span>
    <span class="token function">configureServer</span><span class="token punctuation">(</span>_server<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      server <span class="token operator">=</span> _server
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">resolveId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> importer<span class="token punctuation">,</span> resolveOpts<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">/*
       1. \u68C0\u6D4B\u4F9D\u8D56\u5305\u540D\u79F0\u662F\u5426\u662F &#39;__vite-browser-external&#39; \u5F00\u5934
       2. \u662F\u5219\u76F4\u63A5\u8FD4\u56DE\u5305\u540D
       3. \u68C0\u6D4B\u4F9D\u8D56\u662F\u5426\u5305\u542B commonjs \u5B57\u6BB5\u6216\u662F commonjsHelrt.js \u6587\u4EF6\uFF0C\u4E0D\u505A\u5904\u7406\uFF0C\u76F4\u63A5\u8FD4\u56DE
      */</span>
      <span class="token keyword">const</span> browserExternalId <span class="token operator">=</span> <span class="token string">&#39;__vite-browser-external&#39;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>browserExternalId<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\?commonjs</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">||</span> id <span class="token operator">===</span> <span class="token string">&#39;commonjsHelpers.js&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// other code...</span>

      <span class="token comment">/*
       \u5224\u65AD\u4F9D\u8D56\u5305\u8DEF\u5F84\u4ECE baseDir \u622A\u53D6\u540E\u662F\u5426\u662F /node_modules/ \u5F00\u5934
      */</span>
      <span class="token comment">// relative</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>preferRelative <span class="token operator">&amp;&amp;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\w</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> basedir <span class="token operator">=</span> importer <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>importer<span class="token punctuation">)</span> <span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> fsPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>basedir<span class="token punctuation">,</span> id<span class="token punctuation">)</span>
        <span class="token comment">// handle browser field mapping for relative imports</span>
        <span class="token keyword">const</span> normalizedFsPath <span class="token operator">=</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>fsPath<span class="token punctuation">)</span>
        <span class="token keyword">const</span> pathFromBasedir <span class="token operator">=</span> normalizedFsPath<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>basedir<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>pathFromBasedir<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/node_modules/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// normalize direct imports from node_modules to bare imports, so the</span>
          <span class="token comment">// hashing logic is shared and we avoid duplicated modules #2503</span>
          <span class="token keyword">const</span> bareImport <span class="token operator">=</span> pathFromBasedir<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token string">&#39;/node_modules/&#39;</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>
            <span class="token punctuation">(</span>res <span class="token operator">=</span> <span class="token function">tryNodeResolve</span><span class="token punctuation">(</span>
              bareImport<span class="token punctuation">,</span>
              importer<span class="token punctuation">,</span>
              options<span class="token punctuation">,</span>
              targetWeb<span class="token punctuation">,</span>
              server<span class="token punctuation">,</span>
              ssr<span class="token punctuation">,</span>
            <span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            res<span class="token punctuation">.</span>id<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>normalizedFsPath<span class="token punctuation">)</span>
          <span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> res
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token comment">// other code...</span>
      <span class="token comment">// \u8FD9\u91CC\u592A\u591A\u592A\u6742\u4E86...</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>__VP_STATIC_END__`,7),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(p,[["render",c]]);export{f as __pageData,g as default};
