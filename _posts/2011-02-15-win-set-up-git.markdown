---
layout: default
title: Set Up Git (Windows)
description: A quick guide to help you get started with Git
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through setting both up, and explain a little about how everything works along the way. If you already have Git experience and just want the short version, read the <a href="http://help.github.com">technical walkthrough instead</a>.</span>

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
		<p>Code blocks like those on this page are part of a scripting language called Bash. To use Bash scripts, we need to use an application that comes with Linux called Terminal.</p>
		
		<h4>Input</h4>
		<pre class="terminal bootcamp">
			<span class="codeline">$ echo 'This is input text'<span>This tooltip tells you what's going on.</span></span>
		</pre>
		
		<p>A line that begins with the dollar sign ($) indicates a line of Bash script you need to type. To enter it, type the text that follows the $, hitting the return key at the end of each line. You can hover your mouse over each line for an explanation of what the script is doing</p>
		
		<h4>Output</h4>
		<pre class="terminal bootcamp">
			<span class="bash-output">$ This is output text.</span>
		</pre>
		
		<p>A line that does not begin with a $ is output text that is intended to give you information or tell you what to do next. We&rsquo;ve colored output text green in these bootcamp tutorials.</p>
		
		<h4>User Specific Input</h4>
		<pre class="terminal bootcamp">
			<span class="codeline">$ echo '<em>username</em>'<span>Outputs the text in the quote marks.</span></span>
		</pre>
		
		<p>Areas of yellow text represent your own personal info, repos, etc. If it is part of an input ($) line, you should replace your it with your own info when you type it. If it is part of output text, it is just for your reference. It will automatically show your own info in Git Bash</p>
		
		<p><strong>Good to know</strong>: There will be times when you type code, hit return, and all you are given is another prompt. Some actions that you execute in the Git Bash don&rsquo;t have any output. Don&rsquo;t worry, if there is ever a problem with your code, Git Bash will let you know.</p>
	
		<p><strong>Good to know</strong>: For security reasons, Git Bash will not display what you type when entering passwords. Just type your password and hit the return key.</p>
	</div>
</div>

1. <span class="step-title">Check for SSH keys. <span>Have an existing kepair? You can skip to Step 4.</span></span>

	First, we need to check for existing ssh keys on your computer:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ cd ~/.ssh<span>Checks to see if there is a directory named ".ssh" in your user directory</span></span>
	</pre>
	
	If it says &ldquo;No such file or directory&ldquo; skip to __step 3__. Otherwise continue to __step 2__.

2. <span class="step-title">Backup and remove existing SSH keys.</span>

	Since there is already an SSH directory you&rsquo;ll want to back it up and remove it:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ls<span>Lists all the subdirectories in the current directory</span></span>
	<span class="bash-output">config  id_rsa  id_rsa.pub  known_hosts</span>
	<span class="codeline">$ mkdir key_backup<span>Makes a directory called "key_backup" in the current directory</span></span>
	<span class="codeline">$ cp id_rsa* key_backup<span>Copies the contents of the id_rsa directory into key_backup directory</span></span>
	<span class="codeline">$ rm id_rsa*<span>Deletes the contents of the id_rsa directory</span></span>
	</pre>

3. <span class="step-title">Generate a new SSH key.</span>

	To generate a new SSH key, enter the code below. We want the default settings so when asked to enter a file in which to save the key, just press enter.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ssh-keygen -t rsa -C "<em>user_name@username.com</em>"<span>Creates a new ssh key using the provided email</span></span>
	<span class="bash-output">Generating public/private rsa key pair.</span>
	<span class="bash-output">Enter file in which to save the key (/c/Users/<em>your_user_directory</em>/.ssh/id_rsa):</span>
	</pre>
	
	Now you need to enter a passphrase. _[Why is this important?](../working-with-key-passphrases)_
	
	<pre class="terminal bootcamp">
	<span class="bash-output">Enter passphrase (empty for no passphrase):</span>
	<span class="bash-output">Enter same passphrase again:</span>
	</pre>
	
	Which should give you something like this:
	
	<pre class="terminal bootcamp">
	<span class="bash-output">Your identification has been saved in /c/Users/<em>your_user_directory</em>/.ssh/id_rsa.</span>
	<span class="bash-output">Your public key has been saved in /c/Users/<em>your_user_directory</em>/.ssh/id_rsa.pub.</span>
	<span class="bash-output">The key fingerprint is:</span>
	<span class="bash-output">01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db <em>user_name@username.com</em></span>
	</pre>

4. <span class="step-title">Add your SSH key to GitHub.</span>

	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;SSH Public Keys&rdquo;_ &gt; _Click &ldquo;Add another public key&rdquo;_
	
	First, open the id_rsa.pub file with a text editor (Notepad will do just fine). This is your SSH key. __It&rsquo;s important you copy your SSH key exactly as it is written without adding any newlines or whitespace.__ Now paste it into the &ldquo;Key&rdquo; field.
	
	<img src="/images/bootcamp/bootcamp_1_ssh.jpg" width="558" height="402" alt="Paste your SSH Key" />
	
	Hit &ldquo;Add Key.&rdquo;

5. <span class="step-title">Test everything out.</span>

	To make sure everything is working you&rsquo;ll now SSH to GitHub. Don&rsquo;t change the &ldquo;git@github.com&rdquo; part. That&rsquo;s supposed to be there.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ ssh git@github.com<span>Attempts to ssh to github</span></span>
	</pre>
	
	Which should give you this:
	
	<pre class="terminal bootcamp">
	<span class="bash-output">The authenticity of host 'github.com (207.97.227.239)' can't be established.</span>
	<span class="bash-output">RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.</span>
	<span class="bash-output">Are you sure you want to continue connecting (yes/no)?</span>
	</pre>
	
	Don&rsquo;t worry, this is supposed to happen. Type &ldquo;yes&rdquo;.
	
	<pre class="terminal bootcamp">
	<span class="bash-output">PTY allocation request failed on channel 0</span>
	<span class="bash-output">Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide shell access.</span>
	<span class="bash-output">Connection to github.com closed.</span>

	</pre>

	Don&rsquo;t worry, about the &ldquo;failed&rdquo; part. All you should about is that you see &ldquo;You&rsquo;ve successfully authenticated&rdquo;

##<span>Then: </span> Set Up Your Info

Now that you have Git set up and your SSH keys entered in GitHub, it&rsquo;s time to configure  your personal info.

1. <span class="step-title">Set your username and email.</span>
	
	Git tracks who makes each commit by checking the user&rsquo;s name and email. In addition, we use this info to associate your commits with your GitHub account. To set these, enter the code below, replacing the name and email with your own. The name should be your _actual name_, not your GitHub username.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git config --global user.name "<em>Firstname Lastname</em>"<span>Sets the name of the user for all git instances on the system</span></span>
	<span class="codeline">$ git config --global user.email "<em>user_name@username.com</em>"<span>Sets the email of the user for all git instances on the system</span></span>
	</pre>

2. <span class="step-title">Set your GitHub token.</span>

	Some tools connect to GitHub without SSH. To use these tools properly you need to find and configure your API Token.
	
	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;Account Admin.&rdquo;_
	
	<img src="/images/bootcamp/bootcamp_1_token.jpg" width="558" height="245" alt="Copy your API token"  />
	
	In Git Bash, run the following code, using your GitHub username and token in place of the ones shown.
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git config --global github.user <em>username</em><span>Sets the GitHub username for all git instances on the system</span></span>
	<span class="codeline">$ git config --global github.token <em>0123456789your0123456789token</em><span>Sets the GitHub token for all git instances on the system</span></span>
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
<script>
  $('#os').html("<b>" + $.client.os + "</b>");
</script>