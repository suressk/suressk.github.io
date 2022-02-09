import{_ as n,c as s,o as a,d as p}from"./app.d292e89f.js";const f='{"title":"resolveConfig \u53C2\u6570\u89E3\u6790","description":"","frontmatter":{"title":"resolveConfig \u53C2\u6570\u89E3\u6790"},"relativePath":"knowledge/vite/resolveConfig.md","lastUpdated":1644408779673}',t={},o=p(`__VP_STATIC_START__<p>\u672C\u6587\u65E8\u5728\u5206\u6790 vite \u6E90\u7801\u4E2D\u89E3\u6790 config \u53C2\u6570\u7684\u51FD\u6570 <code>resolveConfig</code></p><h4 id="config-\u6765\u6E90" tabindex="-1">config \u6765\u6E90 <a class="header-anchor" href="#config-\u6765\u6E90" aria-hidden="true">#</a></h4><ol><li><p>inlineConfig\uFF1A\u6765\u81EA\u547D\u4EE4\u884C\u6216\u914D\u7F6E\u7684 <code>npm scripts</code></p></li><li><p>vite.config.ts/vite.config.js\uFF1A\u7528\u6237\u914D\u7F6E\u7684\u6587\u4EF6</p></li><li><p>Plugin.config\uFF1A\u63D2\u4EF6\u7684 config \u65B9\u6CD5\u8FD4\u56DE\u7684\u914D\u7F6E\u9879</p></li></ol><h4 id="\u6D89\u53CA\u529F\u80FD" tabindex="-1">\u6D89\u53CA\u529F\u80FD <a class="header-anchor" href="#\u6D89\u53CA\u529F\u80FD" aria-hidden="true">#</a></h4><ol><li><p>\u8BBE\u7F6E <code>--configFile false</code> \u53C2\u6570\u6765\u7981\u7528\u914D\u7F6E\u6587\u4EF6</p></li><li><p>\u6309\u9700\u52A0\u8F7D\u63D2\u4EF6</p></li><li><p>\u63D2\u4EF6\u5F3A\u5236\u987A\u5E8F</p></li><li><p>\u52A0\u8F7D <code>.env</code> \u6587\u4EF6</p></li><li><p><code>plugin.config</code> \u94A9\u5B50\u51FD\u6570</p></li><li><p><code>plugin.configResolved</code> \u94A9\u5B50\u51FD\u6570</p></li></ol><h4 id="\u6D41\u7A0B" tabindex="-1">\u6D41\u7A0B <a class="header-anchor" href="#\u6D41\u7A0B" aria-hidden="true">#</a></h4><ol><li>\u5165\u53E3\uFF1A</li></ol><div class="language-ts"><pre><code><span class="token comment">// /src/node/config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolveConfig<span class="token punctuation">,</span> InlineConfig<span class="token punctuation">,</span> ResolvedConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../config&#39;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>inlineConfig<span class="token punctuation">,</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u53C2\u6570\uFF1A</li></ol><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">resolveConfig</span><span class="token punctuation">(</span>
  inlineConfig<span class="token operator">:</span> InlineConfig<span class="token punctuation">,</span>
  command<span class="token operator">:</span> <span class="token string">&#39;build&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;serve&#39;</span><span class="token punctuation">,</span>
  defaultMode <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResolvedConfig<span class="token operator">&gt;</span>
</code></pre></div><ol start="3"><li>\u8BBE\u7F6E <code>config</code>\uFF0C<code>mode</code>\uFF0C<code>configFileDependencies</code></li></ol><div class="language-ts"><pre><code><span class="token keyword">let</span> config <span class="token operator">=</span> inlineConfig <span class="token comment">// \u5B58\u50A8\u914D\u7F6E</span>
<span class="token keyword">let</span> configFileDependencies<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u5B58\u50A8\u914D\u7F6E\u4F9D\u8D56</span>
<span class="token keyword">let</span> mode <span class="token operator">=</span> inlineConfig<span class="token punctuation">.</span>mode <span class="token operator">||</span> defaultMode <span class="token comment">// \u8BBE\u7F6E mode</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>mode <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> configEnv <span class="token operator">=</span> <span class="token punctuation">{</span>
  mode<span class="token punctuation">,</span>
  command
<span class="token punctuation">}</span>
</code></pre></div><ol start="4"><li>\u52A0\u8F7D\u914D\u7F6E\u6587\u4EF6\uFF0C\u91CD\u7F6E\u914D\u7F6E <code>mode</code>\uFF0C\u540C\u65F6\u77E5\u9053\u53EF\u4EE5\u4F7F\u7528 <strong><code>--configFile false</code></strong> \u6765\u7981\u7528\u914D\u7F6E\u6587\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token keyword">let</span> <span class="token punctuation">{</span> configFile <span class="token punctuation">}</span> <span class="token operator">=</span> config
<span class="token keyword">if</span> <span class="token punctuation">(</span>configFile <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> loadResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">loadConfigFromFile</span><span class="token punctuation">(</span>
    configEnv<span class="token punctuation">,</span>
    configFile<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>root<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>logLevel
  <span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>loadResult<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>loadResult<span class="token punctuation">.</span>config<span class="token punctuation">,</span> config<span class="token punctuation">)</span>
    configFile <span class="token operator">=</span> loadResult<span class="token punctuation">.</span>path
    configFileDependencies <span class="token operator">=</span> loadResult<span class="token punctuation">.</span>dependencies
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

mode <span class="token operator">=</span> inlineConfig<span class="token punctuation">.</span>mode <span class="token operator">||</span> config<span class="token punctuation">.</span>mode <span class="token operator">||</span> mode
configEnv<span class="token punctuation">.</span>mode <span class="token operator">=</span> mode
</code></pre></div><p><code>loadConfigFromFile</code> \u5C31\u662F\u6839\u636E\u9879\u76EE\u76EE\u5F55\uFF0C\u83B7\u53D6\u76F8\u5173\u7684\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F53\u4F7F\u7528\u914D\u7F6E\u6587\u4EF6\u7C7B\u578B\u662F ts \u4E14\u4F7F\u7528 ES Module \u65F6\uFF0C\u4F1A\u88AB esbuild \u8F6C\u4E49\u8BFB\u53D6\uFF0C\u7136\u540E\u5220\u9664\u8F6C\u4E49\u540E\u7684\u6587\u4EF6</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">loadConfigFromFile</span><span class="token punctuation">(</span>
  configEnv<span class="token operator">:</span> ConfigEnv<span class="token punctuation">,</span>
  configFile<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  configRoot<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  logLevel<span class="token operator">?</span><span class="token operator">:</span> LogLevel
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span>
  config<span class="token operator">:</span> UserConfig
  dependencies<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> resolvedPath<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span> <span class="token comment">// \u8DEF\u5F84</span>
  <span class="token keyword">let</span> isTS <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u662F ts</span>
  <span class="token keyword">let</span> isESM <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u662F ES Module</span>
  <span class="token keyword">let</span> dependencies<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// \u4F9D\u8D56</span>

  <span class="token comment">// \u68C0\u67E5 package.json \u5E76\u68C0\u6D4B\u7C7B\u578B\uFF0C\u5C06 isESM \u7F6E\u4E3A true</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> pkg <span class="token operator">=</span> <span class="token function">lookupFile</span><span class="token punctuation">(</span>configRoot<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;package.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pkg <span class="token operator">&amp;&amp;</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>pkg<span class="token punctuation">)</span><span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isESM <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token comment">// \u5224\u5B9A\u662F\u5426\u6709 configFile \u53C2\u6570</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>configFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    resolvedPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>configFile<span class="token punctuation">)</span>
    isTS <span class="token operator">=</span> configFile<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>configFile<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">&#39;.mjs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      isESM <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F9D\u6B21\u68C0\u6D4B configRoot \u8DEF\u5F84\u4E0B\u662F\u5426\u6709\u4EE5\u4E0B\u914D\u7F6E\u6587\u4EF6\uFF08fs.existsSync\uFF09\uFF1A</span>
    <span class="token comment">// vite.config.js</span>
    <span class="token comment">// vite.config.mjs\uFF08\u5B58\u5728\u5219\u53D6\u5176\u914D\u7F6E\uFF0C\u5E76\u5C06 isESM = true\uFF09</span>
    <span class="token comment">// vite.config.ts\uFF08\u5B58\u5728\u5219\u53D6\u5176\u914D\u7F6E\uFF0C\u5E76\u5C06 isESM = true\uFF09</span>
    <span class="token comment">// \u6309\u4E0A\u9762\u68C0\u6D4B\u987A\u5E8F\u4F18\u5148\u7EA7\uFF0C\u53D6\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84\u5B58\u50A8\u5230 resolvedPath</span>
    resolvedPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>configRoot<span class="token punctuation">,</span> <span class="token string">&#39;vite.config.[xx]&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u82E5\u5747\u4E3A\u53D6\u5230\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>resolvePath<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;no config file found.&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> userConfig<span class="token operator">:</span> UserConfigExport <span class="token operator">|</span> <span class="token keyword">undefined</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>isESM <span class="token operator">&amp;&amp;</span> isTS<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> fileUrl <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">pathToFileURL</span><span class="token punctuation">(</span>resolvedPath<span class="token punctuation">)</span>
    <span class="token comment">// esbuild \u6253\u5305</span>
    <span class="token keyword">const</span> bundled <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">bundleConfigFile</span><span class="token punctuation">(</span>resolvedPath<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    dependencies <span class="token operator">=</span> bundled<span class="token punctuation">.</span>dependencies

    fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>resolvedPath <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> bundled<span class="token punctuation">.</span>code<span class="token punctuation">)</span> <span class="token comment">// \u6682\u5B58\u8BFB\u53D6\u7684\u914D\u7F6E</span>
    userConfig <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">dynamicImport</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fileUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.js?t=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span>default
    fs<span class="token punctuation">.</span><span class="token function">unlinkSync</span><span class="token punctuation">(</span>resolvedPath <span class="token operator">+</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u5220\u9664\u4E34\u65F6\u6587\u4EF6</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="5"><li>\u89E3\u6790\u5E94\u7528\u63D2\u4EF6\uFF0C<a href="https://cn.vitejs.dev/guide/using-plugins.html#conditional-application" target="_blank" rel="noopener noreferrer">\u6309\u9700\u52A0\u8F7D plugin.apply \u5C5E\u6027</a>\uFF0C<a href="https://cn.vitejs.dev/guide/using-plugins.html#enforcing-plugin-ordering" target="_blank" rel="noopener noreferrer">\u5F3A\u5236\u63D2\u4EF6\u6392\u5E8F plugin.enforce \u5C5E\u6027</a>\uFF0C<a href="https://cn.vitejs.dev/guide/api-plugin.html#config" target="_blank" rel="noopener noreferrer">\u6267\u884C plugin.config \u94A9\u5B50\u51FD\u6570</a>\uFF0C\u6DFB\u52A0\u7528\u6237\u914D\u7F6E</li></ol><div class="language-ts"><pre><code><span class="token comment">// resolve plugins</span>
<span class="token comment">// \u6241\u5E73\u6570\u7EC4\uFF0C\u7B5B\u9009\u5E94\u7528\u5728\u5F53\u524D command \u4E0B\u7684\u63D2\u4EF6</span>
<span class="token keyword">const</span> rawUserPlugins <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span>plugins <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>p<span class="token punctuation">.</span>apply<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> p<span class="token punctuation">.</span>apply <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">p</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> mode <span class="token punctuation">}</span><span class="token punctuation">,</span> configEnv<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> p<span class="token punctuation">.</span>apply <span class="token operator">===</span> command
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// sortUserPlugins \u65B9\u6CD5\u6839\u636E\u63D2\u4EF6\u7684 enforce \u53C2\u6570\u8FDB\u884C\u6392\u5E8F\uFF1A</span>
<span class="token comment">// pre\uFF1A Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u3010\u524D\u3011\u8C03\u7528</span>
<span class="token comment">// \u9ED8\u8BA4\uFF1A Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u3010\u540E\u3011\u8C03\u7528</span>
<span class="token comment">// post\uFF1A Vite \u6838\u5FC3\u63D2\u4EF6\u4E4B\u3010\u540E\u3011\u8C03\u7528</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>prePlugins<span class="token punctuation">,</span> normalPlugins<span class="token punctuation">,</span> postPlugins<span class="token punctuation">]</span> <span class="token operator">=</span>
  <span class="token function">sortUserPlugins</span><span class="token punctuation">(</span>rawUserPlugins<span class="token punctuation">)</span>
<span class="token comment">// \u6267\u884C plugin.config \u94A9\u5B50\u51FD\u6570\uFF0C\u518D\u6B21\u914D\u7F6E</span>
<span class="token keyword">const</span> userPlugins <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>prePlugins<span class="token punctuation">,</span> <span class="token operator">...</span>normalPlugins<span class="token punctuation">,</span> <span class="token operator">...</span>postPlugins<span class="token punctuation">]</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> p <span class="token keyword">of</span> userPlugins<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> p<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> configEnv<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      config <span class="token operator">=</span> <span class="token function">mergeConfig</span><span class="token punctuation">(</span>config<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="6"><li>\u89E3\u6790 <code>resolve</code> \u53C2\u6570\uFF1A<code>alias</code>\u3001<code>dedupe</code>\u3002\u8FD9\u4E24\u4E2A\u53C2\u6570\u53EF\u4EE5\u7528\u4E8E resolve \u540C\u7EA7\uFF0C\u6B64\u5904\u89E3\u6790 <code>/^[\\/]?@vite\\/env/</code> \u548C <code>/^[\\/]?@vite\\/client/</code>\uFF0C\u662F\u4E3A\u4E86\u89E3\u6790 hmr \u7684\u5BA2\u6237\u7AEF\u6587\u4EF6\u8DEF\u5F84</li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> clientAlias <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> find<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\/]?@vite\\/env</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token function-variable function">replacement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">ENV_ENTRY</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> find<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[\\/]?@vite\\/client</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token function-variable function">replacement</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">CLIENT_ENTRY</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> resolvedAlias <span class="token operator">=</span> <span class="token function">mergeAlias</span><span class="token punctuation">(</span>
  clientAlias<span class="token punctuation">,</span>
  config<span class="token punctuation">.</span>resolve<span class="token operator">?.</span>alias <span class="token operator">||</span> config<span class="token punctuation">.</span>alias <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> resolveOptions<span class="token operator">:</span> ResolvedConfig<span class="token punctuation">[</span><span class="token string">&#39;resolve&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  dedupe<span class="token operator">:</span> config<span class="token punctuation">.</span>dedupe<span class="token punctuation">,</span>
  <span class="token operator">...</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span>
  alias<span class="token operator">:</span> resolvedAlias
<span class="token punctuation">}</span>
</code></pre></div><ol start="7"><li>\u52A0\u8F7D <a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-files" target="_blank" rel="noopener noreferrer">.env \u6587\u4EF6</a> \u914D\u7F6E\u7528\u6237\u73AF\u5883\u53D8\u91CF\uFF0C\u5B98\u7F51 <a href="https://cn.vitejs.dev/guide/env-and-mode.html#modes" target="_blank" rel="noopener noreferrer">\u533A\u5206 pro/dev \u73AF\u5883\u548C\u6A21\u5F0F</a> \u4E5F\u6709\u4F53\u73B0\u3002\u81F3\u6B64\uFF0C\u7528\u6237\u6709\u4E09\u6B21\u6539\u53D8 pro/dev \u7684\u73AF\u5883\u548C\u6A21\u5F0F\uFF1A1. \u547D\u4EE4\u884C\u6307\u5B9A\uFF1B2. \u914D\u7F6E\u6587\u4EF6\uFF1B3. <code>.env</code> \u6587\u4EF6\u3002\u800C\u4E14\uFF0C\u8FD9\u91CC\u6709\u901A\u8FC7 <code>--envFile false</code> \u7981\u7528\u52A0\u8F7D <code>.env</code> \u6587\u4EF6\uFF0C\u4F46\u53EF\u89C1\u4E0A\u4E00\u7BC7 <code>cli \u5E76\u672A\u914D\u7F6E\u8FD9\u4E2A option</code></li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> resolvedRoot <span class="token operator">=</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>
  config<span class="token punctuation">.</span>root <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>root<span class="token punctuation">)</span> <span class="token operator">:</span> process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token keyword">const</span> envDir <span class="token operator">=</span> config<span class="token punctuation">.</span>envDir
  <span class="token operator">?</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>resolvedRoot<span class="token punctuation">,</span> config<span class="token punctuation">.</span>envDir<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token operator">:</span> resolvedRoot

<span class="token keyword">const</span> userEnv <span class="token operator">=</span>
  inlineConfig<span class="token punctuation">.</span>envFile <span class="token operator">!==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span>
  <span class="token function">loadEnv</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> envDir<span class="token punctuation">,</span> <span class="token function">resolveEnvPrefix</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> isProduction <span class="token operator">=</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_USER_NODE_ENV</span> <span class="token operator">||</span> mode<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isProduction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// in case default mode was not production and is overwritten</span>
  process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><p><code>loadEnv</code> \u65B9\u6CD5\u5C31\u662F\u6839\u636E mode \u4F7F\u7528 <code>dotenv</code> (npm pkg) \u52A0\u8F7D\u73AF\u5883\u4E0B\u7684 .env \u6587\u4EF6\uFF0C\u5E76 <a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-files" target="_blank" rel="noopener noreferrer">\u5224\u65AD &#39;VITE__&#39; \u524D\u7F00</a>\uFF0C\u540C\u65F6\u6839\u636E <a href="https://cn.vitejs.dev/guide/env-and-mode.html#modes" target="_blank" rel="noopener noreferrer">\u7528\u6237\u914D\u7F6E\u7684 NODE_ENV</a> \u914D\u7F6E <code>VITE_USER_NODE_ENV</code> \u53D8\u91CF</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">loadEnv</span><span class="token punctuation">(</span>
  mode<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  envDir<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  prefixes<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;VITE_&#39;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  prefixes <span class="token operator">=</span> <span class="token function">arraify</span><span class="token punctuation">(</span>prefixes<span class="token punctuation">)</span> <span class="token comment">// string =&gt; string[]</span>
  <span class="token keyword">const</span> env<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">const</span> envFiles <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.local</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mode<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env.local</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">.env</span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">]</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> process<span class="token punctuation">.</span>env<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>
      prefixes<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
      env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>
    <span class="token punctuation">)</span> <span class="token punctuation">{</span>
      env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token keyword">as</span> <span class="token builtin">string</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> file <span class="token keyword">of</span> envFiles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">lookupFile</span><span class="token punctuation">(</span>envDir<span class="token punctuation">,</span> <span class="token punctuation">[</span>file<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parsed <span class="token operator">=</span> dotenv<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        debug<span class="token operator">:</span> <span class="token operator">!</span><span class="token operator">!</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">DEBUG</span> <span class="token operator">||</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>

      <span class="token comment">// let environment variables use each other</span>
      <span class="token function">dotenvExpand</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        parsed<span class="token punctuation">,</span>
        <span class="token comment">// prevent process.<wbr>env mutation</span>
        ignoreProcessEnv<span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token builtin">any</span><span class="token punctuation">)</span>

      <span class="token comment">// only keys that start with prefix are exposed to client</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>parsed<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>
          prefixes<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>prefix<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
          env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token keyword">undefined</span>
        <span class="token punctuation">)</span> <span class="token punctuation">{</span>
          env<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;NODE_ENV&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// NODE_ENV override in .env file</span>
          process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VITE_USER_NODE_ENV</span> <span class="token operator">=</span> value
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> env
<span class="token punctuation">}</span>
</code></pre></div><ol start="8"><li>\u89E3\u6790 <a href="https://cn.vitejs.dev/config/#base" target="_blank" rel="noopener noreferrer">BASE_URL</a>\uFF0C<a href="https://cn.vitejs.dev/config/#build-options" target="_blank" rel="noopener noreferrer">buildOptions</a>\uFF0C<a href="https://cn.vitejs.dev/config/#cachedir" target="_blank" rel="noopener noreferrer">cacheDir</a>\uFF0C<a href="https://cn.vitejs.dev/config/#assetsinclude" target="_blank" rel="noopener noreferrer">assetsFilter</a>\uFF0C<a href="https://cn.vitejs.dev/config/#publicdir" target="_blank" rel="noopener noreferrer">publicDir</a></li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token constant">BASE_URL</span> <span class="token operator">=</span> <span class="token function">resolveBaseUrl</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>base<span class="token punctuation">,</span> command <span class="token operator">===</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">,</span> logger<span class="token punctuation">)</span>
<span class="token keyword">const</span> resolvedBuildOptions <span class="token operator">=</span> <span class="token function">resolveBuildOptions</span><span class="token punctuation">(</span>resolvedRoot<span class="token punctuation">,</span> config<span class="token punctuation">.</span>build<span class="token punctuation">)</span>
<span class="token comment">// resolve cache directory</span>
<span class="token keyword">const</span> pkgPath <span class="token operator">=</span> <span class="token function">lookupFile</span><span class="token punctuation">(</span>
  resolvedRoot<span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">package.json</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span> <span class="token comment">/* pathOnly */</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> cacheDir <span class="token operator">=</span> config<span class="token punctuation">.</span>cacheDir
  <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>resolvedRoot<span class="token punctuation">,</span> config<span class="token punctuation">.</span>cacheDir<span class="token punctuation">)</span>
  <span class="token operator">:</span> pkgPath <span class="token operator">&amp;&amp;</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">dirname</span><span class="token punctuation">(</span>pkgPath<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">node_modules/.vite</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>

<span class="token keyword">const</span> assetsFilter <span class="token operator">=</span> config<span class="token punctuation">.</span>assetsInclude
  <span class="token operator">?</span> <span class="token function">createFilter</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>assetsInclude<span class="token punctuation">)</span>
  <span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token boolean">false</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> publicDir <span class="token punctuation">}</span> <span class="token operator">=</span> config
<span class="token keyword">const</span> resolvedPublicDir <span class="token operator">=</span>
  publicDir <span class="token operator">!==</span> <span class="token boolean">false</span> <span class="token operator">&amp;&amp;</span> publicDir <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span>
    <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>
        resolvedRoot<span class="token punctuation">,</span>
        <span class="token keyword">typeof</span> publicDir <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">?</span> publicDir <span class="token operator">:</span> <span class="token string">&#39;public&#39;</span>
      <span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
</code></pre></div><ol start="9"><li>\u6DFB\u52A0\u5185\u7F6E\u63D2\u4EF6\uFF0C\u5982 css \u89E3\u6790\uFF0Cts \u89E3\u6790\u7B49\uFF0C\u5E76\u5BF9\u6240\u6709\u63D2\u4EF6 <a href="https://cn.vitejs.dev/guide/api-plugin.html#handlehotupdate" target="_blank" rel="noopener noreferrer">\u6392\u5E8F</a></li></ol><div class="language-ts"><pre><code><span class="token punctuation">(</span>resolved<span class="token punctuation">.</span>plugins <span class="token keyword">as</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">resolvePlugins</span><span class="token punctuation">(</span>
  resolved<span class="token punctuation">,</span>
  prePlugins<span class="token punctuation">,</span>
  normalPlugins<span class="token punctuation">,</span>
  postPlugins
<span class="token punctuation">)</span>
<span class="token comment">// call configResolved hooks</span>
<span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>userPlugins<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>configResolved<span class="token operator">?.</span><span class="token punctuation">(</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">resolvePlugins</span><span class="token punctuation">(</span>
  config<span class="token operator">:</span> ResolvedConfig<span class="token punctuation">,</span>
  prePlugins<span class="token operator">:</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  normalPlugins<span class="token operator">:</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  postPlugins<span class="token operator">:</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isBuild <span class="token operator">=</span> config<span class="token punctuation">.</span>command <span class="token operator">===</span> <span class="token string">&#39;build&#39;</span>

  <span class="token keyword">const</span> buildPlugins <span class="token operator">=</span> isBuild
    <span class="token operator">?</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;../build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">resolveBuildPlugins</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">{</span> pre<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> post<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>
    isBuild <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> <span class="token function">preAliasPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">aliasPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> entries<span class="token operator">:</span> config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>prePlugins<span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>polyfillModulePreload
      <span class="token operator">?</span> <span class="token function">modulePreloadPolyfillPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function">resolvePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token operator">...</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span>
      root<span class="token operator">:</span> config<span class="token punctuation">.</span>root<span class="token punctuation">,</span>
      isProduction<span class="token operator">:</span> config<span class="token punctuation">.</span>isProduction<span class="token punctuation">,</span>
      isBuild<span class="token punctuation">,</span>
      packageCache<span class="token operator">:</span> config<span class="token punctuation">.</span>packageCache<span class="token punctuation">,</span>
      ssrConfig<span class="token operator">:</span> config<span class="token punctuation">.</span>ssr<span class="token punctuation">,</span>
      asSrc<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>build<span class="token punctuation">.</span>ssr <span class="token operator">?</span> <span class="token function">ssrRequireHookPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function">htmlInlineScriptProxyPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">cssPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    config<span class="token punctuation">.</span>esbuild <span class="token operator">!==</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token function">esbuildPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>esbuild<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
    <span class="token function">jsonPlugin</span><span class="token punctuation">(</span>
      <span class="token punctuation">{</span>
        namedExports<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>config<span class="token punctuation">.</span>json
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      isBuild
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">wasmPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">webWorkerPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">assetPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>normalPlugins<span class="token punctuation">,</span>
    <span class="token function">definePlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">cssPostPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>buildPlugins<span class="token punctuation">.</span>pre<span class="token punctuation">,</span>
    <span class="token operator">...</span>postPlugins<span class="token punctuation">,</span>
    <span class="token operator">...</span>buildPlugins<span class="token punctuation">.</span>post<span class="token punctuation">,</span>
    <span class="token comment">// internal server-only plugins are always applied after everything else</span>
    <span class="token operator">...</span><span class="token punctuation">(</span>isBuild
      <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">clientInjectionsPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">importAnalysisPlugin</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span> <span class="token keyword">as</span> Plugin<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="10"><li>createResolver\uFF0C\u521B\u5EFA\u4E00\u4E2A\u5185\u90E8\u4F7F\u7528\u7684\u63D2\u4EF6\u89E3\u6790\u5668\uFF0C\u6267\u884C\u6240\u6709\u7684\u63D2\u4EF6</li></ol><div class="language-ts"><pre><code><span class="token comment">// create an internal resolver to be used in special scenarios, e.g.</span>
<span class="token comment">// optimizer &amp; handling css @imports</span>
<span class="token keyword">const</span> createResolver<span class="token operator">:</span> ResolvedConfig<span class="token punctuation">[</span><span class="token string">&#39;createResolver&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> aliasContainer<span class="token operator">:</span> PluginContainer <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token keyword">let</span> resolverContainer<span class="token operator">:</span> PluginContainer <span class="token operator">|</span> <span class="token keyword">undefined</span>
  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>id<span class="token punctuation">,</span> importer<span class="token punctuation">,</span> aliasOnly<span class="token punctuation">,</span> ssr<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> container<span class="token operator">:</span> PluginContainer
    <span class="token comment">// \u521B\u5EFA container</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">await</span> container<span class="token punctuation">.</span><span class="token function">resolveId</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> importer<span class="token punctuation">,</span> <span class="token punctuation">{</span> ssr <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">?.</span>id
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="11"><li>\u6267\u884C\u94A9\u5B50\u51FD\u6570 <a href="https://cn.vitejs.dev/guide/api-plugin.html#configresolved" target="_blank" rel="noopener noreferrer">plugin.configResolved</a></li></ol><div class="language-ts"><pre><code><span class="token keyword">await</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>userPlugins<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> p<span class="token punctuation">.</span>configResolved<span class="token operator">?.</span><span class="token punctuation">(</span>resolved<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ol start="12"><li>\u6C47\u603B <code>resolved</code>\uFF0C\u8FD9\u91CC\u6709 <a href="https://cn.vitejs.dev/guide/env-and-mode.html#env-variables" target="_blank" rel="noopener noreferrer">\u7528\u6237env\u4E2D\u989D\u5916\u7684\u6570\u636E</a></li></ol><div class="language-ts"><pre><code><span class="token keyword">const</span> resolved<span class="token operator">:</span> ResolvedConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>config<span class="token punctuation">,</span>
  configFile<span class="token operator">:</span> configFile <span class="token operator">?</span> <span class="token function">normalizePath</span><span class="token punctuation">(</span>configFile<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  configFileDependencies<span class="token punctuation">,</span>
  inlineConfig<span class="token punctuation">,</span>
  root<span class="token operator">:</span> resolvedRoot<span class="token punctuation">,</span>
  base<span class="token operator">:</span> <span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
  resolve<span class="token operator">:</span> resolveOptions<span class="token punctuation">,</span>
  publicDir<span class="token operator">:</span> resolvedPublicDir<span class="token punctuation">,</span>
  cacheDir<span class="token punctuation">,</span>
  command<span class="token punctuation">,</span>
  mode<span class="token punctuation">,</span>
  isProduction<span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> userPlugins<span class="token punctuation">,</span>
  server<span class="token punctuation">,</span>
  build<span class="token operator">:</span> resolvedBuildOptions<span class="token punctuation">,</span>
  preview<span class="token operator">:</span> <span class="token function">resolvePreviewOptions</span><span class="token punctuation">(</span>config<span class="token punctuation">.</span>preview<span class="token punctuation">,</span> server<span class="token punctuation">)</span><span class="token punctuation">,</span>
  env<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>userEnv<span class="token punctuation">,</span>
    <span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
    <span class="token constant">MODE</span><span class="token operator">:</span> mode<span class="token punctuation">,</span>
    <span class="token constant">DEV</span><span class="token operator">:</span> <span class="token operator">!</span>isProduction<span class="token punctuation">,</span>
    <span class="token constant">PROD</span><span class="token operator">:</span> isProduction
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">assetsInclude</span><span class="token punctuation">(</span>file<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token constant">DEFAULT_ASSETS_RE</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">assetsFilter</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  logger<span class="token punctuation">,</span>
  packageCache<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  createResolver<span class="token punctuation">,</span>
  optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>config<span class="token punctuation">.</span>optimizeDeps<span class="token punctuation">,</span>
    esbuildOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      keepNames<span class="token operator">:</span> config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>keepNames<span class="token punctuation">,</span>
      preserveSymlinks<span class="token operator">:</span> config<span class="token punctuation">.</span>resolve<span class="token operator">?.</span>preserveSymlinks<span class="token punctuation">,</span>
      <span class="token operator">...</span>config<span class="token punctuation">.</span>optimizeDeps<span class="token operator">?.</span>esbuildOptions
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,34),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var v=n(t,[["render",c]]);export{f as __pageData,v as default};
