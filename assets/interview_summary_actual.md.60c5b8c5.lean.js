import{_ as a,c as t,d as n,b as s,o as p}from"./app.de03c35d.js";const _='{"title":"\u5B9E\u9645\u9762\u8BD5\u9898\u5206\u4EAB","description":"","frontmatter":{"title":"\u5B9E\u9645\u9762\u8BD5\u9898\u5206\u4EAB"},"headers":[{"level":3,"title":"\u4EE3\u7801\u7F16\u5199","slug":"\u4EE3\u7801\u7F16\u5199"}],"relativePath":"interview/summary/actual.md","lastUpdated":1652249403533}',e={},o=s('',1),c=s(`__VP_STATIC_START__<ul><li>react \u6E90\u7801\u90E8\u5206\uFF0C\u5982\u4F55\u5B8C\u6210\u9875\u9762\u6E32\u67D3\uFF1F\u5173\u952E\u6B65\u9AA4\u6709\u54EA\u4E9B\uFF1F</li><li><code>qiankun</code> \u5FAE\u5E94\u7528\u65B9\u6848\uFF1F\u4E0E <code>iframe</code> \u7684\u533A\u522B\uFF1F</li><li><code>qiankun</code> \u7684\u8DEF\u7531\u5339\u914D\u539F\u7406\uFF08\u6E90\u7801\uFF09</li><li><code>CI/CD</code> \u6D41\u7A0B\u65B9\u6848</li></ul><h3 id="\u4EE3\u7801\u7F16\u5199" tabindex="-1">\u4EE3\u7801\u7F16\u5199 <a class="header-anchor" href="#\u4EE3\u7801\u7F16\u5199" aria-hidden="true">#</a></h3><ul><li><p>\u624B\u5199\u5B9E\u73B0 <code>Promise.all()</code>\uFF1A<a href="/knowledge/study/promise.html">\u5B9E\u73B0\u65B9\u6848\u53C2\u89C1 \u27A1\uFE0F</a></p></li><li><p>\u5B9E\u73B0\u4E00\u4E2A <code>convertTree</code> \u65B9\u6CD5\uFF1A</p></li></ul><div class="language-js"><pre><code><span class="token comment">// \u539F\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d2&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
<span class="token comment">// \u8F6C\u6362\u540E\u6570\u636E\u683C\u5F0F\u4E3A\uFF1A</span>
<span class="token comment">// [</span>
<span class="token comment">//     {</span>
<span class="token comment">//         key: &#39;a1&#39;,</span>
<span class="token comment">//         children: [</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 key: &#39;b1&#39;,</span>
<span class="token comment">//                 children: [{ key: &#39;c1&#39; }, { key: &#39;c2&#39; }]</span>
<span class="token comment">//             },</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 key: &#39;b2&#39;,</span>
<span class="token comment">//                 children: [{ key: &#39;c1&#39; }, { key: &#39;c2&#39; }]</span>
<span class="token comment">//             }</span>
<span class="token comment">//         ]</span>
<span class="token comment">//     },</span>
<span class="token comment">//     {</span>
<span class="token comment">//         key: &#39;a2&#39;,</span>
<span class="token comment">//         children: [</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 key: &#39;b3&#39;,</span>
<span class="token comment">//                 children: [{ key: &#39;d1&#39; }, { key: &#39;d2&#39; }]</span>
<span class="token comment">//             },</span>
<span class="token comment">//             {</span>
<span class="token comment">//                 key: &#39;b4&#39;,</span>
<span class="token comment">//                 children: [{ key: &#39;d1&#39; }, { key: &#39;d2&#39; }]</span>
<span class="token comment">//             }</span>
<span class="token comment">//         ]</span>
<span class="token comment">//     }</span>
<span class="token comment">// ]</span>

<span class="token keyword">function</span> <span class="token function">convertTree</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// you need to achieve it here...</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,4);function l(i,k,u,r,m,d){return p(),t("div",null,[n(" bytedance first-interview "),o,n(" tencent first-interview "),c])}var h=a(e,[["render",l]]);export{_ as __pageData,h as default};
