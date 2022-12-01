import{_ as c,r as t,o as i,c as u,a as n,b as a,w as l,e as o,d as s}from"./app.9e9e82c9.js";const d={},r=o('<h1 id="entity-cache" tabindex="-1"><a class="header-anchor" href="#entity-cache" aria-hidden="true">#</a> Entity Cache</h1><p>Javacord keeps an internal cache for entities (e.g. Servers, Channels, Users, ...). It is important to know how the cache behaves to properly use it.</p><h2 id="what-is-in-the-cache" tabindex="-1"><a class="header-anchor" href="#what-is-in-the-cache" aria-hidden="true">#</a> \u{1F52E} What is in the cache?</h2><p>Nearly every entity known by the bot is guaranteed to be in the cache. There are a few exceptions though:</p><h4 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> Users</h4>',5),k=s("Users are only cached when you have the "),h=n("code",null,"GUILD_MEMBERS",-1),m=s(" intent enabled. See "),v=s("Gateway Intents"),g=s(" for more information."),b=n("h4",{id:"messages",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#messages","aria-hidden":"true"},"#"),s(" Messages")],-1),f=s("Not every single message is in the cache, which means you can encounter messages which exist but are not in the cache. This can happen for most message events, e.g. the "),_={href:"https://ci.javacord.org/javadoc/org/javacord/api/event/message/reaction/ReactionAddEvent.html",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"ReactionAddEvent",-1),y=s(". You can, however, interact with these messages without having them in the cache. Every message event has methods like "),j=n("code",null,"event.deleteMessage()",-1),q=s(", "),E=n("code",null,'event.editMessage("New Content")',-1),x=s(". If you need the message (e.g. to get its content), you can request it using "),M=n("code",null,"event.requestMessage()",-1),S=s("."),I=s("Additionally, you can use the static methods in the "),B={href:"https://ci.javacord.org/javadoc/org/javacord/api/entity/message/Message.html",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"Message",-1),L=s(" class which only require the channel and message id, e.g. "),R=n("code",null,'Message.edit(api, channelId, messageId, "New content");',-1),N=s(". This is very useful if you want to store them in a database."),W=o(`<h4 id="webhooks-and-invites" tabindex="-1"><a class="header-anchor" href="#webhooks-and-invites" aria-hidden="true">#</a> Webhooks and Invites</h4><p>Webhooks and Invites are not kept in the cache at all and won&#39;t receive any updates.</p><h4 id="embeds" tabindex="-1"><a class="header-anchor" href="#embeds" aria-hidden="true">#</a> Embeds</h4><p>Embeds from <code>message.getEmbed()</code> won&#39;t receive updates. If a message&#39;s embed gets edited, <code>getEmbed()</code> will return a completely new embed object.</p><h2 id="when-are-cached-entities-updated" tabindex="-1"><a class="header-anchor" href="#when-are-cached-entities-updated" aria-hidden="true">#</a> \u2753 When are cached entities updated?</h2><p>Javacord&#39;s cache exclusively uses websocket events to keep the cache up to date. This means that the content of your objects might be outdated, even though you modified it yourself:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Messages</span> message <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prints the old content, e.g. &quot;old content&quot;</span>
message<span class="token punctuation">.</span><span class="token function">edit</span><span class="token punctuation">(</span><span class="token string">&quot;new content&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Edits the message and waits for success</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Still prints &quot;old content&quot;</span>
<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>message<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Most likely prints &quot;new content&quot; now</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-long-are-cached-entities-valid" tabindex="-1"><a class="header-anchor" href="#how-long-are-cached-entities-valid" aria-hidden="true">#</a> \u231A How long are cached entities valid?</h2><p>Even though entities are usually kept in the cache for a very long time, you should not keep references to these objects for a longer period of time, but store the id / use event methods:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Bad</span>
<span class="token class-name">Message</span> message <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">addReactionAddListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getEmoji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsEmoji</span><span class="token punctuation">(</span><span class="token string">&quot;\u{1F44E}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    message<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Prevents &quot;message&quot; from being garbage collected</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Good</span>
<span class="token class-name">Message</span> message <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
message<span class="token punctuation">.</span><span class="token function">addReactionAddListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getEmoji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsEmoji</span><span class="token punctuation">(</span><span class="token string">&quot;\u{1F44E}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">deleteMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Does not use the message object</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Bad</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> usersWithBadMood <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
api<span class="token punctuation">.</span><span class="token function">addReactionAddListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getEmoji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsEmoji</span><span class="token punctuation">(</span><span class="token string">&quot;\u{1F626}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    usersWithBadMood<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Good</span>
<span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> usersWithBadMood <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
api<span class="token punctuation">.</span><span class="token function">addReactionAddListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getEmoji</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsEmoji</span><span class="token punctuation">(</span><span class="token string">&quot;\u{1F626}&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    usersWithBadMood<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Some examples of when cached entities are invalidated:</p><ul><li>The bot lost its connection to Discord and had to reconnect (not resume)</li><li>You weren&#39;t able to receive updates for an entity, e.g. for <code>Channel</code>, because you left and rejoined a server</li></ul>`,13);function A(T,U){const p=t("RouterLink"),e=t("ExternalLinkIcon");return i(),u("div",null,[r,n("p",null,[k,h,m,a(p,{to:"/wiki/basic-tutorials/gateway-intents/"},{default:l(()=>[v]),_:1}),g]),b,n("p",null,[f,n("a",_,[w,a(e)]),y,j,q,E,x,M,S]),n("p",null,[I,n("a",B,[C,a(e)]),L,R,N]),W])}var V=c(d,[["render",A],["__file","entity-cache.html.vue"]]);export{V as default};
