import{_ as c,r as o,o as i,c as l,a as s,b as a,w as u,d as n,e}from"./app.9e9e82c9.js";const r={},d=s("h1",{id:"optionals",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#optionals","aria-hidden":"true"},"#"),n(" Optionals")],-1),k={class:"custom-container warning"},m=s("p",{class:"custom-container-title"},"WARNING",-1),v=n("This tutorial assumes that you are familiar with lambda expressions. Take a look at the "),h=n("lambda introduction"),g=n(" first, if you are not!"),f=e(`<h2 id="motivation" tabindex="-1"><a class="header-anchor" href="#motivation" aria-hidden="true">#</a> \u{1F4AA} Motivation</h2><p>The Optional class is widely used in Javacord. Basically, every method that might return a <code>null</code> value will return an Optional in Javacord instead. Optionals help you to avoid <code>NullPointerExceptions</code> and make it very clear if a method may not have a result. Here&#39;s a small example:</p><h3 id="the-old-way-of-doing-it" tabindex="-1"><a class="header-anchor" href="#the-old-way-of-doing-it" aria-hidden="true">#</a> The old way of doing it</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">User</span> user <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  user<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="the-new-way-of-doing-it" tabindex="-1"><a class="header-anchor" href="#the-new-way-of-doing-it" aria-hidden="true">#</a> The new way of doing it</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>user <span class="token operator">-&gt;</span> 
  user<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can imagine an <code>Optional</code> like a box \u{1F4E6} that may or may not contain a value. Before accessing this value, you have to &quot;unpack&quot; this box first.</p><h2 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> \u{1F4D6} Methods</h2>`,8),b=n("The Optional class has many useful methods which can all be found in the "),y={href:"https://docs.oracle.com/javase/8/docs/api/java/util/Optional.html",target:"_blank",rel:"noopener noreferrer"},_=n("JavaDocs"),x=n(". This tutorial gives a short introduction to the most common ones."),j=e(`<h3 id="get" tabindex="-1"><a class="header-anchor" href="#get" aria-hidden="true">#</a> get()</h3><p>The <code>get</code> method returns the value of the Optional or throws a <code>NoSuchElementException</code> if it does not contain a value.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">TextChannel</span> channel <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getTextChannelById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>You should never use this method blindly but only if you are <strong>100%</strong> sure the optional contains a value.</p><p>Every time you use this method carelessly, a kitten dies \u{1F640}! True story.</p></div><h3 id="ispresent" tabindex="-1"><a class="header-anchor" href="#ispresent" aria-hidden="true">#</a> isPresent()</h3><p>The <code>isPresent</code> methods checks, if the Optional contains a value.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TextChannel</span><span class="token punctuation">&gt;</span></span> channel <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getTextChannelById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>channel<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// A text channel with the id 123 exists. It&#39;s safe to call #get() now</span>
  channel<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orelse" tabindex="-1"><a class="header-anchor" href="#orelse" aria-hidden="true">#</a> orElse(...)</h3><p>The <code>orElse</code> methods returns the value of the Optional if it is present. Otherwise, it returns the given default value.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// The user may not have a nickname on the given server. </span>
<span class="token comment">// In this case, we use the user&#39;s &quot;regular&quot; name.</span>
<span class="token class-name">String</span> displayName <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The example above is (mostly) equivalent to the example below but much more concise.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> displayName <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> nickname <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getNickname</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>nickname<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  displayName <span class="token operator">=</span> nickname<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  displayName <span class="token operator">=</span> user<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>In this case you can just use <code>user.getDisplayName(server)</code> instead.</p></div><h3 id="ifpresent" tabindex="-1"><a class="header-anchor" href="#ifpresent" aria-hidden="true">#</a> ifPresent(...)</h3>`,14),w=n("The "),O=s("code",null,"ifPresent",-1),q=n(" method is very similar to an "),T=s("code",null,"if (value != null) { ... }",-1),N=n(" check. It takes a "),U={href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Consumer.html",target:"_blank",rel:"noopener noreferrer"},I=n("Consumer"),B=n(" as it's argument. This consumer is called if the Optional contains a value. Together with lambda expressions this can be a very handy method."),C=e(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">getTextChannelById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ifPresent</span><span class="token punctuation">(</span>channel <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  channel<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The example above is (mostly) equivalent to the example below but more concise.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">TextChannel</span><span class="token punctuation">&gt;</span></span> channel <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getTextChannelById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>channel<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  channel<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Hi!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filter" tabindex="-1"><a class="header-anchor" href="#filter" aria-hidden="true">#</a> filter(...)</h3><p>The <code>filter</code> method filters the Optional for a given criteria.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> botUser <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">isBot</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The example above is equivalent to the example below but more concise.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> user <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> botUser<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span><span class="token function">isPresent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> user<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isBot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  botUser <span class="token operator">=</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  botUser <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map(...)</h3><p>The <code>map</code> method &quot;converts&quot; the type of an Optional. This is useful, if the type of an Optional does not contain the final value you need.</p><p>The following example gets the name of the bots current activity (the &quot;Playing xyz&quot; status) or &quot;None&quot; if the bot has no current activity.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> activityName <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getYourself</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Activity</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For better understanding, here&#39;s the exact same code but with the types as comments:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> activityName <span class="token operator">=</span>  api<span class="token punctuation">.</span><span class="token function">getYourself</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// User</span>
        <span class="token punctuation">.</span><span class="token function">getActivity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;Activity&gt;</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Activity</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;String&gt;</span>
        <span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="flatmap" tabindex="-1"><a class="header-anchor" href="#flatmap" aria-hidden="true">#</a> flatMap(...)</h3><p>The <code>flatMap</code> method if very similar to the <code>map</code> methods. It is used to map values that itself are Optionals to prevent Optional nesting (a &quot;box in a box&quot;).</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> activityName <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;User&gt;</span>
        <span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getActivity</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;Activity&gt;</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Activity</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;String&gt;</span>
        <span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Without <code>flatMap</code>, the code would look like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> activityName <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getCachedUserById</span><span class="token punctuation">(</span><span class="token number">123L</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;User&gt;</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">User</span><span class="token operator">::</span><span class="token function">getActivity</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;Optional&lt;Activity&gt;&gt;</span>
        <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Optional</span><span class="token operator">::</span><span class="token function">isPresent</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;Optional&lt;Activity&gt;&gt;</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Optional</span><span class="token operator">::</span><span class="token function">get</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;Activity&gt;</span>
        <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Activity</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span> <span class="token comment">// Optional&lt;String&gt;</span>
        <span class="token punctuation">.</span><span class="token function">orElse</span><span class="token punctuation">(</span><span class="token string">&quot;None&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// String</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="further-read" tabindex="-1"><a class="header-anchor" href="#further-read" aria-hidden="true">#</a> \u{1F4DA} Further Read</h2>`,20),A=n("This tutorial only focuses on the absolute basics. For an in-depth introduction to Optionals, you can take a look at "),E={href:"https://www.oracle.com/technical-resources/articles/java/java8-optional.html",target:"_blank",rel:"noopener noreferrer"},S=n("Oracle's article about optionals"),L=n(".");function P(M,H){const p=o("RouterLink"),t=o("ExternalLinkIcon");return i(),l("div",null,[d,s("div",k,[m,s("p",null,[v,a(p,{to:"/wiki/essential-knowledge/lambdas/"},{default:u(()=>[h]),_:1}),g])]),f,s("p",null,[b,s("a",y,[_,a(t)]),x]),j,s("p",null,[w,O,q,T,N,s("a",U,[I,a(t)]),B]),C,s("p",null,[A,s("a",E,[S,a(t)]),L])])}var V=c(r,[["render",P],["__file","optionals.html.vue"]]);export{V as default};
