import{_ as e,c as a,o as n,b as s}from"./app.50c3ff41.js";const f='{"title":"React Fiber","description":"","frontmatter":{"title":"React Fiber"},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165 Fiber","slug":"\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165-fiber"},{"level":2,"title":"\u4EC0\u4E48\u662F Fiber","slug":"\u4EC0\u4E48\u662F-fiber"},{"level":2,"title":"Fiber \u662F\u5982\u4F55\u5DE5\u4F5C\u7684","slug":"fiber-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684"}],"relativePath":"knowledge/react/fiber.md","lastUpdated":1654044527339}',o={},t=s(`__VP_STATIC_START__<p>React 16 \u5F15\u5165 Fiber \u67B6\u6784\uFF0C\u8FD9\u662F React \u6838\u5FC3\u7B97\u6CD5\u7684\u91CD\u6784</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165-fiber" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165 Fiber <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u5F15\u5165-fiber" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u77E5\u9053\uFF0C\u5728\u6D4F\u89C8\u5668\u4E2D\uFF0C\u9875\u9762\u662F\u4E00\u5E27\u4E00\u5E27\u5730\u7ED8\u5236\u51FA\u6765\u7684\uFF0C\u6E32\u67D3\u7684\u5E27\u7387\u4E0E\u8BBE\u5907\u7684\u5237\u65B0\u7387\u4FDD\u6301\u4E00\u81F4\uFF0C\u4E00\u822C\u7684\u9891\u7387\u662F 60Hz\uFF08\u4E5F\u5C31\u662F\u6BCF\u79D2\u7ED8\u523660\u6B21\uFF09\uFF0C\u5F53\u6BCF\u79D2\u5185\u7ED8\u5236\u7684\u5E27\u6570\uFF08FPS\uFF09\u8D85\u8FC760\u65F6\uFF0C\u9875\u9762\u6E32\u67D3\u662F\u6D41\u7545\u7684\uFF1B\u800C\u5F53FPS\u5C0F\u4E8E60\u65F6\uFF0C\u4F1A\u51FA\u73B0\u4E00\u5B9A\u7A0B\u5EA6\u7684\u5361\u987F\u73B0\u8C61</p><p>\u5B8C\u6574\u7684\u4E00\u5E27\u4E2D\uFF0C\u5177\u4F53\u505A\u7684\u4E8B\u60C5\u6709\u8FD9\u4E9B\uFF1A</p><ul><li>\u9996\u5148\u5904\u7406 <code>input</code>\u3001<code>event</code> \u4E8B\u4EF6\uFF08<code>I/O</code> \u4E8B\u4EF6\uFF09\uFF0C\u8BA9\u7528\u6237\u5F97\u5230\u6700\u65E9\u7684\u53CD\u9988\uFF08<code>click</code>\u3001<code>touch</code>\u3001<code>wheel</code> \u7B49\uFF09</li><li>\u63A5\u4E0B\u6765\u5904\u7406\u5B9A\u65F6\u5668\uFF0C\u68C0\u67E5\u5B9A\u65F6\u5668\u662F\u5426\u5230\u65F6\u95F4\uFF0C\u5E76\u6267\u884C\u5BF9\u5E94\u7684\u56DE\u8C03</li><li>\u5904\u7406 <code>Begin Frame</code>\uFF08\u5F00\u59CB\u5E27\uFF09\uFF0C\u5373\u6BCF\u4E00\u5E27\u7684\u4E8B\u4EF6\uFF0C\u5305\u62EC <code>window.resize</code>\u3001<code>scroll</code>\u3001<code>media query change</code> \u7B49</li><li>\u6267\u884C\u8BF7\u6C42\u52A8\u753B\u5E27 <code>requestAnimationFrame\uFF08rAF\uFF09</code>\uFF0C\u5B83\u4F1A\u5728\u6BCF\u6B21\u7ED8\u5236\u4E4B\u524D\u6267\u884C</li><li>\u8FDB\u884C Layout \u64CD\u4F5C\uFF0C\u5305\u62EC\u8BA1\u7B97\u5E03\u5C40\u548C\u66F4\u65B0\u5E03\u5C40</li><li>\u8FDB\u884C\u7ED8\u5236\uFF08paint\uFF09</li><li>\u6D4F\u89C8\u5668\u7ED8\u5236\u4EFB\u52A1\u7ED3\u675F\uFF0C\u8FDB\u5165\u7A7A\u95F2\u671F\uFF08<code>Idle Peroid</code>\uFF09\uFF0C\u53EF\u4EE5\u5728\u6B64\u9636\u6BB5\u6267\u884C <code>requestIdleCallback</code> \u6CE8\u518C\u7684\u4EFB\u52A1</li></ul><p>js \u5F15\u64CE\u548C\u9875\u9762\u6E32\u67D3\u5F15\u64CE\u662F\u5728 <code>\u540C\u4E00\u4E2A\u6E32\u67D3\u7EBF\u7A0B</code> \u4E4B\u5185\uFF0C\u4E24\u8005\u662F\u4E92\u65A5\u5173\u7CFB\u3002\u6240\u4EE5\u5982\u679C\u5728\u67D0\u4E2A\u9636\u6BB5\u6267\u884C\u4EFB\u52A1\u7279\u522B\u957F\uFF0C\u4F8B\u5982\u5728\u5904\u7406\u5B9A\u65F6\u5668\u9636\u6BB5\u6216 <code>Begin Frame</code>\u9636\u6BB5\u6267\u884C\u65F6\u95F4\u975E\u5E38\u957F\uFF0C\u65F6\u95F4\u5DF2\u7ECF\u660E\u663E\u8D85\u8FC7\u4E8616ms\uFF08<code>1000ms/60\u5E27</code>\uFF09\uFF0C\u90A3\u4E48\u5C31\u4F1A\u963B\u585E\u9875\u9762\u7684\u6E32\u67D3\uFF0C\u4ECE\u800C\u51FA\u73B0\u5361\u987F\u73B0\u8C61</p><p>React 16 \u5F15\u5165 Fiber \u67B6\u6784\u4E4B\u524D\uFF0CReact \u91C7\u7528\u9012\u5F52\u904D\u5386\u5BF9\u6BD4\u865A\u62DF DOM \u6811\uFF08\u4F20\u7EDF\u65B9\u6848\u662F\u5229\u7528\u540C\u6B65 <code>\u6DF1\u5EA6\u4F18\u5148</code> \u9012\u5F52\u7684\u5806\u6808\uFF09\uFF0C\u627E\u51FA\u9700\u8981\u53D8\u52A8\u7684\u8282\u70B9\uFF0C\u7136\u540E\u540C\u6B65\u66F4\u65B0\u5B83\u4EEC\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B react \u79F0\u4E4B\u4E3A <code>reconcilation\uFF08\u534F\u8C03\uFF09</code>\u3002\u5728\u8FD9\u671F\u95F4\uFF0Creact \u4F1A\u4E00\u76F4\u5360\u7528\u6D4F\u89C8\u5668\u8D44\u6E90\uFF0C\u4F1A\u5BFC\u81F4\u7528\u6237\u89E6\u53D1\u7684\u4E8B\u4EF6\u4E0D\u80FD\u53CA\u65F6\u54CD\u5E94\uFF0C\u5373\u51FA\u73B0\u9875\u9762\u5361\u987F\u7684\u73B0\u8C61</p><p>\u8FD9\u79CD\u65B9\u6848\u5B58\u5728\u7684\u95EE\u9898\uFF1A</p><ul><li>\u56E0\u4E3A\u8FD9\u79CD\u904D\u5386\u65B9\u6848\u5C5E\u4E8E\u9012\u5F52\u8C03\u7528\uFF0C\u6267\u884C\u6808\u4F1A\u8D8A\u6765\u8D8A\u6DF1</li><li>\u9012\u5F52\u904D\u5386\u4E0D\u80FD\u4E2D\u65AD\uFF0C\u5982\u679C\u4E2D\u65AD\u4E5F\u4E0D\u53EF\u6062\u590D</li><li>\u9012\u5F52\u5982\u679C\u975E\u5E38\u6DF1\uFF0CJS \u7684\u8FD0\u884C\u5C31\u4F1A\u963B\u585E\u5176\u4ED6\u4E3B\u7EBF\u7A0B\u4EFB\u52A1\u7684\u6267\u884C\uFF0C\u9020\u6210\u9875\u9762\u5361\u987F</li></ul><p>\u56E0\u6B64\uFF0CReact \u5E0C\u671B\u80FD\u591F\u5F7B\u5E95\u89E3\u51B3\u4E3B\u7EBF\u7A0B\u957F\u65F6\u95F4\u5360\u7528\u95EE\u9898\uFF0C\u4E8E\u662F\u5F15\u5165\u4E86 Fiber \u6765\u6539\u53D8\u8FD9\u79CD\u4E0D\u53EF\u63A7\u7684\u73B0\u72B6\uFF0C\u628A <code>\u6E32\u67D3/\u66F4\u65B0</code> \u8FC7\u7A0B\u62C6\u5206\u4E3A\u4E00\u4E2A\u4E2A\u5C0F\u5757\u7684\u4EFB\u52A1\uFF0C\u901A\u8FC7\u5408\u7406\u7684\u8C03\u5EA6\u673A\u5236\u6765\u8C03\u63A7\u65F6\u95F4\uFF0C\u6307\u5B9A\u4EFB\u52A1\u6267\u884C\u7684\u65F6\u673A\uFF0C\u4ECE\u800C\u964D\u4F4E\u9875\u9762\u5361\u987F\u7684\u6982\u7387\uFF0C\u63D0\u5347\u9875\u9762\u4EA4\u4E92\u4F53\u9A8C\u3002\u901A\u8FC7 <code>Fiber \u67B6\u6784</code>\uFF0C\u8BA9 reconcilation \u8FC7\u7A0B\u53D8\u5F97\u53EF\u88AB\u4E2D\u65AD\u3002\u9002\u65F6\u5730\u8BA9\u51FA <code>CPU \u6267\u884C\u6743</code>\uFF0C\u53EF\u4EE5\u8BA9\u6D4F\u89C8\u5668\u53CA\u65F6\u5730\u54CD\u5E94\u7528\u6237\u7684\u4EA4\u4E92</p><p>\u65E2\u7136 React 16 \u4F7F\u7528 Fiber \u8FDB\u884C\u67B6\u6784\u5C42\u4F18\u5316\uFF0C\u4F46 Vue \u662F\u6CA1\u6709 Fiber \u67B6\u6784\u7684\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F\u539F\u56E0\u5C31\u662F\u4E8C\u8005\u7684\u4F18\u5316\u601D\u8DEF\u4E0D\u540C\uFF1A</p><ol><li>Vue \u662F\u57FA\u4E8E <code>template</code> \u548C <code>watcher</code> \u7684\u7EC4\u4EF6\u7EA7\u66F4\u65B0\uFF0C\u628A\u6BCF\u4E2A\u66F4\u65B0\u4EFB\u52A1\u5206\u5272\u5F97\u8DB3\u591F\u5C0F\uFF0C\u4E0D\u9700\u8981\u4F7F\u7528\u5230 Fiber \u67B6\u6784\uFF0C\u5C06\u4EFB\u52A1\u8FDB\u884C\u66F4\u7EC6\u7C92\u5EA6\u7684\u62C6\u5206</li><li>React \u4E2D\u4E0D\u7BA1\u662F\u54EA\u91CC\u8C03\u7528\u4E86 <code>setState</code>\uFF0C\u90FD\u662F\u4ECE\u6839\u8282\u70B9\u5F00\u59CB\u66F4\u65B0\u7684\uFF0C\u66F4\u65B0\u4EFB\u52A1\u8FD8\u662F\u5F88\u5927\uFF0C\u9700\u8981\u4F7F\u7528\u5230 Fiber \u5C06\u5927\u4EFB\u52A1\u5206\u5272\u4E3A\u591A\u4E2A\u5C0F\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u4E2D\u65AD\u548C\u6062\u590D\uFF0C\u4E0D\u963B\u585E\u4E3B\u8FDB\u7A0B\u6267\u884C\u9AD8\u4F18\u5148\u7EA7\u7684\u4EFB\u52A1</li></ol><h2 id="\u4EC0\u4E48\u662F-fiber" tabindex="-1">\u4EC0\u4E48\u662F Fiber <a class="header-anchor" href="#\u4EC0\u4E48\u662F-fiber" aria-hidden="true">#</a></h2><p>Fiber \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u79CD <code>\u6267\u884C\u5355\u5143</code>\uFF0C\u4E5F\u662F\u4E00\u79CD <code>\u6570\u636E\u7ED3\u6784</code></p><ol><li><p>\u4ECE\u6267\u884C\u5355\u5143\u89D2\u5EA6\u53BB\u7406\u89E3\uFF1A\u6BCF\u6B21\uFF08\u5728\u4E00\u5E27\u4E2D\uFF09\u6267\u884C\u5B8C\u4E00\u4E2A\u4EFB\u52A1\uFF0Creact \u5C31\u4F1A\u53BB\u68C0\u67E5\u8FD8\u5269\u591A\u5C11\u65F6\u95F4\uFF0C\u5982\u679C\u6CA1\u6709\u65F6\u95F4\u5219\u5C06\u63A7\u5236\u6743\u4EA4\u8FD8\u7ED9\u6D4F\u89C8\u5668\u3002\u7ED3\u5408\u4E0A\u9762\u7684\u5B8C\u6574\u7684\u4E00\u5E27\uFF1A</p><ul><li>react \u4F1A\u5411\u6D4F\u89C8\u5668\u8BF7\u6C42\u8C03\u5EA6\uFF0C\u6D4F\u89C8\u5668\u5728\u4E00\u5E27\u4E2D\u662F\u5426\u8FD8\u6709\u7A7A\u95F2\u65F6\u95F4\uFF0C\u65E0\u65F6\u95F4\u5219\u5C06\u63A7\u5236\u6743\u4EA4\u8FD8\u6D4F\u89C8\u5668\uFF08\u8FDB\u5165\u4E0B\u4E00\u5E27\uFF09</li><li>\u6709\u65F6\u95F4\u5C31\u53BB\u5224\u65AD\u662F\u5426\u6709\u6267\u884C\u4EFB\u52A1\u5355\u5143\uFF0C\u65E0\u4EFB\u52A1\u5219\u5C06\u63A7\u5236\u6743\u4EA4\u8FD8\u6D4F\u89C8\u5668\uFF08\u54CD\u5E94\u7528\u6237\u64CD\u4F5C\u6216\u7B49\u5F85\u8FDB\u5165\u4E0B\u4E00\u5E27\uFF09</li><li>\u6709\u4EFB\u52A1\u6267\u884C\u4EFB\u52A1\u5355\u5143\uFF0C\u6267\u884C\u5B8C\u6BD5\u540E\u518D\u6B21\u68C0\u6D4B\u8FD9\u4E00\u5E27\u4E2D\u662F\u5426\u8FD8\u6709\u7A7A\u95F2\u65F6\u95F4\uFF0C\u56DE\u5230\u4E0A\u9762\u4E24\u6B65\uFF08\u5FAA\u73AF\uFF09</li></ul><p>Fiber \u53EF\u4EE5\u7406\u89E3\u4E3A\u5C06\u539F\u672C\u7684\u6574\u68F5\u6811\u7684\u9012\u5F52\u5BF9\u6BD4\u7684\u5927\u4EFB\u52A1\u62C6\u5206\u6210\u4E00\u4E2A\u4E00\u4E2A\u7684\u5C0F\u6267\u884C\u5355\u5143\uFF08\u5C0F\u4EFB\u52A1\uFF09\uFF0C\u5C0F\u4EFB\u52A1\u5F53\u7136\u662F\u4E00\u6B21\u6027\u6267\u884C\u5B8C\u7684\uFF0C\u4E0D\u5B58\u5728\u6682\u505C\u6216\u4E2D\u65AD\uFF1B\u4F46\u6BCF\u5757\u5C0F\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u540E\u53EF\u4EE5\u901A\u8FC7\u6761\u4EF6\u5224\u5B9A\u5C06\u63A7\u5236\u6743\u79FB\u4EA4\u7ED9\u6D4F\u89C8\u5668\u54CD\u5E94\u7528\u6237\u7684\u64CD\u4F5C\uFF0C\u800C\u4E0D\u7528\u50CF\u4E4B\u524D\u90A3\u6837\u9700\u8981\u7B49\u5230\u6574\u4E2A\u5927\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u624D\u80FD\u54CD\u5E94</p></li><li><p>\u6570\u636E\u7ED3\u6784\u5C42\u9762\u7406\u89E3\uFF1A</p><blockquote><p>\u6587\u4EF6\u4F4D\u7F6E\uFF1Apackages/react-reconciler/src/ReactFiber.js</p></blockquote><p>\u5B83\u662F\u4E00\u4E2A <code>js\u5BF9\u8C61</code>\uFF0C\u6BCF\u4E00\u4E2A React \u5143\u7D20\u5C31\u5BF9\u5E94\u4E00\u4E2A Fiber \u5BF9\u8C61\uFF0C\u5B83\u662F\u57FA\u4E8E\u94FE\u8868\u5B9E\u73B0\u7684\uFF0C\u4E3B\u8981\u5229\u7528\u5176 <code>child</code>\u3001<code>return</code>\u3001<code>sibling</code> \u5C5E\u6027\u6765\u5B9E\u73B0 React Fiber \u673A\u5236\uFF08\u53EF\u63A7\u4E2D\u65AD\u64CD\u4F5C\u7B49\uFF09\uFF1Bfiber \u5BF9\u8C61\u7684\u4E3B\u8981\u5C5E\u6027\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Fiber</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6807\u8BC6 fiber \u7C7B\u578B\u7684\u6807\u7B7E // \u6587\u4EF6\u4F4D\u7F6E\uFF1Apackages/shared/ReactWorkTags.js</span>
    tag<span class="token operator">:</span> WorkTag<span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5411\u7236\u8282\u70B9</span>
    <span class="token keyword">return</span><span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5411\u5B50\u8282\u70B9</span>
    child<span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u6307\u5411\u5144\u5F1F\u8282\u70B9</span>
    sibling<span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u5F00\u59CB\u6267\u884C\u65F6\u8BBE\u7F6E props \u503C</span>
    pendingProps<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u7ED3\u675F\u65F6\u8BBE\u7F6E\u7684 props \u503C</span>
    memoizedProps<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5F53\u524D state</span>
    memoizedState<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>
    <span class="token comment">// Effect \u7C7B\u578B\uFF0C\u8BE6\u60C5\u67E5\u770B\u4EE5\u4E0B effectTag</span>
    effectTag<span class="token operator">:</span> SideEffectTag<span class="token punctuation">,</span>
    <span class="token comment">// effect \u8282\u70B9\u6307\u9488\uFF0C\u6307\u5411\u4E0B\u4E00\u4E2A effect</span>
    nextEffect<span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// effect list \u662F\u5355\u5411\u94FE\u8868\uFF0C\u7B2C\u4E00\u4E2A effect</span>
    firstEffect<span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// effect list \u662F\u5355\u5411\u94FE\u8868\uFF0C\u6700\u540E\u4E00\u4E2A effect</span>
    lastEffect<span class="token operator">:</span> Fiber <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token comment">// work \u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u53EF\u7528\u4E8E\u6807\u8BC6\u4E00\u4E2A work \u4F18\u5148\u7EA7\u987A\u5E8F</span>
    expirationTime<span class="token operator">:</span> ExpirationTime<span class="token punctuation">,</span>
    <span class="token comment">// ... \u8FD8\u6709\u4E00\u4E9B\u5176\u4ED6\u5C5E\u6027</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="fiber-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" tabindex="-1">Fiber \u662F\u5982\u4F55\u5DE5\u4F5C\u7684 <a class="header-anchor" href="#fiber-\u662F\u5982\u4F55\u5DE5\u4F5C\u7684" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,16),c=[t];function p(l,r,i,d,k,u){return n(),a("div",null,c)}var m=e(o,[["render",p]]);export{f as __pageData,m as default};
