---
layout: default
title: Set Up Git (Windows)
description: A quick guide to help you get started with Git
categories: windows
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through the basics and explain a little bit about how everything works along the way.</span>

##<span>First:</span> Download and Install Git

At the heart of GitHub is an open source version control system (VCS) called Git&#42;. Created by the same dudes that created Linux, Git is responsible for everything GitHub related that happens locally on your computer.

_&#42;If you don&rsquo;t already know what Git is, <a href="http://progit.org/book/ch1-3.html" target="_blank">take a crash course.</a>_

1. <span class="step-title">Download and install the latest version of <a href="http://code.google.com/p/msysgit/downloads/list" target="_blank">msysgit</a>.</span>

	Use the default options for each step.

	<img src="/images/bootcamp/bootcamp_1_win_install_1.jpg" width="558" height="442" alt="Welcome page" />
	<img src="/images/bootcamp/bootcamp_1_win_install_2.jpg" width="558" height="442" alt="Information" />
	<img src="/images/bootcamp/bootcamp_1_win_install_3.jpg" width="558" height="442" alt="Select destination location" />
	<img src="/images/bootcamp/bootcamp_1_win_install_4.jpg" width="558" height="442" alt="Select start menu folder" />
	<img src="/images/bootcamp/bootcamp_1_win_install_5.jpg" width="558" height="442" alt="Select components" />
	<img src="/images/bootcamp/bootcamp_1_win_install_6.jpg" width="558" height="442" alt="Adjusting your PATH environment" />
	<img src="/images/bootcamp/bootcamp_1_win_install_7.jpg" width="558" height="442" alt="Configuring the line ending conversions" />
	<img src="/images/bootcamp/bootcamp_1_win_install_8.jpg" width="558" height="442" alt="Installing" />
	<img src="/images/bootcamp/bootcamp_1_win_install_9.jpg" width="558" height="442" alt="Installation complete" />


	__Do not use PuTTY if you are given the option. GitHub only provides support for openssh.__

##<span>Next:</span> Set Up SSH Keys

We use SSH keys to establish a secure connection between your computer and GitHub. Setting them up is fairly easy, but does involve a number of steps.

To make sure you generate a brand new key, you need to check if one already exists. First, you need to open Git Bash (not the Windows command line), found in the start menu in the git.

<img src="/images/bootcamp/bootcamp_1_win_gitbash.jpg" width="558" height="300" alt="Open the terminal" />

<div class="more-info">
	<h4 class="compressed">Need a quick lesson about Git Bash?</h4>
	<div class="more-content">
		<p>Code blocks like those on this page are part of a scripting language called Bash. To use Bash scripts, we need to use an application that was installed with Git called Git Bash.</p>

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

		<p>Areas of yellow text represent your own personal info, repos, etc. If it is part of an input ($) line, you should replace it with your own info when you type it. If it is part of output text, it is just for your reference. It will automatically show your own info in Git Bash.</p>

		<p><strong>Good to know</strong>: There will be times when you type code, hit return, and all you are given is another prompt. Some actions that you execute in Git Bash don&rsquo;t have any output. Don&rsquo;t worry, if there is ever a problem with your code, Git Bash will let you know.</p>

		<p><strong>Good to know</strong>: For security reasons, Git Bash will not display what you type when entering passwords. Just type your password and hit the return key.</p>
	</div>
</div>

{% include ssh_setup.markdown %}

##<span>Then: </span> Set Up Your Info

Now that you have Git set up and your SSH keys entered into GitHub, it&rsquo;s time to configure	your personal info.

{% include email_setup.markdown %}

##<span>Lastly:</span> Celebrate

Congratulations, you now have Git and GitHub all set up! What do you want to do next?

<ol class="next-steps">
<li>Set Up Git</li>
<li><a href="/create-a-repo/">Create A Repository</a></li>
<li><a href="/fork-a-repo/">Fork A Repository</a></li>
<li><a href="/be-social/">Be Social</a></li>
</ol>
<script>
	$('#os').html("<b>" + $.client.os + "</b>");
</script>