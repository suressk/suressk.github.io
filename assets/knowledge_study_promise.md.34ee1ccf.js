import{_ as n,c as s,o as a,b as t}from"./app.00f0e3a5.js";const y='{"title":"Promise","description":"","frontmatter":{},"relativePath":"knowledge/study/promise.md","lastUpdated":1639569922556}',p={},o=t(`<h1 id="promise" tabindex="-1">Promise <a class="header-anchor" href="#promise" aria-hidden="true">#</a></h1><p>\u5443\uFF0C\u624B\u5199\u5B9E\u73B0 Promise (\u5B8F\u4EFB\u52A1\u65B9\u5F0F\u5B9E\u73B0)\uFF0C\u6B32\u5C1D\u8BD5\u4F7F\u7528 MutationObserver \u6765\u7528\u5FAE\u4EFB\u52A1\u5B9E\u73B0\u4E00\u4E0B (todo)</p><div class="language-js"><pre><code><span class="token keyword">const</span> MyPromise <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;pending&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">RESOLVED</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;resolved&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;rejected&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    PromiveValue <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;PromiseValue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u72B6\u6001\u6570\u636E</span>
    PromiseStatus <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;PromiseStatus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    thenables <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;thenables&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//thenable</span>
    catchables <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;catchbles&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//catchables</span>
    changeStatus <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;changeStatus&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u5F53\u524D\u72B6\u6001</span>
    settleHandle <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;settleHandle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">//\u540E\u7EED\u5904\u7406\u7684\u901A\u7528\u51FD\u6570</span>
    linkPromise <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;linkPromise&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u521B\u5EFA\u4E32\u8054\u7684Promise</span>

  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">MyPromise</span> <span class="token punctuation">{</span>
    <span class="token comment">/**
     * \u6539\u53D8\u5F53\u524DPromise\u7684\u72B6\u6001
     * @param {*} newStatus
     * @param {*} newValue
     * @param {*} queue \u6267\u884C\u7684\u4F5C\u4E1A\u961F\u5217
     */</span>
    <span class="token punctuation">[</span>changeStatus<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">newStatus<span class="token punctuation">,</span> newValue<span class="token punctuation">,</span> queue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>PromiseStatus<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u72B6\u6001\u65E0\u6CD5\u53D8\u66F4</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>PromiseStatus<span class="token punctuation">]</span> <span class="token operator">=</span> newStatus<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>PromiveValue<span class="token punctuation">]</span> <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
      <span class="token comment">//\u6267\u884C\u76F8\u5E94\u961F\u5217\u4E2D\u7684\u51FD\u6570</span>
      queue<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">handler</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">handler</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * @param {*} executor \u672A\u51B3\u9636\u6BB5\uFF08pending\u72B6\u6001\uFF09\u4E0B\u7684\u5904\u7406\u51FD\u6570
     */</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>PromiseStatus<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>PromiveValue<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>thenables<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u540E\u7EED\u5904\u7406\u51FD\u6570\u7684\u6570\u7EC4 -&gt; resolved</span>
      <span class="token keyword">this</span><span class="token punctuation">[</span>catchables<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//\u540E\u7EED\u5904\u7406\u51FD\u6570\u7684\u6570\u7EC4 -&gt; rejected</span>

      <span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">[</span>changeStatus<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token constant">RESOLVED</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>thenables<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token keyword">const</span> <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">[</span>changeStatus<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token constant">REJECTED</span><span class="token punctuation">,</span> reason<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">[</span>catchables<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/**
     * \u5904\u7406 \u540E\u7EED\u5904\u7406\u51FD\u6570
     * @param {*} handler \u540E\u7EED\u5904\u7406\u51FD\u6570
     * @param {*} immediatelyStatus \u9700\u8981\u7ACB\u5373\u6267\u884C\u7684\u72B6\u6001
     * @param {*} queue \u4F5C\u4E1A\u961F\u5217
     */</span>
    <span class="token punctuation">[</span>settleHandle<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">handler<span class="token punctuation">,</span> immediatelyStatus<span class="token punctuation">,</span> queue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> handler <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>PromiseStatus<span class="token punctuation">]</span> <span class="token operator">===</span> immediatelyStatus<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u76F4\u63A5\u8FD0\u884C</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">handler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">[</span>PromiveValue<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">[</span>linkPromise<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token parameter">thenalbe<span class="token punctuation">,</span> catchable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">function</span> <span class="token function">exec</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">handler</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u5F97\u5230\u5F53\u524DPromise\u7684\u5904\u7406\u7ED3\u679C</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>result <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            result<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
              <span class="token punctuation">(</span><span class="token parameter">d</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span>
              <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">[</span>settleHandle<span class="token punctuation">]</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">exec</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> thenalbe<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token constant">RESOLVED</span><span class="token punctuation">,</span>
          <span class="token keyword">this</span><span class="token punctuation">[</span>thenables<span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">[</span>settleHandle<span class="token punctuation">]</span><span class="token punctuation">(</span>
          <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token function">exec</span><span class="token punctuation">(</span>reason<span class="token punctuation">,</span> catchable<span class="token punctuation">,</span> resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token constant">REJECTED</span><span class="token punctuation">,</span>
          <span class="token keyword">this</span><span class="token punctuation">[</span>catchables<span class="token punctuation">]</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">thenable<span class="token punctuation">,</span> catchable</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>linkPromise<span class="token punctuation">]</span><span class="token punctuation">(</span>thenable<span class="token punctuation">,</span> catchable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">catch</span><span class="token punctuation">(</span>catchable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span>linkPromise<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> catchable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">all</span><span class="token punctuation">(</span><span class="token parameter">proms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> results <span class="token operator">=</span> proms<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
            result<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
            isResolved<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
          p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              obj<span class="token punctuation">.</span>result <span class="token operator">=</span> data<span class="token punctuation">;</span>
              obj<span class="token punctuation">.</span>isResolved <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
              <span class="token comment">//\u5224\u65AD\u662F\u5426\u6240\u6709\u7684\u5168\u90E8\u5B8C\u6210</span>
              <span class="token keyword">const</span> unResolved <span class="token operator">=</span> results<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>r<span class="token punctuation">.</span>isResolved<span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>unResolved<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//\u5168\u90E8\u5B8C\u6210</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">r</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">race</span><span class="token punctuation">(</span><span class="token parameter">proms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        proms<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
            <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
              <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token keyword">instanceof</span> <span class="token class-name">MyPromise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> data<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">static</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">MyPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,3),c=[o];function e(u,l,k,i,r,m){return a(),s("div",null,c)}var w=n(p,[["render",e]]);export{y as __pageData,w as default};
