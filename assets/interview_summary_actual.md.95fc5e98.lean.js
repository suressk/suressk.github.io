import{_ as a,c as t,e as n,d as s,o as p}from"./app.00347171.js";const h='{"title":"\u5B9E\u6218\u9762\u8BD5\u9898\u5206\u4EAB","description":"","frontmatter":{"title":"\u5B9E\u6218\u9762\u8BD5\u9898\u5206\u4EAB"},"headers":[{"level":3,"title":"\u4EE3\u7801\u7F16\u5199","slug":"\u4EE3\u7801\u7F16\u5199"}],"relativePath":"interview/summary/actual.md","lastUpdated":1654809095713}',o={},e=s('',1),c=s(`__VP_STATIC_START__<ul><li>react \u6E90\u7801\u90E8\u5206\uFF0C\u5982\u4F55\u5B8C\u6210\u9875\u9762\u6E32\u67D3\uFF1F\u5173\u952E\u6B65\u9AA4\u6709\u54EA\u4E9B\uFF1F</li><li><code>qiankun</code> \u5FAE\u5E94\u7528\u65B9\u6848\uFF1F\u4E0E <code>iframe</code> \u7684\u533A\u522B\uFF1F</li><li><code>qiankun</code> \u7684\u8DEF\u7531\u5339\u914D\u539F\u7406\uFF08\u6E90\u7801\u5C42\u9762\uFF09</li><li><code>CI/CD</code> \u6D41\u7A0B\u65B9\u6848</li></ul><h3 id="\u4EE3\u7801\u7F16\u5199" tabindex="-1">\u4EE3\u7801\u7F16\u5199 <a class="header-anchor" href="#\u4EE3\u7801\u7F16\u5199" aria-hidden="true">#</a></h3><ul><li><p>\u624B\u5199\u5B9E\u73B0 <code>Promise.all()</code>\uFF1A<a href="/knowledge/study/promise.html">\u5B9E\u73B0\u65B9\u6848\u53C2\u89C1 \u27A1\uFE0F</a> - ByteDance</p></li><li><p>\u624B\u5199\u5B9E\u73B0 <code>Promise.race()</code>\uFF1A<a href="/knowledge/study/promise.html">\u5B9E\u73B0\u65B9\u6848\u53C2\u89C1 \u27A1\uFE0F</a> - ByteDance</p></li><li><p>ES5 \u5B9E\u73B0\u7EE7\u627F\uFF1A<a href="/interview/summary/basis.html#\u539F\u578B\u94FE\u7684\u5E94\u7528">\u5B9E\u73B0\u65B9\u6848\u53C2\u89C1 \u27A1\uFE0F</a> - ByteDance</p></li><li><p>\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u8F93\u51FA\u6570\u7EC4\u7684\u5168\u6392\u5217\u65B9\u6848\uFF08<a href="https://leetcode.cn/problems/permutations/" target="_blank" rel="noopener noreferrer">LeetCode 46\u9898</a>\uFF09\uFF1A - ByteDance</p><div class="language-js"><pre><code><span class="token comment">// \u8F93\u5165\uFF1A[1, 2, 3]</span>
<span class="token comment">/* \u8F93\u51FA\uFF1A
[
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2]
]
*/</span>
<span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// achieve it</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u7EDF\u8BA1\u62EC\u53F7\u5185\u7684\u8868\u8FBE\u5F0F\uFF1A - ByteDance</p><div class="language-js"><pre><code><span class="token comment">// \u8F93\u5165\uFF1A&#39;((2 + 3) + (2 * 4)) + 2&#39;</span>
<span class="token comment">/* \u8F93\u51FA\uFF1A
[
    &#39;(2 + 3) + (2 * 4)&#39;,
    &#39;2 + 3&#39;,
    &#39;2 * 4&#39;
]
*/</span>
<span class="token keyword">function</span> <span class="token function">solution</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// achieve it</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5B9E\u73B0\u4E00\u4E2A\u4EFB\u52A1\u961F\u5217 <code>TaskQueue</code>\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u652F\u6301\u6DFB\u52A0\u4EFB\u52A1\uFF0C\u542F\u52A8\u4EFB\u52A1\u961F\u5217\uFF0C\u505C\u6B62\u4EFB\u52A1\u961F\u5217\uFF0C\u6309\u987A\u5E8F\u6267\u884C\u4EFB\u52A1</span>
<span class="token comment">// \u4EFB\u52A1\u90FD\u662F\u51FD\u6570\uFF0C\u652F\u6301\u5F02\u6B65\u51FD\u6570\uFF0C\u652F\u6301\u8BBE\u7F6E\u6BCF\u4E2A\u4EFB\u52A1\u7684\u6267\u884C\u7B49\u5F85\u65F6\u95F4</span>
<span class="token keyword">class</span> <span class="token class-name">TaskQueue</span><span class="token punctuation">{</span>
   <span class="token function">add</span><span class="token punctuation">(</span>fn<span class="token operator">:</span>Function<span class="token punctuation">,</span>time<span class="token operator">:</span>number<span class="token punctuation">)</span><span class="token operator">:</span>TaskQueue
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528\u793A\u4F8B\uFF1A</span>
<span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TaskQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
task<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
task<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
task<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
task<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
task<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u8F93\u51FA\uFF1A</span>
<span class="token number">1</span>
<span class="token comment">// \u7B49\u5F851000ms</span>
<span class="token number">2</span>
<span class="token comment">// \u7B49\u5F852000ms</span>
<span class="token number">3</span>

<span class="token comment">// \u5B9E\u73B0</span>
<span class="token keyword">class</span> <span class="token class-name">TaskQueue</span><span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span>
    <span class="token punctuation">}</span>
    <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    <span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5F00\u542F\u4EFB\u52A1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u6BCF\u6B21\u62FF\u4E00\u4E2A</span>
            <span class="token keyword">const</span> task <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u9012\u5F52</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5B9E\u73B0\u4E00\u4E2A <code>convertTree</code> \u65B9\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u539F\u6570\u636E\u683C\u5F0F</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&#39;a1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
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
<span class="token comment">// ]</span>

<span class="token keyword">function</span> <span class="token function">convertTree</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// you need to achieve it here...</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5B9E\u73B0 <code>new</code> \u64CD\u4F5C\u7B26\u65B9\u6CD5 \uFF08<a href="/interview/summary/basis.html#\u539F\u578B">\u76F8\u5173\u77E5\u8BC6\u70B9\u8BE6\u89C1 \u27A1\uFE0F</a>\uFF09</p><div class="language-js"><pre><code><span class="token comment">// \u6211\u4EEC\u534F\u5546\u7B2C\u4E00\u4E2A\u53C2\u6570\u4F20\u9012\u6211\u4EEC\u9700\u8981\u751F\u6210\u5B9E\u4F8B\u7684\u6784\u9020\u51FD\u6570\uFF0C</span>
<span class="token comment">// \u6784\u9020\u51FD\u6570\u9700\u8981\u7684\u53C2\u6570\uFF0C\u540E\u9762\u4F9D\u6B21\u4F20\u5165\u5373\u53EF</span>
<span class="token keyword">function</span> <span class="token function">newFunc</span><span class="token punctuation">(</span><span class="token parameter">Fn<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> Fn <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;The params of Fn is not a function&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;The function doesnot have the prototype property&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5E76\u5C06\u5B83\u7684\u9690\u5F0F\u539F\u578B\u6307\u5411 \u6784\u9020\u51FD\u6570 Fn \u7684\u539F\u578B</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Fn</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">Fn</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token comment">// const res = Fn.apply(obj, [...args])</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> res <span class="token operator">:</span> obj
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u95EE\u9898\u63CF\u8FF0\u5982\u4E0B\uFF1A</p><div class="language-js"><pre><code><span class="token comment">/**
* \u6709\u8D27\u8239\u9700\u8981\u8FD0\u8F93\u4E00\u6279\u8D27\u7269\uFF0C\u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570\u6570\u7EC4 weights \u548C\u4E00\u4E2A\u6B63\u6574\u6570 D\uFF0C
* \u5176\u4E2D weights \u4EE3\u8868\u4E00\u7CFB\u5217\u8D27\u7269\uFF0C\u5373 weights[i] \u7684\u503C\u4EE3\u8868\u7B2C i \u4EF6\u7269\u54C1\u7684\u91CD\u91CF\uFF0C
* \u8D27\u7269\u662F\u4E0D\u53EF\u5206\u5272\u4E14\u5FC5\u987B\u6309\u987A\u5E8F\u8FD0\u8F93\uFF0C\u8BF7\u8BA1\u7B97\u8D27\u8239\u80FD\u591F\u5728 D \u5929\u5185\u8FD0\u5B8C\u6240\u6709\u8D27\u7269\u7684\u6700\u4F4E\u8FD0\u8F7D\u80FD\u529B
* \u51FD\u6570\u7B7E\u540D\uFF1A int shipWithinDays(int[] weights, int D) 
* \u793A\u4F8B\uFF1Aweights = [1,2,3,4,5,6,7,8,9,10]  D = 5\uFF0C\u5219\u51FD\u6570\u8FD4\u56DE 15
*/</span>
<span class="token comment">// \u5B9E\u73B0\u5982\u4E0B\uFF1A</span>
<span class="token keyword">const</span> weights <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token constant">D</span> <span class="token operator">=</span> <span class="token number">5</span>

<span class="token keyword">function</span> <span class="token function">getShipWithinDays</span><span class="token punctuation">(</span><span class="token parameter">weights<span class="token punctuation">,</span> days</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> len <span class="token operator">=</span> weights<span class="token punctuation">.</span>length
    <span class="token comment">// \u8D27\u7269\u4E0D\u53EF\u5206\u5272\uFF0C\u5219\u8239\u{1F6A2}\u81F3\u5C11\u8981\u80FD\u88C5\u4E0B\u6700\u5927\u8D27\u7269</span>
    <span class="token keyword">const</span> minWeight <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>weights<span class="token punctuation">)</span> <span class="token comment">// \u6700\u5C0F\u8F7D\u8D27</span>
    <span class="token comment">// \u6700\u5C11\u4E00\u5929\u8FD0\u5B8C\uFF0C\u5219\u8239\u6700\u5927\u53EA\u9700\u8981\u88C5\u4E0B\u6240\u6709\u8D27\u7269\u603B\u548C\u5373\u53EF</span>
    <span class="token keyword">const</span> maxWeight <span class="token operator">=</span> weights<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>pre <span class="token operator">+</span> next<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// \u6700\u5927\u8F7D\u8D27</span>
    
    <span class="token comment">// \u6700\u5C0F\u8F7D\u8D27 =&gt; \u6700\u5927\u8F7D\u8D27</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> weight <span class="token operator">=</span> minWeight<span class="token punctuation">;</span> weight <span class="token operator">&lt;=</span> maxWeight<span class="token punctuation">;</span> weight<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> dayCount <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// \u5929\u6570</span>
        <span class="token keyword">let</span> curWeight <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// \u5F53\u524D\u7EDF\u8BA1\u8D28\u91CF</span>
        <span class="token comment">// \u904D\u5386\u6240\u6709\u8D27\u7269</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> weights<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            curWeight <span class="token operator">+=</span> item
            <span class="token keyword">if</span> <span class="token punctuation">(</span>curWeight <span class="token operator">===</span> weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dayCount<span class="token operator">++</span>
                curWeight <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>curWeight <span class="token operator">&gt;</span> weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                dayCount<span class="token operator">++</span>
                curWeight <span class="token operator">=</span> item
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dayCount <span class="token operator">===</span> days<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> weight
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">getShipWithinDays</span><span class="token punctuation">(</span>weights<span class="token punctuation">,</span> <span class="token constant">D</span><span class="token punctuation">)</span>
</code></pre></div></li></ul>__VP_STATIC_END__`,3);function l(u,k,i,r,m,d){return p(),t("div",null,[n(" bytedance first-interview "),e,n(" tencent first-interview "),c])}var w=a(o,[["render",l]]);export{h as __pageData,w as default};
