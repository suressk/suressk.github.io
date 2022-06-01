import{_ as n,c as s,o as a,b as o}from"./app.50c3ff41.js";const h='{"title":"webpack","description":"","frontmatter":{"title":"webpack"},"headers":[{"level":2,"title":"\u6A21\u5757\u5316\u7684\u63A2\u7D22\u9636\u6BB5","slug":"\u6A21\u5757\u5316\u7684\u63A2\u7D22\u9636\u6BB5"},{"level":2,"title":"\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u95EE\u9898/\u60F3\u8981\u7684\u65B9\u5F0F","slug":"\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u95EE\u9898-\u60F3\u8981\u7684\u65B9\u5F0F"},{"level":2,"title":"webpack \u662F\u4EC0\u4E48","slug":"webpack-\u662F\u4EC0\u4E48"},{"level":2,"title":"webpack \u7684\u80FD\u529B","slug":"webpack-\u7684\u80FD\u529B"},{"level":2,"title":"webpack \u7684\u6784\u5EFA\u6D41\u7A0B","slug":"webpack-\u7684\u6784\u5EFA\u6D41\u7A0B"},{"level":3,"title":"\u521D\u59CB\u5316\u6D41\u7A0B","slug":"\u521D\u59CB\u5316\u6D41\u7A0B"},{"level":3,"title":"\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B","slug":"\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B"},{"level":3,"title":"\u8F93\u51FA\u6D41\u7A0B","slug":"\u8F93\u51FA\u6D41\u7A0B"},{"level":3,"title":"","slug":""}],"relativePath":"knowledge/engineering/webpack.md","lastUpdated":1654044527339}',p={},t=o(`__VP_STATIC_START__<p><code>Webpack</code> \u6700\u521D\u7684\u76EE\u6807\u662F\u5B9E\u73B0\u524D\u7AEF\u9879\u76EE\u7684\u6A21\u5757\u5316\uFF0C\u65E8\u5728\u66F4\u9AD8\u6548\u5730\u7BA1\u7406\u548C\u7EF4\u62A4\u9879\u76EE\u4E2D\u7684\u6BCF\u4E00\u4E2A\u8D44\u6E90</p><h2 id="\u6A21\u5757\u5316\u7684\u63A2\u7D22\u9636\u6BB5" tabindex="-1">\u6A21\u5757\u5316\u7684\u63A2\u7D22\u9636\u6BB5 <a class="header-anchor" href="#\u6A21\u5757\u5316\u7684\u63A2\u7D22\u9636\u6BB5" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7 <code>\u6587\u4EF6\u5212\u5206\u6A21\u5757</code> \u7684\u65B9\u6848\uFF0C\u5C06\u6BCF\u4E2A\u529F\u80FD\u53CA\u5176\u76F8\u5173\u72B6\u6001\u6570\u636E\u5404\u81EA\u5355\u72EC\u653E\u5230\u4E0D\u540C\u7684 JS \u6587\u4EF6\u4E2D\uFF0C\u7EA6\u5B9A\u6BCF\u4E2A\u6587\u4EF6\u662F\u4E00\u4E2A\u5355\u72EC\u7684\u6A21\u5757\uFF0C\u6700\u540E\u901A\u8FC7 <code>&lt;script&gt;</code> \u6807\u7B7E\u5F15\u5165\u9875\u9762\uFF08<code>\u5B58\u5728\u7684\u95EE\u9898</code>\uFF1A\u6A21\u5757\u5168\u90E8\u6302\u8F7D\u5728\u5168\u5C40\u5BF9\u8C61\u4E0A\uFF0C\u5927\u91CF\u6A21\u5757\u6210\u5458\u6C61\u67D3\u4E86\u73AF\u5883\uFF0C\u53EF\u4EE5\u968F\u610F\u4FEE\u6539\u6A21\u5757\u5185\u90E8\u5185\u5BB9\uFF0C\u6A21\u5757\u4E0E\u6A21\u5757\u4E4B\u95F4\u5E76\u6CA1\u6709\u4F9D\u8D56\u5173\u7CFB\u3001\u7EF4\u62A4\u56F0\u96BE\u3001\u6CA1\u6709\u79C1\u6709\u7A7A\u95F4\u7B49\uFF09</li><li>\u51FA\u73B0 <code>\u547D\u540D\u7A7A\u95F4</code>\uFF0C\u89C4\u5B9A\u6BCF\u4E2A\u6A21\u5757\u53EA\u66B4\u9732\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\uFF0C\u6A21\u5757\u7684\u5185\u5BB9\u90FD\u6302\u8F7D\u5230\u8FD9\u4E2A\u5BF9\u8C61\u4E0A\uFF08\u540C\u6837\u5B58\u5728\u53EF\u4EE5\u968F\u610F\u4FEE\u6539\uFF0C\u6A21\u5757\u4F9D\u8D56\u5173\u7CFB\u4E0D\u660E\u7B49\u95EE\u9898\uFF09</li><li>\u901A\u8FC7 <code>\u7ACB\u5373\u6267\u884C\u51FD\u6570</code> \u4E3A\u6A21\u5757\u63D0\u4F9B\u79C1\u6709\u7A7A\u95F4\uFF0C\u901A\u8FC7\u53C2\u6570\u7684\u5F62\u5F0F\u4F5C\u4E3A\u4F9D\u8D56\u58F0\u660E\uFF08\u660E\u663E\u770B\u6765\u4E0A\u9762\u7F57\u5217\u7684\u95EE\u9898\u90FD\u88AB\u6B64\u65B9\u6848\u89E3\u51B3\u4E86\uFF09</li></ol><p>\u4F46\u8FD8\u5B58\u5728\u5176\u4ED6\u7684\u95EE\u9898\uFF1A\u6211\u4EEC\u662F\u901A\u8FC7 <code>&lt;script&gt;</code> \u6807\u7B7E\u5728\u9875\u9762\u5F15\u5165\u8FD9\u4E9B\u6A21\u5757\u7684\uFF0C\u8FD9\u4E9B\u6A21\u5757\u7684\u52A0\u8F7D\u5E76\u4E0D\u53D7\u4EE3\u7801\u7684\u63A7\u5236\uFF08\u4E00\u6B21\u6027\u5168\u52A0\u8F7D\uFF09\uFF0C\u65F6\u95F4\u4E00\u4E45\u7EF4\u62A4\u8D77\u6765\u4E5F\u5341\u5206\u7684\u9EBB\u70E6</p><blockquote><p>\u7406\u60F3\u7684\u89E3\u51B3\u65B9\u5F0F\u662F\uFF1A\u5728\u9875\u9762\u4E2D\u5F15\u5165\u4E00\u4E2A JS \u5165\u53E3\u6587\u4EF6\uFF0C\u5176\u4F59\u7528\u5230\u7684\u6A21\u5757\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\uFF0C\u6309\u9700\u52A0\u8F7D\u8FDB\u6765</p></blockquote><h2 id="\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u95EE\u9898-\u60F3\u8981\u7684\u65B9\u5F0F" tabindex="-1">\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u95EE\u9898/\u60F3\u8981\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u5728\u5F00\u53D1\u9636\u6BB5\u6211\u4EEC\u4F1A\u9047\u5230\u7684\u95EE\u9898-\u60F3\u8981\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u901A\u8FC7\u6A21\u5757\u5316\u7684\u65B9\u5F0F\u5F00\u53D1</li><li>\u901A\u8FC7\u4E00\u4E9B\u9AD8\u7EA7\u7279\u6027\u6765\u52A0\u5FEB\u6211\u4EEC\u7684\u5F00\u53D1\u6548\u7387\u6216\u8005\u5B89\u5168\u6027\uFF0C\u5982\uFF1A<code>ES6+</code> \u8BED\u6CD5\uFF0C<code>TypeScript</code> \u5F00\u53D1\u811A\u672C\u903B\u8F91\uFF0C<code>sass</code>\u3001<code>less</code> \u7F16\u5199\u6837\u5F0F\u7B49</li><li>\u76D1\u542C\u6587\u4EF6\u7684\u53D8\u5316\u6765\u5E76\u4E14\u65F6\u65F6\u70ED\u66F4\u65B0\u53CD\u6620\u5230\u6D4F\u89C8\u5668\u4E0A\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387</li><li>js \u4EE3\u7801\u9700\u8981\u6A21\u5757\u5316\uFF0C\u540C\u6837\u8FD8\u6709\u5176\u4ED6\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u5982 css\uFF0C\u56FE\u7247\u7B49\u8D44\u6E90</li><li>\u5F00\u53D1\u5B8C\u6210\u540E\u9700\u8981\u5C06\u4EE3\u7801\u8FDB\u884C\u538B\u7F29\u3001\u5408\u5E76\u4EE5\u53CA\u5176\u4ED6\u76F8\u5173\u7684\u4F18\u5316</li></ol><p><code>webpack</code> \u7684\u51FA\u73B0\u6070\u597D\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E9B\u95EE\u9898</p><h2 id="webpack-\u662F\u4EC0\u4E48" tabindex="-1">webpack \u662F\u4EC0\u4E48 <a class="header-anchor" href="#webpack-\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><code>webpack</code> \u662F\u4E00\u4E2A\u7528\u4E8E\u73B0\u4EE3 <code>JavaScript</code> \u5E94\u7528\u7A0B\u5E8F\u7684 <strong>\u9759\u6001\u6A21\u5757</strong> \u6253\u5305\u5DE5\u5177</p><p>\u9759\u6001\u6A21\u5757\uFF1A\u6307\u7684\u662F\u5F00\u53D1\u9636\u6BB5\uFF0C\u53EF\u4EE5\u88AB <code>webpack</code> \u76F4\u63A5\u5F15\u7528\u7684\u8D44\u6E90\uFF08\u53EF\u4EE5\u76F4\u63A5\u88AB\u83B7\u53D6\u6253\u5305\u8FDB <code>bundle.js</code> \u7684\u8D44\u6E90\uFF09</p><p>\u5F53 <code>webpack</code> \u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u5728\u5185\u90E8\u6784\u5EFA\u4E00\u4E2A\u4F9D\u8D56\u56FE\uFF0C\u6B64\u4F9D\u8D56\u56FE\u5BF9\u5E94\u6620\u5C04\u5230\u9879\u76EE\u6240\u9700\u7684\u6BCF\u4E2A\u6A21\u5757\uFF08\u4E0D\u518D\u5C40\u9650 <code>js\u6587\u4EF6</code>\uFF09\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A\u6216\u591A\u4E2A <code>bundle</code>\uFF08\u5982\u4E0B\u56FE\u6240\u793A\uFF09</p><p><img src="https://static.vue-js.com/9ce194a0-a578-11eb-85f6-6fac77c0c9b3.png" alt="webpack\u529F\u80FD\u793A\u610F\u56FE"></p><h2 id="webpack-\u7684\u80FD\u529B" tabindex="-1">webpack \u7684\u80FD\u529B <a class="header-anchor" href="#webpack-\u7684\u80FD\u529B" aria-hidden="true">#</a></h2><ol><li><strong><code>\u4EE3\u7801\u7F16\u8BD1\u80FD\u529B</code></strong>\uFF0C\u63D0\u9AD8\u6548\u7387\uFF0C\u89E3\u51B3\u6D4F\u89C8\u5668\u517C\u5BB9\u95EE\u9898\uFF08\u5C06\u5F00\u53D1\u9636\u6BB5\u7684 ES6+ \u8BED\u6CD5\u3001TypeScript \u811A\u672C\u7F16\u8BD1\u4E3A ES5 \u4F4E\u7248\u672C\u4EE3\u7801\uFF09</li><li><strong><code>\u6A21\u5757\u6574\u5408\u80FD\u529B</code></strong>\uFF0C\u63D0\u9AD8\u6027\u80FD\uFF0C\u53EF\u7EF4\u62A4\u6027\uFF0C\u89E3\u51B3\u6D4F\u89C8\u5668\u9891\u7E41\u8BF7\u6C42\u6587\u4EF6\u7684\u95EE\u9898\uFF08\u5C06\u591A\u4E2A\u6A21\u5757\u6587\u4EF6\u6253\u5305\u6210\u4E00\u4E2A bundle\uFF09</li><li><strong><code>\u4E07\u7269\u7686\u53EF\u6A21\u5757\u5316</code></strong>\uFF0C\u9879\u76EE\u7EF4\u62A4\u6027\u589E\u5F3A\uFF0C\u652F\u6301\u4E0D\u540C\u79CD\u7C7B\u7684\u524D\u7AEF\u6A21\u5757\u7C7B\u578B\uFF0C\u7EDF\u4E00\u7684\u6A21\u5757\u5316\u65B9\u6848\uFF0C\u6240\u6709\u8D44\u6E90\u6587\u4EF6\u7684\u52A0\u8F7D\u90FD\u53EF\u4EE5\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\uFF08<code>.ts</code>\u3001<code>.js</code>\u3001<code>.png</code>\u3001<code>.scss</code> \u6587\u4EF6\u7B49)</li></ol><h2 id="webpack-\u7684\u6784\u5EFA\u6D41\u7A0B" tabindex="-1">webpack \u7684\u6784\u5EFA\u6D41\u7A0B <a class="header-anchor" href="#webpack-\u7684\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a></h2><p><code>webpack</code> \u7684\u8FD0\u884C\u6D41\u7A0B\u662F\u4E00\u4E2A\u4E32\u884C\u7684\u8FC7\u7A0B\uFF0C\u5B83\u7684\u5DE5\u4F5C\u6D41\u7A0B\u5C31\u662F\u5C06\u5404\u4E2A\u63D2\u4EF6\u4E32\u8054\u8D77\u6765\uFF1B\u5728\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u4F1A <code>\u5E7F\u64AD\u4E8B\u4EF6</code>\uFF0C\u63D2\u4EF6\u53EA\u9700\u8981\u76D1\u542C\u5B83\u6240\u5173\u5FC3\u7684\u4E8B\u4EF6\uFF0C\u5C31\u80FD\u52A0\u5165\u5230\u8FD9\u6761 <code>webpack</code> \u673A\u5236\u4E2D\uFF0C\u53BB\u6539\u53D8 <code>webpack</code> \u7684\u8FD0\u4F5C\uFF0C\u4F7F\u5F97\u6574\u4E2A\u7CFB\u7EDF\u6269\u5C55\u6027\u826F\u597D</p><p>\u4ECE\u542F\u52A8\u5230\u7ED3\u675F\u4F1A\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B\u4E09\u5927\u6B65\u9AA4\uFF1A</p><ol><li><code>\u521D\u59CB\u5316\u6D41\u7A0B</code>\uFF1A\u4ECE\u914D\u7F6E\u6587\u4EF6\u548C Shell \u8BED\u53E5\u4E2D\u8BFB\u53D6\u4E0E\u5408\u5E76\u53C2\u6570\uFF0C\u5E76\u521D\u59CB\u5316\u9700\u8981\u4F7F\u7528\u7684\u63D2\u4EF6\u548C\u914D\u7F6E\u63D2\u4EF6\u7B49\u6267\u884C\u73AF\u5883\u6240\u9700\u8981\u7684\u53C2\u6570</li><li><code>\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B</code>\uFF1A\u4ECE <code>Entry</code> \u51FA\u53D1\uFF0C\u9488\u5BF9\u6BCF\u4E2A <code>Module</code> \u4E32\u884C\u8C03\u7528\u5BF9\u5E94\u7684 <code>Loader</code> \u53BB\u7FFB\u8BD1\u6587\u4EF6\u5185\u5BB9\uFF0C\u518D\u627E\u5230\u8BE5 <code>Module</code> \u4F9D\u8D56\u7684 <code>Module</code>\uFF0C\u9012\u5F52\u5730\u8FDB\u884C\u7F16\u8BD1\u5904\u7406</li><li><code>\u8F93\u51FA\u6D41\u7A0B</code>\uFF1A\u5BF9\u7F16\u8BD1\u540E\u7684 <code>Module</code> \u7EC4\u5408\u6210 <code>Chunk</code>\uFF0C\u628A <code>Chunk</code> \u8F6C\u6362\u6210\u6587\u4EF6\uFF0C\u8F93\u51FA\u5230\u6587\u4EF6\u7CFB\u7EDF</li></ol><h3 id="\u521D\u59CB\u5316\u6D41\u7A0B" tabindex="-1">\u521D\u59CB\u5316\u6D41\u7A0B <a class="header-anchor" href="#\u521D\u59CB\u5316\u6D41\u7A0B" aria-hidden="true">#</a></h3><p>\u4ECE\u914D\u7F6E\u6587\u4EF6\uFF08<code>webpack.config.js</code>\uFF0C\u6216\u8005\u901A\u8FC7\u547D\u4EE4\u7684\u5F62\u5F0F\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\uFF09\u548C <code>shell</code> \u547D\u4EE4\uFF08\u6216\u662F <code>scripts</code> \u914D\u7F6E\u7684\u547D\u4EE4\uFF09\u4E2D\u8BFB\u53D6\u5E76\u5408\u5E76\u53C2\u6570\uFF0C\u5F97\u5230\u6700\u7EC8\u53C2\u6570\u3002\u4E3B\u8981\u4F5C\u7528\u662F\u7528\u4E8E\u6FC0\u6D3B <code>webpack</code> \u7684\u52A0\u8F7D\u9879\uFF08loader\uFF09\u548C\u63D2\u4EF6\uFF08plugin\uFF09</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js \u793A\u4F8B\u914D\u7F6E\u5982\u4E0B</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> HotModuleReplacementPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolvePath</span> <span class="token operator">=</span> <span class="token parameter">pathStr</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> pathStr<span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5165\u53E3\u6587\u4EF6\uFF0C\u662F\u6A21\u5757\u6784\u5EFA\u7684\u8D77\u70B9\uFF0C\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6\u5BF9\u5E94\u6700\u540E\u751F\u6210\u7684\u4E00\u4E2A chunk</span>
    entry<span class="token operator">:</span> <span class="token string">&#39;./src/main.ts&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// entry: {}, // \u591A\u5165\u53E3\u53EF\u914D\u4E3A \u6570\u7EC4/\u5BF9\u8C61 \u683C\u5F0F</span>
    <span class="token comment">// \u6A21\u5757\u6587\u4EF6\u522B\u540D</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
        alias<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;@&#39;</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token string">&#39;@comp&#39;</span><span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">&#39;src/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u751F\u6210\u6587\u4EF6\uFF0C\u662F\u6A21\u5757\u6784\u5EFA\u7684\u7EC8\u70B9\uFF0C\u5305\u62EC\u8F93\u51FA\u6587\u4EF6\u4E0E\u8F93\u51FA\u8DEF\u5F84</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token function">resolvePath</span><span class="token punctuation">(</span><span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        filename<span class="token operator">:</span> <span class="token string">&#39;foo.bundle.js&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u914D\u7F6E loader</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.less$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token punctuation">{</span> loader<span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        loader<span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
                        options<span class="token operator">:</span> <span class="token punctuation">{</span>
                            importLoaders<span class="token operator">:</span> <span class="token number">1</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        loader<span class="token operator">:</span> <span class="token string">&#39;less-loader&#39;</span><span class="token punctuation">,</span>
                        options<span class="token operator">:</span> <span class="token punctuation">{</span>
                            noIeCompat<span class="token operator">:</span> <span class="token boolean">true</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u914D\u7F6E plugin</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">HotModuleReplacementPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><p><code>webpack</code> \u5C06 <code>webpack.config.js</code> \u4E2D\u7684\u914D\u7F6E\u9879\u62F7\u8D1D\u5230 <code>options</code> \u5BF9\u8C61\u4E2D\uFF0C\u5E76\u52A0\u8F7D\u7528\u6237\u914D\u7F6E\u7684 <code>plugins</code></p></li><li><p>\u4E4B\u540E\uFF0C\u5F00\u59CB\u521D\u59CB\u5316 <code>Compiler</code> \u7F16\u8BD1\u5BF9\u8C61\uFF0C\u8BE5\u5BF9\u8C61\u638C\u63A7\u7740 <code>webpack</code> \u751F\u547D\u5468\u671F\uFF0C\u5B9A\u4E49\u4E86\u5F88\u591A\u94A9\u5B50\u51FD\u6570\uFF0C\u4E0D\u6267\u884C\u5177\u4F53\u7684\u4EFB\u52A1\uFF0C\u53EA\u662F\u8FDB\u884C\u4E00\u4E9B\u8C03\u5EA6\u5DE5\u4F5C</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">Compiler</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> options <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>hooks <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            initialize<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u6765\u81EA tapable</span>
            shouldEmit<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncBailHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compilation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            done<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;stats&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            afterDone<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">SyncHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;stats&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            additionalPass<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            beforeRun<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compiler&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            run<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compiler&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            emit<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compilation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            assetEmitted<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;info&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            afterEmit<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">AsyncSeriesHook</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;compilation&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            <span class="token comment">// ... \u5B9A\u4E49\u5F88\u591A\u7C7B\u578B\u7684 \u94A9\u5B50\u51FD\u6570</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">webpack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">create</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6839\u636E Array.isArray(options) \u533A\u5206</span>
        <span class="token comment">// new MultiCompiler(compilers, options)</span>

        <span class="token comment">// new Compiler()</span>
        <span class="token comment">// \u5F97\u5230\u5982\u4E0B compiler \u5BF9\u8C61\uFF0Cwatch \u76D1\u542C\u5F00\u5173\uFF08boolean\uFF09\uFF0CwatchOptions</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchOptions <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u6709 callback \u51FD\u6570\uFF0C\u5219\u5F00\u542F\u76D1\u542C</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> watchOptions <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>watch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            compiler<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>watchOptions<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            compiler<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> stats</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                compiler<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token parameter">err2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                    <span class="token function">callback</span><span class="token punctuation">(</span>err <span class="token operator">||</span> err2<span class="token punctuation">,</span> stats<span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> compiler <span class="token comment">// \u8FD4\u56DE compiler \u5BF9\u8C61</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> compiler<span class="token punctuation">,</span> watch <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> compiler
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h3 id="\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B" tabindex="-1">\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B <a class="header-anchor" href="#\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B" aria-hidden="true">#</a></h3><ul><li><p>\u6839\u636E\u914D\u7F6E\u4E2D\u7684 <code>entry</code> \u627E\u51FA\u6240\u6709\u7684\u5165\u53E3\u6587\u4EF6</p></li><li><p>\u521D\u59CB\u5316\u5B8C\u6210\u540E\uFF0C\u8C03\u7528 <code>compiler.watch</code> / <code>compiler.run</code> \u6765\u542F\u52A8\u7F16\u8BD1\u6784\u5EFA\u6D41\u7A0B\uFF0C\u4E3B\u8981\u6D41\u7A0B\u4E3A\uFF1A</p><ul><li><code>compile</code> \u5F00\u59CB\u7F16\u8BD1</li><li><code>make</code> \u4ECE\u5165\u53E3\u70B9\u5206\u6790\u6A21\u5757\u53CA\u5176\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u521B\u5EFA\u8FD9\u4E9B\u6A21\u5757\u5BF9\u8C61</li><li><code>build-module</code> \u6784\u5EFA\u6A21\u5757</li><li><code>seal</code> \u5C01\u88C5\u6784\u5EFA\u7ED3\u679C</li><li><code>emit</code> \u628A\u5404\u4E2Achunk\u8F93\u51FA\u5230\u7ED3\u679C\u6587\u4EF6</li></ul></li><li><p><code>compile</code> \u7F16\u8BD1</p><blockquote><p>\u4E3B\u8981\u662F\u6784\u5EFA\u4E00\u4E2A <code>Compilation</code> \u5BF9\u8C61\uFF0C\u5B83\u662F\u7F16\u8BD1\u9636\u6BB5\u7684\u4E3B\u8981\u6267\u884C\u8005\uFF0C\u4E3B\u8981\u4F1A\u4F9D\u6B21\u8FDB\u884C <code>\u6267\u884C\u6A21\u5757\u521B\u5EFA</code>\u3001<code>\u4F9D\u8D56\u6536\u96C6</code>\u3001<code>\u5206\u5757</code>\u3001<code>\u6253\u5305</code> \u7B49\u4E3B\u8981\u4EFB\u52A1\u7684\u5BF9\u8C61</p></blockquote></li><li><p><code>make</code> \u7F16\u8BD1\u6A21\u5757</p><blockquote><p>\u5F97\u5230 <code>Compilation</code> \u5BF9\u8C61\u540E\uFF0C\u5C31\u5F00\u59CB\u4ECE <code>entry</code> \u5165\u53E3\u6587\u4EF6\u5F00\u59CB\u8BFB\u53D6\uFF0C\u4E3B\u8981\u6267\u884C <code>addModuleChain</code>\uFF0C\u6267\u884C <code>buildModule</code> \u8FDB\u5165\u771F\u6B63\u7684\u6784\u5EFA\u6A21\u5757 <code>module</code> \u5185\u5BB9\u7684\u8FC7\u7A0B</p></blockquote></li><li><p><code>build-module</code> \u5B8C\u6210\u6A21\u5757\u7F16\u8BD1</p><blockquote><p>\u4E3B\u8981\u8C03\u7528\u914D\u7F6E\u7684 <code>loaders</code>\uFF0C\u5C06\u6211\u4EEC\u7684\u6A21\u5757\u8F6C\u6210\u6807\u51C6\u7684 <code>JS\u6A21\u5757</code>\uFF0C\u5728\u7528Loader \u5BF9\u4E00\u4E2A\u6A21\u5757\u8F6C\u6362\u5B8C\u540E\uFF0C\u4F7F\u7528 <code>acorn</code> \u89E3\u6790\u8F6C\u6362\u540E\u7684\u5185\u5BB9\uFF0C\u8F93\u51FA\u5BF9\u5E94\u7684\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08<code>AST</code>\uFF09\uFF0C\u4EE5\u65B9\u4FBF <code>Webpack</code> \u540E\u9762\u5BF9\u4EE3\u7801\u7684\u5206\u6790\uFF1B\u4ECE\u914D\u7F6E\u7684\u5165\u53E3\u6A21\u5757\u5F00\u59CB\uFF0C\u5206\u6790\u5176 <code>AST</code>\uFF0C\u5F53\u9047\u5230 <code>require</code> \u7B49\u5BFC\u5165\u5176\u5B83\u6A21\u5757\u8BED\u53E5\u65F6\uFF0C\u4FBF\u5C06\u5176\u52A0\u5165\u5230\u4F9D\u8D56\u7684\u6A21\u5757\u5217\u8868\uFF0C\u540C\u65F6\u5BF9\u65B0\u627E\u51FA\u7684\u4F9D\u8D56\u6A21\u5757\u9012\u5F52\u5206\u6790\uFF0C\u6700\u7EC8\u641E\u6E05 <code>\u6240\u6709\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB</code></p></blockquote></li></ul><h3 id="\u8F93\u51FA\u6D41\u7A0B" tabindex="-1">\u8F93\u51FA\u6D41\u7A0B <a class="header-anchor" href="#\u8F93\u51FA\u6D41\u7A0B" aria-hidden="true">#</a></h3><ul><li><p><code>seal</code> \u8F93\u51FA\u8D44\u6E90</p><blockquote><p>\u4E3B\u8981\u662F\u8981\u751F\u6210chunks\uFF0C\u5BF9chunks\u8FDB\u884C\u4E00\u7CFB\u5217\u7684\u4F18\u5316\u64CD\u4F5C\uFF0C\u5E76\u751F\u6210\u8981\u8F93\u51FA\u7684\u4EE3\u7801\uFF1B<code>webpack</code> \u4F1A\u6839\u636E\u5165\u53E3\u548C\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u7EC4\u88C5\u6210\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684 Chunk\uFF0C\u518D\u628A\u6BCF\u4E2A Chunk \u8F6C\u6362\u6210\u4E00\u4E2A\u5355\u72EC\u7684\u6587\u4EF6\u52A0\u5165\u5230\u8F93\u51FA\u5217\u8868</p></blockquote></li><li><p><code>emit</code> \u8F93\u51FA\u5B8C\u6210</p><blockquote><p>\u6839\u636E <code>webpack.config.js</code> <code>output</code> \u914D\u7F6E\u786E\u5B9A\u8F93\u51FA\u7684\u8DEF\u5F84\u548C\u6587\u4EF6\u540D\uFF1B\u5728 <code>Compiler</code> \u5F00\u59CB\u751F\u6210\u6587\u4EF6\u524D\uFF0C\u94A9\u5B50 <code>emit</code> \u4F1A\u88AB\u6267\u884C\uFF0C\u8FD9\u662F\u6211\u4EEC\u4FEE\u6539\u6700\u7EC8\u6587\u4EF6\u7684 <code>\u6700\u540E\u4E00\u4E2A\u673A\u4F1A</code></p></blockquote></li></ul><p>\u793A\u610F\u56FE\u5982\u4E0B\uFF1A</p><p><img src="https://static.vue-js.com/d77fc560-a658-11eb-85f6-6fac77c0c9b3.png" alt="\u6253\u5305\u6D41\u7A0B\u793A\u610F\u56FE"></p><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3>__VP_STATIC_END__`,30),e=[t];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var w=n(p,[["render",c]]);export{h as __pageData,w as default};
