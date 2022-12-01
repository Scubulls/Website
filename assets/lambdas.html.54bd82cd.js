import{_ as i,r as o,o as p,c as l,a,b as s,w as r,d as n,e as t}from"./app.9e9e82c9.js";const u={},d=a("h1",{id:"lambdas",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#lambdas","aria-hidden":"true"},"#"),n(" Lambdas")],-1),v=n("Lambdas are used to implement "),k={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/FunctionalInterface.html",target:"_blank",rel:"noopener noreferrer"},h=n("functional interfaces"),m=n(". Simply said, functional interfaces are interfaces with a single method definition. All listeners in Javacord are functional interfaces and look like this internally (simplified):"),_=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MessageCreateListener</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">onMessageCreate</span><span class="token punctuation">(</span><span class="token class-name">MessageCreateEvent</span> event<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=n("Before Java 8, you would have implemented this kind of listener as an "),f={href:"https://docs.oracle.com/javase/tutorial/java/javaOO/anonymousclasses.html",target:"_blank",rel:"noopener noreferrer"},g=n("anonymous class"),w=n(", which would look like this:"),j=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">addMessageCreateListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MessageCreateListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onMessageCreate</span><span class="token punctuation">(</span><span class="token class-name">MessageCreateEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Do stuff</span>
        event<span class="token punctuation">.</span><span class="token function">pinMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Java 8, this can be replaced with a lambda expression, which does exactly the same thing, but in a more readable fashion. The method parameter (in this case <code>event</code>) is written in front of the <code>-&gt;</code> arrow, and the method body is written after it.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">addMessageCreateListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// Do stuff</span>
    event<span class="token punctuation">.</span><span class="token function">pinMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the method has more than one parameter, it would look like this:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">(</span>param1<span class="token punctuation">,</span> param2<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>There&#39;s even a shorter version: If you are only executing one statement, you can get rid of the <code>{ }</code> brackets as well:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">addMessageCreateListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> event<span class="token punctuation">.</span><span class="token function">pinMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6),x=n('However, the above method can be shortened even more, by replacing the lambda expression with a so called "'),y={href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methodreferences.html",target:"_blank",rel:"noopener noreferrer"},M=n("method reference"),C=n('".'),L=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>api<span class="token punctuation">.</span><span class="token function">addMessageCreateListener</span><span class="token punctuation">(</span><span class="token class-name">MessageEvent</span><span class="token operator">::</span><span class="token function">pinMessage</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,1),I=n("There are also plenty classes in Java 8, that make use of lambda expressions. One example would be the Optional class, which is explained "),O=n("here"),E=n("."),T=a("h2",{id:"further-read",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#further-read","aria-hidden":"true"},"#"),n(" \u{1F4DA} Further Read")],-1),B=n("This tutorial only focuses on the absolute basics. For an in-depth introduction to lambda expressions, you can take a look at "),F={href:"https://www.oracle.com/technical-resources/articles/java/architect-lambdas-part1.html",target:"_blank",rel:"noopener noreferrer"},J=n("Oracle's article about lambda expressions"),N=n(".");function V(R,D){const e=o("ExternalLinkIcon"),c=o("RouterLink");return p(),l("div",null,[d,a("p",null,[v,a("a",k,[h,s(e)]),m]),_,a("p",null,[b,a("a",f,[g,s(e)]),w]),j,a("p",null,[x,a("a",y,[M,s(e)]),C]),L,a("p",null,[I,s(c,{to:"/wiki/essential-knowledge/optionals/"},{default:r(()=>[O]),_:1}),E]),T,a("p",null,[B,a("a",F,[J,s(e)]),N])])}var A=i(u,[["render",V],["__file","lambdas.html.vue"]]);export{A as default};
