import{_ as n,c as s,o as a,d as e}from"./app.e07e89a0.js";const m='{"title":"\u57FA\u4E8E\u6784\u5EFA\u7B56\u7565\u4F18\u5316\u5E94\u7528\u6253\u5305","description":"","frontmatter":{"title":"\u57FA\u4E8E\u6784\u5EFA\u7B56\u7565\u4F18\u5316\u5E94\u7528\u6253\u5305"},"headers":[{"level":2,"title":"\u6784\u5EFA\u7B56\u7565","slug":"\u6784\u5EFA\u7B56\u7565"},{"level":2,"title":"\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u65B9\u6848","slug":"\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u65B9\u6848"},{"level":2,"title":"\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u65B9\u6848","slug":"\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u65B9\u6848"}],"relativePath":"knowledge/engineering/wpOptimize.md","lastUpdated":1655922071610}',p={},o=e(`<p>\u529F\u80FD\u5F3A\u5927\u7684 <code>webpack</code> \u914D\u7F6E\u7E41\u591A\uFF0C\u5F88\u591A\u914D\u7F6E\u5B57\u6BB5\u96F6\u96F6\u6563\u6563\u5730\u5206\u5E03\uFF0C\u518D\u52A0\u4E0A <code>Loader</code> \u4E0E <code>Plugin</code> \u7684\u914D\u7F6E\uFF0C\u8981\u8BA9 <code>webpack</code> \u6253\u5305\u65F6\u95F4\u66F4\u77ED\u6253\u5305\u4F53\u79EF\u66F4\u5C0F\u8FD8\u662F\u9700\u8981\u505A\u4E00\u4E9B\u4E8B\u60C5\u7684</p><h2 id="\u6784\u5EFA\u7B56\u7565" tabindex="-1">\u6784\u5EFA\u7B56\u7565 <a class="header-anchor" href="#\u6784\u5EFA\u7B56\u7565" aria-hidden="true">#</a></h2><p>\u5BF9 <code>webpack</code> \u505A\u76F8\u5173\u6784\u5EFA\u7B56\u7565\u662F\u4E3A\u4E86\u8BA9\u5E94\u7528\u6253\u5305\u8FBE\u5230 <code>\u6700\u4F18\u5316</code>\u3002\u7B80\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u505A\u597D <code>webpack</code> \u7684\u6027\u80FD\u4F18\u5316\u5DE5\u4F5C\u3002\u90A3\u4E48\u5C31\u8981\u4ECE <code>\u65F6\u95F4\u5C42\u9762</code> \u4E0E <code>\u4F53\u79EF\u5C42\u9762</code> \u5165\u624B\uFF0C\u56E0\u4E3A\u8FD9\u4E24\u65B9\u9762\u662F\u6700\u76F4\u63A5\u53EF\u89C2\u7684\uFF0C\u65E0\u9700\u4FEE\u6539\u6E90\u7801\u6216\u589E\u52A0\u6D41\u7A0B\uFF0C\u5229\u7528 <code>webpack</code> \u4E0E\u5176\u4ED6\u7B2C\u4E09\u65B9\u5E94\u7528\u63D0\u4F9B\u7684\u591A\u5143\u5316\u914D\u7F6E\u5B8C\u6210\u4E0A\u8FF0\u64CD\u4F5C</p><blockquote><p>\u6CE8\uFF1A\u23F1 \u8868\u793A\u51CF\u5C11 <code>\u6253\u5305\u65F6\u95F4</code>\uFF0C\u{1F4E6} \u8868\u793A\u51CF\u5C11 <code>\u6253\u5305\u4F53\u79EF</code></p></blockquote><p>\u603B\u7ED3\u4E0B\u6765\u5927\u6982\u662F\uFF1A</p><ul><li>\u51CF\u5C11\u6253\u5305\u65F6\u95F4\uFF1A<code>\u7F29\u51CF\u8303\u56F4</code>\u3001<code>\u7F13\u5B58\u526F\u672C</code>\u3001<code>\u5B9A\u5411\u641C\u7D22</code>\u3001<code>\u63D0\u524D\u6784\u5EFA</code>\u3001<code>\u5E76\u884C\u6784\u5EFA</code>\u3001<code>\u53EF\u89C6\u7ED3\u6784</code></li><li>\u51CF\u5C11\u6253\u5305\u4F53\u79EF\uFF1A<code>\u5206\u5272\u4EE3\u7801</code>\u3001<code>\u6447\u6811\u4F18\u5316</code>\u3001<code>\u52A8\u6001\u57AB\u7247</code>\u3001<code>\u6309\u9700\u52A0\u8F7D</code>\u3001<code>\u4F5C\u7528\u63D0\u5347</code>\u3001<code>\u538B\u7F29\u8D44\u6E90</code></li></ul><h2 id="\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u65B9\u6848" tabindex="-1">\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u65B9\u6848 <a class="header-anchor" href="#\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u65B9\u6848" aria-hidden="true">#</a></h2><ol><li><p>\u23F1 \u7F29\u51CF\u6253\u5305\u8303\u56F4</p><p>\u914D\u7F6E <code>include/exclude</code> \u7F29\u5C0F <code>Loader</code> \u5BF9\u6587\u4EF6\u7684\u641C\u7D22\u8303\u56F4\uFF0C\u597D\u5904\u662F\u907F\u514D\u4E0D\u5FC5\u8981\u7684\u8F6C\u8BD1\uFF08\u4E00\u822C <code>loader</code> \u90FD\u4F1A\u6709\u8FD9\u4E2A\u914D\u7F6E\u9879\uFF09</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">/* \u5FFD\u7565\u5904\u7406\u7684\u76EE\u5F55 */</span>
      include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">/* \u5305\u542B\u5904\u7406\u7684\u76EE\u5F55 */</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      use<span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u23F1 \u7F13\u5B58\u526F\u672C</p><p>\u914D\u7F6E <code>cache</code> \u7F13\u5B58 <code>loader</code> \u5BF9\u6587\u4EF6\u7684\u7F16\u8BD1\u526F\u672C\uFF0C\u597D\u5904\u662F <code>\u518D\u6B21\u7F16\u8BD1\u65F6\u53EA\u7F16\u8BD1\u53D8\u52A8\u7684\u6587\u4EF6</code>\u3002<code>Loader/Plugin</code> \u53EF\u80FD\u4F1A\u63D0\u4F9B\u4E00\u4E2A\u53EF\u7528\u7F16\u8BD1\u7F13\u5B58\u7684\u9009\u9879\uFF0C\u901A\u5E38\u5305\u62EC <code>cache</code> \u5B57\u773C\uFF0C\u4EE5 <code>babel-loader</code> \u4E0E <code>eslint-webpack-plugin</code> \u4E3A\u4F8B</p><div class="language-js"><pre><code><span class="token keyword">import</span> EslintPlugin <span class="token keyword">from</span> <span class="token string">&quot;eslint-webpack-plugin&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      include<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">src</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span> cacheDirectory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">EslintPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> cache<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u23F1 \u5B9A\u5411\u641C\u7D22</p><p>\u914D\u7F6E <code>resolve</code> \u63D0\u9AD8\u6587\u4EF6\u7684\u641C\u7D22\u6548\u7387\uFF0C\u53EF\u4EE5\u5B9A\u5411\u6307\u5B9A\u6240\u9700\u6587\u4EF6\u7684\u8DEF\u5F84\u3002<code>alias</code> \u8868\u793A\u6620\u5C04\u8DEF\u5F84\uFF0C<code>extensions</code> \u8868\u793A\u6587\u4EF6\u540E\u7F00\uFF0C<code>noParse</code> \u8868\u793A\u8FC7\u6EE4\u65E0\u4F9D\u8D56\u6587\u4EF6\uFF1B\u901A\u5E38\u914D\u7F6E <code>alias</code> \u4E0E <code>extensions</code> \u5C31\u8DB3\u591F\u4E86</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">resolvePath</span> <span class="token operator">=</span> <span class="token parameter">relativePath</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;@&quot;</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token comment">// ... others</span>
      swiper<span class="token operator">:</span> <span class="token string">&quot;swiper/js/swiper.min.js&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">/* \u5BFC\u5165\u6A21\u5757\u7701\u7565\u540E\u7F00 */</span>
    extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.vue&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u23F1 \u63D0\u524D\u6784\u5EFA</p><p>\u914D\u7F6E <code>DllPlugin</code> \u5C06\u7B2C\u4E09\u65B9\u4F9D\u8D56\u63D0\u524D\u6253\u5305\uFF0C\u597D\u5904\u662F <code>\u5C06DLL\u4E0E\u4E1A\u52A1\u4EE3\u7801\u5B8C\u5168\u5206\u79BB</code> \u4E14\u6BCF\u6B21 <code>\u53EA\u6784\u5EFA\u4E1A\u52A1\u4EE3\u7801</code>\uFF08\u5DF2\u4E0D\u63A8\u8350\u4F7F\u7528\uFF0C\u6545\u4E0D\u4F5C\u8BF4\u660E\uFF09</p></li><li><p>\u23F1 \u5E76\u884C\u6784\u5EFA</p><p>\u914D\u7F6E <code>Thread</code> \u5C06 <code>Loader</code> \u5355\u8FDB\u7A0B\u8F6C\u6362\u4E3A\u591A\u8FDB\u7A0B\uFF0C<code>\u91CA\u653ECPU\u591A\u6838\u5E76\u53D1\u7684\u4F18\u52BF</code>\u3002\u5728\u4F7F\u7528 <code>webpack</code> \u6784\u5EFA\u9879\u76EE\u65F6\u4F1A\u6709\u5927\u91CF\u6587\u4EF6\u9700\u89E3\u6790\u4E0E\u5904\u7406\uFF0C\u968F\u7740\u6587\u4EF6\u589E\u591A\u4F1A\u4F7F\u6784\u5EFA\u8FC7\u7A0B\u53D8\u5F97\u8D8A\u6162</p><p>\u5728 <code>Node</code> \u4E2D\u8FD0\u884C\u7684 <code>webpack</code> \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u7B80\u800C\u8A00\u4E4B\uFF0C<code>webpack</code> \u5F85\u5904\u7406\u7684\u4EFB\u52A1\u9700\u4E00\u4EF6\u4EF6\u5904\u7406\uFF0C\u4E0D\u80FD\u540C\u4E00\u65F6\u523B\u5904\u7406\u591A\u4EF6\u4EFB\u52A1\u3002\u4F46 <code>CPU</code> \u662F\u591A\u6838\u7684\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u501F\u52A9 <a href="https://github.com/webpack-contrib/thread-loader" target="_blank" rel="noopener noreferrer"><code>thread-loader \u{1F517}</code></a> \u6765\u6839\u636E <code>CPU</code> \u7684\u6838\u5FC3\u6570\u5F00\u542F\u591A\u4E2A\u7EBF\u7A0B\uFF08\u5F53\u7136\u8981\u8003\u8651\u662F\u5426\u6709\u5FC5\u8981\u5F00\u542F\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BD5\u7ADF\u5F00\u591A\u4E2A\u7EBF\u7A0B\u4E5F\u6709\u989D\u5916\u5F00\u9500\uFF0C\u82E5\u5904\u7406\u6587\u4EF6\u91CF\u5E76\u4E0D\u5927\uFF0C\u5219\u4E0D\u63A8\u8350\u5F00\u542F\u591A\u7EBF\u7A0B\uFF09</p><div class="language-js"><pre><code><span class="token keyword">import</span> path <span class="token keyword">from</span> <span class="token string">&#39;path&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&#39;thread-loader&#39;</span>
          <span class="token comment">// your expensive loader (e.g babel-loader)</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-js"><pre><code><span class="token keyword">import</span> Os <span class="token keyword">from</span> <span class="token string">&quot;os&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token comment">// ...</span>
      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      use<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          loader<span class="token operator">:</span> <span class="token string">&quot;thread-loader&quot;</span><span class="token punctuation">,</span>
          <span class="token comment">/* \u4F7F\u7528 os \u6A21\u5757\u83B7\u53D6 cpu \u6838\u5FC3\u6570 */</span>
          options<span class="token operator">:</span> <span class="token punctuation">{</span> workers<span class="token operator">:</span> Os<span class="token punctuation">.</span><span class="token function">cpus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          loader<span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
          options<span class="token operator">:</span> <span class="token punctuation">{</span> cacheDirectory<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u23F1 \u53EF\u89C6\u7ED3\u6784</p><p>\u914D\u7F6E <code>BundleAnalyzer</code> \u5206\u6790\u6253\u5305\u6587\u4EF6\u7ED3\u6784\uFF0C\u901A\u8FC7\u5206\u6790\u539F\u56E0\u5F97\u51FA\u4F18\u5316\u65B9\u6848\u51CF\u5C11\u6253\u5305\u65F6\u95F4\u3002<code>BundleAnalyzer</code>\uFF08<a href="https://github.com/webpack-contrib/webpack-bundle-analyzer" target="_blank" rel="noopener noreferrer"><code>webpack-bundle-analyzer \u{1F517}</code></a>\uFF09\u662F <code>webpack</code> \u5B98\u65B9\u63D2\u4EF6\uFF0C\u53EF\u76F4\u89C2\u5206\u6790\u6253\u5305\u6587\u4EF6\u7684\u6A21\u5757\u7EC4\u6210\u90E8\u5206\u3001\u6A21\u5757\u4F53\u79EF\u5360\u6BD4\u3001\u6A21\u5757\u5305\u62EC\u5173\u7CFB\u3001\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u3001\u6587\u4EF6\u662F\u5426\u91CD\u590D\u3001\u538B\u7F29\u4F53\u79EF\u5BF9\u6BD4\u7B49\u53EF\u89C6\u5316\u6570\u636E</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BundleAnalyzerPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;webpack-bundle-analyzer&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ... others</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">BundleAnalyzerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u65B9\u6848" tabindex="-1">\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u65B9\u6848 <a class="header-anchor" href="#\u51CF\u5C11\u6253\u5305\u4F53\u79EF\u65B9\u6848" aria-hidden="true">#</a></h2><ol><li><p>\u{1F4E6} \u5206\u5272\u4EE3\u7801</p><p>\u5206\u5272\u5404\u4E2A\u6A21\u5757\u4EE3\u7801\uFF0C\u63D0\u53D6\u76F8\u540C\u90E8\u5206\u4EE3\u7801\uFF0C\u51CF\u5C11\u91CD\u590D\u4EE3\u7801\u7684\u51FA\u73B0\u9891\u7387\u3002<code>webpack v4+</code> \u4F7F\u7528 <code>splitChunks</code> \u66FF\u4EE3 <code>CommonsChunksPlugin</code> \u5B9E\u73B0\u4EE3\u7801\u5206\u5272\uFF08\u8BE6\u60C5\u53EF\u89C1 <a href="https://webpack.docschina.org/configuration/optimization/#optimizationsplitchunks" target="_blank" rel="noopener noreferrer"><code>optimizationsplitchunks \u{1F517}</code></a></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* \u62BD\u79BBWebpackRuntime\u51FD\u6570 */</span>
    runtimeChunk<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;manifest&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token comment">/* \u7F13\u5B58 */</span>
      cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span>
        common<span class="token operator">:</span> <span class="token punctuation">{</span>
          minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">/* \u4EE3\u7801\u5757\u51FA\u73B0\u6700\u5C11\u6B21\u6570 */</span>
          name<span class="token operator">:</span> <span class="token string">&quot;common&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* \u4EE3\u7801\u5757\u540D\u79F0 */</span>
          priority<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">/* \u4F18\u5148\u7EA7\u522B */</span>
          reuseExistingChunk<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">/* \u91CD\u7528\u5DF2\u5B58\u5728\u4EE3\u7801\u5757 */</span>
          test<span class="token operator">:</span> <span class="token function">AbsPath</span><span class="token punctuation">(</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        vendor<span class="token operator">:</span> <span class="token punctuation">{</span>
          chunks<span class="token operator">:</span> <span class="token string">&quot;initial&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* \u4EE3\u7801\u5206\u5272\u7C7B\u578B */</span>
          name<span class="token operator">:</span> <span class="token string">&quot;vendor&quot;</span><span class="token punctuation">,</span>
          priority<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
          test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">/* \u4EE3\u7801\u5206\u5272\u7C7B\u578B\uFF1Aall\u5168\u90E8\u6A21\u5757\uFF0Casync\u5F02\u6B65\u6A21\u5757\uFF0Cinitial\u5165\u53E3\u6A21\u5757 */</span>
      chunks<span class="token operator">:</span> <span class="token string">&quot;all&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u{1F4E6} \u6447\u6811\u4F18\u5316\uFF08<code>Tree-shaking</code>\uFF09</p><p>\u5220\u9664\u9879\u76EE\u4E2D\u672A\u88AB\u5F15\u7528\u4EE3\u7801\u53CA\u91CD\u590D\u4EE3\u7801\uFF0C\u7531\u4E8E <code>Tree-shaking</code> \u4EC5\u9488\u5BF9\u9759\u6001\u7ED3\u6784\u5206\u6790\uFF0C\u6545\u4EC5 <code>ESM</code> \u6A21\u5757\u5316\u89C4\u8303\u751F\u6548\uFF0C\u5176\u4ED6\u89C4\u8303\uFF08\u6BD4\u5982 <code>commonjs</code> \u89C4\u8303\uFF09\u5E76\u4E0D\u4F1A\u751F\u6548</p><p><code>webpack v5</code> \u7684 <code>mode = &quot;production&quot;</code> \u7684\u60C5\u51B5\u4E0B\u4F1A\u9ED8\u8BA4\u5F00\u542F <code>Tree-shaking</code> \u529F\u80FD\uFF0C\u4E1A\u52A1\u4EE3\u7801\u540C\u6837\u9700\u8981\u4F7F\u7528 <code>ESM</code> \u6A21\u5757\u5316\u65B9\u5F0F\u7F16\u5199\uFF1B<code>v2+</code> \u7248\u672C\u9700\u8981\u914D\u7F6E\u9884\u8BBE\u73AF\u5883\u4E3A <code>ESM</code></p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  module<span class="token operator">:</span> <span class="token punctuation">{</span>
    rules<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token comment">/* set modules: false by default */</span>
              presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;env&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> modules<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>`,10),t=[o];function c(l,u,r,k,i,d){return a(),s("div",null,t)}var x=n(p,[["render",c]]);export{m as __pageData,x as default};
