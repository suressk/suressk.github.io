import{_ as n,c as s,o as a,d as t}from"./app.e07e89a0.js";const m='{"title":"vite \u547D\u4EE4\u5230 createServer","description":"","frontmatter":{"title":"vite \u547D\u4EE4\u5230 createServer"},"relativePath":"knowledge/vite/vitejs.md","lastUpdated":1655922071614}',p={},o=t(`<p>\u6211\u4EEC\u77E5\u9053\uFF0C <code>package.json</code> \u6587\u4EF6\u7684 <code>bin</code> \u5B57\u6BB5\u662F\u7528\u6765\u6307\u5B9A\u8981\u8FD0\u884C\u7684\u547D\u4EE4\u53CA\u8FD0\u884C\u547D\u4EE4\u6240\u8981\u6267\u884C\u7684\u6587\u4EF6</p><p>vite \u7684\u914D\u7F6E\u5982\u4E0B\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;bin&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;vite&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bin/vite.js&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u597D\u4E86\uFF0C\u6211\u4EEC\u77E5\u9053\u542F\u52A8 dev-server \u7684 <code>vite</code> \u547D\u4EE4\uFF0C\u5B9E\u9645\u8FD0\u884C\u7684\u5C31\u662F <code>bin/vite.js</code> \u6587\u4EF6\uFF0C\u90A3\u6211\u4EEC\u8FDB\u53BB\u770B\u770B\uFF1A</p><ol><li>\u5224\u65AD\u5F53\u524D\u76EE\u5F55\u662F\u5426\u5305\u542B <code>node_modules</code> \u76EE\u5F55\uFF0C\u82E5\u4E0D\u5305\u542B\uFF0C\u5219\u9700\u8981 <code>source-map</code> \u652F\u6301</li></ol><div class="language-js"><pre><code><span class="token hashbang comment">#!/usr/bin/env node // \u56FA\u5B9A\u683C\u5F0F\uFF0C\u7528\u6765\u6307\u5B9A\u547D\u4EE4\u8FD0\u884C\u7684\u73AF\u5883\uFF08node\uFF09</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>__dirname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// only available as dev dependency</span>
    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;source-map-support&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u68C0\u67E5 <code>process.argv</code> \u662F\u5426\u662F <code>debug</code> \u6A21\u5F0F</li></ol><div class="language-js"><pre><code><span class="token comment">// check debug mode first before requiring the CLI.</span>
<span class="token keyword">const</span> debugIndex <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?:-d|--debug)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> filterIndex <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(?:-f|--filter)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>debugIndex <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> value <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span>debugIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>value <span class="token operator">||</span> value<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    value <span class="token operator">=</span> <span class="token string">&#39;vite:*&#39;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// support debugging multiple flags</span>
    <span class="token comment">// with comma-separated list</span>
    value <span class="token operator">=</span> value
      <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vite:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>v<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span> <span class="token operator">=</span> value

  <span class="token keyword">if</span> <span class="token punctuation">(</span>filterIndex <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> filter <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span>filterIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>filter <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>filter<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_DEBUG_FILTER</span> <span class="token operator">=</span> filter
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u5BFC\u5165\u7F16\u8BD1\u540E\u7684 <code>cli</code> \u811A\u672C</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> profileIndex <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;--profile&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../dist/node/cli&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679C\u914D\u7F6E\u4E86 profile \u53C2\u6570</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>profileIndex <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u622A\u6389 &#39;--profile&#39;</span>
  process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>profileIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> next <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span>profileIndex<span class="token punctuation">]</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>next<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>profileIndex<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u521B\u5EFA\u4F1A\u8BDD\u8FDE\u63A5\uFF08webkit inspector\uFF09</span>
  <span class="token keyword">const</span> inspector <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inspector&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> session <span class="token operator">=</span> <span class="token punctuation">(</span>global<span class="token punctuation">.</span>__vite_profile_session <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">inspector<span class="token punctuation">.</span>Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  session<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  session<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;Profiler.enable&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    session<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">&#39;Profiler.start&#39;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B63\u5E38\u542F\u52A8</span>
  <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u8FDB\u5165\u7F16\u8BD1\u540E\u7684 <code>dist/node/cli.js</code>\uFF0C\u5373 <code>src/node/cli.ts</code></li></ol><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> cac <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;cac&#39;</span> <span class="token comment">/* \u4E00\u4E2A\u7B80\u5355\u4E14\u5F3A\u5927\u7684\u547D\u4EE4\u884C\u5E93\uFF0C\u6BD4 commander \u66F4\u8F7B\u91CF */</span>
<span class="token keyword">import</span> chalk <span class="token keyword">from</span> <span class="token string">&#39;chalk&#39;</span> <span class="token comment">/* \u7F8E\u5316\u63A7\u5236\u53F0\u65E5\u5FD7\u8BB0\u5F55 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> performance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;perf_hooks&#39;</span> <span class="token comment">/* node.js \u6536\u96C6\u6027\u80FD\u6307\u6807\u7684\u5BF9\u8C61 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BuildOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./build&#39;</span> <span class="token comment">/* \u6253\u5305 \u{1F4E6} \u914D\u7F6E\u9879 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ServerOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./server&#39;</span> <span class="token comment">/* \u542F\u52A8\u670D\u52A1\u7684\u914D\u7F6E\u9879 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createLogger<span class="token punctuation">,</span> LogLevel <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./logger&#39;</span> <span class="token comment">/* \u6253\u5370\u65E5\u5FD7 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolveConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;.&#39;</span> <span class="token comment">/* \u5904\u7406\u914D\u7F6E\u9879\u7684\u65B9\u6CD5 */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> preview <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./preview&#39;</span> <span class="token comment">/* \u6253\u5305\u7ED3\u679C\u9884\u89C8\u65B9\u6CD5 */</span>

<span class="token comment">// \u4F7F\u7528 cac \u751F\u6210 cli \u5B9E\u4F8B</span>
<span class="token keyword">const</span> cli <span class="token operator">=</span> <span class="token function">cac</span><span class="token punctuation">(</span><span class="token string">&#39;vite&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="5"><li>\u5168\u5C40 cli \u9009\u9879\u53CA\u6E05\u7406\u9009\u9879</li></ol><div class="language-ts"><pre><code><span class="token comment">// global options</span>
<span class="token keyword">interface</span> <span class="token class-name">GlobalCLIOptions</span> <span class="token punctuation">{</span>
  <span class="token string">&#39;--&#39;</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  c<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  config<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  base<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  l<span class="token operator">?</span><span class="token operator">:</span> LogLevel
  logLevel<span class="token operator">?</span><span class="token operator">:</span> LogLevel
  clearScreen<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  d<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  debug<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  f<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  filter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  m<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  mode<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token comment">/**
 * removing global flags before passing
 * as command specific sub-configs
 * \u5220\u9664\u5168\u5C40 cli \u914D\u7F6E
 */</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">cleanOptions</span><span class="token generic class-name"><span class="token operator">&lt;</span>Options <span class="token keyword">extends</span> GlobalCLIOptions<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  options<span class="token operator">:</span> Options<span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Omit<span class="token operator">&lt;</span>Options<span class="token punctuation">,</span> <span class="token keyword">keyof</span> GlobalCLIOptions<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> ret <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>options <span class="token punctuation">}</span>
  <span class="token keyword">delete</span> ret<span class="token punctuation">[</span><span class="token string">&#39;--&#39;</span><span class="token punctuation">]</span>
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>c
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>config
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>base
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>l
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>logLevel
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>clearScreen
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>d
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>debug
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>f
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>filter
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>m
  <span class="token keyword">delete</span> ret<span class="token punctuation">.</span>mode
  <span class="token keyword">return</span> ret
<span class="token punctuation">}</span>
</code></pre></div><ol start="6"><li>cli \u53C2\u6570\u5B9A\u4E49\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5C31\u53EA\u7814\u7A76\u4E00\u4E0B\u5F00\u53D1\u73AF\u5883\u4E0B\u7684\u529F\u80FD\u5B9E\u73B0\uFF0C\u751F\u4EA7\u73AF\u5883/\u9884\u89C8\u73AF\u5883\u540E\u7EED\u518D\u8003\u8651\u5427\uFF5E</li></ol><div class="language-ts"><pre><code><span class="token comment">// \u4E0B\u9762\u662F\u4E00\u4E9B\u6838\u5FC3\u53C2\u6570\uFF0C\u5982 -c \u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u7B49</span>
cli
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-c, --config &lt;file&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] use specified config file</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--base &lt;path&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] public base path (default: /)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-l, --logLevel &lt;level&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] info | warn | error | silent</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--clearScreen&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean] allow/disable clear screen when logging</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-d, --debug [feat]&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string | boolean] show debug logs</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-f, --filter &lt;filter&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] filter debug logs</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;-m, --mode &lt;mode&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] set env mode</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token comment">// dev \u5F00\u53D1\u73AF\u5883\uFF0C\u4E3B\u8981\u9488\u5BF9 server \u7684\u53C2\u6570\u914D\u7F6E</span>
cli
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;[root]&#39;</span><span class="token punctuation">)</span> <span class="token comment">// default command</span>
  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token string">&#39;serve&#39;</span><span class="token punctuation">)</span> <span class="token comment">// the command is called &#39;serve&#39; in Vite&#39;s API</span>
  <span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token string">&#39;dev&#39;</span><span class="token punctuation">)</span> <span class="token comment">// alias to align with the script name</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--host [host]&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[string] specify hostname</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--port &lt;port&gt;&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[number] specify port</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--https&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean] use TLS + HTTP/2</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--open [path]&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean | string] open browser on startup</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--cors&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean] enable CORS</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;--strictPort&#39;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean] exit if specified port is already in use</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span>
    <span class="token string">&#39;--force&#39;</span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[boolean] force the optimizer to ignore the cache and re-bundle</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span>devAction<span class="token punctuation">)</span>
<span class="token comment">/* \u8FD9\u91CC\u5C06 action \u51FD\u6570\u62BD\u51FA\u6765\u5355\u72EC\u770B\uFF0C\u514D\u5F97\u7BC7\u5E45\u8FC7\u957F\uFF0C\u62CE\u4E0D\u6E05\u6CE8\u610F\u70B9 */</span>

cli<span class="token punctuation">.</span><span class="token function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u547D\u4EE4\u884C\u4F7F\u7528 -h / --help \u53C2\u6570\uFF0C\u8F93\u51FA\u5E2E\u52A9\u4FE1\u606F</span>
cli<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;../../package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version<span class="token punctuation">)</span> <span class="token comment">// vite \u7248\u672C\u53F7</span>

cli<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570</span>
</code></pre></div><p><code>devAction \u51FD\u6570</code> \uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">devAction</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
  root<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> ServerOptions <span class="token operator">&amp;</span> GlobalCLIOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// output structure is preserved even after bundling so require()</span>
  <span class="token comment">// is ok here</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> createServer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./server&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5BFC\u5165\u521B\u5EFA dev-server</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      root<span class="token punctuation">,</span>
      base<span class="token operator">:</span> options<span class="token punctuation">.</span>base<span class="token punctuation">,</span>
      mode<span class="token operator">:</span> options<span class="token punctuation">.</span>mode<span class="token punctuation">,</span>
      configFile<span class="token operator">:</span> options<span class="token punctuation">.</span>config<span class="token punctuation">,</span>
      logLevel<span class="token operator">:</span> options<span class="token punctuation">.</span>logLevel<span class="token punctuation">,</span>
      clearScreen<span class="token operator">:</span> options<span class="token punctuation">.</span>clearScreen<span class="token punctuation">,</span>
      server<span class="token operator">:</span> <span class="token function">cleanOptions</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// native Node http server instance or null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>server<span class="token punctuation">.</span>httpServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;HTTP server not available&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">await</span> server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u542F\u52A8 dev-server</span>
    <span class="token keyword">const</span> info <span class="token operator">=</span> server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>info <span class="token comment">// info \u65E5\u5FD7</span>

    <span class="token function">info</span><span class="token punctuation">(</span>
      chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n  vite v</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;vite/package.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span> <span class="token operator">+</span>
        chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> dev server running at:\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        clear<span class="token operator">:</span> <span class="token operator">!</span>server<span class="token punctuation">.</span>config<span class="token punctuation">.</span>logger<span class="token punctuation">.</span>hasWarned<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token comment">// \u8C03\u7528 logger.ts \u7684 printCommonServerUrls \u65B9\u6CD5\u6253\u5370 dev-server \u8FD0\u884C\u7684 url</span>
    server<span class="token punctuation">.</span><span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token comment">// __vite_start_time \u5728\u6267\u884C vite \u547D\u4EE4\u65F6</span>
    <span class="token comment">// \u8D4B\u503C\u4E3A performance.now()\uFF0C\u8BB0\u5F55\u542F\u52A8\u670D\u52A1\u7684\u5F00\u59CB\u65F6\u95F4</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>global<span class="token punctuation">.</span>__vite_start_time<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u670D\u52A1\u542F\u52A8\u65F6\u95F4\uFF08ms\uFF09</span>
      <span class="token keyword">const</span> startupDuration <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> global<span class="token punctuation">.</span>__vite_start_time
      <span class="token function">info</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\\n  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">cyan</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">ready in </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>startupDuration<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6253\u5370\u670D\u52A1\u542F\u52A8\u5931\u8D25\u7684\u65E5\u5FD7</span>
    <span class="token function">createLogger</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>logLevel<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
      chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">error when starting dev server:\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>e<span class="token punctuation">.</span>stack<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> error<span class="token operator">:</span> e <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span>
    <span class="token comment">// \u7ED3\u675F\u8FDB\u7A0B</span>
    process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="7"><li>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8FDB\u5165 server \u6A21\u5757\uFF0C\u67E5\u770B <code>createServer</code>\uFF1A</li></ol><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createServer</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">:</span> InlineConfig <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ViteDevServer<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u4E2A\u65B9\u6CD5\u91CC\uFF0C\u5927\u6982\u505A\u4E86\u4E0B\u9762\u8FD9\u4E9B\u4E8B\uFF1A</span>
  <span class="token comment">// 1. \u5904\u7406\u670D\u52A1\u7684\u542F\u52A8\u914D\u7F6E</span>
  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>inlineConfig<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> httpsOptions <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveHttpsConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>server<span class="token punctuation">.</span>https<span class="token punctuation">)</span>

  <span class="token comment">// 2. \u68C0\u67E5 config.server.middlewareMode \u662F\u5426 === true\uFF0C\u82E5\u662F\u5C06\u5176\u7F6E\u4E3A &#39;ssr&#39;</span>
  <span class="token comment">// connect \u5305\u521B\u5EFA\u8FDE\u63A5\uFF08\u65B9\u4FBF\u4F7F\u7528\u4E2D\u95F4\u4EF6\u6765\u6269\u5C55\u7684 node http server \u6846\u67B6\uFF09</span>
  <span class="token keyword">const</span> middlewares <span class="token operator">=</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Connect<span class="token punctuation">.</span>Server
  <span class="token keyword">const</span> httpServer <span class="token operator">=</span> middlewareMode
    <span class="token operator">?</span> <span class="token keyword">null</span>
    <span class="token operator">:</span> <span class="token keyword">await</span> <span class="token function">resolveHttpServer</span><span class="token punctuation">(</span>serverConfig<span class="token punctuation">,</span> middlewares<span class="token punctuation">,</span> httpsOptions<span class="token punctuation">)</span>
  <span class="token comment">// resolveHttpServer \u65B9\u6CD5\u7528\u6765\u533A\u5206\u4F7F\u7528 http / https / http2 (npm package)\u6765</span>
  <span class="token comment">// \u521B\u5EFA server \u5E76\u8FD4\u56DE\u8D4B\u503C\u7ED9 httpServer</span>

  <span class="token comment">// 3. \u521B\u5EFA webSocket \u5B9E\u4F8B</span>
  <span class="token keyword">const</span> ws <span class="token operator">=</span> <span class="token function">createWebSocketServer</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">,</span> config<span class="token punctuation">,</span> httpsOptions<span class="token punctuation">)</span>

  <span class="token comment">// 4. \u4F7F\u7528 chokidar \u76D1\u542C \u6587\u4EF6 \u4FEE\u6539</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> ignored <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">...</span>watchOptions <span class="token punctuation">}</span> <span class="token operator">=</span> serverConfig<span class="token punctuation">.</span>watch <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> watcher <span class="token operator">=</span> chokidar<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    ignored<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&#39;**/node_modules/**&#39;</span><span class="token punctuation">,</span>
      <span class="token string">&#39;**/.git/**&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span><span class="token punctuation">(</span><span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>ignored<span class="token punctuation">)</span> <span class="token operator">?</span> ignored <span class="token operator">:</span> <span class="token punctuation">[</span>ignored<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    ignoreInitial<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    ignorePermissionErrors<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    disableGlobbing<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>watchOptions<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> FSWatcher

  <span class="token comment">// 5. \u521B\u5EFA pluginContainer\uFF0C\u521B\u5EFA\u6A21\u5757\u6620\u5C04\u8868</span>
  <span class="token keyword">const</span> container <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPluginContainer</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> moduleGraph<span class="token punctuation">,</span> watcher<span class="token punctuation">)</span>

  <span class="token keyword">const</span> moduleGraph<span class="token operator">:</span> ModuleGraph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ModuleGraph</span><span class="token punctuation">(</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    container<span class="token punctuation">.</span><span class="token function">resolveId</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">)</span>
  <span class="token keyword">const</span> closeHttpServer <span class="token operator">=</span> <span class="token function">createServerCloseFn</span><span class="token punctuation">(</span>httpServer<span class="token punctuation">)</span>

  <span class="token comment">// 6. \u521B\u5EFA server \u5BF9\u8C61</span>
  <span class="token keyword">const</span> server<span class="token operator">:</span> ViteServer <span class="token operator">=</span> <span class="token punctuation">{</span>
    config<span class="token punctuation">,</span>
    middlewares<span class="token punctuation">,</span>
    <span class="token keyword">get</span> <span class="token function">app</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8FC7\u671F\u7684 api</span>
      <span class="token keyword">return</span> middlewares
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    httpServer<span class="token punctuation">,</span>
    watcher<span class="token punctuation">,</span>
    pluginContainer<span class="token operator">:</span> container<span class="token punctuation">,</span>
    ws<span class="token punctuation">,</span>
    moduleGraph<span class="token punctuation">,</span>
    transformWithEsbuild<span class="token punctuation">,</span>
    <span class="token function">transformRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token function">transformRequest</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> server<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    transformIndexHtml<span class="token operator">:</span> <span class="token keyword">null</span><span class="token operator">!</span><span class="token punctuation">,</span> <span class="token comment">// to be immediately set</span>
    <span class="token function">ssrLoadModule</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// ... \u670D\u52A1\u7AEF\u6E32\u67D3\u52A0\u8F7D module</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> isRestart<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u542F\u52A8 dev-server \u65B9\u6CD5</span>
      <span class="token keyword">return</span> <span class="token function">startServer</span><span class="token punctuation">(</span>server<span class="token punctuation">,</span> port<span class="token punctuation">,</span> isRestart<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u9000\u51FA dev-server</span>
      <span class="token comment">// watcher\uFF0Cws\uFF0Ccontainer\uFF0ChttpServer</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">printUrls</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u6253\u5370\u65E5\u5FD7</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">async</span> <span class="token function">restart</span><span class="token punctuation">(</span>forceOptimize<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8C03\u7528 restartServer \u65B9\u6CD5\uFF0C\u91CD\u542F dev-server</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// _xxxx  \u4E00\u4E9B\u79C1\u6709\u5C5E\u6027</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u7ACB\u5373\u521B\u5EFA\u8F6C\u6362 html \u7684\u65B9\u6CD5</span>
  server<span class="token punctuation">.</span>transformIndexHtml <span class="token operator">=</span> <span class="token function">createDevHtmlTransformFn</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span>

  <span class="token comment">// 7. package \u7F13\u5B58</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> packageCache <span class="token punctuation">}</span> <span class="token operator">=</span> config
  <span class="token keyword">const</span> setPackageData <span class="token operator">=</span> packageCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>packageCache<span class="token punctuation">)</span>
  packageCache<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> pkg<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>id<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      watcher<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">setPackageData</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> pkg<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 8. watcher \u76D1\u542C\u6587\u4EF6\u53D8\u5316\uFF1Achange, add, unlink</span>
  watcher<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u683C\u5F0F\u5316\u6587\u4EF6\u8DEF\u5F84</span>
    file <span class="token operator">=</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
    <span class="token comment">// \u82E5\u662F package.json \u6587\u4EF6\u53D8\u5316\uFF0C\u6821\u9A8C\u4F9D\u8D56\u662F\u5426\u53D8\u66F4</span>
    <span class="token comment">// \u5220\u9664 packageCache \u4E2D\u7684\u7F13\u5B58\u8BB0\u5F55</span>

    <span class="token comment">// \u82E5\u662F\u5176\u4ED6\u6587\u4EF6\u53D8\u66F4\uFF0C\u66F4\u65B0 moduleGraph</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u5F00\u542F hmr\uFF08\u9ED8\u8BA4\u5F00\u542F\uFF09</span>
    <span class="token comment">// handleHMRUpdate(file, server) \u89E6\u53D1\u70ED\u66F4\u65B0</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  watcher<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">handleFileAddUnlink</span><span class="token punctuation">(</span><span class="token function">normalizePath</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">,</span> server<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  watcher<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;unlink&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">handleFileAddUnlink</span><span class="token punctuation">(</span><span class="token function">normalizePath</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">,</span> server<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 9. \u4E00\u5806\u4E2D\u95F4\u4EF6\u7684\u5E94\u7528</span>
  <span class="token comment">// /node/server/middlewares/*.ts</span>

  <span class="token keyword">return</span> server <span class="token comment">// \u8FD4\u56DE\u521B\u5EFA\u7684 server \u5BF9\u8C61</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
