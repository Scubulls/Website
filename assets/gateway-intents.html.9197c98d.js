import{_ as c,r as a,o as p,c as l,a as n,b as t,w as d,e as o,d as s}from"./app.9e9e82c9.js";var r="/assets/enable_privileged_intents.8e8e9669.png";const u={},h=o('<h1 id="gateway-intents" tabindex="-1"><a class="header-anchor" href="#gateway-intents" aria-hidden="true">#</a> Gateway Intents</h1><p>Discord allows you to &quot;subscribe&quot; to specific groups of events. These &quot;subscriptions&quot; are called intent. Disabling intents that are not required for your bot can significantly increase your bot&#39;s performance.</p><h2 id="list-of-intents" tabindex="-1"><a class="header-anchor" href="#list-of-intents" aria-hidden="true">#</a> \u{1F4CB} List of Intents</h2><p>Below you can find a table with all intents supported by Discord.</p><table><thead><tr><th>Intent</th><th>Safe to Disable</th><th>Privileged</th></tr></thead><tbody><tr><td><code>GUILDS</code></td><td>\u274C</td><td>\u274C</td></tr><tr><td><code>GUILD_MEMBERS</code></td><td>\u2714\uFE0F</td><td>\u2714\uFE0F</td></tr><tr><td><code>GUILD_BANS</code></td><td>\u26A0\uFE0F*</td><td>\u274C</td></tr><tr><td><code>GUILD_EMOJIS</code></td><td>\u26A0\uFE0F*</td><td>\u274C</td></tr><tr><td><code>GUILD_INTEGRATIONS</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>GUILD_WEBHOOKS</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>GUILD_INVITES</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>GUILD_VOICE_STATES</code></td><td>\u26A0\uFE0F*</td><td>\u274C</td></tr><tr><td><code>GUILD_PRESENCES</code></td><td>\u2714\uFE0F</td><td>\u2714\uFE0F</td></tr><tr><td><code>GUILD_MESSAGES</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>GUILD_MESSAGE_REACTIONS</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>GUILD_MESSAGE_TYPING</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>DIRECT_MESSAGES</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>DIRECT_MESSAGE_REACTIONS</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>DIRECT_MESSAGE_TYPING</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>MESSAGE_CONTENT</code></td><td>\u2714\uFE0F</td><td>\u2714\uFE0F</td></tr><tr><td><code>AUTO_MODERATION_CONFIGURATION</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr><tr><td><code>AUTO_MODERATION_EXECUTION</code></td><td>\u2714\uFE0F</td><td>\u274C</td></tr></tbody></table><p>* Will most likely work, but needs further testing</p>',6),k={class:"custom-container tip"},v=n("p",{class:"custom-container-title"},"Good to know!",-1),m=n("em",null,"Guild",-1),b=s(" is a synonym for servers, commonly used in Discord's API. See "),g=s("Glossary"),_=s("."),f=n("h2",{id:"what-happens-when-i-disable-some-intents",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#what-happens-when-i-disable-some-intents","aria-hidden":"true"},"#"),s(" \u{1F4A1} What Happens When I Disable Some Intents?")],-1),E=n("p",null,"When you disable some of the listed intents, Javacord will not fire events that belong to the intents and will not update these specific parts of the cache.",-1),I=n("p",null,[s("At the moment, we don't have a list which events are affected by which intents (but it will come soon\u2122\uFE0F). However, most intents should be self-explanatory. E.g. when you disable the "),n("code",null,"DIRECT_MESSAGES"),s(" intent, your bot will not receive any private messages.")],-1),S=n("h2",{id:"privileged-intents",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#privileged-intents","aria-hidden":"true"},"#"),s(" \u{1F451} Privileged Intents")],-1),y=s('Some intents are defined as "privileged" due to the sensitive nature of the data. To use these intents, you have to go to your bot in the '),w={href:"https://discord.com/developers/applications",target:"_blank",rel:"noopener noreferrer"},T=s("Developer Portal"),D=s(" (where you created bot) and manually enable the intents:"),A=n("p",null,[n("img",{src:r,alt:""})],-1),x=n("p",null,"There are some additionally restrictions for bots that are in over 100 servers:",-1),G=n("ul",null,[n("li",null,"Your bot must be verified"),n("li",null,"Your bot must be whitelisted to use this intents")],-1),N=s("Take a look at the official article from Discord about this topic and how to verify your bot: "),U={href:"https://support.discord.com/hc/en-us/articles/360040720412",target:"_blank",rel:"noopener noreferrer"},j=s("Bot Verification and Data Whitelisting"),O=s("."),L=o(`<h2 id="notable-intents" tabindex="-1"><a class="header-anchor" href="#notable-intents" aria-hidden="true">#</a> \u2757 Notable Intents</h2><p>The following two intents are especially noteworthy: <code>GUILD_MEMBERS</code> and <code>GUILD_PRESENCES</code>. Besides being privileged, they have some special implications for Javacord:</p><h3 id="guild-presences" tabindex="-1"><a class="header-anchor" href="#guild-presences" aria-hidden="true">#</a> <code>GUILD_PRESENCES</code></h3><p>This intent is required to get updates about a user&#39;s status (i.e., if they are online, what game they are playing, ...). Additionally, without this intent it might take considerably longer to cache all users because of ratelimits (up to 10 minutes for shards with 1000 servers). It is advised against setting <code>DiscordApiBuilder#setWaitForAllUsersOnStartup(true)</code> without this intent, unless absolutely necessary.</p><h3 id="guild-members" tabindex="-1"><a class="header-anchor" href="#guild-members" aria-hidden="true">#</a> <code>GUILD_MEMBERS</code></h3><p>This intent is required to keep all users in Javacord&#39;s cache. Without this intent, methods like <code>Server#getMembers()</code> or <code>DiscordApi#getCachedUsers()</code> will return empty collections. However, you will still be able to access users from objects like messages, e.g. <code>Message#getUserAuthor()</code> will still work.</p><h3 id="message-content" tabindex="-1"><a class="header-anchor" href="#message-content" aria-hidden="true">#</a> <code>MESSAGE_CONTENT</code></h3><p>This intent is a bit different to the other as it does not act as a toggle to receive any events. It&#39;s sole purpose is to receive the message content, attachments, components, and embeds. Otherwise, these fields will be empty when you receive a <code>Message</code> object.</p><h2 id="setting-intents" tabindex="-1"><a class="header-anchor" href="#setting-intents" aria-hidden="true">#</a> \u2699\uFE0F Setting Intents</h2><p>Javacord allows you to specify intents in the <code>DiscordApiBuilder</code> prior to login. There are many options to set intents. The following example code shows the most common ones:</p><h3 id="set-all-non-privileged-intents-default" tabindex="-1"><a class="header-anchor" href="#set-all-non-privileged-intents-default" aria-hidden="true">#</a> Set All Non-Privileged Intents (Default)</h3><p>This method enables all non-privileged intents. This is the default setting in Javacord.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAllNonPrivilegedIntents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-all-non-privileged-intents-except" tabindex="-1"><a class="header-anchor" href="#set-all-non-privileged-intents-except" aria-hidden="true">#</a> Set All Non-Privileged Intents Except</h3><p>This method enabled all non-privileged intents, except the given ones.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAllNonPrivilegedIntentsExcept</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span>GUILD_WEBHOOKS<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-all-intents" tabindex="-1"><a class="header-anchor" href="#set-all-intents" aria-hidden="true">#</a> Set All Intents</h3><p>This method enabled all intents.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAllIntents</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-all-intents-except" tabindex="-1"><a class="header-anchor" href="#set-all-intents-except" aria-hidden="true">#</a> Set All Intents Except</h3><p>This method enabled all intents, except the given ones.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setAllIntentsExcept</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span>GUILD_PRESENCES<span class="token punctuation">,</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span>GUILD_WEBHOOKS<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-intents" tabindex="-1"><a class="header-anchor" href="#set-intents" aria-hidden="true">#</a> Set Intents</h3><p>This method only enables the given intents.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setIntents</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span>GUILDS<span class="token punctuation">,</span> <span class="token class-name">Intent</span><span class="token punctuation">.</span>DIRECT_MESSAGES<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add-intents" tabindex="-1"><a class="header-anchor" href="#add-intents" aria-hidden="true">#</a> Add Intents</h3><p>This method adds the intents to the currently enabled ones(by default all non-privileged). This is useful i.e. if you only want to enable 1 privileged intent like the <code>MESSAGE_CONTENT</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;topc secret&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">addIntents</span><span class="token punctuation">(</span><span class="token class-name">Intent</span><span class="token punctuation">.</span>MESSAGE_CONTENT<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function M(B,C){const i=a("RouterLink"),e=a("ExternalLinkIcon");return p(),l("div",null,[h,n("div",k,[v,n("p",null,[m,b,t(i,{to:"/wiki/basic-tutorials/glossary/"},{default:d(()=>[g]),_:1}),_])]),f,E,I,S,n("p",null,[y,n("a",w,[T,t(e)]),D]),A,x,G,n("p",null,[N,n("a",U,[j,t(e)]),O]),L])}var q=c(u,[["render",M],["__file","gateway-intents.html.vue"]]);export{q as default};
