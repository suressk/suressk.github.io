import{_ as n,c as s,o as a,b as p}from"./app.48225e0a.js";const b='{"title":"\u8BA4\u8BC6\u590D\u6742\u5EA6\u4E0E\u7B80\u5355\u6392\u5E8F","description":"","frontmatter":{"title":"\u8BA4\u8BC6\u590D\u6742\u5EA6\u4E0E\u7B80\u5355\u6392\u5E8F"},"headers":[{"level":3,"title":"\u8BA4\u8BC6\u65F6\u95F4\u590D\u6742\u5EA6","slug":"\u8BA4\u8BC6\u65F6\u95F4\u590D\u6742\u5EA6"},{"level":3,"title":"\u7A7A\u95F4\u590D\u6742\u5EA6","slug":"\u7A7A\u95F4\u590D\u6742\u5EA6"},{"level":3,"title":"\u4F4D\u8FD0\u7B97","slug":"\u4F4D\u8FD0\u7B97"},{"level":3,"title":"\u9009\u62E9\u6392\u5E8F","slug":"\u9009\u62E9\u6392\u5E8F"},{"level":3,"title":"\u5192\u6CE1\u6392\u5E8F","slug":"\u5192\u6CE1\u6392\u5E8F"},{"level":3,"title":"\u9762\u8BD5\u9898\u7EC3\u624B","slug":"\u9762\u8BD5\u9898\u7EC3\u624B"}],"relativePath":"algorithm/summary/complexity.md","lastUpdated":1646173325551}',t={},o=p(`__VP_STATIC_START__<h3 id="\u8BA4\u8BC6\u65F6\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u8BA4\u8BC6\u65F6\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u8BA4\u8BC6\u65F6\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h3><p>\u5E38\u6570\u65F6\u95F4\u64CD\u4F5C</p><p>\u5E38\u6570\u64CD\u4F5C\uFF1A\u4E00\u4E2A\u64CD\u4F5C\u5982\u679C\u548C\u6837\u672C\u7684\u6570\u636E\u91CF\u6CA1\u6709\u5173\u7CFB\uFF0C\u6BCF\u6B21\u90FD\u662F\u56FA\u5B9A\u65F6\u95F4\u5185\u5B8C\u6210\u7684\u64CD\u4F5C</p><p>\u5E38\u6570\u65F6\u95F4 O(1) \u4EE3\u8868\u8FD9\u4E2A\u64CD\u4F5C\u548C\u6570\u636E\u91CF\u6CA1\u5173\u7CFB\uFF0C\u662F\u4E00\u4E2A\u56FA\u5B9A\u65F6\u95F4\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u8BF4\u56DB\u5219\u8FD0\u7B97\uFF08<code>+</code>\u3001<code>-</code>\u3001<code>*</code>\u3001<code>/</code>\uFF09\u6216\u4F4D\u8FD0\u7B97\uFF08<code>&amp;</code>\u3001<code>|</code>\u3001<code>~</code>\u3001<code>^</code>\u3001<code>&lt;&lt;</code>\u3001<code>&gt;&gt;</code>\uFF09\u7B49</p><p><strong><code>\u5728\u63CF\u8FF0\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u53EA\u8981\u6700\u9AD8\u9636\u9879\uFF0C\u4E0D\u8981\u4F4E\u9636\u9879\u53CA\u9AD8\u9636\u9879\u7684\u7CFB\u6570\uFF0C\u5373\u4E3A\u8BE5\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6</code></strong></p><p>\u5F62\u5982\u6211\u4EEC\u521D\u4E2D\u63A5\u89E6\u8FC7\u7684\u4E00\u5143\u4E8C\u6B21\u65B9\u7A0B\u7684\u8868\u8FBE\u5F0F\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// \u6700\u7EC8\u5316\u7B80\u7ED3\u679C\u4E3A</span>
aN<span class="token operator">^</span><span class="token number">2</span> <span class="token operator">+</span> bN <span class="token operator">+</span> c

<span class="token comment">// a, b, c \u90FD\u662F\u5E38\u6570</span>
</code></pre></div><p>\u8FD9\u4E2A\u6817\u5B50\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>O(N^2)</code> \u6765\u8868\u793A\u6B64\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\uFF08\u8BFB\u4F5C\uFF1A<code>Big O N \u7684\u5E73\u65B9</code>\uFF09</p><p>\u8BC4\u4EF7\u4E00\u4E2A\u7B97\u6CD5\u6D41\u7A0B\u7684\u597D\u574F\uFF0C\u5148\u770B\u65F6\u95F4\u590D\u6742\u5EA6\u7684\u6307\u6807\uFF08<code>O(N^2)</code> \u4E0E <code>O(N)</code> \u6BD4\u8F83\uFF09\uFF0C\u7136\u540E\u518D\u5206\u6790\u4E0D\u540C\u6570\u636E\u6837\u672C\u4E0B\u7684\u5B9E\u9645\u8FD0\u884C\u65F6\u95F4\uFF08\u5982\u5747\u4E3A <code>O(N)</code> \u65F6\uFF0C\u5C31\u9700\u8981\u5B9E\u9645\u8FD0\u884C\u7ED3\u679C\u6765\u533A\u5206\u4E86\uFF09</p><h3 id="\u7A7A\u95F4\u590D\u6742\u5EA6" tabindex="-1">\u7A7A\u95F4\u590D\u6742\u5EA6 <a class="header-anchor" href="#\u7A7A\u95F4\u590D\u6742\u5EA6" aria-hidden="true">#</a></h3><p>\u4E0E\u4E0A\u9762\u7684\u610F\u601D\u4E00\u81F4\uFF0C\u5047\u5982\u6211\u4EEC\u53EA\u9700\u8981\u6709\u9650\u7684\u51E0\u4E2A\u53D8\u91CF\u9700\u8981\u7533\u8BF7\u5B58\u50A8\u7A7A\u95F4\uFF0C\u4E0E\u6837\u672C\u6570\u636E\u91CF\u65E0\u5173\u65F6\uFF0C\u6211\u4EEC\u79F0\u5176\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(1)</code></p><p>\u82E5\u7C7B\u4F3C\u9700\u8981\u989D\u5916\u5F00\u8F9F\u8DDF\u6837\u672C\u6570\u636E\u4E00\u6837\u5927\u5C0F\u7684\u5185\u5B58\u7A7A\u95F4\u6765\u5B9E\u73B0\u7B97\u6CD5\u529F\u80FD\uFF0C\u6211\u4EEC\u5219\u79F0\u5176\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(N)</code></p><h3 id="\u4F4D\u8FD0\u7B97" tabindex="-1">\u4F4D\u8FD0\u7B97 <a class="header-anchor" href="#\u4F4D\u8FD0\u7B97" aria-hidden="true">#</a></h3><p>\u65E2\u7136\u4E0A\u9762\u63D0\u5230\u4E86\u4F4D\u8FD0\u7B97\uFF0C\u8FD9\u91CC\u5C31\u7B80\u5355\u8BB2\u8BB2\u5427\uFF1A</p><ul><li><code>&amp;</code>\uFF1A\u4E24\u4E2A\u4F4D\u90FD\u4E3A 1 \u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A 1\uFF0C\u5176\u4F59\u4E3A 0</li><li><code>|</code>\uFF1A\u4E24\u4E2A\u4F4D\u90FD\u4E3A 0 \u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A 0\uFF0C\u5176\u4F59\u4E3A 1</li><li><code>^</code>\uFF1A\u4E24\u4E2A\u4F4D\u76F8\u540C\u4E3A 1\uFF08\u540C\u4E3A 0 \u6216\u540C\u4E3A 1\uFF09\uFF0C\u4E0D\u540C\u5219\u4E3A 0</li><li><code>&lt;&lt;</code>\uFF1A\u5404\u4E8C\u8FDB\u4F4D\u5168\u90E8\u5DE6\u79FB\u82E5\u5E72\u4F4D\uFF0C\u9AD8\u4F4D\u4E22\u5F03\uFF0C\u4F4E\u4F4D\u8865 0</li><li><code>&gt;&gt;</code>\uFF1A\u5404\u4E8C\u8FDB\u4F4D\u5168\u90E8\u53F3\u79FB\u82E5\u5E72\u4F4D\uFF0C\u5BF9\u65E0\u7B26\u53F7\u6570\uFF0C\u9AD8\u4F4D\u8865 0\uFF0C\u6709\u7B26\u53F7\u6570\uFF0C\u5404\u7F16\u8BD1\u5668\u5904\u7406\u65B9\u6CD5\u4E0D\u4E00\u6837\uFF0C\u6709\u7684\u8865\u7B26\u53F7\u4F4D\uFF08\u7B97\u672F\u53F3\u79FB\uFF09\uFF0C\u6709\u7684\u8865 0\uFF08\u903B\u8F91\u53F3\u79FB\uFF09</li></ul><div class="language-ts"><pre><code><span class="token number">10</span> <span class="token operator">&lt;&lt;</span> <span class="token number">1</span>

<span class="token comment">// 10 \u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u4E3A\uFF1A1010\uFF0C&lt;&lt; 1 \u8868\u793A\u5DE6\u79FB\u4E00\u4F4D</span>
<span class="token comment">// \u5373\u53D8\u4E3A\uFF1A10100\uFF0C\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u5373\u4E3A\uFF1A20</span>
<span class="token comment">// \u540C\u6837\u53EF\u4EE5\u628A\u5DE6\u79FB\u770B\u4F5C\u4EE5\u4E0B\u516C\u5F0F\uFF1Aa * (2 ^ b)</span>
<span class="token comment">// 10 &lt;&lt; 1 = 10 * (2 ^ 1) = 20</span>

<span class="token number">11</span> <span class="token operator">&gt;&gt;</span> <span class="token number">1</span>

<span class="token comment">// 11 \u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u4E3A\uFF1A1011\uFF0C&gt;&gt; 1 \u8868\u793A\u53F3\u79FB\u4E00\u4F4D\uFF0C</span>
<span class="token comment">// \u5E76\u53BB\u9664\u591A\u4F59\u7684\u53F3\u8FB9\uFF0C\u5373\u53D8\u4E3A\uFF1A101\uFF0C\u8F6C\u6362\u4E3A\u5341\u8FDB\u5236\u5373\u4E3A\uFF1A5</span>
<span class="token comment">// \u540C\u6837\u53EF\u4EE5\u628A\u53F3\u79FB\u770B\u4F5C\u4EE5\u4E0B\u516C\u5F0F\uFF1A~~(a / (2 ^ b))</span>
<span class="token comment">// 11 &gt;&gt; 1 = ~~(11 / (2 ^ 1)) = 5</span>
</code></pre></div><h3 id="\u9009\u62E9\u6392\u5E8F" tabindex="-1">\u9009\u62E9\u6392\u5E8F <a class="header-anchor" href="#\u9009\u62E9\u6392\u5E8F" aria-hidden="true">#</a></h3><p>\u5148\u7B80\u5355\u7406\u89E3\u4E00\u4E0B\u601D\u8DEF\u5427\uFF1A</p><div class="language-js"><pre><code><span class="token comment">// \u6BD4\u5982\u8BF4\u6709\u4E00\u4E2A\u65E0\u5E8F\u6570\u7EC4\uFF0C\u6211\u4EEC\u9700\u8981\u5B9E\u73B0\u5347\u5E8F\u6392\u5217</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>

<span class="token comment">// \u7B80\u5355\u9009\u62E9\u6392\u5E8F\u7684\u601D\u8DEF\u5C31\u662F\uFF0C\u4ECE\u5DE6\u5F80\u53F3\u626B\uFF08\u53F3\u5F80\u5DE6\u4E5F\u884C\uFF09</span>
<span class="token comment">// \u627E\u5230\u6700\u5C0F\u7684\u503C\uFF0C\u5C06\u5B83\u653E\u5230\u6700\u5DE6\u4FA7\u8BB0\u5F55\u5230\u7684\u6700\u5C0F\u503C\u4F4D\u7F6E</span>

<span class="token comment">// \u7B80\u5355\u8BF4\u660E\u5982\u4E0B\uFF1A</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>
 \u2191  \u2191
 i  j

i\uFF1A\u8BB0\u5F55\u5F53\u524D\u6700\u5C0F\u503C\u7D22\u5F15
j\uFF1A\u4ECE i \u7684\u4E0B\u4E00\u4F4D\u5F00\u59CB\u4F9D\u6B21\u5F80\u540E\u626B\u5230\u6570\u7EC4\u7ED3\u675F\uFF0C\u627E\u5230
   \u6BD4\u5F53\u524D i \u4F4D\u7F6E\u4E0A\u7684\u503C\u5C0F\u7684\u503C\uFF0C\u8FDB\u884C\u4EA4\u6362
</code></pre></div><p>\u793A\u4F8B\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">selectSort</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token comment">// i \u4ECE 0 \u2192 N-1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// j \u4ECE i+1 \u2192 N</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// j \u4F4D\u7F6E\u4E0A\u7684\u5C0F</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u4E24\u6570\u4EA4\u6362</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EA4\u6362 arr \u6570\u7EC4\u4E2D i\uFF0Cj \u4F4D\u7F6E\u4E0A\u7684\u6570</span>
<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> j<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp
<span class="token punctuation">}</span>
</code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u6211\u4EEC\u770B\u5230\u9700\u8981\u4E24\u5C42 <code>for</code> \u5FAA\u73AF\uFF0C\u4ECE\u65F6\u95F4\u590D\u6742\u5EA6\u4E0A\u5206\u6790\u9700\u8981 <code>O(N^2)</code> \uFF08\u5E38\u6570\u64CD\u4F5C\u4E3A \u7B49\u5DEE\u6570\u5217 \u6C42\u548C\uFF09\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(1)</code></p><h3 id="\u5192\u6CE1\u6392\u5E8F" tabindex="-1">\u5192\u6CE1\u6392\u5E8F <a class="header-anchor" href="#\u5192\u6CE1\u6392\u5E8F" aria-hidden="true">#</a></h3><p>\u7B80\u5355\u8BF4\u660E\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// \u8FD8\u662F\u4E0A\u9762\u7684\u793A\u4F8B\u65E0\u5E8F\u6570\u7EC4\uFF0C\u4F9D\u65E7\u5347\u5E8F\u6392</span>
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span>

<span class="token comment">// \u4F9D\u6B21\u6BD4\u8F83\u7D22\u5F15\u4F4D\u7F6E\u4E0A\u7684\u6570</span>
<span class="token comment">// 1. 0 \u4E0E 1 \u4F4D\u7F6E\u4E0A\u7684\u6570\u6BD4\u8F83\uFF0C\u5927\u7684\u5F80\u540E\u79FB</span>
<span class="token comment">// 2. 1 \u4E0E 2 \u4F4D\u7F6E\u4E0A\u7684\u6570\u6BD4\u8F83\uFF0C\u5927\u7684\u5F80\u540E\u79FB</span>
<span class="token comment">// 3. 2 \u4E0E 3 \u4F4D\u7F6E\u4E0A\u7684\u6570\u6BD4\u8F83\uFF0C\u5927\u7684\u5F80\u540E\u79FB</span>
<span class="token comment">// 4. 3 \u4E0E 4 \u4F4D\u7F6E\u4E0A\u7684\u6570\u6BD4\u8F83\uFF0C\u5927\u7684\u5F80\u540E\u79FB</span>
<span class="token comment">// \u4F9D\u6B21\u8FDB\u884C\u6BD4\u8F83\uFF08\u6548\u679C\u4E0A\u6765\u770B\u5C31\u662F\uFF0C\u5927\u7684\u6570\u4F1A\u9010\u6E10\u5F80\u540E\u5192\uFF0C\u76F4\u5230\u6392\u597D\u5E8F\uFF09</span>
</code></pre></div><p>\u793A\u4F8B\u5B9E\u73B0\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span>

  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token comment">// i \u4ECE N \u2192 1</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// j \u4ECE 0 \u2192 i</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// j \u4F4D\u7F6E\u4E0E j+1 \u4F4D\u7F6E\u4E0A\u7684\u503C\u6BD4\u8F83\uFF0C\u5927\u7684\u540E\u79FB</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> j<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EA4\u6362 arr \u6570\u7EC4\u4E2D i\uFF0Cj \u4F4D\u7F6E\u4E0A\u7684\u6570</span>
<span class="token keyword">function</span> <span class="token function">swap</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> j<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">^</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span>
  <span class="token comment">// \u89E3\u6784\u8BED\u6CD5</span>
  <span class="token comment">// [arr[i], arr[j]] = [arr[j], arr[i]]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4ECE\u4E0A\u9762\u7684\u793A\u4F8B\u4EE3\u7801\uFF0C\u6211\u4EEC\u770B\u5230\u8FD8\u662F\u9700\u8981\u4E24\u5C42 <code>for</code> \u5FAA\u73AF\uFF0C\u4ECE\u65F6\u95F4\u590D\u6742\u5EA6\u4E0A\u5206\u6790\u9700\u8981 <code>O(N^2)</code>\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(1)</code></p><p>\u53E6\u5916\uFF0C\u53EF\u80FD\u4F60\u4F1A\u6CE8\u610F\u5230\u8FD9\u91CC\u7684 <code>swap</code> \u65B9\u6CD5\u597D\u50CF\u6709\u70B9 <strong>\u9ED1\u9B54\u6CD5</strong> \u7684\u610F\u601D\uFF01\uFF01\uFF01</p><p>\u8FD9\u91CC\u4E5F\u5C31\u662F\u5DE7\u7528\u4E86 <code>\u5F02\u6216\u8FD0\u7B97</code>\uFF08<code>^</code>\uFF09\u7684\u6027\u8D28\u8FBE\u5230\u4E86\u4E24\u6570\u4EA4\u6362\u7684\u6548\u679C</p><p>\u6211\u4EEC\u53EF\u80FD\u5728\u5B66\u6821\u91CC\u5B66\u4E60\u8FC7\u5F02\u6216\u8FD0\u7B97\uFF1A\u5373 <code>\u76F8\u540C\u4E3A 0\uFF0C\u4E0D\u540C\u4E3A 1</code>\uFF0C\u4E3E\u4E2A\u6817\u5B50\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// \u4E8C\u8FDB\u5236\u6570\u8FDB\u884C\u5F02\u6216\u8FD0\u7B97</span>
<span class="token number">01001001</span> <span class="token operator">^</span> <span class="token number">11010101</span>

<span class="token comment">// \u6211\u4EEC\u5199\u5F97\u597D\u4E00\u70B9\u5C31\u662F\uFF1A</span>
  <span class="token number">01001001</span>
<span class="token operator">^</span> <span class="token number">11010101</span>
<span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span>
  <span class="token number">10011100</span>
</code></pre></div><p>\u5176\u5B9E\u6309\u53E6\u4E00\u79CD\u66F4\u7B80\u5355\u7684\u7406\u89E3\u5C31\u662F <strong><code>\u65E0\u8FDB\u4F4D\u76F8\u52A0</code></strong></p><p>\u4F46\u5B83\u8FD8\u6709\u4E00\u4E9B\u6027\u8D28\uFF1A</p><blockquote><ol><li>0 \u4E0E\u4EFB\u4F55\u6570\u5F02\u6216\uFF0C\u7ED3\u679C\u90FD\u662F\u8FD9\u4E2A\u6570\uFF1A0 ^ N = N</li><li>\u76F8\u540C\u7684\u6570\u5F02\u6216\uFF0C\u7ED3\u679C\u4E3A 0\uFF1AN ^ N = 0</li><li>\u5F02\u6216\u8FD0\u7B97\u6EE1\u8DB3\u6570\u5B66\u7684 <code>\u4EA4\u6362\u5F8B</code> \u548C <code>\u7ED3\u5408\u5F8B</code>\uFF1Aa ^ b ^ c ^ d = a ^ (b ^ d) ^ c</li></ol></blockquote><p>\u7531\u4E0A\u9762\u8FD9\u4E9B\u6027\u8D28\u63CF\u8FF0\uFF0C\u6211\u4EEC\u89E3\u91CA\u4E00\u4E0B\u4E0A\u9762\u7684 \u9ED1\u9B54\u6CD5 <code>swap</code> \u65B9\u6CD5</p><div class="language-ts"><pre><code><span class="token comment">// \u6211\u4EEC\u5047\u8BBE</span>
<span class="token keyword">let</span> a <span class="token operator">=</span> \u7532
<span class="token keyword">let</span> b <span class="token operator">=</span> \u4E59

<span class="token comment">// \u8DD1\u8FD9\u4E09\u884C\u4EE3\u7801\uFF0Ca, b \u7684\u503C\u4E92\u6362</span>
<span class="token comment">// \u8FD9\u91CC\u6211\u4EEC\u5E26\u5165\u503C\u5E76\u8FD0\u7528\u4E0A\u9762\u7684\u6027\u8D28\u5C31\u4E00\u76EE\u4E86\u7136\u4E86</span>
a <span class="token operator">=</span> a <span class="token operator">^</span> b  <span class="token comment">// a = \u7532 ^ \u4E59</span>
b <span class="token operator">=</span> a <span class="token operator">^</span> b  <span class="token comment">// b = (\u7532 ^ \u4E59) ^ \u4E59 \u2192 b = \u7532</span>
a <span class="token operator">=</span> a <span class="token operator">^</span> b  <span class="token comment">// a = (\u7532 ^ \u4E59) ^ (\u7532 ^ \u4E59 ^ \u4E59) \u2192 a = \u4E59</span>
</code></pre></div><p><strong>\u6CE8\u610F\uFF1A</strong> \u4E0A\u9762\u7684 <code>a</code>\uFF0C<code>b</code> \u5FC5\u987B\u5F97\u662F\u5185\u5B58\u4E2D\u4E24\u5757\u4E0D\u540C\u7684\u533A\u57DF\uFF08\u503C\u53EF\u4EE5\u76F8\u540C\uFF0C\u4F46\u5185\u5B58\u4E0D\u80FD\u662F\u540C\u4E00\u5757\uFF0C\u5426\u5219\u4F1A\u628A\u5B83\u62B9\u4E3A 0\uFF09</p><h3 id="\u9762\u8BD5\u9898\u7EC3\u624B" tabindex="-1">\u9762\u8BD5\u9898\u7EC3\u624B <a class="header-anchor" href="#\u9762\u8BD5\u9898\u7EC3\u624B" aria-hidden="true">#</a></h3><blockquote><p>\u5728\u4E00\u4E2A\u6570\u7EC4\uFF08<code>arr: number[]</code>\uFF09\u4E2D\uFF0C<br><code>\u95EE\u98981</code>\uFF1A\u5DF2\u77E5\u5176\u4E2D\u4E00\u79CD\u6570\u51FA\u73B0\u4E86\u5947\u6570\u6B21\uFF0C\u5176\u4ED6\u6570\u51FA\u73B0\u4E86\u5076\u6570\u6B21\uFF0C\u6C42\u8FD9\u4E2A\u51FA\u73B0\u5947\u6570\u6B21\u7684\u6570\u662F\u5565\uFF1F<br><code>\u95EE\u98982</code>\uFF1A\u5DF2\u77E5\u5176\u4E2D\u4E24\u79CD\u6570\u51FA\u73B0\u4E86\u5947\u6570\u6B21\uFF0C\u5176\u4ED6\u6570\u51FA\u73B0\u4E86\u5076\u6570\u6B21\uFF0C\u6C42\u8FD9\u4E24\u4E2A\u51FA\u73B0\u5947\u6570\u6B21\u7684\u6570\u662F\u5565\uFF1F<br> \u8981\u6C42\uFF1A\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(N)</code>\uFF0C\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3A <code>O(1)</code></p></blockquote><div class="language-ts"><pre><code><span class="token comment">// \u6709\u4E0A\u9762\u7684\u94FA\u57AB\uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u95EE\u98981\u5F88\u7B80\u5355\uFF0C</span>
<span class="token comment">// \u76F4\u63A5\u5C06\u6570\u7EC4\u4E2D\u7684\u6570\u5168\u90E8\u4E00\u8D77\u8FDB\u884C \u5F02\u6216\u8FD0\u7B97\uFF0C\u6700\u540E\u7684\u7ED3\u679C\u5C31\u662F\u8FD9\u4E2A\u6570</span>
<span class="token keyword">function</span> <span class="token function">resolveOne</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token operator">?.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The array is of the wrong type or
      the array is empty!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> eor <span class="token operator">=</span> <span class="token number">0</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    eor <span class="token operator">^=</span> item
    <span class="token comment">// \u4E0A\u9762\u662F\u4E0B\u9762\u7684\u7B80\u5199\u8BED\u6CD5\uFF08\u5E94\u8BE5\u90FD\u770B\u5F97\u61C2\uFF09</span>
    <span class="token comment">// eor = eor ^ item</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> eor
<span class="token punctuation">}</span>
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">// \u95EE\u98982\uFF0C\u6211\u4EEC\u9700\u8981\u501F\u52A9\u65E0\u8FDB\u4F4D\u76F8\u52A0\u7684\u601D\u60F3\u6765\u65B9\u4FBF\u7406\u89E3</span>
<span class="token comment">// \u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6765\u770B\u65F6\uFF0C\u5F02\u6216\u8FD0\u7B97\u8BA1\u7B97\u65F6\uFF0C\u53EA\u770B\u5BF9\u5E94\u4F4D\u4E0A 1 \u7684\u4E2A\u6570\u6709\u5173</span>
<span class="token comment">// \u8FD9\u4E00\u4F4D\u4E0A\u51FA\u73B0\u5947\u6570\u4E2A 1\uFF0C\u6700\u540E\u7ED3\u679C\u8FD9\u4F4D\u4E0A\u5C31\u662F 1\uFF0C\u5426\u5219\u4E3A 0</span>
<span class="token keyword">function</span> <span class="token function">resolveTwo</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>arr <span class="token operator">||</span> arr<span class="token operator">?.</span>length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">The array is of the wrong type or
      the array is empty!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> eor <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> onlyOne <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token comment">// \u9996\u5148\uFF0C\u8FD8\u662F\u5F97\u50CF\u95EE\u98981\u4E00\u6837\u5168\u90E8\u8FDB\u884C\u5F02\u6216\u8FD0\u7B97</span>
  <span class="token comment">// \u5F97\u5230\u8FD9\u4E24\u4E2A\u51FA\u73B0\u5947\u6570\u6B21\u7684\u6570\uFF08\u5047\u8BBE\u4E3A a, b\uFF09\u7684\u5F02\u6216\u7ED3\u679C</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cur <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    eor <span class="token operator">^=</span> cur
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6B64\u65F6\u5F97\u5230\u7684 eor = a ^ b</span>
  <span class="token comment">// \u4E14 eor !== 0</span>
  <span class="token comment">// \u90A3\u4E48\u5728\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u65F6\uFF0Ceor \u5FC5\u7136\u6709\u4E00\u4E2A\u4F4D\u7F6E\u4E0A\u7684\u503C\u4E3A 1</span>

  <span class="token comment">// \u90A3\u4E48 a, b \u4E24\u6570\u5728\u8FD9\u4E00\u4F4D\u4E0A\u5FC5\u7136\u662F\u4E0D\u540C\u7684\uFF0C\u6211\u4EEC\u5C31\u80FD\u5F97\u5230\u5176\u4E2D\u4E00\u4E2A</span>

  <span class="token comment">// \u63D0\u53D6\u51FA eor \u4E8C\u8FDB\u5236\u6570\u6700\u53F3\u7684 1</span>
  <span class="token keyword">let</span> rightOne <span class="token operator">=</span> eor <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token operator">~</span>eor <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token comment">// \u6211\u4EEC\u4E0D\u59A8\u5047\u8BBE eor \u4E3A\uFF1A100101100</span>
  <span class="token comment">// \u90A3 rightOne \u4E3A\uFF1A100101100 &amp; (011010011 + 1) = 0000000100</span>
  arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>cur <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u62EC\u53F7\u522B\u4E22\uFF0C\u5426\u5219\u8FD0\u7B97\u987A\u5E8F\u9519\u8BEF\u4F1A\u5BFC\u81F4\u7ED3\u679C\u5F02\u5E38</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>cur <span class="token operator">&amp;</span> rightOne<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5F97\u5230 a \u6216\u8005 b \u5176\u4E2D\u4E00\u4E2A</span>
      onlyOne <span class="token operator">^=</span> cur
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// \u5F97\u5230 a \u6216\u8005 b \u7684\u53E6\u4E00\u4E2A</span>
  eor <span class="token operator">^=</span> onlyOne
  <span class="token keyword">return</span> <span class="token punctuation">[</span>eor<span class="token punctuation">,</span> onlyOne<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,42),e=[o];function c(l,u,r,k,i,m){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{b as __pageData,g as default};