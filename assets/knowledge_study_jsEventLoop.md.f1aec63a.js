import{_ as n,c as s,o as a,b as t}from"./app.f1154705.js";const f='{"title":"JS EventLoop","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u6D4F\u89C8\u5668\u7EBF\u7A0B","slug":"\u6D4F\u89C8\u5668\u7EBF\u7A0B"},{"level":3,"title":"Event Loop \u4E8B\u4EF6\u5FAA\u73AF","slug":"event-loop-\u4E8B\u4EF6\u5FAA\u73AF"}],"relativePath":"knowledge/study/jsEventLoop.md","lastUpdated":1638599525298}',p={},o=t(`<h1 id="js-eventloop" tabindex="-1">JS EventLoop <a class="header-anchor" href="#js-eventloop" aria-hidden="true">#</a></h1><h3 id="\u6D4F\u89C8\u5668\u7EBF\u7A0B" tabindex="-1">\u6D4F\u89C8\u5668\u7EBF\u7A0B <a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7EBF\u7A0B" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u5BBF\u4E3B\u73AF\u5883\u5305\u542B 5 \u4E2A\u7EBF\u7A0B\uFF1A</p><ol><li>JS \u5F15\u64CE\uFF1A\u8D1F\u8D23\u6267\u884C\u6267\u884C\u6808\u6700\u9876\u90E8\u7684\u4EE3\u7801</li><li>GUI \u7EBF\u7A0B\uFF1A\u8D1F\u8D23\u9875\u9762\u7684\u6E32\u67D3</li><li>\u4E8B\u4EF6\u76D1\u542C\u7EBF\u7A0B\uFF1A\u8D1F\u8D23\u76D1\u542C\u9875\u9762\u7684\u5404\u79CD\u4E8B\u4EF6</li><li>\u8BA1\u65F6\u7EBF\u7A0B\uFF1A\u8D1F\u8D23\u8BA1\u65F6\uFF08\u5982 setTimeout \u7B49\uFF09</li><li>\u7F51\u7EDC\u7EBF\u7A0B\uFF1A\u8D1F\u8D23\u7F51\u7EDC\u901A\u4FE1</li></ol><h3 id="event-loop-\u4E8B\u4EF6\u5FAA\u73AF" tabindex="-1">Event Loop \u4E8B\u4EF6\u5FAA\u73AF <a class="header-anchor" href="#event-loop-\u4E8B\u4EF6\u5FAA\u73AF" aria-hidden="true">#</a></h3><blockquote><p>\u63CF\u8FF0\uFF1A\u5F53\u6267\u884C\u6808 (call stack) \u5DF2\u6E05\u7A7A\u7684\u60C5\u51B5\u4E0B\uFF0CJS \u5F15\u64CE\u5BF9\u4E8B\u4EF6\u961F\u5217\u7684\u53D6\u51FA\u6267\u884C\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u4E0E\u5BBF\u4E3B\u73AF\u5883\u7684\u914D\u5408\uFF0C\u79F0\u4E4B\u4E3A\u4E8B\u4EF6\u5FAA\u73AF</p></blockquote><p>\u4ED6\u4EBA <a href="https://juejin.cn/post/6876456872036007944#heading-1" target="_blank" rel="noopener noreferrer">Event Loop</a> \u63CF\u8FF0\uFF1A</p><blockquote><ol><li>js \u5206\u4E3A\u540C\u6B65\u4EFB\u52A1\u548C\u5F02\u6B65\u4EFB\u52A1\uFF0C\u6240\u6709\u7684\u540C\u6B65\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C</li><li>\u53E6\u5916\u5B58\u5728\u7740\u4E00\u4E2A &quot;\u4EFB\u52A1\u961F\u5217&quot;\uFF0C\u53EA\u8981\u5F02\u6B65\u7684\u4EFB\u52A1\u6709\u4E86\u7ED3\u679C\uFF0C\u4FBF\u5728\u4EFB\u52A1\u961F\u5217\u91CC\u9762\u52A0\u5165\u4E00\u4E2A\u4E8B\u4EF6</li><li>\u5F53\u4E3B\u7EBF\u7A0B\u7684\u7684\u540C\u6B65\u4EFB\u52A1\u90FD\u6267\u884C\u5B8C\u4E86\uFF0C\u6267\u884C\u6808\u6E05\u7A7A\uFF0C\u8FD9\u4E2A\u65F6\u5019\u4F1A\u53BB\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\uFF0C\u4F9D\u6B21\u628A\u4ED6\u4EEC\u6254\u5230\u4E3B\u7EBF\u7A0B\u6267\u884C</li><li>\u8FD9\u4E2A\u8FC7\u7A0B\u4E0D\u65AD\u5FAA\u73AF\uFF0C\u5C31\u6210\u4E86 js \u7684\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236</li></ol></blockquote><p>\u5BF9\u6BD4\u4EE5\u4E0A\uFF0C\u8BB2\u4E00\u4E0B\u672C\u4EBA\u81EA\u5DF1\u5173\u4E8E\u4E8B\u4EF6\u5FAA\u73AF\u7684\u7406\u89E3\uFF1A</p><blockquote><ol><li>js \u540C\u6B65\u4EE3\u7801\u9010\u884C\u89E3\u6790\u5E76\u63A8\u5165\u6267\u884C\u6808\uFF0C\u518D js \u6267\u884C\u5F15\u64CE\u89E3\u6790\u6267\u884C\u6267\u884C\u6808\u6700\u9876\u90E8\u7684\u4EE3\u7801\uFF08\u56E0\u4E3A\u53EF\u80FD\u8C03\u7528\u5176\u4ED6\u51FD\u6570\uFF0C\u5219\u4F1A\u4E0D\u65AD\u521B\u5EFA\u6808\u5E27\u5165\u6808\uFF0C\u6267\u884C\u5B8C\u6BD5\u8FBE\u5230\u51FA\u6808\u6761\u4EF6\u5219\u51FA\u6808\uFF09</li><li>\u9047\u5230\u7C7B\u4F3C setTimeout\uFF0CsetInterval \u7B49\u5B8F\u4EFB\u52A1\uFF0C\u7531\u8BA1\u65F6\u7EBF\u7A0B\u6216\u5176\u4ED6\u7EBF\u7A0B\u5F00\u542F\u76D1\u542C\uFF0C\u7B49\u5F85\u89E6\u53D1\u65F6\u673A\u5C06\u5176\u63A8\u5165\u5B8F\u4EFB\u52A1\u961F\u5217</li><li>\u9047\u5230\u7C7B\u4F3C Promise.resolve\uFF0CMutationObserver \u7B49\u5FAE\u4EFB\u52A1\uFF0C\u7B49\u5F85\u6761\u4EF6\u89E6\u53D1\u518D\u5C06\u5176\u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217</li><li>\u540C\u6B65\u4EE3\u7801\u6267\u884C\u6808\u6E05\u7A7A\u7684\u72B6\u6001\u4E0B\uFF0C\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\uFF08\u5148\u53BB\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\u662F\u5426\u6709\u5FAE\u4EFB\u52A1\uFF0C\u82E5\u6709\uFF0C\u5219\u538B\u5165\u6267\u884C\u6808\u5E76\u8FDB\u884C\u89E3\u6790\u6267\u884C\uFF0C\u76F4\u5230\u6E05\u7A7A\u5F53\u524D\u5FAE\u4EFB\u52A1\u961F\u5217\uFF09</li><li>\u82E5\u65E0\u5FAE\u4EFB\u52A1\uFF0C\u5219\u53BB\u68C0\u67E5\u5B8F\u4EFB\u52A1\u961F\u5217\uFF08\u6709\u5219\u538B\u5165\u6267\u884C\u6808\u8FDB\u884C\u6267\u884C\uFF09</li></ol></blockquote><blockquote><p>\u53E6\u5916\u8865\u5145\u4E00\u70B9\uFF0C\u5982\u5728\uFF1Aasync \u4FEE\u9970\u7684\u5F02\u6B65\u51FD\u6570\u4E2D\uFF0C\u4F7F\u7528 await \u8BED\u53E5\u7684\u60C5\u51B5</p><ul><li>\u82E5 await \u540E\u7D27\u8DDF\u51FD\u6570\u6267\u884C\uFF0C\u5219\u8DF3\u53BB\u6267\u884C\u90A3\u4E2A\u51FD\u6570\u5185\u90E8\u7684\u540C\u6B65\u4EE3\u7801 \u7136\u540E\u8DF3\u51FA\u5F53\u524D\u51FD\u6570 (\u82E5\u8FD8\u6709\u5176\u4ED6\u4EE3\u7801\uFF0C\u5219\u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u4E4B\u540E\u7684 await \u8BED\u53E5\u540C\u7406)</li><li>\u82E5 await \u540E\u7D27\u8DDF\u4E00\u4E2A\u5E38\u91CF (\u5982\uFF1Aawait 1)\uFF0C\u5219\u76F4\u63A5\u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\u7B49\u5F85\u6267\u884C\u6808\u6E05\u7A7A</li></ul></blockquote><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u82E5\u6B64\u53E5\u662F await 999</span>
  <span class="token comment">// \u6700\u7EC8\u6253\u5370\u7ED3\u679C\u4E3A\uFF1A0, 5, 8, 1, 3, 6, &#39;1 end&#39;, 7, 4</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;1 end&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A 0, 2, 5, 8, 1, 3, 6, &#39;1 end&#39;, 7, 4</span>
</code></pre></div><h4 id="\u5B8F\u4EFB\u52A1-\u4E0E-\u5FAE\u4EFB\u52A1" tabindex="-1">\u5B8F\u4EFB\u52A1 \u4E0E \u5FAE\u4EFB\u52A1 <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1-\u4E0E-\u5FAE\u4EFB\u52A1" aria-hidden="true">#</a></h4><p>\u9664\u540C\u6B65\u4EFB\u52A1\u5916\uFF0C\u6211\u4EEC\u5C06\u5F02\u6B65\u4EFB\u52A1\u5206\u4E3A <code>\u5B8F\u4EFB\u52A1</code> \u548C <code>\u5FAE\u4EFB\u52A1</code></p><h5 id="\u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09" tabindex="-1">\u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09 <a class="header-anchor" href="#\u5B8F\u4EFB\u52A1\uFF08macrotask\uFF09" aria-hidden="true">#</a></h5><p>js \u662F\u4E00\u95E8\u89E3\u91CA\u578B\u7684\u8BED\u8A00\uFF0C\u5B83\u5148\u8981\u751F\u6210 AST \u8BED\u6CD5\u6811\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u7136\u540E\u8FB9\u89E3\u91CA\u8FB9\u6267\u884C\u3002\u5305\u62EC\u628A\u4EFB\u52A1\u961F\u5217\u7684\u4E8B\u4EF6\u52A0\u5165\u5230\u4E3B\u7EBF\u7A0B\u7684\u6267\u884C\uFF0C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u7684\u6267\u884C\u76F8\u5F53\u4E8E\u4E00\u4E2A task\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5728\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u7ED3\u675F\u4E4B\u540E\uFF0C\u53E6\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5F00\u59CB\u4E4B\u524D\uFF0C\u5BF9\u9875\u9762\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3\uFF08<a href="https://juejin.cn/post/6876456872036007944#heading-4" target="_blank" rel="noopener noreferrer">\u4E8B\u4EF6\u5FAA\u73AF\u56FE\u793A</a>\uFF09</p><p>\u5E38\u89C1\u7684 macrotask\uFF1AsetTimeout\u3001setInterval\u3001setImmediate\u3001I/O\u3001UI render \u7B49</p><h5 id="\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09" tabindex="-1">\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09 <a class="header-anchor" href="#\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09" aria-hidden="true">#</a></h5><p>\u5F53\u6267\u884C\u6808\u7684\u540C\u6B65\u4EE3\u7801\u90FD\u6267\u884C\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u4F1A\u628A\u5B83\u5728\u6267\u884C\u671F\u95F4\u4EA7\u751F\u7B49\u6240\u6709\u5FAE\u4EFB\u52A1\u90FD\u8FDB\u884C\u6267\u884C\uFF0C\u4E5F\u5C31\u662F\u8981\u628A\u5FAE\u4EFB\u52A1\u961F\u5217\u6267\u884C\u6E05\u7A7A\u6389\uFF0C\u63A5\u4E0B\u6765\u6D4F\u89C8\u5668\u5F00\u59CB\u5BF9\u9875\u9762\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3 <strong><code>(\u6240\u4EE5\u8BF4\u6D4F\u89C8\u5668\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u673A\u662F\u5728\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217\u4E4B\u540E\uFF0C\u82E5\u6CA1\u6709\u5FAE\u4EFB\u52A1\uFF0C\u5219\u5728\u6BCF\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u7ED3\u675F\u4E4B\u540E\uFF0C\u53E6\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u5F00\u59CB\u4E4B\u524D\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3)</code></strong></p><p>\u5E38\u89C1\u7684 microtask\uFF1Aprocess.nextTick(Node \u73AF\u5883)\u3001Promise\u3001async/await(\u672C\u8D28\u662F Promise)\u3001MutationObserver(H5 \u65B0\u589E)</p><div class="language-js"><pre><code><span class="token comment">// \u4E3E\u4E2A\u6817\u5B50</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">task</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;promise resolved&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> pro <span class="token operator">=</span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pro <span class="token operator">=</span> pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;pro.then end&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A1, 2, 7, 6,\u3010\u7B49\u5F85 5s \u540E\u3011 4 promise resolved, 5 pro.then end, 3</span>

<span class="token comment">/**
\u6267\u884C\u987A\u5E8F\u5206\u6790\uFF1A
1. \u5168\u5C40\u4E0A\u4E0B\u6587\u5165\u6808\uFF0Clog \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6267\u884C\u6808\uFF0C\u6253\u5370\u30101\u3011\uFF0Clog \u7684\u4E0A\u4E0B\u6587\u51FA\u6808
2. task \u51FD\u6570\u6267\u884C\uFF0Ctask \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6267\u884C\u6808\uFF0Cnew Promise \u5185\u540C\u6B65\u4EE3\u7801\u6267\u884C\uFF0C\u6253\u5370\u30102\u3011\uFF0CsetTimeout (5s) \u4EA4\u7ED9\u8BA1\u65F6\u7EBF\u7A0B\u76D1\u542C\uFF0C\u51FA\u6808
3. \u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0CsetTimeout (0s) \u4EA4\u7ED9\u8BA1\u65F6\u7EBF\u7A0B\u76D1\u542C\uFF0C\u8BA1\u65F6\u7EBF\u7A0B\u76D1\u542C\u5230 0s \u65F6\u95F4\u5DF2\u5230\uFF0C\u5219\u7ACB\u5373\u5C06\u5B83\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217
4. log \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6267\u884C\u6808\uFF0C\u6253\u5370\u30107\u3011\uFF0Clog \u7684\u4E0A\u4E0B\u6587\u51FA\u6808\uFF08\u540C\u6B65\u4EE3\u7801\u6267\u884C\u7ED3\u675F\uFF09\uFF0C\u5168\u5C40\u4E0A\u4E0B\u6587\u51FA\u6808
5. \u6267\u884C\u6808\u5DF2\u6E05\u7A7A\uFF0C\u5219\u8FDB\u5165\u4E8B\u4EF6\u5FAA\u73AF\u3002\u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\u53D1\u73B0\u5E76\u65E0\u5FAE\u4EFB\u52A1\uFF0C\u5219\u53BB\u68C0\u67E5\u5B8F\u4EFB\u52A1\u961F\u5217\uFF0C\u6709\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5219\u5C06\u5176\u5165\u6808\uFF0C\u6253\u5370\u30106\u3011\uFF0C\u4E0A\u4E0B\u6587\u51FA\u6808
6. 5s \u540E\uFF0C\u8BA1\u65F6\u7EBF\u7A0B\u5C06\u4E4B\u524D\u76D1\u542C\u7684\u4EFB\u52A1\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\uFF0C\u91CD\u590D\u7B2C\u4E94\u6B65\uFF0C\u5B8F\u4EFB\u52A1\u56DE\u8C03\u51FD\u6570\u5165\u6808\u6267\u884C\uFF0C
   \u6267\u884C\u5230 resolve(&#39;promise resolved&#39;) \u5C06 pro.then \u7684\u56DE\u8C03\u51FD\u6570\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u6B64\u5B8F\u4EFB\u52A1\u51FD\u6570\u6267\u884C\u5B8C\u6BD5\uFF0C\u51FA\u6808
7. \u91CD\u590D\u7B2C\u4E94\u6B65\uFF0C\u53D1\u73B0\u5FAE\u4EFB\u52A1\u6709\u4E00\u4E2A\u4EFB\u52A1\uFF0C\u5219\u5165\u6808\u6267\u884C\u3002\u9047\u5230 setTimeout (0s) \u51FD\u6570\uFF0C\u8BA1\u65F6\u7EBF\u7A0B\u5C06\u5176\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217\u7B49\u5F85\u6267\u884C\uFF0C
   \u6253\u5370\u3010&#39;4 promise resolved&#39;\u3011\uFF0C\u8FD0\u884C return \u8BED\u53E5\u5C06 pro.then \u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217
8. \u91CD\u590D\u7B2C\u4E94\u6B65\uFF0C\u53D6\u51FA\u5FAE\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\u5165\u6808\u6267\u884C\uFF0C\u6253\u5370\u3010&#39;5 pro.then end&#39;\u3011\uFF0C\u6267\u884C\u4E0A\u4E0B\u6587\u51FA\u6808\uFF0C\u8FDB\u5165\u4E0B\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF
9. \u5FAE\u4EFB\u52A1\u961F\u5217\u4E3A\u7A7A\uFF0C\u5219\u53D6\u51FA\u5B8F\u4EFB\u52A1\u961F\u5217\u7684\u7B2C\u4E00\u4E2A\u4EFB\u52A1\u5165\u6808\u6267\u884C\uFF0C\u6253\u5370\u30103\u3011\uFF0C\u6267\u884C\u4E0A\u4E0B\u6587\u51FA\u6808\uFF0C\u6574\u4E2A\u7A0B\u5E8F\u6267\u884C\u5B8C\u6BD5
*/</span>
</code></pre></div><div class="language-js"><pre><code><span class="token comment">// \u518D\u4E3E\u4E2A\u6817\u5B50</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6253\u5370\u7ED3\u679C\uFF1A0, 2, 4, 7, 1, 5, 6, 3</span>

<span class="token comment">/**
\u6267\u884C\u987A\u5E8F\u5206\u6790\uFF1A
1. \u5168\u5C40\u4E0A\u4E0B\u6587\u5165\u6808\uFF0Clog \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6267\u884C\u6808\uFF0C\u6253\u5370\u30100\u3011\uFF0Clog \u7684\u4E0A\u4E0B\u6587\u51FA\u6808
2. \u5F02\u6B65\u51FD\u6570 func1 \u6267\u884C\uFF0Cfunc1 \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u538B\u5165\u6267\u884C\u6808\uFF0Cawait \u8BED\u53E5\u6267\u884C\u5F02\u6B65\u51FD\u6570 func2\uFF0C\u6253\u5370\u30102\u3011
   \u5E76\u5C06 func1 \u7684\u540E\u7EED\u4EE3\u7801\u653E\u5165\u5FAE\u4EFB\u52A1\u961F\u5217 (\u6267\u884C\u4E00\u53E5 await \u8BED\u53E5\u540E\uFF0C\u5B83\u4F1A\u8DF3\u51FA\u5F53\u524D\u51FD\u6570\uFF0C\u53BB\u6267\u884C\u540C\u6B65\u4EE3\u7801)
3. \u89E3\u6790\u5230 setTimeout (0s)\uFF0C\u8BA1\u65F6\u8FDB\u7A0B\u76D1\u542C\u6267\u884C\u6761\u4EF6\u5DF2\u6EE1\u8DB3\uFF0C\u5C06\u5176\u653E\u5165\u5B8F\u4EFB\u52A1\u961F\u5217
4. new Promise \u56DE\u8C03\u51FD\u6570\u7684\u540C\u6B65\u4EE3\u7801\u6267\u884C\uFF0C\u6253\u5370\u30104\u3011\uFF0Cresolve \u8BED\u53E5\u5C06 .then \u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217
5. \u7EE7\u7EED\u6267\u884C\u540C\u6B65\u4EE3\u7801\uFF0C\u6253\u5370\u30107\u3011
6. \u68C0\u67E5\u5FAE\u4EFB\u52A1\u961F\u5217\uFF0C\u6709\u4E24\u4E2A\u5FAE\u4EFB\u52A1\uFF0C\u6309\u63A8\u5165\u961F\u5217\u7684\u987A\u5E8F\u53D6\u51FA\u6267\u884C\uFF0C\u6253\u5370\u30101\u3011\uFF0C\u518D\u6253\u5370\u30105\u3011\uFF0C\u6B64\u5FAE\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C
   \u5C06\u540E\u7EED .then \u63A8\u5165\u5FAE\u4EFB\u52A1\u961F\u5217
7. \u4E0B\u4E00\u8F6E\u5FAA\u73AF\uFF0C\u53D6\u51FA\u5FAE\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\u6267\u884C\uFF0C\u6253\u5370\u30106\u3011
8. \u53D6\u51FA\u5B8F\u4EFB\u52A1\u961F\u5217\u7684\u4EFB\u52A1\u6267\u884C\uFF0C\u6253\u5370\u30103\u3011\uFF0C\u7A0B\u5E8F\u6267\u884C\u5B8C\u6BD5
*/</span>
</code></pre></div>`,22),c=[o];function e(u,l,i,k,r,d){return a(),s("div",null,c)}var g=n(p,[["render",e]]);export{f as __pageData,g as default};
