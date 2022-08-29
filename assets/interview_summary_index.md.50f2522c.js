import{_ as e,c as l,o as i,b as o}from"./app.722b908d.js";const f=JSON.parse('{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E00\uFF09","description":"","frontmatter":{"title":"\u9762\u8BD5\u9898\u5206\u6790\uFF08\u4E00\uFF09"},"headers":[{"level":2,"title":"1. \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F","slug":"_1-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F","link":"#_1-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F","children":[{"level":3,"title":"React \u7EC4\u4EF6","slug":"react-\u7EC4\u4EF6","link":"#react-\u7EC4\u4EF6","children":[]}]},{"level":2,"title":"2. \u6D4F\u89C8\u5668\u8F93\u5165 URL \u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F","slug":"_2-\u6D4F\u89C8\u5668\u8F93\u5165-url-\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F","link":"#_2-\u6D4F\u89C8\u5668\u8F93\u5165-url-\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F","children":[]},{"level":2,"title":"3. \u8BF4\u4E00\u8BF4 BFC","slug":"_3-\u8BF4\u4E00\u8BF4-bfc","link":"#_3-\u8BF4\u4E00\u8BF4-bfc","children":[]},{"level":2,"title":"4. \u600E\u4E48\u7406\u89E3 MVVM?","slug":"_4-\u600E\u4E48\u7406\u89E3-mvvm","link":"#_4-\u600E\u4E48\u7406\u89E3-mvvm","children":[]},{"level":2,"title":"5. \u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316?","slug":"_5-\u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316","link":"#_5-\u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316","children":[]},{"level":2,"title":"6. SPA\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3","slug":"_6-spa\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3","link":"#_6-spa\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3","children":[]}],"relativePath":"interview/summary/index.md"}'),d={name:"interview/summary/index.md"},c=o('<h2 id="_1-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F" tabindex="-1">1. \u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F <a class="header-anchor" href="#_1-\u7EC4\u4EF6\u901A\u4FE1\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u7EC4\u4EF6\u7684\u901A\u4FE1\u65B9\u5F0F\u5206\u4E3A\u4E24\u5927\u7C7B\uFF0C\u4E00\u7C7B\u662F <strong>\u7236\u5B50\u7EC4\u4EF6\u901A\u4FE1</strong>\uFF0C\u53E6\u4E00\u7C7B\u662F <strong>\u4EFB\u4F55\u5173\u7CFB\u7C7B\u578B\u7EC4\u4EF6\u901A\u4FE1\uFF08\u7236\u5B50\u3001\u5144\u5F1F\u3001\u975E\u5144\u5F1F\uFF09</strong></p><h4 id="vue-\u7EC4\u4EF6" tabindex="-1">Vue \u7EC4\u4EF6 <a class="header-anchor" href="#vue-\u7EC4\u4EF6" aria-hidden="true">#</a></h4><ol><li><p>\u7236\u5B50\u7EC4\u4EF6\u7684\u901A\u4FE1\u65B9\u5F0F\uFF1A</p><ul><li><p>\u7236 \u27A1\uFE0F \u5B50\uFF1A\u901A\u8FC7\u7ED9\u5B50\u7EC4\u4EF6\u6DFB\u52A0 <strong>\u81EA\u5B9A\u4E49\u5C5E\u6027</strong>\uFF0C\u6BD4\u5982\uFF1A<code>&lt;List :list=&quot;list&quot;/&gt;</code>\uFF0Clist \u662F\u7236\u7EC4\u4EF6\u7ED9\u5B50\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\u3002\u5B50\u83B7\u53D6\u7236\u7684\u6570\u636E\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u4F7F\u7528 props \u5C5E\u6027\u83B7\u53D6</p></li><li><p>\u5B50 \u27A1\uFE0F \u7236\uFF1A\u5728\u5B50\u7EC4\u4EF6\u901A\u8FC7 <code>emit</code> \u89E6\u53D1\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u5728\u7236\u7EC4\u4EF6\u76D1\u542C\u6B64\u65B9\u6CD5\u5E76\u5B9E\u73B0\u5BF9\u5E94\u7684\u5904\u7406\u51FD\u6570\uFF0C\u6BD4\u5982\uFF1A\u7236\u7EC4\u4EF6\u4E2D\u6709 <code>&lt;List @delete=&quot;deleteHandler&quot;/&gt;</code> \u7EC4\u4EF6\uFF0C<code>deleteHandler</code> \u5C31\u662F\u5728\u7236\u7EC4\u4EF6\u4E2D\u7684\u58F0\u660E\u7684\u5904\u7406\u51FD\u6570\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u901A\u8FC7 <code>this.$emit(&#39;delete&#39;, \u6570\u636E)</code>\uFF08vue3 composition-api \u4E2D\u76F4\u63A5\u4F7F\u7528 emit \u51FD\u6570\uFF0C\u4E0D\u518D\u4F7F\u7528 this\uFF09\uFF0C\u4ECE\u800C\u8C03\u7528\u7236\u7EC4\u4EF6\u7684\u65B9\u6CD5\uFF0C\u5E76\u628A\u6570\u636E\u4F20\u9012\u5230\u7236\u7EC4\u4EF6</p></li><li><p>props \u662F\u53EA\u8BFB\u5C5E\u6027\uFF0C\u4E0D\u53EF\u4EE5\u88AB\u4FEE\u6539\uFF0C\u6240\u6709\u88AB\u4FEE\u6539\u90FD\u4F1A\u5931\u6548\u4E14\u62A5\u8B66\u544A</p></li></ul></li><li><p>\u4EFB\u4F55\u5173\u7CFB\u7C7B\u578B\u7EC4\u4EF6\u901A\u4FE1\uFF08\u7236\u5B50\u3001\u5144\u5F1F\u3001\u975E\u5144\u5F1F\uFF09\u65B9\u5F0F\uFF1A</p><ul><li><p><code>EventBus</code>\uFF08<strong>\u7A0D\u5FAE\u5927\u4E00\u70B9\u7684\u7CFB\u7EDF\u4E0D\u63A8\u8350</strong>\uFF09\uFF1A\u4F7F\u7528\u65B9\u6CD5\u662F\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 Vue \u5B9E\u4F8B\uFF0C\u9700\u8981\u901A\u4FE1\u7684\u7EC4\u4EF6\u90FD\u5F15\u5165\u8BE5 Vue \u5B9E\u4F8B\uFF0C\u4F20\u9012\u6570\u636E\u7684\u7EC4\u4EF6\u4F7F\u7528 <code>event.$emit(&#39;\u540D\u79F0&#39;,\u53C2\u6570)</code> \u53D1\u9001\u6570\u636E\uFF0C\u63A5\u6536\u6570\u636E\u7684\u7EC4\u4EF6\u4F7F\u7528 <code>event.$on(&#39;\u540D\u79F0&#39;,\u65B9\u6CD5)</code> \u63A5\u6536\u6570\u636E</p></li><li><p><code>VueX\uFF08Pinia\uFF09</code>\uFF1A\u96C6\u4E2D\u7BA1\u7406\u9879\u76EE\u516C\u5171\u6570\u636E\uFF0CVuex \u7684\u72B6\u6001\u5B58\u50A8\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u5F53 Vue \u7EC4\u4EF6\u4ECE store \u4E2D\u8BFB\u53D6\u72B6\u6001\u7684\u65F6\u5019\uFF0C\u82E5 store \u4E2D\u7684\u72B6\u6001\u53D1\u751F\u53D8\u5316\uFF0C\u90A3\u4E48\u76F8\u5E94\u7684\u7EC4\u4EF6\u4E5F\u4F1A\u76F8\u5E94\u5730\u5F97\u5230\u9AD8\u6548\u66F4\u65B0\u3002\u4E0D\u80FD\u76F4\u63A5\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u3002\u6539\u53D8 store \u4E2D\u7684\u72B6\u6001\u7684\u552F\u4E00\u9014\u5F84\u5C31\u662F\u663E\u5F0F\u5730\u63D0\u4EA4 (commit) <code>mutation</code></p></li><li><p><code>$root</code> / <code>$parent</code> / <code>$children</code>\uFF08<strong>\u4E0D\u63A8\u8350</strong>\uFF09\uFF1A\u901A\u8FC7\u62FF\u5230 <code>\u6839\u7EC4\u4EF6/\u7236\u7EC4\u4EF6/\u5B50\u7EC4\u4EF6</code> \u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u76F4\u63A5\u53BB\u64CD\u4F5C\u83B7\u53D6\u6570\u636E\u6216\u8C03\u7528\u8BE5\u7EC4\u4EF6\u7684\u65B9\u6CD5</p></li></ul></li></ol><p>EventBus \u7684\u4F18\u7F3A\u70B9\uFF1A</p><ul><li><p>\u4F18\u70B9\uFF1A\u89E3\u51B3\u4E86\u591A\u5C42\u7EC4\u4EF6\u4E4B\u95F4\u7E41\u7410\u7684\u4E8B\u4EF6\u4F20\u64AD\uFF0C\u4F7F\u7528\u539F\u7406\u5341\u5206\u7B80\u5355\uFF0C\u4EE3\u7801\u91CF\u5C11\u3002\u9002\u5408\u4E1A\u52A1\u7B80\u5355\uFF0C\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\u8F83\u5C11\u7684\u9879\u76EE\uFF0C\u5927\u578B\u9879\u76EE\u4E1A\u52A1\u590D\u6742\u7684\u8FD8\u662F\u5C3D\u91CF\u4F7F\u7528 VueX\uFF08Pinia\uFF09</p></li><li><p>\u7F3A\u70B9\uFF1Avue \u662F\u5355\u9875\u5E94\u7528\uFF0C\u5982\u679C\u4F60\u5728\u67D0\u4E00\u4E2A\u9875\u9762\u5237\u65B0\u4E86\u4E4B\u540E\uFF0C\u4E0E\u4E4B\u76F8\u5173\u7684 EventBus \u4F1A\u88AB\u79FB\u9664\uFF0C\u8FD9\u6837\u5C31\u5BFC\u81F4\u4E1A\u52A1\u8D70\u4E0D\u4E0B\u53BB\u3002\u540C\u65F6\u5982\u679C\u9875\u9762\u4E2D\u6709\u53CD\u590D\u64CD\u4F5C\u7684\u4E1A\u52A1\uFF0CEventBus \u5728\u76D1\u542C\u7684\u65F6\u5019\u5C31\u4F1A\u89E6\u53D1\u5F88\u591A\u6B21\uFF0C\u9700\u8981\u597D\u597D\u5904\u7406 EventBus \u5728\u9879\u76EE\u4E2D\u7684\u5173\u7CFB\u3002\u5728 vue \u9875\u9762\u9500\u6BC1\u65F6\uFF0C\u540C\u65F6\u79FB\u9664 EventBus \u4E8B\u4EF6\u76D1\u542C\uFF0C\u5426\u5219\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F</p></li></ul><h3 id="react-\u7EC4\u4EF6" tabindex="-1">React \u7EC4\u4EF6 <a class="header-anchor" href="#react-\u7EC4\u4EF6" aria-hidden="true">#</a></h3><ol><li><p>\u7236\u5B50\u7EC4\u4EF6\uFF1A</p><ul><li><p>\u7236 \u27A1\uFE0F \u5B50\uFF1A\u901A\u8FC7 props \u81EA\u5B9A\u4E49\u5C5E\u6027\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6</p></li><li><p>\u5B50 \u27A1\uFE0F \u7236\uFF1A</p><ul><li>\u901A\u8FC7\u7236\u7EC4\u4EF6 props \u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u8C03\u7528\u5BF9\u5E94\u7684\u65B9\u6CD5\uFF0C\u7136\u540E\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u7ED9\u7236\u7EC4\u4EF6</li><li>\u5728\u7236\u7EC4\u4EF6\u5B9A\u4E49 ref\uFF0C\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\uFF08\u5B50\u7EC4\u4EF6\u662F\u51FD\u6570\u7EC4\u4EF6\u5C31\u9700\u8981 <a href="https://juejin.cn/post/6987045486158938149#heading-9" target="_blank" rel="noreferrer">ref \u8F6C\u53D1</a>\u6765\u5B9E\u73B0\u4E86\uFF09\uFF0C\u5728\u5B50\u7EC4\u4EF6\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u7236\u7EC4\u4EF6\u76F4\u63A5\u901A\u8FC7 ref \u5B9E\u4F8B\u8C03\u7528\u5B50\u7EC4\u4EF6\u7684\u65B9\u6CD5\u83B7\u53D6\u6570\u636E</li></ul></li></ul></li><li><p>\u5144\u5F1F\u7EC4\u4EF6\uFF1A</p><p>\u82E5\u4E24\u4E2A\u7EC4\u4EF6\u5171\u7528\u4E00\u4E2A\u7236\u7EC4\u4EF6\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8003\u8651\u628A\u5B83\u4EEC\u7684\u5171\u4EAB\u6570\u636E\u63D0\u5347\u4FDD\u5B58\u5728\u5B83\u4EEC\u7684\u7236\u7EC4\u4EF6\u4E2D\uFF0C\u5E76\u5B9A\u4E49\u5BF9\u5E94\u7684\u65B9\u6CD5\u6765\u89E6\u53D1\u6570\u636E\u53D8\u66F4\uFF0C\u5E76\u5C06\u6570\u636E\u53CA\u66F4\u65B0\u65B9\u6CD5\u5206\u522B\u4F20\u9012\u7ED9\u4E24\u4E2A\u5144\u5F1F\u5B50\u7EC4\u4EF6\u5373\u53EF</p></li><li><p>\u4EFB\u4F55\u5173\u7CFB\u7C7B\u578B\u7684\u7EC4\u4EF6\uFF1A</p><ul><li><p><code>Context</code> \u4E0A\u4E0B\u6587\uFF1A\u5F53\u67D0\u4E9B\u6570\u636E\u5168\u5C40\u6216\u90E8\u5206\u5168\u5C40\u5171\u4EAB\u65F6\uFF0C\u800C\u4E14\u53EF\u80FD\u662F\u67D0\u8282\u70B9\u8DDF\u5B83\u5F88\u6DF1\u7684\u4E00\u4E2A\u7EC4\u4EF6\u624D\u4F1A\u5171\u4EAB\u65F6\uFF0C\u5C31\u53EF\u4EE5\u8003\u8651\u5728\u8FD9\u4E2A\u8282\u70B9\u4E0A\u58F0\u660E\u4E00\u4E2A\u4E0A\u4E0B\u6587\u5171\u4EAB\u6570\u636E\uFF08\u5426\u5219\u7528 props \u4E00\u5C42\u4E00\u5C42\u5F80\u4E0B\u4F20\u5C31\u7279\u522B\u590D\u6742\uFF09\u3002\u901A\u8FC7 <a href="https://juejin.cn/post/6985104812232671268" target="_blank" rel="noreferrer"><code>React.createContext(defaultValue)</code> \u6765\u521B\u5EFA\u4E0A\u4E0B\u6587\u6570\u636E</a></p></li><li><p><code>Redux</code>\uFF1A\u5168\u5C40\u72B6\u6001\u7BA1\u7406\u5E93\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u7EC4\u4EF6\u90FD\u53EF\u4F7F\u7528\u5176\u4E2D\u5B58\u50A8\u7684\u6570\u636E\uFF0C\u5E76\u901A\u8FC7\u56FA\u5B9A\u7684 dispatch \u65B9\u6CD5\u53BB\u66F4\u65B0\u6570\u636E \u27A1\uFE0F <a href="https://juejin.cn/post/6990664042402545672" target="_blank" rel="noreferrer">\u4F7F\u7528\u8BE6\u60C5\u53EF\u89C1</a></p></li></ul></li></ol><h2 id="_2-\u6D4F\u89C8\u5668\u8F93\u5165-url-\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" tabindex="-1">2. \u6D4F\u89C8\u5668\u8F93\u5165 URL \u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#_2-\u6D4F\u89C8\u5668\u8F93\u5165-url-\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5173\u952E\u70B9</p><p>DNS \u89E3\u6790\u3001TCP \u63E1\u624B\u3001HTTP \u7F13\u5B58\u3001\u91CD\u5B9A\u5411\u3001\u670D\u52A1\u5668\u72B6\u6001\u7801\u3001\u6E32\u67D3\u5F15\u64CE\u548C JS \u5F15\u64CE\u4E92\u65A5\u3001\u6E32\u67D3\u8FC7\u7A0B\u3001\u6D4F\u89C8\u5668\u8FDB\u7A0B\u3001\u7F51\u8DEF\u8FDB\u7A0B\u3001\u6E32\u67D3\u8FDB\u7A0B</p></div><p>\u6574\u4E2A\u8FC7\u7A0B\u5927\u6982\u5206\u4E3A\u5982\u4E0B\u516D\u6B65\uFF1A</p><ol><li><p>DNS \u57DF\u540D\u89E3\u6790\uFF08\u83B7\u53D6\u670D\u52A1\u5668 ip \u5730\u5740\uFF09</p><ul><li><p>\uFF08\u9488\u5BF9\u57DF\u540D\uFF09\u6309\u987A\u5E8F\u68C0\u7D22\u6D4F\u89C8\u5668 DNS \u7F13\u5B58\u3001\u64CD\u4F5C\u7CFB\u7EDF DNS \u7F13\u5B58\u3001\u7CFB\u7EDF <code>hosts</code> \u6587\u4EF6\u3001\u672C\u5730\u914D\u7F6E\u7684\u9996\u9009 DNS \u670D\u52A1\u5668</p></li><li><p>\u82E5\u76F4\u63A5\u8BBF\u95EE\u7684\u662F ip \u5730\u5740\uFF0C\u5219\u4F1A\u8DF3\u8FC7 DNS \u57DF\u540D\u89E3\u6790</p></li></ul></li><li><p>\u5EFA\u7ACB TCP \u8FDE\u63A5</p><ul><li><p>\u4E3A\u4E86\u786E\u4FDD\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u80FD\u51C6\u786E\u5730\u4F20\u8F93\u6570\u636E\uFF0CTCP \u534F\u8BAE\u91C7\u7528\u4E86 <code>\u4E09\u6B21\u63E1\u624B</code> \u7B56\u7565\uFF08\u786E\u4FDD\u53CC\u65B9\u5747\u6709\u53D1\u9001\u4E0E\u63A5\u6536\u6570\u636E\u7684\u80FD\u529B\uFF09\uFF1A\u53D1\u9001\u7AEF\u9996\u5148\u53D1\u9001\u4E00\u4E2A\u5E26 <code>SYN\uFF08synchronize\uFF09\u6807\u5FD7</code> \u7684\u6570\u636E\u5305\u7ED9\u63A5\u6536\u65B9\uFF0C\u63A5\u6536\u65B9\u6536\u5230\u540E\uFF0C\u56DE\u4F20\u4E00\u4E2A\u5E26\u6709 <code>SYN/ACK(acknowledegment)\u6807\u5FD7</code> \u7684\u6570\u636E\u5305\u4EE5\u793A\u4F20\u8FBE\u786E\u8BA4\u4FE1\u606F\u3002\u6700\u540E\u53D1\u9001\u65B9\u518D\u56DE\u4F20\u4E00\u4E2A\u5E26 <code>ACK\u6807\u5FD7</code> \u7684\u6570\u636E\u5305\uFF0C\u4EE3\u8868\u63E1\u624B\u7ED3\u675F</p></li><li><p>\u800C\u4E14\u53EF\u4EE5\u5F15\u7533\uFF08\u{1FAE5}\uFF09\u66F4\u591A\u77E5\u8BC6\u70B9\uFF1A<code>TCP\u4E0EUDP</code>\uFF0C<code>\u4E09\u6B21\u63E1\u624B\u{1F91D}</code>\u3001<code>\u56DB\u6B21\u6325\u624B\u{1F64B}\u200D\u2642\uFE0F\u7684\u8FC7\u7A0B</code>... \uFF08\u6BD4\u5982\uFF1A<a href="https://juejin.cn/post/6844904070889603085" target="_blank" rel="noreferrer">TCP \u534F\u8BAE\u7075\u9B42\u4E4B\u95EE</a>\uFF09</p></li></ul></li><li><p>\u53D1\u8D77 HTTP \u8BF7\u6C42</p><ul><li><p>\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u8F93\u5165\u67D0\u57DF\u540D\u5B9E\u9645\u4E0A\u662F\u9ED8\u8BA4\u7684 <code>GET</code> \u8BF7\u6C42\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684\u8D44\u6E90\u6587\u4EF6</p></li><li><p>\u5F15\u7533\uFF08\u{1FAE5}\uFF09\uFF0C\u6BD4\u5982\uFF1A1. http \u8BF7\u6C42\u5934 <code>origin</code>\u3001<code>host</code>\u3001<code>referer</code> \u4E09\u8005\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8BBE\u5B9A\u8FD9\u4E09\u4E2A\u5B57\u6BB5\uFF1B2. <code>\u5F3A\u7F13\u5B58</code>\u4E0E<code>\u534F\u5546\u7F13\u5B58</code></p></li></ul></li><li><p>\u63A5\u53D7\u54CD\u5E94\u7ED3\u679C</p><ul><li><p>\u54CD\u5E94\u7ED3\u679C\u4E00\u822C\u4E3A html \u6587\u4EF6</p></li><li><p>\u5F15\u7533\uFF08\u{1FAE5}\uFF09\uFF1Ahttp \u72B6\u6001\u7801\u6709\u54EA\u4E9B\uFF0C\u5206\u522B\u4EE3\u8868\u4EC0\u4E48\u542B\u4E49\uFF1F</p></li></ul></li><li><p>\u6D4F\u89C8\u5668\u89E3\u6790 HTML</p><ul><li><p>\u6D4F\u89C8\u5668\u6309\u987A\u5E8F\u89E3\u6790 html \u6587\u4EF6\uFF0C\u6784\u5EFA <code>DOM Tree</code>\uFF0C\u5728\u89E3\u6790\u5230\u5916\u90E8\u7684 css \u548C js \u6587\u4EF6\u65F6\uFF0C\u5411\u670D\u52A1\u5668\u53D1\u8D77\u8BF7\u6C42\u4E0B\u8F7D\u8D44\u6E90\u3002\u82E5\u662F\u4E0B\u8F7D css \u6587\u4EF6\u4E0D\u4F1A\u963B\u585E <code>DOM Tree</code> \u7684\u6784\u5EFA\uFF0C\u5E76\u6784\u5EFA <code>CSS Tree</code>\uFF0C\u4F46\u5728\u4E0B\u8F7D js \u6587\u4EF6\u548C\u6267\u884C\u5B83\u65F6\u4F1A\u963B\u585E <code>DOM Tree</code> \u7684\u6784\u5EFA</p></li><li><p>\u5F53 <code>DOM Tree</code> \u4E0E <code>CSS Tree</code> \u6784\u5EFA\u5B8C\u6BD5\u540E\uFF0C\u6D4F\u89C8\u5668\u5F15\u64CE\u4F1A\u5C06\u5B83\u4EEC\u7ED3\u5408\u5F62\u6210 \u6E32\u67D3\u6811\uFF08\u{1F332}\uFF09\uFF08\u6E32\u67D3\u6811\u4E2D\u5305\u542B\u53EF\u89C6\u8282\u70B9\u7684\u6837\u5F0F\u4FE1\u606F\uFF0C\u5982 <code>head</code> \u5143\u7D20\uFF0C\u5C5E\u6027\u4E3A <code>display: none;</code> \u7B49\u4E0D\u4F1A\u51FA\u73B0\u5728\u6E32\u67D3\u6811\u4E2D\uFF09</p></li></ul><div class="tip custom-block"><p class="custom-block-title">Notice</p><p>\u6CE8\u610F\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u9010\u6B65\u5B8C\u6210\u7684\uFF0C\u6BD4\u5982\uFF1A\u6709\u65F6\u7F51\u7EDC\u73AF\u5883\u6BD4\u8F83\u5DEE\u65F6\uFF0C\u6211\u4EEC\u4F1A\u770B\u5230\u6574\u4E2A\u9875\u9762\u662F\u4E00\u884C\u4E00\u884C\u52A0\u8F7D\u51FA\u6765\u7684\u3002\u56E0\u4E3A\u5B83\u662F\u89E3\u6790\u5B8C\u4E00\u90E8\u5206\u5185\u5BB9\u5C31\u663E\u793A\u4E00\u90E8\u5206\u5185\u5BB9\uFF0C\u540C\u65F6\uFF0C\u53EF\u80FD\u8FD8\u5728\u901A\u8FC7\u7F51\u7EDC\u4E0B\u8F7D\u5176\u4F59\u7684\u5185\u5BB9</p></div></li><li><p>\u6D4F\u89C8\u5668\u5E03\u5C40\u6E32\u67D3</p><ul><li><p><code>\u5E03\u5C40(Layout)</code>\uFF1A\u901A\u8FC7\u8BA1\u7B97\u5F97\u5230\u6BCF\u4E2A\u6E32\u67D3\u5BF9\u8C61\u5728\u53EF\u89C6\u533A\u57DF\u4E2D\u7684\u5177\u4F53\u4F4D\u7F6E\u4FE1\u606F\uFF08\u5927\u5C0F\u548C\u4F4D\u7F6E\uFF09\uFF0C\u8FD9\u662F\u4E00\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B</p></li><li><p><code>\u7ED8\u5236(Paint)</code>\uFF1A\u5C06\u8BA1\u7B97\u597D\u7684\u6BCF\u4E2A\u50CF\u7D20\u70B9\u4FE1\u606F\u7ED8\u5236\u5728\u5C4F\u5E55\u4E0A</p></li><li><p>\u5728\u9875\u9762\u663E\u793A\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u591A\u6B21\u8FDB\u884C <code>Reflow(\u91CD\u6392)</code> \u548C <code>Repaint(\u91CD\u7ED8)</code> \u64CD\u4F5C\uFF0C\u800C Reflow \u7684\u6210\u672C\u6BD4 Repaint \u7684\u6210\u672C\u9AD8\u5F97\u591A\u7684\u591A\u3002\u56E0\u4E3A Repaint \u53EA\u662F\u5C06\u67D0\u4E2A\u90E8\u5206\u8FDB\u884C\u91CD\u65B0\u7ED8\u5236\u800C\u4E0D\u7528\u6539\u53D8\u9875\u9762\u7684\u5E03\u5C40\uFF08\u6BD4\u5982\u5143\u7D20\u80CC\u666F\u989C\u8272\u6216\u5B57\u4F53\u989C\u8272\u7684\u6539\u53D8\uFF09\uFF1B\u800C\u5F53\u66F4\u6539\u7684\u5143\u7D20\u5C5E\u6027\u5F71\u54CD\u5230\u9875\u9762\u5E03\u5C40\u7684\u60C5\u51B5\u65F6\uFF0C\u5C31\u4F1A\u89E6\u53D1 Reflow\uFF08\u6BD4\u5982\u67D0\u4E2A\u5143\u7D20 display \u5C5E\u6027\u7531 block \u53D8\u4E3A none\uFF09</p></li><li><p>\u5F15\u7533\uFF08\u{1FAE5}\uFF09\uFF1A\u5982\u4F55\u51CF\u5C11 Reflow \u548C Repaint\uFF1F</p></li></ul></li></ol><h2 id="_3-\u8BF4\u4E00\u8BF4-bfc" tabindex="-1">3. \u8BF4\u4E00\u8BF4 BFC <a class="header-anchor" href="#_3-\u8BF4\u4E00\u8BF4-bfc" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u5173\u952E\u70B9</p><p>\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u3001\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\u3001\u4E0D\u4F1A\u5F71\u54CD\u8FB9\u754C\u4EE5\u5916\u7684\u5143\u7D20\u3001\u5F62\u6210 BFC \u6761\u4EF6\u3001float\u3001position\u3001overflow\u3001display</p></div><ol><li><p>BFC\uFF1A(<code>Block Formatting Context</code>) \u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\uFF0C\u5B83\u662F Web \u9875\u9762\u4E00\u5757\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\uFF0C\u5185\u90E8\u5143\u7D20\u6709\u4E00\u5957\u81EA\u5DF1\u7684\u6E32\u67D3\u89C4\u5219</p></li><li><p>BFC \u89C4\u5219\uFF1A</p><ul><li>\u5185\u90E8\u76D2\u5B50\u4F1A\u5728\u5782\u76F4\u65B9\u5411\uFF0C\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u653E\u7F6E</li><li>\u5185\u90E8\u76D2\u5B50\u5782\u76F4\u65B9\u5411\u7684\u8DDD\u79BB\u7531 <code>margin</code> \u51B3\u5B9A\uFF0C\u5C5E\u4E8E\u540C\u4E00\u4E2A BFC \u7684\u4E24\u4E2A\u76F8\u90BB\u76D2\u5B50\u7684 margin \u4F1A\u53D1\u751F <strong>\u91CD\u53E0</strong></li><li>\u5185\u90E8\u76D2\u5B50\uFF08block / inline-block\uFF09\u7684\u5DE6\u5916\u8FB9\u8DDD\u4E0E\u5305\u542B\u5757\u7684\u5DE6\u8FB9\u754C\u76F8\u63A5\u89E6\uFF08\u4ECE\u5DE6\u5230\u53F3\u6392\u5217\u65F6\uFF09\uFF0C\u5373\u4F7F\u6D6E\u52A8\u5143\u7D20\u4E5F\u662F\u5982\u6B64</li><li>BFC \u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E float box \u91CD\u53E0</li><li>\u8BA1\u7B97 BFC \u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5B50\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97</li><li>BFC \u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u53CD\u4E4B\u4EA6\u7136</li></ul></li><li><p>BFC \u5F62\u6210\u6761\u4EF6\uFF1A</p><ul><li>\u6839\u5143\u7D20\uFF0Cweb \u9875\u9762\u7684 <code>html</code> \u5143\u7D20</li><li><code>float</code> \u8BBE\u7F6E\u6210 <code>left</code> \u6216 <code>right</code></li><li><code>position</code> \u662F <code>absolute</code> \u6216 <code>fixed</code></li><li><code>overflow</code> \u4E3A <code>auto</code>\u3001<code>scroll</code>\u3001<code>hidden</code>\uFF08\u975E<code>visible</code>\uFF09</li><li><code>display</code> \u662F <code>flex</code>\u3001<code>inline-block</code>\u3001<code>inltable-cell</code>\u3001<code>table-caption</code>\u3001<code>table</code>\u3001<code>inline-table</code>\u3001<code>inline-flex</code>\u3001<code>grid</code>\u3001<code>inline-grid</code></li></ul></li></ol><h2 id="_4-\u600E\u4E48\u7406\u89E3-mvvm" tabindex="-1">4. \u600E\u4E48\u7406\u89E3 MVVM? <a class="header-anchor" href="#_4-\u600E\u4E48\u7406\u89E3-mvvm" aria-hidden="true">#</a></h2><p><code>MVVM</code>\uFF1A\u5C31\u662F <code>Model-View-ViewModel</code></p><ul><li><code>Model</code>\uFF1A\u6A21\u578B\u5C42\uFF0C\u8D1F\u8D23\u5904\u7406\u4E1A\u52A1\u903B\u8F91\u4EE5\u53CA\u548C\u670D\u52A1\u5668\u7AEF\u8FDB\u884C\u4EA4\u4E92</li><li><code>View</code>\uFF1A\u89C6\u56FE\u5C42\uFF1A\u8D1F\u8D23\u5C06\u6570\u636E\u6A21\u578B\u8F6C\u5316\u4E3A UI \u5C55\u793A\u51FA\u6765\uFF0C\u53EF\u4EE5\u7B80\u5355\u7684\u7406\u89E3\u4E3A HTML \u9875\u9762</li><li><code>ViewModel</code>\uFF1A\u89C6\u56FE\u6A21\u578B\u5C42\uFF0C\u7528\u6765\u8FDE\u63A5 Model \u548C View\uFF0C\u662F Model \u548C View \u4E4B\u95F4\u7684\u901A\u4FE1\u6865\u6881</li></ul><h2 id="_5-\u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316" tabindex="-1">5. \u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316? <a class="header-anchor" href="#_5-\u600E\u4E48\u7406\u89E3\u7EC4\u4EF6\u5316" aria-hidden="true">#</a></h2><p>\u4E00\u53E5\u8BDD\u6765\u8BF4\u5C31\u662F\u628A\u56FE\u5F62\u3001\u975E\u56FE\u5F62\u7684\u5404\u79CD\u903B\u8F91\u5747\u62BD\u8C61\u4E3A\u4E00\u4E2A\u7EDF\u4E00\u7684\u6982\u5FF5\uFF08\u7EC4\u4EF6\uFF09\u6765\u5B9E\u73B0\u5F00\u53D1\u7684\u6A21\u5F0F</p><p>\u7EC4\u4EF6\u5316\u7684\u4F18\u52BF\uFF1A</p><ol><li><p><code>\u964D\u4F4E\u6574\u4E2A\u7CFB\u7EDF\u7684\u8026\u5408\u5EA6</code>\uFF0C\u53EF\u4EE5\u66FF\u6362\u4E0D\u540C\u7684\u7EC4\u4EF6\u5FEB\u901F\u5B8C\u6210\u9700\u6C42\uFF0C\u7C7B\u4F3C\u642D\u79EF\u6728\u7684\u65B9\u5F0F</p></li><li><p><code>\u65B9\u4FBF\u8C03\u8BD5</code>\uFF0C\u6211\u4EEC\u4E00\u822C\u4F1A\u57FA\u4E8E\u5355\u4E00\u804C\u8D23\u539F\u5219\u6765\u5C01\u88C5\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u5728\u6392\u67E5\u95EE\u9898\u65F6\u80FD\u591F\u5FEB\u901F\u5B9A\u4F4D</p></li><li><p><code>\u63D0\u9AD8\u53EF\u7EF4\u62A4\u6027</code>\uFF0C\u56E0\u4E3A\u90FD\u662F\u590D\u7528\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u5BF9\u7EC4\u4EF6\u4EE3\u7801\u7684\u4F18\u5316\u5C06\u4F1A\u4F7F\u7CFB\u7EDF\u6574\u4F53\u8FDB\u884C\u5347\u7EA7</p></li></ol><h2 id="_6-spa\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3" tabindex="-1">6. SPA\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3 <a class="header-anchor" href="#_6-spa\uFF08\u5355\u9875\u5E94\u7528\uFF09\u7684\u7406\u89E3" aria-hidden="true">#</a></h2><p>SPA\uFF08single-page application\uFF09\uFF1A\u5B83\u662F\u4E00\u79CD\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u6216\u7F51\u7AD9\u7684\u6A21\u578B\uFF0C\u5B83\u901A\u8FC7\u52A8\u6001\u91CD\u5199\u5F53\u524D\u9875\u9762\u6765\u4E0E\u7528\u6237\u4EA4\u4E92</p><p>SPA \u4E0D\u4F1A\u56E0\u4E3A\u7528\u6237\u7684\u64CD\u4F5C\u800C\u8FDB\u884C\u9875\u9762\u7684\u91CD\u8F7D\uFF0C\u53D6\u800C\u4EE3\u4E4B\u7684\u662F\u5229\u7528\u8DEF\u7531\u673A\u5236\u6765\u5B9E\u73B0 HTML \u7684\u66FF\u6362\u3001UI \u4EA4\u4E92\u7B49\u529F\u80FD</p><p>\u4F18\u70B9\uFF1A</p><ul><li>\u7528\u6237\u4F53\u9A8C\u597D\uFF0C\uFF08\u5185\u90E8\u9875\u9762\u8DF3\u8F6C\uFF09\u52A0\u8F7D\u901F\u5EA6\u5FEB</li><li>\u5BF9\u670D\u52A1\u5668\u538B\u529B\u76F8\u5BF9\u8F83\u5C0F</li><li>\u524D\u540E\u7AEF\u804C\u8D23\u5206\u79BB\uFF0C\u67B6\u6784\u6E05\u6670</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li>\u521D\u6B21\u52A0\u8F7D\u76F8\u5BF9\u8017\u65F6\u8F83\u957F\uFF0C\u9700\u8981\u52A0\u8F7D\u6574\u4E2A\u7CFB\u7EDF\u7684 JS\u3001CSS \u7B49\u8D44\u6E90\uFF08\u53EF\u6309\u9700\u52A0\u8F7D\uFF09</li><li>SEO \u5F31\u52BF</li></ul>',29),t=[c];function p(a,r,n,s,u,h){return i(),l("div",null,t)}const m=e(d,[["render",p]]);export{f as __pageData,m as default};
