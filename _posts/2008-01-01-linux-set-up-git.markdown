---
layout: default
title: Set Up Git
description: A quick guide to help you get started with Git
---

<p class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through the basics and explain a little bit about how everything works along the way.</p>

<p class="intro">This is the guide for setting up git in <strong>OSX</strong>. There are also guides for <strong><a href="/mac-set-up-git">OSX</a></strong> and <strong><a href="/win-set-up-git">Windows</a></strong>.</p>

##<span class="step">First:</span> Download and Install Git

At the heart of GitHub is an open source version control system (VCS) called Git&#42;. Created by the same dudes that created Linux, Git is responsible for everything GitHub related that happens locally on your computer.

_&#42;If you don&rsquo;t already know what Git is, <a href="http://progit.org/book/ch1-3.html" target="_blank">take a crash course.</a>_

1. <span class="step-title">Download and install the latest version of Git with Synaptic.</span>

	We suggest you install git-core, git-gui, and git-doc.

	<img src="/images/bootcamp/bootcamp_1_linux_install_1.jpg" width="558" height="426" alt="Open Synaptic" />
	<img src="/images/bootcamp/bootcamp_1_linux_install_2.jpg" width="558" height="480" alt="Mark git-core, git-gui, and git-doc for installation" />
	<img src="/images/bootcamp/bootcamp_1_linux_install_3.jpg" width="558" height="480" alt="git-core, git-gui, and git-doc are selected" />

	When you&rsquo;ve selected git-core, git-gui, and git-doc, hit &ldquo;Apply&rdquo; to install them.

	<img src="/images/bootcamp/bootcamp_1_linux_install_4.jpg" width="558" height="173" alt="Click Apply" />

	If you don&rsquo;t have a package manager like Synaptic, or you&rsquo;d rather install the necessary git components from the command line, you can alternatively run the script below:

	<pre class="terminal bootcamp">
		<span class="codeline">$ sudo apt-get install git-core git-gui git-doc<span>Installs git-core, git-gui, and git-doc on your system</span></span>
	</pre>

	__&#42;Note&#42;__ Don&rsquo;t worry that you don&rsquo;t see an icon when it&rsquo;s done. It&rsquo;s not that kind of application.

##<span class="step">Next:</span> Set Up SSH Keys

We use SSH keys to establish a secure connection between your computer and GitHub. Setting them up is fairly easy, but does involve a number of steps.

To make sure you generate a brand new key, you need to check if one already exists. First, you need to open an app called Terminal.

<img src="/images/bootcamp/bootcamp_1_linux_terminal.jpg" width="558" height="328" alt="Open the terminal" />

<div class="more-info">
	<h4 class="compressed">Need a quick lesson about Terminal?</h4>
	<div class="more-content">
		<p>Code blocks like those on this page are part of a scripting language called Bash. To use Bash scripts, we need to use an application that comes with Linux called Terminal.</p>

		<h4>Input</h4>
		<pre class="terminal bootcamp">
			<span class="codeline">$ echo 'This is input text'<span>This tooltip tells you what's going on.</span></span>
		</pre>

		<p>A line that begins with the dollar sign ($) indicates a line of Bash script you need to type. To enter it, type the text that follows the $, hitting the return key at the end of each line. You can hover your mouse over each line for an explanation of what the script is doing.</p>

		<h4>Output</h4>
		<pre class="terminal bootcamp">
			<span class="bash-output">This is output text.</span>
		</pre>

		<p>A line that does not begin with a $ is output text that is intended to give you information or tell you what to do next. We&rsquo;ve colored output text green in these bootcamp tutorials.</p>

		<h4>User Specific Input</h4>
		<pre class="terminal bootcamp">
			<span class="codeline">$ echo '<em>username</em>'<span>Outputs the text in the quotation marks.</span></span>
		</pre>

		<p>Areas of yellow text represent your own personal info, repos, etc. If it is part of an input ($) line, you should replace your it with your own info when you type it. If it is part of output text, it is just for your reference. It will automatically show your own info in Terminal.</p>

		<p><strong>Good to know</strong>: There will be times when you type code, hit return, and all you are given is another prompt. Some actions that you execute in Terminal don&rsquo;t have any output. Don&rsquo;t worry, if there is ever a problem with your code, Terminal will let you know.</p>

		<p><strong>Good to know</strong>: For security reasons, Terminal will not display what you type when entering passwords. Just type your password and hit the return key.</p>
	</div>
</div>

{% include ssh_setup.markdown %}

##<span class="step">Then: </span> Set Up Your Info

Now that you have Git set up and your SSH keys entered into GitHub, it&rsquo;s time to configure your personal info.

{% include email_setup.markdown %}

##<span class="step">Lastly:</span> Celebrate

Congratulations, you now have Git and GitHub all set up! What do you want to do next?

<ol class="next-steps">
<li>Set Up Git</li>
<li><a href="/create-a-repo/">Create A Repository</a></li>
<li><a href="/fork-a-repo/">Fork A Repository</a></li>
<li><a href="/be-social/">Be Social</a></li>
</ol>