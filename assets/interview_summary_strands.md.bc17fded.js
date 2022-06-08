import{_ as o,c,d as a,e,o as d}from"./app.92083ccd.js";const S='{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E8C\uFF09","description":"","frontmatter":{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E8C\uFF09"},"headers":[{"level":3,"title":"1. webpack \u4E0E rollup \u7684\u533A\u522B\uFF1Fwebpack5 \u4E0E webpack4\uFF1F","slug":"_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F"},{"level":3,"title":"2. composition-api \u4E0E hooks \u7684\u5F02\u540C\u70B9\uFF1F","slug":"_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F"},{"level":3,"title":"3. vue \u4E2D\u7684 jsx \u4E0E react \u7684 jsx \u533A\u522B\uFF1F","slug":"_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F"},{"level":3,"title":"4. \u8BF4\u8BF4 XSS \u653B\u51FB\u4E0E\u9632\u8303\uFF1F","slug":"_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F"},{"level":3,"title":"5. DNS \u52AB\u6301","slug":"_5-dns-\u52AB\u6301"},{"level":3,"title":"6. \u8BF4\u8BF4 cors \u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F","slug":"_6-\u8BF4\u8BF4-cors-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F"},{"level":3,"title":"7. devOps\uFF08\u5982 jenkins \u7B49\uFF09","slug":"_7-devops\uFF08\u5982-jenkins-\u7B49\uFF09"},{"level":3,"title":"8. \u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09","slug":"_8-\u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09"},{"level":3,"title":"9. \u8BF4\u4E00\u8BF4 qiankun \u7684\u8DEF\u7531\u5339\u914D\u539F\u7406","slug":"_9-\u8BF4\u4E00\u8BF4-qiankun-\u7684\u8DEF\u7531\u5339\u914D\u539F\u7406"}],"relativePath":"interview/summary/strands.md","lastUpdated":1654649272557}',t={},r=e('<h3 id="_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F" tabindex="-1">1. webpack \u4E0E rollup \u7684\u533A\u522B\uFF1Fwebpack5 \u4E0E webpack4\uFF1F <a class="header-anchor" href="#_1-webpack-\u4E0E-rollup-\u7684\u533A\u522B\uFF1Fwebpack5-\u4E0E-webpack4\uFF1F" aria-hidden="true">#</a></h3><p>\u89C1 <a href="/knowledge/engineering/webpack.html">\u94FE\u63A5\u27A1\uFE0F</a></p><h3 id="_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F" tabindex="-1">2. composition-api \u4E0E hooks \u7684\u5F02\u540C\u70B9\uFF1F <a class="header-anchor" href="#_2-composition-api-\u4E0E-hooks-\u7684\u5F02\u540C\u70B9\uFF1F" aria-hidden="true">#</a></h3><p>react \u5BF9 hook \u7684\u5B9A\u4E49\u662F\uFF1A</p><blockquote><p>\u5B83\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E0D\u7F16\u5199 class \u7684\u60C5\u51B5\u4E0B\uFF0C\u8BA9\u4F60\u5728\u51FD\u6570\u7EC4\u4EF6\u91CC \u201C\u94A9\u5165\u201D React state \u53CA\u751F\u547D\u5468\u671F\u7B49\u7279\u6027\u7684\u51FD\u6570</p></blockquote><p>vue \u7684 composition-api\uFF08\u6211\u4EEC\u4E5F\u53EF\u79F0\u4E3A <code>Vue Hooks</code>\uFF09\uFF1A</p><p>\u5B83\u53D7\u5230\u4E86 React Hooks \u7684\u542F\u53D1\uFF0C\u4F46\u4E5F\u6709\u4E9B\u4E0D\u540C\uFF0C\u89C4\u907F\u4E86\u4E00\u4E9B react \u7684\u95EE\u9898</p><p>\u5728 hook \u601D\u60F3\u51FA\u6765\u4E4B\u524D\uFF0C\u9488\u5BF9\u4E1A\u52A1\u4E0A\u7684\u903B\u8F91\u590D\u7528\u529F\u80FD\uFF1Avue \u91C7\u7528 mixins \u65B9\u6848\uFF0Creact \u91C7\u7528 <code>render props</code>\u3001\u9AD8\u9636\u7EC4\u4EF6 \u7684\u65B9\u6848\u5904\u7406</p><ul><li>mixins \u4E0E\u7EC4\u4EF6\u4E4B\u524D\u662F\u9690\u5F0F\u4F9D\u8D56\uFF0C\u53EF\u80FD\u4F1A\u4EA7\u751F\u51B2\u7A81\uFF08\u6BD4\u5982\u6211\u4EEC\u5B9A\u4E49\u7684\u65B9\u6CD5\u540D\u3001\u6570\u636E\u540D\u91CD\u540D\u7684\u60C5\u51B5\uFF09</li><li>\u9AD8\u9636\u7EC4\u4EF6\u548C <code>render props</code> \u5BB9\u6613\u5BFC\u81F4\u7EC4\u4EF6\u5D4C\u5957\u5C42\u6B21\u8FC7\u6DF1\uFF0C\u589E\u5927\u590D\u6742\u5EA6\u548C\u7EF4\u62A4\u6210\u672C</li></ul><p>\u4E0D\u540C\u70B9\uFF1A</p><ol><li><p>React Hooks \u662F\u57FA\u4E8E <code>\u94FE\u8868</code> \u5B9E\u73B0\u7684\uFF0C\u4E0D\u80FD\u5728\u5FAA\u73AF\u5185\u90E8\u3001\u6761\u4EF6\u8BED\u53E5\u4E2D\u6216\u5D4C\u5957\u51FD\u6570\u91CC\u8C03\u7528 Hooks\uFF1BVue Hooks \u5B9A\u4E49\u5728 <code>setup</code> \u51FD\u6570\u4E2D\uFF0C\u7531\u4E8E\u5B83\u6570\u636E\u7684\u54CD\u5E94\u5F0F\u662F\u57FA\u4E8E <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy" target="_blank" rel="noopener noreferrer">Proxy</a> \u5B9E\u73B0\u7684\uFF0C\u53EA\u8981\u66F4\u6539\u6570\u636E\u5C31\u4F1A\u89E6\u53D1\u5BF9\u5E94\u7684\u4F9D\u8D56\u51FD\u6570\u6267\u884C\u66F4\u65B0\u64CD\u4F5C\uFF0C\u6240\u4EE5\u907F\u5F00\u4E86 react \u53EF\u80FD\u9047\u5230\u7684\u6027\u80FD\u95EE\u9898</p></li><li><p>\u4EE3\u7801\u6267\u884C\u65F6\u673A\uFF1AReact hooks \u5728\u7EC4\u4EF6\u6BCF\u6B21\u6E32\u67D3\u65F6\u90FD\u4F1A\u8FD0\u884C\uFF1BVue Hooks \u5B9A\u4E49\u5728 <code>setup()</code> \u51FD\u6570\u4E2D\uFF0C\u5B83\u4F1A\u65E9\u4E8E <code>beforeCreate</code> \u548C <code>created</code> \u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u4E14\u4EC5\u6267\u884C\u4E00\u6B21</p></li><li><p>React \u4F7F\u7528 <code>useState</code> Hook \u6765\u58F0\u660E\u6570\u636E\uFF0C\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u4F5C\u4E3A\u6570\u636E\u521D\u59CB\u503C\uFF08\u53EA\u4F1A\u5728\u521D\u6B21\u8FD0\u884C\u8FD9\u4E2A\u51FD\u6570\u65F6\u4F7F\u7528\u8FD9\u4E2A\u503C\u8FDB\u884C\u521D\u59CB\u5316\uFF09\uFF1BVue \u4E2D\u4F7F\u7528 <code>ref</code> \u548C <code>reactive</code> \u8FD9\u4E24\u4E2A\u51FD\u6570\u6765\u5B9A\u4E49\u6570\u636E</p></li></ol><h3 id="_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F" tabindex="-1">3. vue \u4E2D\u7684 jsx \u4E0E react \u7684 jsx \u533A\u522B\uFF1F <a class="header-anchor" href="#_3-vue-\u4E2D\u7684-jsx-\u4E0E-react-\u7684-jsx-\u533A\u522B\uFF1F" aria-hidden="true">#</a></h3><p>vue \u7EC4\u4EF6\u4F7F\u7528 jsx \u9700\u8981\u4F7F\u7528\u63D2\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0Creact \u7EC4\u4EF6\u4E2D\u662F\u9ED8\u8BA4\u652F\u6301\u7684</p><p>vue template \u4E0E react jsx \u7684\u533A\u522B\uFF1A</p><p>vue \u4E2D\u63D0\u4F9B\u4E00\u7CFB\u5217\u6307\u4EE4\u5E2E\u52A9\u6211\u4EEC\u6784\u5EFA\u9875\u9762</p><h3 id="_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F" tabindex="-1">4. \u8BF4\u8BF4 XSS \u653B\u51FB\u4E0E\u9632\u8303\uFF1F <a class="header-anchor" href="#_4-\u8BF4\u8BF4-xss-\u653B\u51FB\u4E0E\u9632\u8303\uFF1F" aria-hidden="true">#</a></h3><p><code>XSS</code> \u653B\u51FB\uFF08<code>Cross-Site Scripting</code>\uFF0C\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\uFF09\uFF0C\u5B83\u662F\u9875\u9762\u4E2D\u88AB\u6CE8\u5165\u4E86\u6076\u610F\u7684\u4EE3\u7801</p>',17),s=e('<p>\u4E00\u822C\uFF0CXSS \u653B\u51FB\u6709\u4E0B\u5217\u6CE8\u5165\u65B9\u5F0F\uFF1A</p><ul><li>\u5728 HTML \u4E2D\u5185\u5D4C\u7684\u6587\u672C\u4E2D\uFF0C\u6076\u610F\u5185\u5BB9\u4EE5 script \u6807\u7B7E\u5F62\u6210\u6CE8\u5165</li><li>\u5728\u5185\u8054\u7684 JavaScript \u4E2D\uFF0C\u62FC\u63A5\u7684\u6570\u636E\u7A81\u7834\u4E86\u539F\u672C\u7684\u9650\u5236\uFF08\u5B57\u7B26\u4E32\uFF0C\u53D8\u91CF\uFF0C\u65B9\u6CD5\u540D\u7B49\uFF09</li><li>\u5728\u6807\u7B7E\u5C5E\u6027\u4E2D\uFF0C\u6076\u610F\u5185\u5BB9\u5305\u542B\u5F15\u53F7\uFF0C\u4ECE\u800C\u7A81\u7834\u5C5E\u6027\u503C\u7684\u9650\u5236\uFF0C\u6CE8\u5165\u5176\u4ED6\u5C5E\u6027\u6216\u8005\u6807\u7B7E</li><li>\u5728\u6807\u7B7E\u7684 href\u3001src \u7B49\u5C5E\u6027\u4E2D\uFF0C\u5305\u542B <code>javascript:</code> \u7B49\u53EF\u6267\u884C\u4EE3\u7801</li><li>\u5728 onload\u3001onerror\u3001onclick \u7B49\u4E8B\u4EF6\u4E2D\uFF0C\u6CE8\u5165\u4E0D\u53D7\u63A7\u5236\u4EE3\u7801</li><li>\u5728 style \u5C5E\u6027\u548C\u6807\u7B7E\u4E2D\uFF0C\u5305\u542B\u7C7B\u4F3C <code>background-image:url(&quot;javascript:...&quot;);</code> \u7684\u4EE3\u7801\uFF08\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u5DF2\u7ECF\u53EF\u4EE5\u9632\u8303\uFF09</li><li>\u5728 style \u5C5E\u6027\u548C\u6807\u7B7E\u4E2D\uFF0C\u5305\u542B\u7C7B\u4F3C <code>expression(...)</code> \u7684 CSS \u8868\u8FBE\u5F0F\u4EE3\u7801\uFF08\u65B0\u7248\u672C\u6D4F\u89C8\u5668\u5DF2\u7ECF\u53EF\u4EE5\u9632\u8303\uFF09</li></ul><p>\u9632\u8303\u624B\u6BB5\uFF08\u53EF\u80FD\u5E76\u4E0D\u5168\u9762\uFF09\uFF1A</p><ul><li><p><code>\u8F93\u5165\u8FC7\u6EE4</code>\uFF0C\u8FD9\u4E5F\u4EC5\u9650\u4E8E\u660E\u786E\u7C7B\u578B\u7684\u7528\u6237\u8F93\u5165\uFF0C\u6BD4\u5982 <code>\u6570\u5B57</code>\u3001<code>URL</code>\u3001<code>\u90AE\u7BB1</code> \u7B49\u5185\u5BB9\u8FDB\u884C\u5FC5\u8981\u7684\u8FC7\u6EE4\u5904\u7406</p></li><li><p><code>\u8F93\u5165\u957F\u5EA6\u9650\u5236</code>\uFF0C\u867D\u4E0D\u80FD\u5B8C\u5168\u9632\u6B62\uFF0C\u4F46\u53EF\u4EE5\u589E\u52A0 XSS \u653B\u51FB\u7684\u96BE\u5EA6</p></li><li><p><code>\u505A\u7EAF\u524D\u7AEF\u6E32\u67D3</code>\uFF0C\u5C06\u6570\u636E\u4E0E\u4EE3\u7801\u5206\u9694\u5F00\uFF0C\u5BF9 HTML \u505A\u5145\u5206 <code>\u8F6C\u4E49</code>\uFF08\u8F93\u51FA HTML \u65F6\u8FDB\u884C\uFF09</p></li><li><p>\u7EAF\u524D\u7AEF\u6E32\u67D3\u65B9\u6848\u4E2D\uFF0C\u5C3D\u91CF\u91C7\u7528 <code>.innerText</code>\u3001<code>.textContent</code>\u3001<code>.setAttribute</code> \u7B49 API\uFF0C\u907F\u514D\u4F7F\u7528 <code>.innerHTML</code>\u3001<code>.outerHTML</code>\u3001<code>.document.write()</code> \u7B49 API\uFF1B\u5728 vue/react \u6846\u67B6\u4E2D\uFF0C\u907F\u514D\u4F7F\u7528 <code>v-html</code>/<code>dangerouslySetInnerHTML</code> \u529F\u80FD\uFF1B\u6CE8\u610F\u5173\u6CE8 DOM \u5185\u8054\u4E8B\u4EF6\u6216 <code>&lt;a&gt;</code> \u6807\u7B7E\u7684 <code>href</code> \u5C5E\u6027\uFF0Cjs \u7684 <code>eval()</code>\u3001<code>setTimeout()</code>\u3001<code>setImmediate()</code>\u3001<code>setInterval()</code> \u7B49 API \u5747\u80FD\u5C06 <strong>\u5B57\u7B26\u4E32</strong> \u4F5C\u4E3A\u4EE3\u7801\u76F4\u63A5\u6267\u884C</p></li></ul><h3 id="_5-dns-\u52AB\u6301" tabindex="-1">5. DNS \u52AB\u6301 <a class="header-anchor" href="#_5-dns-\u52AB\u6301" aria-hidden="true">#</a></h3><h3 id="_6-\u8BF4\u8BF4-cors-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F" tabindex="-1">6. \u8BF4\u8BF4 cors \u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F <a class="header-anchor" href="#_6-\u8BF4\u8BF4-cors-\u8DE8\u7AD9\u811A\u672C\u653B\u51FB\u9632\u8303\uFF1F" aria-hidden="true">#</a></h3><p><code>CORS</code>\uFF1A\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF08Cross-origin resource sharing\uFF09</p><h3 id="_7-devops\uFF08\u5982-jenkins-\u7B49\uFF09" tabindex="-1">7. devOps\uFF08\u5982 jenkins \u7B49\uFF09 <a class="header-anchor" href="#_7-devops\uFF08\u5982-jenkins-\u7B49\uFF09" aria-hidden="true">#</a></h3><h3 id="_8-\u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09" tabindex="-1">8. \u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09 <a class="header-anchor" href="#_8-\u6D4B\u8BD5\u6846\u67B6\uFF08jest\uFF09" aria-hidden="true">#</a></h3><h3 id="_9-\u8BF4\u4E00\u8BF4-qiankun-\u7684\u8DEF\u7531\u5339\u914D\u539F\u7406" tabindex="-1">9. \u8BF4\u4E00\u8BF4 <code>qiankun</code> \u7684\u8DEF\u7531\u5339\u914D\u539F\u7406 <a class="header-anchor" href="#_9-\u8BF4\u4E00\u8BF4-qiankun-\u7684\u8DEF\u7531\u5339\u914D\u539F\u7406" aria-hidden="true">#</a></h3>',10);function i(l,n,p,h,u,_){return d(),c("div",null,[r,a(" \u5B83\u662F\u6CE8\u5165\u653B\u51FB\u7684\u4E00\u79CD\uFF0C\u653B\u51FB\u8005\u901A\u8FC7\u5C06\u4EE3\u7801\u6CE8\u5165\u88AB\u653B\u51FB\u8005\u7684\u7F51\u7AD9\u4E2D\uFF0C\u7528\u6237\u4E00\u65E6\u8BBF\u95EE\u8BBF\u95EE\u7F51\u9875\u4FBF\u4F1A\u6267\u884C\u88AB\u6CE8\u5165\u7684\u6076\u610F\u811A\u672C\u3002XSS \u653B\u51FB\u4E3B\u8981\u5206\u4E3A\u53CD\u5C04\u6027 XSS \u653B\u51FB\uFF08`Reflected XSS attack`\uFF09\u3001\u5B58\u50A8\u578B XSS \u653B\u51FB\uFF08`Stored XSS Attack`\uFF09\u548C `DOM Based XSS`\n\n\u53CD\u5C04\u578B XSS \u53EA\u662F\u7B80\u5355\u7684\u628A\u7528\u6237\u8F93\u5165\u7684\u6570\u636E \u201C\u53CD\u5C04\u201D \u7ED9\u6D4F\u89C8\u5668 "),s])}var v=o(t,[["render",i]]);export{S as __pageData,v as default};
