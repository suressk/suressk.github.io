import{_ as n,c as s,o as a,d as t}from"./app.108cc30f.js";const g='{"title":"\u4EE3\u7801\u89C4\u8303","description":"","frontmatter":{"title":"\u4EE3\u7801\u89C4\u8303"},"headers":[{"level":2,"title":"Lint","slug":"lint"},{"level":2,"title":"Commit \u89C4\u8303","slug":"commit-\u89C4\u8303"},{"level":3,"title":"\u65B9\u6848\u4E00\uFF1Ahusky+commitlint","slug":"\u65B9\u6848\u4E00\uFF1Ahusky-commitlint"},{"level":3,"title":"\u65B9\u6848\u4E8C\uFF1A\u81EA\u5B9A\u4E49 verifyCommits \u65B9\u6CD5","slug":"\u65B9\u6848\u4E8C\uFF1A\u81EA\u5B9A\u4E49-verifycommits-\u65B9\u6CD5"}],"relativePath":"knowledge/engineering/lint.md","lastUpdated":1655749926761}',o={},e=t(`<p><code>\u4EE3\u7801\u89C4\u8303</code> \u662F <code>\u524D\u7AEF\u5DE5\u7A0B\u5316</code> \u843D\u5730\u7684\u57FA\u77F3\uFF0C\u7528\u4E8E\u7EA6\u675F <code>\u7F16\u7801\u89C4\u8303</code> \u548C <code>\u7F16\u7801\u98CE\u683C</code>\uFF0C\u5B83\u7684\u597D\u5904\u662F\uFF1A</p><ul><li>\u5F3A\u5236\u89C4\u8303\u4EE3\u7801\u98CE\u683C\u7EDF\u4E00\uFF0C\u4FDD\u6301\u4E00\u6837\u7684\u7F16\u7801\u4E60\u60EF</li><li>\u589E\u52A0\u4EE3\u7801\u7684\u53EF\u7EF4\u62A4\u6027\u548C\u53EF\u63A5\u5165\u6027\uFF0C\u5373\u4F7F\u6709\u65B0\u6210\u5458\u7684\u52A0\u5165\u4E5F\u80FD\u5FEB\u901F\u9002\u5E94\u9879\u76EE\u7684\u67B6\u6784\u4E0E\u9700\u6C42</li><li>\u4FDD\u969C\u9879\u76EE\u7684\u6574\u4F53\u8D28\u91CF\uFF0C\u53EF\u51CF\u5C11\u65E0\u7528\u4EE3\u7801\u3001\u91CD\u590D\u4EE3\u7801\u3001\u9519\u8BEF\u4EE3\u7801\u548C <code>BUG</code> \u4EE3\u7801\u7684\u4EA7\u751F\u51E0\u7387</li></ul><p>\u6211\u4EEC\u901A\u8FC7\u914D\u7F6E\u4EE3\u7801\u6821\u9A8C\u5DE5\u5177\uFF08\u7B80\u79F0 <code>Lint</code>\uFF09\u6765\u68C0\u6D4B\u4EE3\u7801\u4E2D\u7684\u9519\u8BEF\u548C\u6F0F\u6D1E\uFF0C\u518D\u6839\u636E\u5176\u63D0\u4F9B\u7684\u4FEE\u590D\u65B9\u6848\u683C\u5F0F\u5316\u51FA\u6B63\u786E\u4EE3\u7801\u3002\u5B9E\u73B0\u4FDD\u5B58\u4EE3\u7801\u65F6\u4E00\u952E\u6821\u9A8C\uFF0C\u7EDF\u4E00\u9879\u76EE\u7684\u7F16\u7801\u89C4\u8303\u548C\u7F16\u7801\u98CE\u683C</p><h2 id="lint" tabindex="-1">Lint <a class="header-anchor" href="#lint" aria-hidden="true">#</a></h2><p><code>Lint</code> \u5176\u5B9E\u5C31\u662F\u7F16\u8F91\u5668\u4E2D\u8FD0\u884C\u7684\u4E00\u4E2A <code>\u811A\u672C\u8FDB\u7A0B</code>\uFF0C\u5B83\u4F1A\u5C06\u4EE3\u7801\u89E3\u6790\u4E3A <code>AST \u62BD\u8C61\u8BED\u6CD5\u6811</code> \u{1F332}\uFF0C\u518D\u901A\u8FC7\u904D\u5386\u8BED\u6CD5\u6811\u5E76\u901A\u8FC7\u9884\u8BBE\u89C4\u5219\u53BB\u8FDB\u884C\u5224\u65AD\u548C\u6539\u52A8\uFF0C\u518D\u5C06\u66F4\u65B0\u540E\u7684\u8BED\u6CD5\u6811\u8F6C\u6362\u4E3A\uFF08\u5C3D\u91CF\uFF09\u89C4\u8303\u5316\u7684\u4EE3\u7801</p><h2 id="commit-\u89C4\u8303" tabindex="-1">Commit \u89C4\u8303 <a class="header-anchor" href="#commit-\u89C4\u8303" aria-hidden="true">#</a></h2><p>\u6211\u4EEC\u5728\u4F7F\u7528 <code>Git</code> \u6258\u7BA1\u4EE3\u7801\u65F6\uFF0C\u89C4\u8303\u5316\u7684 <code>Commit Message</code> \u53EF\u4EE5\u5E2E\u52A9\u5927\u5BB6\u76F4\u89C2\u6E05\u6670\u5730\u7406\u89E3\u6BCF\u6B21\u4FEE\u6539\u7684\u5185\u5BB9\uFF0C\u4E0D\u4EC5\u80FD\u5E2E\u52A9\u522B\u4EBA <code>Review</code>\uFF0C\u8FD8\u53EF\u4EE5\u6709\u6548\u5730\u8F93\u51FA <code>ChangeLog</code>\u3002\u90A3\u4E48\u8981\u60F3\u524D\u7AEF\u5DE5\u7A0B\u5316\u9879\u76EE\u66F4\u6613\u4E8E\u7EF4\u62A4\uFF0C\u6700\u597D\u6709\u4E00\u5957 <code>Git</code> \u63D0\u4EA4\u8BF4\u660E\u7684 <code>\u89C4\u8303\u5316\u6A21\u677F</code></p><p>\u76EE\u524D\u6700\u53D7\u5F00\u53D1\u4EBA\u5458\u80AF\u5B9A\u7684\u89C4\u8303\u662F\u524D\u7AEF\u6846\u67B6 <code>Angular</code> \u63D0\u51FA\u7684 <a href="https://zj-git-guide.readthedocs.io/zh_CN/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/" target="_blank" rel="noopener noreferrer">Angular\u63D0\u4EA4\u4FE1\u606F\u89C4\u8303 \u{1F517}</a>\uFF0C\u5305\u542B <code>Header</code>\uFF08\u5FC5\u586B\uFF09\u3001<code>Body</code> \u548C <code>Footer</code> \u4E09\u4E2A\u90E8\u5206\u7684\u5185\u5BB9\uFF0C\u63D0\u4EA4\u683C\u5F0F\u5982\u4E0B\uFF1A</p><div class="language-shell"><pre><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token comment"># \u7A7A\u884C</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token comment"># \u7A7A\u884C</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre></div><ol><li><p><code>Header</code> \u4F5C\u4E00\u884C\u4E66\u5199\uFF0C\u5305\u542B <code>type</code>\uFF0C<code>scope</code>\uFF0C<code>subject</code> \u4E09\u4E2A\u5B57\u6BB5\u7684\u5185\u5BB9</p><ul><li><p><code>type</code>\uFF1A\u7528\u4E8E\u8BF4\u660E commit \u63D0\u4EA4\u7C7B\u578B\uFF08\u5FC5\u586B\uFF09</p><ul><li><code>feat</code>\uFF1A\u65B0\u589E\u529F\u80FD</li><li><code>fix</code>\uFF1ABug\u4FEE\u590D</li><li><code>docs</code>\uFF1A\u6587\u6863\u66F4\u65B0</li><li><code>ci</code>\uFF1A\u811A\u672C\u66F4\u65B0\uFF0C\u4FEE\u6539\u4E86 CI \u914D\u7F6E\u6587\u4EF6\u6216\u811A\u672C</li><li><code>pref</code>\uFF1A\u6027\u80FD\u4F18\u5316\uFF0C\u63D0\u9AD8\u6027\u80FD\u7684\u4EE3\u7801\u66F4\u6539</li><li><code>build</code>\uFF1A\u66F4\u65B0\u6784\u5EFA\uFF0C\u6784\u5EFA\u7CFB\u7EDF\u6216\u8005\u5916\u90E8\u4F9D\u8D56\u9879\u8FDB\u884C\u4E86\u4FEE\u6539\u3001\u66F4\u65B0</li><li><code>test</code>\uFF1A\u65B0\u589E\u6D4B\u8BD5\uFF0C\u589E\u52A0\u786E\u5B9E\u7684\u6D4B\u8BD5\u6216\u8005\u77EB\u6B63\u5DF2\u5B58\u5728\u7684\u6D4B\u8BD5</li><li><code>refactor</code>\uFF1A\u4EE3\u7801\u91CD\u6784\uFF0C\u975E\u65B0\u589E\u529F\u80FD\u4E5F\u975E\u4FEE\u590D\u7F3A\u9677</li><li><code>chore</code>\uFF1A\u4E8B\u52A1\u53D8\u52A8\uFF0C\u6539\u52A8\u5176\u4ED6\u4E0D\u5F71\u54CD\u4EE3\u7801\u7684\u4E8B\u52A1</li><li><code>revert</code>\uFF1A\u4EE3\u7801\u56DE\u6EDA\uFF0C\u64A4\u9500\u67D0\u6B21\u4EE3\u7801\u63D0\u4EA4</li><li><code>merge</code>\uFF1A\u5206\u652F\u5408\u5E76\uFF0C\u5408\u5E76\u5206\u652F\u4EE3\u7801\u5230\u5176\u4ED6\u5206\u652F</li><li><code>style</code>\uFF1A\u683C\u5F0F\u53D8\u52A8\uFF0C\u4E0D\u5F71\u54CD\u4EE3\u7801\u903B\u8F91</li><li><code>release</code>\uFF1A\u7248\u672C\u53D1\u5E03</li></ul></li><li><p><code>scope</code>\uFF1A\u7528\u4E8E\u8BF4\u660E commit \u7684\u5F71\u54CD\u8303\u56F4\uFF08\u9009\u586B\uFF09\uFF08\u6BD4\u5982\u6309\u4E0B\u9762\u8FD9\u4E9B\u5212\u5206\u65B9\u6848\u586B\u5199\uFF09</p><ul><li>\u6309\u529F\u80FD\u5212\u5206\uFF08\u5982\uFF1A\u6570\u636E\u5C42 - <code>Data</code>\u3001\u89C6\u56FE\u5C42 - <code>View</code>\u548C\u63A7\u5236\u5C42 - <code>Control</code>\uFF09</li><li>\u6309\u4EA4\u4E92\u5C42\u5212\u5206\uFF08\u5982\uFF1A\u7EC4\u4EF6 - <code>Component</code>\u3001\u5E03\u5C40 - <code>Layout</code>\u3001\u6D41\u7A0B - <code>Flow</code>\u3001\u89C6\u56FE - <code>View</code>\u548C\u9875\u9762 - <code>Page</code>\uFF09</li><li>\u6309\u6539\u52A8\u6587\u4EF6\u5212\u5206\uFF08\u5982\uFF1A\u67D0\u4E2A\u6587\u4EF6 - <code>Button.tsx</code>\uFF0C\u5168\u90E8\u6539\u52A8 -<code>*</code>\uFF09</li></ul></li><li><p><code>subject</code>\uFF1A\u7528\u4E8E\u8BF4\u660E commit \u7684\u7EC6\u8282\u63CF\u8FF0\uFF08\u9009\u586B\uFF09\u3002\u4EE5\u7CBE\u70BC\u7B80\u6D01\u7684\u6587\u5B57\uFF08\u4E2D\u6587\u8FD8\u662F\u82F1\u6587\u5C31\u770B\u5404\u81EA\u89C4\u5B9A\u4E86\uFF0C\u4E00\u822C\u63A8\u8350\u4F7F\u7528\u82F1\u6587\uFF09\u8BF4\u660E\u63D0\u4EA4\u7684\u6539\u52A8\uFF0C\u6BD4\u5982\u53EF\u4EE5\u9075\u5FAA\u8FD9\u4E9B\u89C4\u5219\uFF1A</p><ul><li>\u4EE5\u52A8\u8BCD\u5F00\u5934\uFF08\u5982\uFF1A<code>update</code>\uFF0C<code>\u66F4\u65B0</code>\uFF09</li><li>\u4F7F\u7528\u7B2C\u4E00\u4EBA\u79F0\u73B0\u5728\u65F6</li><li>\u9996\u5B57\u6BCD\u65E0\u9700\u5927\u5199\uFF0C\u91CD\u70B9\u533A\u5206\u7684\uFF08\u5982\u67D0\u7EC4\u4EF6\uFF09\u9996\u5B57\u6BCD\u65E0\u9700\u5927\u5199</li><li>\u4E0D\u4EE5\u53E5\u53F7\uFF08<code>.</code> / <code>\u3002</code>\uFF09\u7ED3\u5C3E</li></ul></li></ul><p><code>commit</code> \u4FE1\u606F\u793A\u4F8B\uFF1A</p><div class="language-git"><pre><code>feat(Component): add Layout component
feat(View): change the color of the button
feat(Button.tsx): add Button component and change the default size of it
</code></pre></div></li><li><p><code>Body</code> \u90E8\u5206\u53EF\u4E66\u5199\u591A\u884C\uFF0C\u5BF9 <code>subject</code> \u505A\u66F4\u8BE6\u5C3D\u7684\u63CF\u8FF0\uFF0C\u5185\u5BB9\u5E94\u5305\u62EC <code>\u6539\u52A8\u52A8\u673A</code> \u4E0E <code>\u6539\u52A8\u524D\u540E\u5BF9\u6BD4</code></p></li><li><p><code>Footer</code> \u90E8\u5206\u53EA\u9002\u7528\u4E24\u79CD\u60C5\u51B5\uFF0C\u5206\u522B\u662F <code>\u4E0D\u517C\u5BB9\u53D8\u52A8</code> \u4E0E <code>\u95EE\u9898\u5173\u95ED</code></p><ul><li><strong>\u4E0D\u517C\u5BB9\u53D8\u52A8</strong>\uFF1A\u5F53\u524D\u4EE3\u7801\u4E0E\u4E0A\u4E00\u7248\u672C\u4E0D\u517C\u5BB9\uFF0C\u5219\u4EE5 <code>BREAKING CHANGE</code> \u5F00\u5934\uFF0C\u5173\u8054\u53D8\u52A8\u63CF\u8FF0\u3001\u53D8\u52A8\u7406\u7531\u548C\u8FC1\u79FB\u65B9\u6CD5</li><li><strong>\u95EE\u9898\u5173\u95ED</strong>\uFF1A\u5F53\u524D\u4EE3\u7801\u5DF2\u4FEE\u590D\u67D0\u4E9B <code>Issue</code>\uFF0C\u5219\u4EE5 <code>Closes</code> \u5F00\u5934\uFF0C\u5173\u8054\u76EE\u6807 <code>Issue</code></li></ul></li></ol><h3 id="\u65B9\u6848\u4E00\uFF1Ahusky-commitlint" tabindex="-1">\u65B9\u6848\u4E00\uFF1A<code>husky</code>+<code>commitlint</code> <a class="header-anchor" href="#\u65B9\u6848\u4E00\uFF1Ahusky-commitlint" aria-hidden="true">#</a></h3><ul><li><p>\u5B89\u88C5</p><div class="language-shell"><pre><code><span class="token function">pnpm</span> i husky @commitlint/cli @commitlint/config-conventional -D
</code></pre></div></li><li><p>\u521D\u59CB\u5316 <code>husky</code>\uFF0C\u521B\u5EFA <code>.husky</code> \u6587\u4EF6\u5939</p><div class="language-shell"><pre><code>npx husky <span class="token function">install</span>
<span class="token comment"># \u5B89\u88C5 git hooks\uFF0C\u521B\u5EFA .husky \u76EE\u5F55</span>
<span class="token comment"># \u7ED3\u679C\uFF1Ahusky - Git hooks installed</span>

<span class="token comment"># \u6267\u884C</span>
npx husky-init

<span class="token comment"># \u5B83\u4F1A\u5728 package.json \u6587\u4EF6\u7684 scripts \u5B57\u6BB5\u4E2D</span>
<span class="token comment"># \u521B\u5EFA &quot;prepare&quot;: &quot;husky install&quot; \u547D\u4EE4</span>
<span class="token comment"># \u540C\u65F6\u5728 .husky \u76EE\u5F55\u4E0B\u521B\u5EFA pre-commit \u6587\u4EF6</span>
<span class="token comment"># \u7ED3\u679C\uFF1Ahusky - created .husky/pre-commit</span>
</code></pre></div></li><li><p>\u5728 <code>.husky</code> \u76EE\u5F55\u4E0B\u6DFB\u52A0 <code>commit-msg</code> hook</p><div class="language-shell"><pre><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no -- commitlint --edit &quot;$1&quot;&#39;</span>
</code></pre></div><div class="language-shell"><pre><code><span class="token comment"># \u7ED3\u679C\uFF1Ahusky - created .husky/commit-msg</span>
<span class="token comment"># .husky/commit-msg \u6587\u4EF6\u5185\u5BB9\uFF1A</span>

<span class="token comment">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx --no -- commitlint --edit <span class="token string">&quot;&quot;</span>
</code></pre></div></li><li><p>\u5728 <code>package.json</code> \u914D\u7F6E <code>hooks</code></p><div class="language-json"><pre><code><span class="token property">&quot;husky&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;hooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">/* commit \u4FE1\u606F\u63D0\u4EA4\u524D\u4F1A\u6267\u884C\u6B64 script\uFF0C\u82E5\u672A\u914D\u7F6E\u6B64\u547D\u4EE4\uFF0C\u5C06\u4F1A\u8DF3\u8FC7 */</span>
    <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run test&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commitlint -e $HUSKY_GIT_PARAMS&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u521B\u5EFA <code>commitlint.config.js</code> \u6587\u4EF6\u5939</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><p>\u81F3\u6B64\uFF0C\u6211\u4EEC\u57FA\u672C\u914D\u597D\u4E86 <code>git commit</code> \u547D\u4EE4\u4F1A\u6267\u884C\u9ED8\u8BA4\u7684\u68C0\u6D4B\u65B9\u6848\u3002\u5F53\u7136\uFF0C\u8FD9\u91CC\u6211\u5E76\u672A\u6DF1\u5165\u6D4B\u8BD5\u66F4\u591A\uFF1A</p><div class="language-shell"><pre><code><span class="token function">git</span> commit -m <span class="token string">&quot;t&quot;</span>

<span class="token operator">&gt;</span> xxx@0.0.0 <span class="token builtin class-name">test</span>
<span class="token operator">&gt;</span> node index.js <span class="token comment"># \u914D\u7F6E\u7684 test \u547D\u4EE4</span>

test<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span> <span class="token comment"># index.js \u5C31\u4E00\u53E5: console.log(&#39;test......&#39;)</span>
\u29D7   input: t
\u2716   subject may not be empty <span class="token punctuation">[</span>subject-empty<span class="token punctuation">]</span>
\u2716   <span class="token builtin class-name">type</span> may not be empty <span class="token punctuation">[</span>type-empty<span class="token punctuation">]</span>

\u2716   found <span class="token number">2</span> problems, <span class="token number">0</span> warnings
\u24D8   Get help: https://github.com/conventional-changelog/commitlint/<span class="token comment">#what-is-commitlint</span>

husky - commit-msg hook exited with code <span class="token number">1</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u65B9\u6848\u4E8C\uFF1A\u81EA\u5B9A\u4E49-verifycommits-\u65B9\u6CD5" tabindex="-1">\u65B9\u6848\u4E8C\uFF1A\u81EA\u5B9A\u4E49 verifyCommits \u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6848\u4E8C\uFF1A\u81EA\u5B9A\u4E49-verifycommits-\u65B9\u6CD5" aria-hidden="true">#</a></h3><p>\u7ED3\u5408\u4E0A\u9762\u7684\u4EE3\u7801\u89C4\u8303 <code>Lint</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5728 <code>pre-commit</code> hook \u4E2D\u8FDB\u884C\u4EE3\u7801\u683C\u5F0F\u5316\uFF0C<code>commit-msg</code> hook \u6211\u4EEC\u53EF\u4EE5\u6267\u884C\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49\u7684 js \u6587\u4EF6\u53BB\u6821\u9A8C <code>commit</code> \u4FE1\u606F\u662F\u5426\u7B26\u5408\u6211\u4EEC\u5B9A\u4E49\u7684 <code>commit \u89C4\u8303</code></p><ul><li><p>\u5B89\u88C5</p><div class="language-shell"><pre><code><span class="token function">pnpm</span> i husky lint-staged chalk eslint prettier @typescript-eslint/parser -D
</code></pre></div><ul><li><code>yorkie</code>\uFF1A<code>EvanYou</code> fork <code>husky</code> \u7684\u4E00\u4E2A <code>npm</code> \u5305\uFF08\u53EF\u66FF\u6362 <code>husky</code>\uFF09</li><li><code>lint-staged</code>\uFF1A\u5B83\u4EC5\u662F\u4E00\u4E2A\u6587\u4EF6\u8FC7\u6EE4\u5668\uFF0C\u8FD9\u91CC\u7684 staged \u662F\u4E0E Git \u4E2D\u7684\u6982\u5FF5\u4E00\u81F4\u7684\uFF0C\u8FC7\u6EE4\u51FA <code>Git</code> \u4EE3\u7801\u6682\u5B58\u533A\u7684\u4EE3\u7801\uFF08<code>committed</code> \u7684\u4EE3\u7801\uFF09</li><li><code>chalk</code>\uFF1A\u4E00\u4E2A\u591A\u5F69\u7684 <code>log</code> \u8BB0\u5F55\u5DE5\u5177</li><li><code>eslint</code>\uFF0C<code>prettier</code>\uFF1A\u4E0A\u9762\u7684 <code>Lint</code> \u5DE5\u5177</li><li><code>@typescript-eslint/parser</code>\uFF1A\u7528\u4E8E\u89E3\u6790\u683C\u5F0F\u5316 <code>typescript</code> \u4EE3\u7801</li></ul></li><li><p>\u914D\u7F6E <code>hooks</code> \uFF08<code>package.json</code>\uFF09</p><div class="language-json"><pre><code><span class="token property">&quot;gitHooks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u89E6\u53D1\u683C\u5F0F\u5316 */</span>
  <span class="token property">&quot;pre-commit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lint-staged&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">/* \u6211\u4EEC\u81EA\u5B9A\u4E49\u7684\u6821\u9A8C commit \u4FE1\u606F\u7684 js \u6587\u4EF6 */</span>
  <span class="token property">&quot;commit-msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node scripts/verifyCommit.js&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;lint-staged&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;*.js&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;prettier --write&quot;</span> <span class="token comment">/* \u7ED3\u5408 .prettierrc \u6587\u4EF6\u58F0\u660E\u683C\u5F0F */</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;*.ts?(x)&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token comment">/* \u7ED3\u5408 .eslintrc.js \u6587\u4EF6\u58F0\u660E\u683C\u5F0F */</span>
    <span class="token string">&quot;prettier --parser=typescript --write&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><strong><code>verifyCommits.js</code></strong></p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span> bgRed<span class="token punctuation">,</span> red<span class="token punctuation">,</span> green <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> msgPath <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">GIT_PARAMS</span>
<span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span>msgPath<span class="token punctuation">,</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* commit \u4FE1\u606F\u89C4\u5219\uFF0C */</span>
<span class="token keyword">const</span> commitRE <span class="token operator">=</span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release)(\\(.+\\))?: .{1,50}</span><span class="token regex-delimiter">/</span></span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>commitRE<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span>bgRed<span class="token punctuation">.</span><span class="token function">white</span><span class="token punctuation">(</span><span class="token string">&#39; ERROR &#39;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">invalid commit message format.</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
      chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  Proper commit message format is required for automated changelog generation. Examples:\\n\\n</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">feat(compiler): add &#39;comments&#39; option</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span>
        <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">fix(v-model): handle events on blur (close #28)</span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n\\n</span><span class="token template-punctuation string">\`</span></span> <span class="token operator">+</span>
      chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">  See .github/commit-convention.md for more details.\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul>`,17),p=[e];function c(l,i,u,r,d,k){return a(),s("div",null,p)}var h=n(o,[["render",c]]);export{g as __pageData,h as default};
