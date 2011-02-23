---
layout: default
title: Set Up Git (Linux)
description: A quick guide to help you get started with Git
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through setting both up, and explain a little about how everything works along the way. If you already have Git experience and just want the short version, read the <a href="http://help.github.com">technical walkthrough instead</a>.</span>

##<span>First:</span> Download and Install Git

At the heart of GitHub is an open source version control system (VCS) called Git&#42;. Created by the same dudes that created Linux, Git is responsible for everything GitHub related that happens locally on your computer.

_&#42;If you don&rsquo;t already know what Git is, <a href="http://progit.org/book/ch1-3.html" target="_blank">take a crash course.</a>_

1. <span class="step-title">Download and install the latest version of Git with Synaptic.</span>

	We suggest you install git-core, git-gui, and git-doc.
	
	<img src="/images/bootcamp/bootcamp_1_linux_install_1.jpg" width="558" height="426" alt="Open Synaptic" />
	<img src="/images/bootcamp/bootcamp_1_linux_install_2.jpg" width="558" height="480" alt="Mark git-core, git-gui, and git-doc for installation" />
	<img src="/images/bootcamp/bootcamp_1_linux_install_3.jpg" width="558" height="480" alt="git-core, git-gui, and git-doc are selected" />
	
	When you&rsquo;ve selected git-core, git-gui, and git-doc, hit &ldquo;Apply&rdquo; to install them.
	
	<img src="/images/bootcamp/bootcamp_1_linux_install_4.jpg" width="558" height="173" alt="Click Apply" />
		
	__&#42;Note&#42;__ Don&rsquo;t worry that you don&rsquo;t see an icon when it&rsquo;s done. It&rsquo;s not that kind of application.

##<span>Next:</span> Set Up SSH Keys

We use SSH keys to establish a secure connection between your computer and GitHub. Setting them up is fairly easy, but does involves a number of steps.

To make sure you generate a brand new key, you need to check if one already exists. First, you need to open an app called Terminal.

<img src="/images/bootcamp/bootcamp_1_linux_terminal.jpg" width="558" height="328" alt="Open the terminal" />

<p>
<span class="explain">Need a quick lesson about Terminal?
	<span class="explain-it-shell"><span class="triangle">&nbsp;</span><span class="explain-it">Code blocks like those on this page are part of a scripting language called Bash. To use Bash scripts, we need to use an application that comes with Linux called Terminal. A line that begins with the dollar sign ($) indicates a line of code you need to type. To enter it, type the text that follows the $, hitting the return key at the end of each line. If you see a line in an example that doesn&rsquo;t begin with a $ (we&rsquo;ve made them <span class="terminal-output">green</span> in the bootcamp tutorials), that means it is a line of text that terminal has output for you to read and/or act upon. In the bootcamp examples, you can roll over the lines of Bash script for an explanation of what they do.<br/><br/>
	
	<strong>Good to know</strong>: There will be times when you type code, hit return, and all you are given is another prompt. Some actions that you execute in the Terminal don&rsquo;t have any output. Don&rsquo;t worry, if there is ever a problem with your code, Terminal will let you know.<br/><br/>
	
	<strong>Good to know</strong>: For security reasons, Terminal will not display what you type when entering passwords. Just type your password and hit the return key.
	</span></span>
</span>
</p>

1. <span class="step-title">Check for SSH keys. <span>Have an existing kepair? You can skip to Step 4.</span></span>

	First, we need to check for existing ssh keys on your computer:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ cd ~/.ssh<span class="terminal-tooltip">Checks to see if there is a folder named ".ssh" in you user directory</span></span>
	</pre>
	
	<p class="short-bottom-marg">Does it say "No such file or directory"?</p>
	<p class="next-step"><strong>No:</strong> Go to Step 2<br /><strong>Yes:</strong> Skip to Step 3
	</p>
2. <span class="step-title">Backup and remove existing SSH keys.</span>
	
	Since there is already an SSH directory you&rsquo;ll want to back it up and remove it:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ls<span class="terminal-tooltip">Lists all the subdirectories in the current directory</span></span>
	<span class="terminal-output codeline">config  id_rsa  id_rsa.pub  known_hosts</span>
	<span class="codeline">$ mkdir key_backup<span class="terminal-tooltip">Makes a folder called "key_backup" in the current directory</span></span>
	<span class="codeline">$ cp id_rsa* key_backup<span class="terminal-tooltip">Copies the contents of the id_rsa folder into key_backup folder</span></span>
	<span class="codeline">$ rm id_rsa*<span class="terminal-tooltip">Deletes the contents of the id_rsa folder</span></span>
	</pre>

3. <span class="step-title">Generate a new SSH key.</span>

	To generate a new SSH key, enter the code below. When asked to enter a file in which to save the key, just press enter without typing anything.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ssh-keygen -t rsa -C "octocat@github.com"<span class="terminal-tooltip">Creates a new ssh key using the provided email</span></span>
	<span class="terminal-output codeline">Generating public/private rsa key pair.</span>
	<span class="terminal-output codeline">Enter file in which to save the key (/home/octocat/.ssh/id_rsa):</span>
	<span class="terminal-output codeline">Enter passphrase (empty for no passphrase):</span>
	<span class="terminal-output codeline">Enter same passphrase again:</span>
	</pre>
	
	Which should give you something like this:
	
	<pre class="terminal bootcamp">
	<span class="terminal-output codeline">Your identification has been saved in /home/octocat/.ssh/id_rsa.</span>
	<span class="terminal-output codeline">Your public key has been saved in /home/octocat/.ssh/id_rsa.pub.</span>
	<span class="terminal-output codeline">The key fingerprint is:</span>
	<span class="terminal-output codeline">01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db octocat@github.com</span>
	<span class="terminal-output codeline">The key's randomart image is:</span>
	<span class="terminal-output codeline">+--[ RSA 2048]----+</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.+&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;o&nbsp;O&nbsp;.&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;*&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;=&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;S&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;o&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;.&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="terminal-output codeline">+-----------------+</span>
	</pre>
	
4. <span class="step-title">Add your SSH key to GitHub.</span>

	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;SSH Public Keys&rdquo;_ &gt; _Click &ldquo;Add another public key&rdquo;_
	
	It&rsquo;s important you copy your SSH key exactly as it is written without adding any newlines or whitespace. To ensure this, run the following code to copy the key to your clipboard.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ sudo apt-get install xclip<span class="terminal-tooltip">Downloads and installs xclip</span></span>
	<span class="codeline">$ cat ~/.ssh/id_rsa.pub | xclip -sel clip<span class="terminal-tooltip">Copies the contents of the id_rsa.pub file to your clipboard</span></span>
	</pre>
	
	Now paste it into the &ldquo;Key&rdquo; field
	
	<img src="/images/bootcamp/bootcamp_1_ssh.jpg" width="558" height="373" alt="Paste your SSH Key" />
	
	Hit &ldquo;Add Key&rdquo;

5. <span class="step-title">Test everything out.</span>

	To make sure everything is working you'll now SSH to GitHub:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ssh git@github.com<span class="terminal-tooltip">Attempts to ssh to github</span></span>
	</pre>
	
	Which should give you this:
	
	<pre class="terminal bootcamp">
	<span class="terminal-output codeline">The authenticity of host 'github.com (207.97.227.239)' can't be established.</span>
	<span class="terminal-output codeline">RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.</span>
	<span class="terminal-output codeline">Are you sure you want to continue connecting (yes/no)?</span>
	</pre>
	
	Don&rsquo;t worry, this is supposed to happen. Type &ldquo;yes&rdquo;.
	
	<pre class="terminal bootcamp">
	<span class="terminal-output codeline">Warning: Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.</span>
	<span class="terminal-output codeline">ERROR: Hi octocat! You've successfully authenticated, but GitHub does not provide <br />shell access</span>
	<span class="terminal-output codeline">Connection to github.com closed.</span>
	</pre>

##<span>Then: </span> Set Up Your Info

Now that you have Git set up and your SSH keys entered in GitHub, it&rsquo;s time to configure  your personal info.

1. <span class="step-title">Set your username and email.</span>

	Git tracks who makes each commit by checking the user&rsquo;s name and email. In addition, we use this info to associate your commits with your GitHub account. To set these, enter the code below, replacing the name and email with your own. The name should be your _actual name_, not your GitHub username.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git config --global user.name "The Octocat"<span class="terminal-tooltip">Sets the name of the user for all git instances on the system</span></span>
	<span class="codeline">$ git config --global user.email "octocat@github.com"<span class="terminal-tooltip">Sets the email of the user for all git instances on the system</span></span>
	</pre>

2. <span class="step-title">Set your GitHub token.</span>

	Some tools connect to GitHub without SSH. To use these tools properly you need to find and configure your API Token.
	
	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;Account Admin&rdquo;_
	
	<img src="/images/bootcamp/bootcamp_1_token.jpg" width="558" height="245" alt="Copy your API token"  />
	
	In Terminal, run the following code, using your GitHub username and token in place of the ones shown.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git config --global github.user octocat<span class="terminal-tooltip">Sets the GitHub username for all git instances on the system</span></span>
	<span class="codeline">$ git config --global github.token 0123456789abcdef0123456789abcdef<span class="terminal-tooltip">Sets the GitHub token for all git instances on the system</span></span>
	</pre>
	
	__&#42;Note&#42;__ If you ever change your GitHub password, a new token will be created and will need to be updated.

##<span>Lastly:</span> Celebrate

Congratulations, you now have Git and GitHub all set up! What do you want to do next?

<ol class="next-steps">
<li>Set Up Git</li>
<li><a href="/create-a-repo/">Create A Repository</a></li>
<li><a href="/fork-a-repo/">Fork A Repository</a></li>
<li><a href="/be-social/">Be Social</a></li>
</ol>