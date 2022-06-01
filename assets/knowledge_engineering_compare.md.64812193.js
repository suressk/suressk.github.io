import{_ as n,c as s,o as a,b as e}from"./app.50c3ff41.js";const b='{"title":"\u6253\u5305\u5DE5\u5177\u5BF9\u6BD4","description":"","frontmatter":{"title":"\u6253\u5305\u5DE5\u5177\u5BF9\u6BD4"},"headers":[{"level":2,"title":"webpack vs rollup\uFF1A","slug":"webpack-vs-rollup\uFF1A"},{"level":2,"title":"webpack5 vs webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0 v5\uFF0Cv4\uFF09\uFF1A","slug":"webpack5-vs-webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0-v5\uFF0Cv4\uFF09\uFF1A"}],"relativePath":"knowledge/engineering/compare.md","lastUpdated":1654044527339}',o={},p=e(`<h2 id="webpack-vs-rollup\uFF1A" tabindex="-1"><code>webpack</code> vs <code>rollup</code>\uFF1A <a class="header-anchor" href="#webpack-vs-rollup\uFF1A" aria-hidden="true">#</a></h2><p><code>webpack</code> \u6700\u521D\u7528\u4E8E\u6784\u5EFA\u590D\u6742\u7684\u5355\u9875\u5E94\u7528\u7A0B\u5E8F\uFF08SPA\uFF09\uFF0C\u7279\u522B\u662F\u5B83\u7684\u4E24\u4E2A\u7279\u6027\uFF1A</p><ul><li><p><strong>\u4EE3\u7801\u62C6\u5206\uFF08Code Splitting\uFF09</strong>\uFF1A\u53EF\u4EE5\u5C06\u5E94\u7528\u7A0B\u5E8F\u5206\u89E3\u6210\u53EF\u7BA1\u7406\u7684\u4EE3\u7801\u5757</p></li><li><p><strong>\u9759\u6001\u8D44\u6E90\u5BFC\u5165\uFF08Static Assets\uFF09</strong>\uFF1A\u5982\u56FE\u50CF\u3001CSS \u8D44\u6E90\uFF0C\u6211\u4EEC\u65E0\u9700\u5173\u5FC3\u5B83\u4EEC\u662F\u4E0D\u662F\u5728\u6B63\u786E\u7684\u9879\u76EE\u76EE\u5F55\uFF0C\u4E5F\u4E0D\u7528\u5173\u5FC3\u6587\u4EF6 URL \u7684 hash \u503C\u95EE\u9898</p></li></ul><p><code>rollup</code> \u662F\u4E00\u4E2A\u6A21\u5757\u5316\u6253\u5305\u5DE5\u5177\uFF0C\u4E13\u95E8\u9488\u5BF9\u4E8E\u7C7B\u5E93\u6253\u5305\uFF0C\u5728\u6253\u5305\u65F6\u9ED8\u8BA4\u8FDB\u884C <code>Tree-shaking</code>\uFF0C\u6240\u4EE5\u6253\u5305\u540E\u7684\u6587\u4EF6\u4F53\u79EF\u76F8\u6BD4 webpack \u4F1A\u5C0F\u5F88\u591A\u3002\u5B83\u5229\u7528 <code>ES2015</code> \u5DE7\u5999\u7684\u6A21\u5757\u8BBE\u8BA1\uFF0C\u5C3D\u53EF\u80FD\u9AD8\u6548\u5730\u6784\u5EFA\u51FA\u80FD\u591F\u76F4\u63A5\u88AB\u5176\u5B83 JavaScript \u5E93\u5F15\u7528\u7684\u6A21\u5757</p><p>rollup \u867D\u8BF4\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u5904\u7406\u5927\u591A\u6570\u7684 CommonJS \u6A21\u5757\uFF0C\u4F46\u6709\u4E9B\u4E1C\u897F\u786E\u5B9E\u65E0\u6CD5\u8F6C\u6362\u4E3A ES2015 \u8BED\u6CD5\uFF0C\u4E5F\u4E0D\u652F\u6301 HMR\uFF08\u70ED\u6A21\u5757\u66FF\u6362 / \u70ED\u66F4\u65B0\uFF09\uFF1B\u800C webpack \u901A\u8FC7\u5C06\u6A21\u5757\u5C01\u88C5\u6210\u4E00\u4E2A\u4E2A\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u4EFB\u4F55\u4F60\u4E22\u7ED9\u5B83\u7684\u4E1C\u897F</p><h2 id="webpack5-vs-webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0-v5\uFF0Cv4\uFF09\uFF1A" tabindex="-1"><code>webpack5</code> vs <code>webpack4</code>\uFF08\u4EE5\u4E0B\u7B80\u79F0 v5\uFF0Cv4\uFF09\uFF1A <a class="header-anchor" href="#webpack5-vs-webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0-v5\uFF0Cv4\uFF09\uFF1A" aria-hidden="true">#</a></h2><ul><li><p>\u65B0\u589E <code>Tree-shaking</code> \u529F\u80FD</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js \u914D\u7F6E\u5F00\u542F</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        usedExports<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u53EA\u5BFC\u51FA\u88AB\u4F7F\u7528\u7684\u6A21\u5757</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7531\u4E8E <code>CommonJS</code> \u662F\u52A8\u6001\u5BFC\u5165\uFF0C<code>Tree-shaking</code> \u662F\u53EA\u80FD\u5DE5\u4F5C\u5728\u9759\u6001\u7F16\u8BD1\u9636\u6BB5\u7684\u4EE3\u7801\u4F18\u5316\u65B9\u6848\uFF0C\u56E0\u800C\u53EA\u652F\u6301 <code>ES6 Module</code>\uFF0C\u56E0\u800C\u5728 <code>babel-loader</code> \u9884\u8BBE\u73AF\u5883\u9700\u8981\u914D\u7F6E</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@babel/preset-typescript&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>modules: false</code> \u5C06\u5F00\u542F\u7684 ESModule \u6A21\u5F0F <a href="https://github.com/babel/babel-loader/issues/521" target="_blank" rel="noopener noreferrer">\u5185\u5BB9\u63CF\u8FF0\u53EF\u89C1 \u27A1\uFE0F</a>\uFF0C\u9632\u6B62 <code>Babel</code> \u5C06\u4EFB\u4F55\u7C7B\u578B\u7684\u6A21\u5757\u90FD\u8F6C\u6362\u6210 <code>CommonJS</code> \u6A21\u5757</p><p><code>webpack5</code> \u7684 <code>mode = &quot;production&quot;</code> \u9ED8\u8BA4\u5F00\u542F <code>Tree-shaking</code> \u529F\u80FD</p></li><li><p>v5 \u9ED8\u8BA4\u5185\u7F6E <code>terser-webpack-plugin</code> \u63D2\u4EF6\u8FDB\u884C\u4EE3\u7801\u538B\u7F29\uFF0C\u4E14\u5728 <code>mode = &quot;production&quot;</code> \u7684\u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u5F00\u542F\uFF1Bv4 \u5219\u9700\u8981\u6211\u4EEC\u5148\u5B89\u88C5\u6B64\u63D2\u4EF6\uFF0C\u518D\u8FDB\u884C\u914D\u7F6E</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js in v5</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        minimize <span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// \u542F\u52A8\u538B\u7F29</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// webpack.config.js in v4</span>
<span class="token keyword">const</span> TerserPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;terser-webpack-plugin&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span> 
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        minimize<span class="token operator">:</span> <span class="token operator">!</span>isDev<span class="token punctuation">,</span> <span class="token comment">// \u975E\u5F00\u53D1\u73AF\u5883\u5F00\u542F\u538B\u7F29</span>
        minimizer<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token keyword">new</span> <span class="token class-name">TerserPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token comment">// \u6CE8\u91CA\u662F\u5426\u9700\u8981\u63D0\u53D6\u5230\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u4E2D</span>
                extractComments<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
                terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span> 
                    compress<span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token comment">// \u53BB\u9664\u6253\u5370\u5185\u5BB9</span>
                        pure_funcs<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;console.log&#39;</span><span class="token punctuation">]</span> 
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li></li></ul>`,7),t=[p];function c(l,r,u,i,k,d){return a(),s("div",null,t)}var v=n(o,[["render",c]]);export{b as __pageData,v as default};
