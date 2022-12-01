import{_ as i,r as s,o as l,c as u,b as t,w as e,a as n,d as a,e as r}from"./app.9e9e82c9.js";const d={},k=n("h1",{id:"eclipse-maven",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eclipse-maven","aria-hidden":"true"},"#"),a(" Eclipse + Maven")],-1),g=a(" This tutorial provides a beginner-friendly click by click guide to set up Javacord with Eclipse and Maven. If you are already familiar with Eclipse and Maven, you can just see the artifact locations at [Download / Installation](/wiki/getting-started/download-installation.md). "),h={class:"custom-container tip"},m=n("p",{class:"custom-container-title"},"Info",-1),v=a("We recommend to use "),b=a("Intellij + Gradle"),f=a(" unless you already have experience with one of the other IDEs or build managers."),_=r(`<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> \u{1F527} Setup</h2><h4 id="_1-start-eclipse" tabindex="-1"><a class="header-anchor" href="#_1-start-eclipse" aria-hidden="true">#</a> <strong>1.</strong> Start Eclipse</h4><h4 id="_2-create-a-new-project-file-new-project" tabindex="-1"><a class="header-anchor" href="#_2-create-a-new-project-file-new-project" aria-hidden="true">#</a> <strong>2.</strong> Create a new project (<code>File</code> -&gt; <code>New</code> -&gt; <code>Project</code>)</h4><p><img src="https://i.imgur.com/hYeYxen.png" alt=""></p><h4 id="_3-select-maven-project" tabindex="-1"><a class="header-anchor" href="#_3-select-maven-project" aria-hidden="true">#</a> <strong>3.</strong> Select <code>Maven Project</code></h4><h4 id="_4-click-next" tabindex="-1"><a class="header-anchor" href="#_4-click-next" aria-hidden="true">#</a> <strong>4.</strong> Click <code>Next</code></h4><p><img src="https://i.imgur.com/CeHy9HK.png" alt=""></p><h4 id="_5-check-create-a-simple-project" tabindex="-1"><a class="header-anchor" href="#_5-check-create-a-simple-project" aria-hidden="true">#</a> <strong>5.</strong> Check <code>Create a simple project</code></h4><h4 id="_6-click-next" tabindex="-1"><a class="header-anchor" href="#_6-click-next" aria-hidden="true">#</a> <strong>6.</strong> Click <code>Next</code></h4><p><img src="https://i.imgur.com/xxbGmr6.png" alt=""></p><h4 id="_7-enter-a-group-id-e-g-com-github-yourname" tabindex="-1"><a class="header-anchor" href="#_7-enter-a-group-id-e-g-com-github-yourname" aria-hidden="true">#</a> <strong>7.</strong> Enter a group id (e.g. <code>com.github.yourname</code>)</h4><h4 id="_8-enter-an-artifact-id-e-g-myfirstbot" tabindex="-1"><a class="header-anchor" href="#_8-enter-an-artifact-id-e-g-myfirstbot" aria-hidden="true">#</a> <strong>8.</strong> Enter an artifact id (e.g. <code>myfirstbot</code>)</h4><h4 id="_9-click-finish" tabindex="-1"><a class="header-anchor" href="#_9-click-finish" aria-hidden="true">#</a> <strong>9.</strong> Click <code>Finish</code></h4><p><img src="https://i.imgur.com/JSV9yrl.png" alt=""></p><h4 id="_10-double-click-on-the-pom-xml-file" tabindex="-1"><a class="header-anchor" href="#_10-double-click-on-the-pom-xml-file" aria-hidden="true">#</a> <strong>10.</strong> Double click on the <code>pom.xml</code> file</h4><p><img src="https://i.imgur.com/NCAALIt.png" alt=""></p><h4 id="_11-select-pom-xml" tabindex="-1"><a class="header-anchor" href="#_11-select-pom-xml" aria-hidden="true">#</a> <strong>11.</strong> Select <code>pom.xml</code></h4><p><img src="https://i.imgur.com/kbdtiLJ.png" alt=""></p><h4 id="_12-now-you-have-to-add-javacord-as-a-dependency-by-editing-the-pom-xml-file-your-file-should-now-look-like-this" tabindex="-1"><a class="header-anchor" href="#_12-now-you-have-to-add-javacord-as-a-dependency-by-editing-the-pom-xml-file-your-file-should-now-look-like-this" aria-hidden="true">#</a> <strong>12.</strong> Now you have to add Javacord as a dependency by editing the pom.xml file. Your file should now look like this:</h4><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>your.package.name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>myfirstbot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.javacord<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>javacord<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>$latest-version<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-create-a-new-package-inside-the-src-main-java-folder" tabindex="-1"><a class="header-anchor" href="#_13-create-a-new-package-inside-the-src-main-java-folder" aria-hidden="true">#</a> <strong>13.</strong> Create a new package inside the <code>src/main/java</code> folder</h4><p><img src="https://i.imgur.com/Z1QNuQf.png" alt=""><img src="https://i.imgur.com/RKJc0yU.png" alt=""></p><h4 id="_14-create-a-new-class-inside-this-package" tabindex="-1"><a class="header-anchor" href="#_14-create-a-new-class-inside-this-package" aria-hidden="true">#</a> <strong>14.</strong> Create a new class inside this package</h4><p><img src="https://i.imgur.com/eUmumlz.png" alt=""><img src="https://i.imgur.com/GsPFaag.png" alt=""></p><h4 id="_15-save-the-project-you-should-do-this-from-time-to-time" tabindex="-1"><a class="header-anchor" href="#_15-save-the-project-you-should-do-this-from-time-to-time" aria-hidden="true">#</a> <strong>15.</strong> Save the project (you should do this from time to time)</h4><p><img src="https://i.imgur.com/Ht5UT8S.png" alt=""></p><h4 id="_16-now-you-can-start-coding-example-code" tabindex="-1"><a class="header-anchor" href="#_16-now-you-can-start-coding-example-code" aria-hidden="true">#</a> <strong>16.</strong> Now you can start coding! Example code:</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>github<span class="token punctuation">.</span>yourname<span class="token punctuation">.</span>myfirstbot</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>javacord<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">DiscordApi</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>javacord<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">DiscordApiBuilder</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Insert your bot&#39;s token here</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> <span class="token string">&quot;your token&quot;</span><span class="token punctuation">;</span>

        <span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscordApiBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setToken</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Add a listener which answers with &quot;Pong!&quot; if someone writes &quot;!ping&quot;</span>
        api<span class="token punctuation">.</span><span class="token function">addMessageCreateListener</span><span class="token punctuation">(</span>event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span><span class="token function">getMessageContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span><span class="token string">&quot;!ping&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                event<span class="token punctuation">.</span><span class="token function">getChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Pong!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Print the invite url of your bot</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;You can invite the bot by using the following url: &quot;</span> <span class="token operator">+</span> api<span class="token punctuation">.</span><span class="token function">createBotInvite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-the-code" tabindex="-1"><a class="header-anchor" href="#run-the-code" aria-hidden="true">#</a> \u{1F3C3}\u200D\u2640\uFE0F Run the code</h2><p>You can run your code by clicking on the small green arrow <img src="https://i.imgur.com/rsIHH9M.png" alt=""></p>`,30);function y(x,w){const o=s("LatestVersion"),p=s("ClientOnly"),c=s("RouterLink");return l(),u("div",null,[k,t(p,null,{default:e(()=>[t(o)]),_:1}),g,n("div",h,[m,n("p",null,[v,t(c,{to:"/wiki/getting-started/setup/intellij-gradle.html"},{default:e(()=>[b]),_:1}),f])]),_])}var q=i(d,[["render",y],["__file","eclipse-maven.html.vue"]]);export{q as default};
