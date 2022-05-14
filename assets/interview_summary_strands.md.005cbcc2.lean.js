import{_ as a,c as s,d as n,b as e,o}from"./app.8ece6300.js";const m='{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E8C\uFF09","description":"","frontmatter":{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E8C\uFF09"},"headers":[{"level":3,"title":"1. webpack \u4E0E rollup \u7684\u533A\u522B\uFF1Fwebpack5 \u4E0E webpack4\uFF1F","slug":"_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F"},{"level":3,"title":"2. composition-api \u4E0E hooks \u7684\u5F02\u540C\u70B9\uFF1F","slug":"_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F"},{"level":3,"title":"3. vue \u4E2D\u7684 jsx \u4E0E react \u7684 jsx \u533A\u522B\uFF1F","slug":"_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F"},{"level":3,"title":"4. \u8BF4\u8BF4 XSS \u653B\u51FB\u4E0E\u9632\u8303\uFF1F","slug":"_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F"},{"level":3,"title":"5. \u8BF4\u8BF4 cors \u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F","slug":"_5-\u8BF4\u8BF4-cors-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F"},{"level":3,"title":"6. devOps\uFF08\u5982 jenkins \u7B49\uFF09","slug":"_6-devops\uFF08\u5982-jenkins-\u7B49\uFF09"},{"level":3,"title":"7. \u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09","slug":"_7-\u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09"},{"level":3,"title":"8. \u8BF4\u4E00\u8BF4 qiankun \u7684\u8DEF\u7531\u5339\u914D\u539F\u7406","slug":"_8-\u8BF4\u4E00\u8BF4-qiankun-\u7684\u8DEF\u7531\u5339\u914D\u539F\u7406"}],"relativePath":"interview/summary/strands.md","lastUpdated":1652523975399}',t={},p=e(`__VP_STATIC_START__<h3 id="_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F" tabindex="-1">1. webpack \u4E0E rollup \u7684\u533A\u522B\uFF1Fwebpack5 \u4E0E webpack4\uFF1F <a class="header-anchor" href="#_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F" aria-hidden="true">#</a></h3><h4 id="webpack-vs-rollup\uFF1A" tabindex="-1"><code>webpack</code> vs <code>rollup</code>\uFF1A <a class="header-anchor" href="#webpack-vs-rollup\uFF1A" aria-hidden="true">#</a></h4><p><code>webpack</code> \u6700\u521D\u7528\u4E8E\u6784\u5EFA\u590D\u6742\u7684\u5355\u9875\u5E94\u7528\u7A0B\u5E8F\uFF08SPA\uFF09\uFF0C\u7279\u522B\u662F\u5B83\u7684\u4E24\u4E2A\u7279\u6027\uFF1A</p><ul><li><p><strong>\u4EE3\u7801\u62C6\u5206\uFF08Code Splitting\uFF09</strong>\uFF1A\u53EF\u4EE5\u5C06\u5E94\u7528\u7A0B\u5E8F\u5206\u89E3\u6210\u53EF\u7BA1\u7406\u7684\u4EE3\u7801\u5757</p></li><li><p><strong>\u9759\u6001\u8D44\u6E90\u5BFC\u5165\uFF08Static Assets\uFF09</strong>\uFF1A\u5982\u56FE\u50CF\u3001CSS \u8D44\u6E90\uFF0C\u6211\u4EEC\u65E0\u9700\u5173\u5FC3\u5B83\u4EEC\u662F\u4E0D\u662F\u5728\u6B63\u786E\u7684\u9879\u76EE\u76EE\u5F55\uFF0C\u4E5F\u4E0D\u7528\u5173\u5FC3\u6587\u4EF6 URL \u7684 hash \u503C\u95EE\u9898</p></li></ul><p><code>rollup</code> \u662F\u4E00\u4E2A\u6A21\u5757\u5316\u6253\u5305\u5DE5\u5177\uFF0C\u4E13\u95E8\u9488\u5BF9\u4E8E\u7C7B\u5E93\u6253\u5305\uFF0C\u5728\u6253\u5305\u65F6\u9ED8\u8BA4\u8FDB\u884C <code>Tree-shaking</code>\uFF0C\u6240\u4EE5\u6253\u5305\u540E\u7684\u6587\u4EF6\u4F53\u79EF\u76F8\u6BD4 webpack \u4F1A\u5C0F\u5F88\u591A\u3002\u5B83\u5229\u7528 <code>ES2015</code> \u5DE7\u5999\u7684\u6A21\u5757\u8BBE\u8BA1\uFF0C\u5C3D\u53EF\u80FD\u9AD8\u6548\u5730\u6784\u5EFA\u51FA\u80FD\u591F\u76F4\u63A5\u88AB\u5176\u5B83 JavaScript \u5E93\u5F15\u7528\u7684\u6A21\u5757</p><p>rollup \u867D\u8BF4\u53EF\u4EE5\u901A\u8FC7\u63D2\u4EF6\u673A\u5236\u5904\u7406\u5927\u591A\u6570\u7684 CommonJS \u6A21\u5757\uFF0C\u4F46\u6709\u4E9B\u4E1C\u897F\u786E\u5B9E\u65E0\u6CD5\u8F6C\u6362\u4E3A ES2015 \u8BED\u6CD5\uFF0C\u4E5F\u4E0D\u652F\u6301 HMR\uFF08\u70ED\u6A21\u5757\u66FF\u6362 / \u70ED\u66F4\u65B0\uFF09\uFF1B\u800C webpack \u901A\u8FC7\u5C06\u6A21\u5757\u5C01\u88C5\u6210\u4E00\u4E2A\u4E2A\u51FD\u6570\u7684\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u5904\u7406\u4EFB\u4F55\u4F60\u4E22\u7ED9\u5B83\u7684\u4E1C\u897F</p><h4 id="webpack5-vs-webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0-v5\uFF0Cv4\uFF09\uFF1A" tabindex="-1"><code>webpack5</code> vs <code>webpack4</code>\uFF08\u4EE5\u4E0B\u7B80\u79F0 v5\uFF0Cv4\uFF09\uFF1A <a class="header-anchor" href="#webpack5-vs-webpack4\uFF08\u4EE5\u4E0B\u7B80\u79F0-v5\uFF0Cv4\uFF09\uFF1A" aria-hidden="true">#</a></h4><ul><li><p>\u65B0\u589E <code>Tree-shaking</code> \u529F\u80FD</p><div class="language-js"><pre><code><span class="token comment">// webpack.config.js \u914D\u7F6E\u5F00\u542F</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        usedExports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u53EA\u5BFC\u51FA\u88AB\u4F7F\u7528\u7684\u6A21\u5757</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7531\u4E8E <code>CommonJS</code> \u662F\u52A8\u6001\u5BFC\u5165\uFF0C<code>Tree-shaking</code> \u662F\u53EA\u80FD\u5DE5\u4F5C\u5728\u9759\u6001\u7F16\u8BD1\u9636\u6BB5\u7684\u4EE3\u7801\u4F18\u5316\u65B9\u6848\uFF0C\u56E0\u800C\u53EA\u652F\u6301 <code>ES6 Module</code>\uFF0C\u56E0\u800C\u5728 <code>babel-loader</code> \u9884\u8BBE\u73AF\u5883\u9700\u8981\u914D\u7F6E</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;@babel/preset-env&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@babel/preset-react&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;@babel/preset-typescript&quot;</span><span class="token punctuation">,</span>
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
</code></pre></div></li><li></li></ul><h3 id="_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F" tabindex="-1">2. composition-api \u4E0E hooks \u7684\u5F02\u540C\u70B9\uFF1F <a class="header-anchor" href="#_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F" aria-hidden="true">#</a></h3><p>react \u5BF9 hook \u7684\u5B9A\u4E49\u662F\uFF1A</p><blockquote><p>\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 class \u7684\u60C5\u51B5\u4E0B\uFF0C\u8BA9\u4F60\u5728\u51FD\u6570\u7EC4\u4EF6\u91CC \u201C\u94A9\u5165\u201D React state \u53CA\u751F\u547D\u5468\u671F\u7B49\u7279\u6027\u7684\u51FD\u6570</p></blockquote><p>vue \u7684 composition-api\uFF08\u6211\u4EEC\u4E5F\u53EF\u79F0\u4E3A <code>Vue Hooks</code>\uFF09\uFF1A</p><p>\u5B83\u53D7\u5230\u4E86 React Hooks \u7684\u542F\u53D1\uFF0C\u4F46\u4E5F\u6709\u4E9B\u4E0D\u540C\uFF0C\u89C4\u907F\u4E86\u4E00\u4E9B react \u7684\u95EE\u9898</p><p>\u5728 hook \u601D\u60F3\u51FA\u6765\u4E4B\u524D\uFF0C\u9488\u5BF9\u4E1A\u52A1\u4E0A\u7684\u903B\u8F91\u590D\u7528\u529F\u80FD\uFF1Avue \u91C7\u7528 mixins \u65B9\u6848\uFF0Creact \u91C7\u7528 <code>render props</code>\u3001\u9AD8\u9636\u7EC4\u4EF6 \u7684\u65B9\u6848\u5904\u7406</p><ul><li>mixins \u4E0E\u7EC4\u4EF6\u4E4B\u524D\u662F\u9690\u5F0F\u4F9D\u8D56\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF08\u6BD4\u5982\u6211\u4EEC\u5B9A\u4E49\u7684\u65B9\u6CD5\u540D\u3001\u6570\u636E\u540D\u91CD\u540D\u7684\u60C5\u51B5\uFF09</li><li>\u9AD8\u9636\u7EC4\u4EF6\u548C <code>render props</code> \u5BB9\u6613\u5BFC\u81F4\u7EC4\u4EF6\u5D4C\u5957\u5C42\u6B21\u8FC7\u6DF1\uFF0C\u589E\u5927\u590D\u6742\u5EA6\u548C\u7EF4\u62A4\u6210\u672C</li></ul><p>\u4E0D\u540C\u70B9\uFF1A</p><ol><li><p>React Hooks \u662F\u57FA\u4E8E <code>\u94FE\u8868</code> \u5B9E\u73B0\u7684\uFF0C\u4E0D\u80FD\u5728\u5FAA\u73AF\u5185\u90E8\u3001\u6761\u4EF6\u8BED\u53E5\u4E2D\u6216\u5D4C\u5957\u51FD\u6570\u91CC\u8C03\u7528 Hooks\uFF1BVue Hooks \u5B9A\u4E49\u5728 <code>setup</code> \u51FD\u6570\u4E2D\uFF0C\u7531\u4E8E\u5B83\u6570\u636E\u7684\u54CD\u5E94\u5F0F\u662F\u57FA\u4E8E <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy</a> \u5B9E\u73B0\u7684\uFF0C\u53EA\u8981\u66F4\u6539\u6570\u636E\u5C31\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u4F9D\u8D56\u51FD\u6570\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u6240\u4EE5\u907F\u5F00\u4E86 react \u53EF\u80FD\u9047\u5230\u7684\u6027\u80FD\u95EE\u9898</p></li><li><p>\u4EE3\u7801\u6267\u884C\u65F6\u673A\uFF1AReact hooks \u5728\u7EC4\u4EF6\u6BCF\u6B21\u6E32\u67D3\u65F6\u90FD\u4F1A\u8FD0\u884C\uFF1BVue Hooks \u5B9A\u4E49\u5728 <code>setup()</code> \u51FD\u6570\u4E2D\uFF0C\u5B83\u4F1A\u65E9\u4E8E <code>beforeCreate</code> \u548C <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E14\u4EC5\u6267\u884C\u4E00\u6B21</p></li><li><p>React \u4F7F\u7528 <code>useState</code> Hook \u6765\u58F0\u660E\u6570\u636E\uFF0C\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u6570\u636E\u521D\u59CB\u503C\uFF08\u53EA\u4F1A\u5728\u521D\u6B21\u8FD0\u884C\u8FD9\u4E2A\u51FD\u6570\u65F6\u4F7F\u7528\u8FD9\u4E2A\u503C\u8FDB\u884C\u521D\u59CB\u5316\uFF09\uFF1BVue \u4E2D\u4F7F\u7528 <code>ref</code> \u548C <code>reactive</code> \u8FD9\u4E24\u4E2A\u51FD\u6570\u6765\u5B9A\u4E49\u6570\u636E</p></li></ol><h3 id="_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F" tabindex="-1">3. vue \u4E2D\u7684 jsx \u4E0E react \u7684 jsx \u533A\u522B\uFF1F <a class="header-anchor" href="#_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F" aria-hidden="true">#</a></h3><p>vue \u7EC4\u4EF6\u4F7F\u7528 jsx \u9700\u8981\u4F7F\u7528\u63D2\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0Creact \u7EC4\u4EF6\u4E2D\u662F\u9ED8\u8BA4\u652F\u6301\u7684</p><p>vue template \u4E0E react jsx \u7684\u533A\u522B\uFF1A</p><p>vue \u4E2D\u63D0\u4F9B\u4E00\u7CFB\u5217\u6307\u4EE4\u5E2E\u52A9\u6211\u4EEC\u6784\u5EFA\u9875\u9762</p><h3 id="_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F" tabindex="-1">4. \u8BF4\u8BF4 XSS \u653B\u51FB\u4E0E\u9632\u8303\uFF1F <a class="header-anchor" href="#_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F" aria-hidden="true">#</a></h3><p><code>XSS</code> \u653B\u51FB\uFF08<code>Cross-Site Scripting</code>\uFF0C\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF09\uFF0C\u5B83\u662F\u9875\u9762\u4E2D\u88AB\u6CE8\u5165\u4E86\u6076\u610F\u7684\u4EE3\u7801</p>__VP_STATIC_END__`,23),c=e('',9);function l(r,i,d,u,k,h){return o(),s("div",null,[p,n(" \u5B83\u662F\u6CE8\u5165\u653B\u51FB\u7684\u4E00\u79CD\uFF0C\u653B\u51FB\u8005\u901A\u8FC7\u5C06\u4EE3\u7801\u6CE8\u5165\u88AB\u653B\u51FB\u8005\u7684\u7F51\u7AD9\u4E2D\uFF0C\u7528\u6237\u4E00\u65E6\u8BBF\u95EE\u8BBF\u95EE\u7F51\u9875\u4FBF\u4F1A\u6267\u884C\u88AB\u6CE8\u5165\u7684\u6076\u610F\u811A\u672C\u3002XSS \u653B\u51FB\u4E3B\u8981\u5206\u4E3A\u53CD\u5C04\u6027 XSS \u653B\u51FB\uFF08`Reflected XSS attack`\uFF09\u3001\u5B58\u50A8\u578B XSS \u653B\u51FB\uFF08`Stored XSS Attack`\uFF09\u548C `DOM Based XSS`\n\n\u53CD\u5C04\u578B XSS \u53EA\u662F\u7B80\u5355\u7684\u628A\u7528\u6237\u8F93\u5165\u7684\u6570\u636E \u201C\u53CD\u5C04\u201D \u7ED9\u6D4F\u89C8\u5668 "),c])}var _=a(t,[["render",l]]);export{m as __pageData,_ as default};
