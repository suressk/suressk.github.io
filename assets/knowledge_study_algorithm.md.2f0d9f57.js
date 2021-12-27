import{_ as n,c as s,o as a,b as t}from"./app.6d7c7532.js";const f='{"title":"Summary of Interview Algorithm","description":"","frontmatter":{"title":"Summary of Interview Algorithm"},"headers":[{"level":3,"title":"\u9762\u8BD5\u6240\u9047\u7B97\u6CD5\u9898\u76EE\u5C0F\u7ED3","slug":"\u9762\u8BD5\u6240\u9047\u7B97\u6CD5\u9898\u76EE\u5C0F\u7ED3"}],"relativePath":"knowledge/study/algorithm.md","lastUpdated":1640570582945}',p={},o=t(`<h3 id="\u9762\u8BD5\u6240\u9047\u7B97\u6CD5\u9898\u76EE\u5C0F\u7ED3" tabindex="-1">\u9762\u8BD5\u6240\u9047\u7B97\u6CD5\u9898\u76EE\u5C0F\u7ED3 <a class="header-anchor" href="#\u9762\u8BD5\u6240\u9047\u7B97\u6CD5\u9898\u76EE\u5C0F\u7ED3" aria-hidden="true">#</a></h3><br><h6 id="_1-\u62EC\u53F7\u5B57\u7B26\u4E32\u5339\u914D\uFF1A" tabindex="-1">1. \u62EC\u53F7\u5B57\u7B26\u4E32\u5339\u914D\uFF1A <a class="header-anchor" href="#_1-\u62EC\u53F7\u5B57\u7B26\u4E32\u5339\u914D\uFF1A" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u5B9E\u73B0\u4E00\u4E2A isMatch \u51FD\u6570\uFF0C\u8F93\u5165\u5B57\u7B26\u53EA\u6709 &#39;()[]{}&#39; \u4E09\u79CD\u62EC\u53F7\u5B57\u7B26\u4E4B\u4E2D\u7684\u82E5\u5E72\u9879\uFF0C</span>
<span class="token comment">// \u8981\u6C42\u62EC\u53F7\u6210\u5BF9\u5339\u914D\u4E14\u5DE6\u53F3\u987A\u5E8F\u4E0D\u53EF\u98A0\u5012</span>
<span class="token comment">// \u793A\u4F8B\u53CA\u9884\u671F\u7ED3\u679C\uFF1A</span>
<span class="token comment">// &#39;(([]))&#39; // true</span>
<span class="token comment">// &#39;()[]{}(())&#39; // true</span>
<span class="token comment">// &#39;())([]()&#39; // false</span>

<span class="token comment">// \u5B9E\u73B0\u65B9\u6848\u5982\u4E0B\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">isMatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">!==</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">||</span> str<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> brackets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> resMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5DE6\u534A\u62EC\u53F7 =&gt; \u5DE6\u62EC\u53F7\u7EDF\u8BA1\u6570 +1 &#39;(&#39; / &#39;[&#39; / &#39;{&#39;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>brackets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u53F3\u534A\u62EC\u53F7 &#39;)&#39; / &#39;]&#39; / &#39;}&#39;</span>
    <span class="token keyword">const</span> lastNum <span class="token operator">=</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>brackets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5DE6\u62EC\u53F7\u7EDF\u8BA1\u6570\u4E3A 0\uFF0C\u5219\u5339\u914D\u5931\u8D25</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastNum <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5426\u5219\uFF0C\u5DE6\u62EC\u53F7\u7EDF\u8BA1\u6570 -1</span>
    resMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>brackets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">,</span> lastNum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> resMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;{&quot;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;()[(]()): &quot;</span><span class="token punctuation">,</span> <span class="token function">isMatch</span><span class="token punctuation">(</span><span class="token string">&quot;()[(]())&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4EA4\u53C9\u60C5\u51B5\u5219\u4E5F\u4F1A\u8FD4\u56DE true</span>
<span class="token comment">// \u6D4B\u8BD5\u7ED3\u679C\u8FBE\u5230\u9884\u671F\uFF08\u6B22\u8FCE\u63D0\u51FA\u65B0\u89E3\u6CD5\uFF09</span>

<span class="token comment">// LeetCode \u7B2C 20 \u9898\u8BF4\u660E\u662F\u4E0D\u5141\u8BB8\u62EC\u53F7\u6709\u4EA4\u53C9\u7684\u60C5\u51B5\uFF0C\u5373 &#39;[(])&#39; \u4E3A false\uFF0C\u5219\u5B9E\u73B0\u5982\u4E0B\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">isMatch</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">!==</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">||</span> str<span class="token punctuation">.</span>length <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> brackets <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;(&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> item <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> matchedItem <span class="token operator">=</span> brackets<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5DE6\u534A\u62EC\u53F7 =&gt; \u5165\u6808</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matchedItem <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      stack<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">continue</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> top <span class="token operator">=</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u6808\u9876\u9879 [&#39;(&#39;, &#39;[&#39;]</span>
    <span class="token comment">// \u53F3\u534A\u62EC\u53F7 =&gt; \u6808\u5185\u65E0\u5DE6\u62EC\u53F7 || \u6808\u9876\u9879\u4E0E\u53F3\u62EC\u53F7\u4E0D\u5339\u914D</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>top <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">||</span> matchedItem <span class="token operator">!==</span> top<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5426\u5219\uFF0C\u5DE6\u62EC\u53F7\u51FA\u6808</span>
    stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h6 id="_2-\u6570\u5B57\u5BF9\u79F0\u5224\u5B9A" tabindex="-1">2. \u6570\u5B57\u5BF9\u79F0\u5224\u5B9A <a class="header-anchor" href="#_2-\u6570\u5B57\u5BF9\u79F0\u5224\u5B9A" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u5982\u6570\u5B57 3\uFF0C121\uFF0C12321 \u6210\u5DE6\u53F3\u5BF9\u79F0\uFF08\u5728\u4E0D\u8F6C\u6362\u7C7B\u578B\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B9E\u73B0\u6570\u5B57\u7684\u5BF9\u79F0\u5224\u5B9A\uFF09</span>
<span class="token comment">// \u521D\u59CB\u62FF\u5230\u8FD9\u51E0\u4E2A\u4E3E\u4F8B\u6570\u5B57\u65F6\uFF0C\u5C31\u76F4\u63A5\u60F3\u7684\u662F\u4E2A\u4F4D\u6570\u5355\u72EC\u5224\u5B9A\uFF0C</span>
<span class="token comment">// \u53E6\u5916\u7684\u5F00\u65B9\u518D\u5224\u5B9A\u7ED3\u679C\u662F\u4E0D\u662F\u6574\u6570\u4E0D\u5C31\u884C\u4E86\u5417\uFF1F</span>
<span class="token comment">// \u4F46\u6BD4\u5982 11, 123321 \u8FD9\u79CD\u5C31\u4E0D\u9002\u7528\u4E86</span>
<span class="token comment">// \u56DE\u6587\u6570\uFF0C\u5B9E\u73B0\u5982\u4E0B\uFF08TypeScript\uFF09\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8D1F\u6570\u6216\u4E2A\u4F4D\u4E3A 0 \u7684\u6570\u5B57\u4E0D\u53EF\u80FD\u5BF9\u79F0</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> revertedNumber<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> revertedNumber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    revertedNumber <span class="token operator">=</span> revertedNumber <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    n <span class="token operator">=</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53D6\u6574</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> n <span class="token operator">===</span> revertedNumber <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token operator">~</span><span class="token operator">~</span><span class="token punctuation">(</span>revertedNumber <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h6 id="_3-\u5B57\u7B26\u4E32\u89E3\u6790\u7F16\u8BD1" tabindex="-1">3. \u5B57\u7B26\u4E32\u89E3\u6790\u7F16\u8BD1 <a class="header-anchor" href="#_3-\u5B57\u7B26\u4E32\u89E3\u6790\u7F16\u8BD1" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u63CF\u8FF0\uFF1A\u7ED9\u5B9A\u5B57\u7B26\u4E32\u5982\uFF1A&#39;a[2]bc[3](def)[4]((g[2]h)[1]i)[2]&#39;</span>
<span class="token comment">// \u901A\u8FC7\u51FD\u6570\u5B9E\u73B0\u7F16\u8BD1\u89E3\u6790\uFF0C\u8F93\u51FA\uFF1A&#39;aabcccdefdefdefdefgghigghi&#39;\uFF0C\u4E0D\u53EF\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F</span>
<span class="token comment">// \u5373\uFF1A[] \u4E2D\u6570\u5B57\u8868\u793A\u5176\u91CD\u590D\u6B21\u6570\uFF0C\u5C0F\u62EC\u53F7\u8868\u793A\u4E00\u4E2A\u6574\u4F53\uFF0C\u5B58\u5728\u591A\u5C42\u5D4C\u5957\u7684\u60C5\u51B5</span>
<span class="token comment">// \u63D0\u5347\uFF1A[] \u4E2D\u7684\u6570\u5B57\u53EF\u4EE5\u662F\u8BA1\u7B97\u8868\u8FBE\u5F0F\uFF0C\u5982\uFF1A&#39;a[1+2*10]&#39;</span>

<span class="token comment">// \u521D\u6B65\u5B9E\u73B0\u65B9\u6848\u5982\u4E0B (\u90E8\u5206\u5B9E\u73B0)\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">compileStr</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str<span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// TODO ...</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> str <span class="token operator">!==</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">||</span> str<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token comment">/* \u6700\u7EC8\u7ED3\u679C\u5B57\u7B26\u4E32 */</span><span class="token punctuation">,</span>
    cache <span class="token operator">=</span> <span class="token string">&quot;&quot;</span> <span class="token comment">/* \u4E2D\u95F4\u7F13\u5B58\u5B57\u4E32 */</span><span class="token punctuation">,</span>
    num <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">/* \u91CD\u590D\u6B21\u6570 */</span><span class="token punctuation">,</span>
    level <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">/* \u8BB0\u5F55\u6210\u7EC4\u6570 */</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cache <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
      level<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E00\u4E2A\u7EC4\u7ED3\u675F</span>
      level<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u540E\u7EED\u662F\u91CD\u590D\u6B21\u6570</span>
      stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span><span class="token punctuation">;</span>
      cache <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&quot;]&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E00\u4E2A\u7EC4\u7684\u91CD\u590D\u6B21\u6570\u7ED3\u675F</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res <span class="token operator">+=</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cache <span class="token operator">+=</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      stack<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// \u8BA1\u6570\u7F6E0</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u662F\u6570\u5B57\u5B57\u7B26</span>
      num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u5B57\u53EF\u80FD\u4E0D\u53EA\u662F\u4E2A\u4F4D\u6570\u91CD\u590D</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u666E\u901A\u5B57\u7B26</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cache <span class="token operator">!==</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u524D\u4E00\u4E2A\u662F\u666E\u901A\u5B57\u7B26</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>level <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u6CA1\u6709\u5206\u7EC4</span>
          res <span class="token operator">+=</span> cache<span class="token punctuation">;</span>
          cache <span class="token operator">=</span> char<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// \u5DF2\u6709\u5206\u7EC4</span>
          cache <span class="token operator">+=</span> char<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        cache <span class="token operator">=</span> char<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u6709\u6210\u7EC4\u7684\u5B57\u7B26</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> str1 <span class="token operator">=</span> <span class="token string">&quot;a[2]bc[3](def)[4]((g[2]h)[1]i)[2]&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u221A</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a[2]bc[3](def)[4]((g[2]h)[1]i)[2]: &quot;</span><span class="token punctuation">,</span> <span class="token function">compileStr</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">&quot;a[2]bc[3]&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u221A</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a[2]bc[3]: &quot;</span><span class="token punctuation">,</span> <span class="token function">compileStr</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str3 <span class="token operator">=</span> <span class="token string">&quot;a[2]bc[3](def)[4]&quot;</span><span class="token punctuation">;</span> <span class="token comment">// aabcccdefdefdefdef // \u221A</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;a[2]bc[3](def)[4]: &quot;</span><span class="token punctuation">,</span> <span class="token function">compileStr</span><span class="token punctuation">(</span>str3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> str4 <span class="token operator">=</span> <span class="token string">&quot;(a[2]bc[3])[3](def)[4]&quot;</span><span class="token punctuation">;</span> <span class="token comment">// aabcccaabcccaabcccdefdefdefdef // \xD7</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;(a[2]bc[3])[3](def)[4]: &quot;</span><span class="token punctuation">,</span> <span class="token function">compileStr</span><span class="token punctuation">(</span>str4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6B64\u7ED3\u679C\u5C1A\u8FD8\u4E0D\u5BF9\uFF0C\u5F85\u505A......</span>
</code></pre></div><h6 id="_4-\u6590\u6CE2\u90A3\u5951\u6570\u5217" tabindex="-1">4. \u6590\u6CE2\u90A3\u5951\u6570\u5217 <a class="header-anchor" href="#_4-\u6590\u6CE2\u90A3\u5951\u6570\u5217" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u4F20\u5165\u4E00\u4E2A\u975E\u8D1F\u6574\u6570\uFF0C\u83B7\u53D6\u6590\u6CE2\u90A3\u5951\u6570\u5217\u8BE5\u9879\u7684\u503C\uFF0C\u5E76\u4F18\u5316</span>
<span class="token comment">// \u65B9\u6848\u4E00\uFF08\u7B80\u5355\u9012\u5F52\u5B9E\u73B0\uFF0C\u5B58\u5728\u8C03\u7528\u6808\u5185\u5B58\u6EA2\u51FA\u95EE\u9898\uFF09\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">recursionFib</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;The required parameters must be non-negative integers.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">recursionFib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">recursionFib</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u6848\u4E8C\uFF08\u7F13\u5B58\u4F18\u5316\uFF09\uFF1A</span>
<span class="token keyword">const</span> cacheFib <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> cacheArr<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;The required parameters must be non-negative integers.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheArr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> cacheArr<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      cacheArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> cacheArr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> cacheArr<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cacheArr<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u6848\u4E09\uFF08\u52A8\u6001\u89C4\u5212\uFF09\uFF1A</span>
<span class="token keyword">const</span> <span class="token function-variable function">dynamicFib</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;The required parameters must be non-negative integers.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> current <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> next <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>current<span class="token punctuation">,</span> next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>next<span class="token punctuation">,</span> current <span class="token operator">+</span> next<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> current<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u65B9\u6848\u56DB\uFF08ES6\u5C3E\u8C03\u7528\u4F18\u5316\uFF09\uFF1A</span>
<span class="token punctuation">(</span><span class="token string">&quot;use strict&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5FC5\u987B\u5F00\u542F\u4E25\u683C\u6A21\u5F0F</span>
<span class="token keyword">const</span> <span class="token function-variable function">tailCallFib</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token operator">:</span> number<span class="token punctuation">,</span> current<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> next<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&quot;The required parameters must be non-negative integers.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> next<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> next<span class="token punctuation">,</span> current <span class="token operator">+</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h6 id="_5-\u904D\u5386\u4E8C\u53C9\u6811" tabindex="-1">5. \u904D\u5386\u4E8C\u53C9\u6811 <a class="header-anchor" href="#_5-\u904D\u5386\u4E8C\u53C9\u6811" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u4F8B\u5982\uFF0C\u904D\u5386\u4E8C\u53C9\u6811\uFF0C\u793A\u4F8B\u7ED3\u6784\u5982\u4E0B\uFF1A</span>
<span class="token keyword">const</span> testData <span class="token operator">=</span> <span class="token punctuation">{</span>
  value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  left<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token punctuation">{</span>
    value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    left<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    right<span class="token operator">:</span> <span class="token punctuation">{</span>
      value<span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA\u6839\u8282\u70B9\u5230\u53F6\u5B50\u8282\u70B9\uFF1A[[1, 2, 4], [1, 3, 5], [1, 3, 6]]</span>
</code></pre></div><h6 id="_6-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u627E\u51FA\u6570\u7EC4\u4E2D\u7B2C-k-\u5927\u7684\u548C\u7B2C-m-\u5927\u7684\u6570\u5B57\u76F8\u52A0\u4E4B\u548C" tabindex="-1">6. \u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u627E\u51FA\u6570\u7EC4\u4E2D\u7B2C k \u5927\u7684\u548C\u7B2C m \u5927\u7684\u6570\u5B57\u76F8\u52A0\u4E4B\u548C <a class="header-anchor" href="#_6-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u627E\u51FA\u6570\u7EC4\u4E2D\u7B2C-k-\u5927\u7684\u548C\u7B2C-m-\u5927\u7684\u6570\u5B57\u76F8\u52A0\u4E4B\u548C" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">/* \u63CF\u8FF0\uFF1A
 * \u627E\u51FA\u6570\u7EC4\u4E2D\u7B2Ck\u5927\u548C\u7B2Cm\u5927\u7684\u6570\u5B57\u76F8\u52A0\u4E4B\u548C
 * \u8BF4\u660E\uFF1A\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u627E\u51FA\u6570\u7EC4\u4E2D\u7B2Ck\u5927\u7684\u548C\u7B2Cm\u5927\u7684\u6570\u5B57\u76F8\u52A0\u4E4B\u548C
 * \u793A\u4F8B\uFF1A
 *   let arr = [1,2,4,4,3,5], k = 2, m = 4
 *   findTopSum(arr, k, m); // \u7B2C2\u5927\u7684\u6570\u662F4\uFF0C\u51FA\u73B02\u6B21\uFF0C\u7B2C4\u5927\u7684\u662F2\uFF0C\u51FA\u73B01\u6B21\uFF0C\u6240\u4EE5\u7ED3\u679C\u4E3A10
 * */</span>
<span class="token keyword">function</span> <span class="token function">findTopSum</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> k<span class="token punctuation">,</span> m</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u7EC4\u53BB\u91CD</span>
  temp<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53BB\u91CD\u4E4B\u540E\u7684\u6570\u7EC4\u4ECE\u5927\u5230\u5C0F\u8FDB\u884C\u6392\u5E8F</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>m <span class="token operator">&gt;</span> len <span class="token operator">||</span> k <span class="token operator">&gt;</span> len<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> max <span class="token operator">=</span> temp<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7B2C k \u5927 = 1 =&gt; temp[0]</span>
  <span class="token keyword">const</span> min <span class="token operator">=</span> temp<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u7B2C m \u5927 = 3 =&gt; temp[2]</span>
  <span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token comment">// \u904D\u5386\u539F\u6570\u7EC4</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> max <span class="token operator">||</span> item <span class="token operator">===</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      num <span class="token operator">+=</span> item<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> num<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h6 id="_7-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5-addjoin" tabindex="-1">7. \u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5 addJoin <a class="header-anchor" href="#_7-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5-addjoin" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">/**
 * \u63CF\u8FF0\uFF1A
 * \u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5 addJoin(arr, condition)
 * \u5408\u5E76\u6EE1\u8DB3\u6761\u4EF6\u7684\u9879
 * \u793A\u4F8B\uFF1A
 *      let arr = [1, 2, 3, 4, 5]
 *      addJoin(arr, item =&gt; item !== 3); // [[1, 2], 3, [4, 5]]
 *      addJoin(arr, item =&gt; item &lt; 3); // [[1, 2], 3, 4, 5]
 * */</span>
<span class="token keyword">function</span> <span class="token function">addJoin</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5347\u5E8F\u6392\u5E8F</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">condition</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>tempArr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>tempArr<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tempArr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>tempArr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>tempArr<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tempArr<span class="token punctuation">.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h6 id="_8-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5-eatman" tabindex="-1">8. \u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5 EatMan <a class="header-anchor" href="#_8-\u5B9E\u73B0\u4E00\u4E2A\u65B9\u6CD5-eatman" aria-hidden="true">#</a></h6><div class="language-js"><pre><code><span class="token comment">// \u5206\u522B\u8F93\u51FA\u5982\u4E0B\uFF1A</span>
<span class="token comment">// 1. EatMan(&#39;Hank&#39;)</span>
<span class="token comment">//     Hi! This is Hank!</span>
<span class="token comment">// 2. EatMan(&#39;Hank&#39;).eat(&#39;dinner&#39;).eat(&#39;supper&#39;)</span>
<span class="token comment">//     Hi! This is Hank!</span>
<span class="token comment">//     Eat dinner~</span>
<span class="token comment">//     Eat supper~</span>
<span class="token comment">// 3. EatMan(&#39;Hank&#39;).eat(&#39;dinner&#39;).eatFirst(&#39;lunch&#39;)</span>
<span class="token comment">//     Eat lunch~</span>
<span class="token comment">//     Hi! This is Hank!</span>
<span class="token comment">//     Eat dinner~</span>
<span class="token comment">// 4. EatMan(&#39;Hank&#39;).eat(&#39;dinner&#39;).eatFirst(&#39;lunch&#39;).eatFirst(&#39;breakfast&#39;)</span>
<span class="token comment">//     Eat breakfast~</span>
<span class="token comment">//     Eat lunch~</span>
<span class="token comment">//     Hi! This is Hank!</span>
<span class="token comment">//     Eat dinner~</span>

<span class="token keyword">function</span> <span class="token function">EatMan</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_EatMan</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8FD4\u56DE\u4E00\u4E2A\u5B9E\u4F8B</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">_EatMan</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;EatMan&quot;</span><span class="token punctuation">,</span>
      name<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">eat</span><span class="token punctuation">(</span><span class="token parameter">thing</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;eat&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> thing<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// \u8981\u5B9E\u73B0\u94FE\u5F0F\u8C03\u7528\u7684\u6548\u679C\uFF0C\u5219\u5FC5\u987B\u8FD4\u56DE\u5F53\u524D\u5B9E\u4F8B</span>
  <span class="token punctuation">}</span>
  <span class="token function">eatFirst</span><span class="token punctuation">(</span><span class="token parameter">thing</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;eatFirst&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> thing<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">runTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>tasks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">task</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">switch</span> <span class="token punctuation">(</span>task<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">case</span> <span class="token string">&quot;EatMan&quot;</span><span class="token operator">:</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Hi! This is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>task<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Eat </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>task<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">~</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,18),c=[o];function e(u,k,l,i,r,m){return a(),s("div",null,c)}var w=n(p,[["render",e]]);export{f as __pageData,w as default};
