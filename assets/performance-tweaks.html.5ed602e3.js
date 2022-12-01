import{_ as n,o as a,c as s,e}from"./app.9e9e82c9.js";const t={},p=e(`<h1 id="performance-tweaks" tabindex="-1"><a class="header-anchor" href="#performance-tweaks" aria-hidden="true">#</a> Performance Tweaks</h1><h2 id="disabling-startup-wait" tabindex="-1"><a class="header-anchor" href="#disabling-startup-wait" aria-hidden="true">#</a> \u2702\uFE0F Disabling Startup Wait</h2><p>By default, Javacord waits for all servers and members to be loaded on startup. You can disable this behavior in the <code>DiscordApiBuilder</code> before logging in:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span><span class="token string">&quot;abc&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setWaitForServersOnStartup</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">thenAccept</span><span class="token punctuation">(</span>api <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// Do something</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exceptionally</span><span class="token punctuation">(</span><span class="token class-name">ExceptionLogger</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Depending on the size of your bot, this can significantly speed up the login process. This comes with one downside however: The <code>api.getServers()</code> collection is empty directly after logging in. You will receive <code>ServerBecomesAvailableEvent</code>s for every server which finished loading.</p><h2 id="fine-tuning-the-message-cache" tabindex="-1"><a class="header-anchor" href="#fine-tuning-the-message-cache" aria-hidden="true">#</a> \u2699\uFE0F Fine Tuning the Message Cache</h2><p>In order to reduce memory usage, you can completely disable the message cache or reduce the number of cached messages. By default, Javacord caches up to 50 messages per channel and removes messages from the cache which are older than 12 hours. You can lower this limit by using <code>DiscordApi#setMessageCacheSize(Capacity, StorageTimeInSeconds)</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Cache a maximum of 10 messages per channel for and remove messages older than 1 hour</span>
api<span class="token punctuation">.</span><span class="token function">setMessageCacheSize</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can even set this limit on a per-channel basis:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">TextChannel</span> channel <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">getMessageCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCapacity</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">getMessageCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setStorageTimeInSeconds</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token operator">*</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-the-updater-classes" tabindex="-1"><a class="header-anchor" href="#using-the-updater-classes" aria-hidden="true">#</a> \u{1F48E} Using the Updater classes</h2><p>If you update several settings of an entity (server, channel, ...) at once, you should use the updater for this entity instead of the <code>updateXyz(...)</code> methods.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Sends 1 request to Discord</span>
<span class="token class-name">ServerTextChannel</span> channel <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">ServerTextChannelUpdater</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;example-channel&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setTopic</span><span class="token punctuation">(</span><span class="token string">&quot;This is an example channel&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setNsfwFlag</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>instead of</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Sends 3 requests to Discord</span>
<span class="token class-name">ServerTextChannel</span> channel <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">updateName</span><span class="token punctuation">(</span><span class="token string">&quot;example-channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">updateTopic</span><span class="token punctuation">(</span><span class="token string">&quot;This is an example channel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">updateNsfwFlag</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[p];function o(i,l){return a(),s("div",null,c)}var r=n(t,[["render",o],["__file","performance-tweaks.html.vue"]]);export{r as default};
