import{_ as a,c as n,o as e,d as s}from"./app.108cc30f.js";const b='{"title":"\u8BA4\u8BC6 Tapable","description":"","frontmatter":{"title":"\u8BA4\u8BC6 Tapable"},"headers":[{"level":2,"title":"Tapable \u4F7F\u7528","slug":"tapable-\u4F7F\u7528"}],"relativePath":"knowledge/engineering/tapable.md","lastUpdated":1655749926761}',o={},t=s(`__VP_STATIC_START__<p>\u6211\u4EEC\u8981\u4E86\u89E3 <code>Webpack</code> \u4E2D\u7684 <code>Plugin</code> \u673A\u5236\u65F6\uFF0C\u5C31\u9700\u8981\u638C\u63E1 <code>Tapable</code> \u8FD9\u4E2A\u524D\u7F6E\u77E5\u8BC6</p><h2 id="tapable-\u4F7F\u7528" tabindex="-1">Tapable \u4F7F\u7528 <a class="header-anchor" href="#tapable-\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u5728 <code>webpack</code> \u7684\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\uFF0C\u672C\u8D28\u4E0A\u901A\u8FC7 <code>Tapable</code> \u5B9E\u73B0\u4E86\u5728\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u7684\u4E00\u79CD <strong>\u53D1\u5E03\u8BA2\u9605\u8005\u6A21\u5F0F</strong> \u7684\u63D2\u4EF6 <code>Plugin</code> \u673A\u5236\uFF1B<code>Tapable</code> \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u4E8B\u4EF6\u7684\u53D1\u5E03\u8BA2\u9605 <code>API</code> \uFF0C\u901A\u8FC7 <code>Tapable</code> \u6211\u4EEC\u53EF\u4EE5\u6CE8\u518C\u4E8B\u4EF6\uFF0C\u4ECE\u800C\u5728\u4E0D\u540C\u65F6\u673A\u53BB\u89E6\u53D1\u6CE8\u518C\u7684\u4E8B\u4EF6\u8FDB\u884C\u6267\u884C</p><p><code>Tapable</code> \u5B98\u65B9\u6587\u6863\u63D0\u4F9B\u4E86\u8FD9\u4E5D\u79CD\u94A9\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
    SyncHook<span class="token punctuation">,</span>
	SyncBailHook<span class="token punctuation">,</span>
	SyncWaterfallHook<span class="token punctuation">,</span>
	SyncLoopHook<span class="token punctuation">,</span>
	AsyncParallelHook<span class="token punctuation">,</span>
	AsyncParallelBailHook<span class="token punctuation">,</span>
	AsyncSeriesHook<span class="token punctuation">,</span>
	AsyncSeriesBailHook<span class="token punctuation">,</span>
	AsyncSeriesWaterfallHook
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;tapable&#39;</span><span class="token punctuation">)</span>
</code></pre></div>__VP_STATIC_END__`,5),c=[t];function p(l,d,i,r,u,k){return e(),n("div",null,c)}var T=a(o,[["render",p]]);export{b as __pageData,T as default};
