---
layout: default
title: Fork A Repo
description: Copy a repo to create a new, unique project from its contents.
categories: bootcamp
main_category: bootcamp
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. At some point you may want use another user&rsquo;s project as the starting point for your own. This is known as "forking."</span>

##<span>First:</span> Fork A Repo

For this tutorial, we'll be using the <a href="https://github.com/octocat/Fork-it" target="_blank">Fork It</a> project.

1. <span class="step-title">Fork the &ldquo;Fork It &rdquo; repo</span>

	To fork this project, click the "Fork" button.
	
	<img src="/images/bootcamp/bootcamp_3_fork.jpg" width="558" height="137" alt="Click &ldquo;Fork"  />

##Next: Set Up Your Local Repo

You&rsquo;ve successfully forked the Fork It repo, but so far it only exists on GitHub. To be able to work on the project, you will need to clone it to your local machine.

1. <span class="step-title">Clone the &ldquo;Fork It &rdquo; project</span>

	Run the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git clone git@github.com:octocat/Fork-it.git<span class="terminal-tooltip">Clones the linked repo into the current folder</span></span>
	</pre>

2. <span class="step-title">Configure remotes</span>

	Each repository has a default remote&#42; called `origin`. The origin remote in your new cloned repo points to your fork on GitHub, not the original repo it was forked from. To help you keep track of the original repo, you will add another remote named `upstream`:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ cd Fork-it<span class="terminal-tooltip">Changes the active directory in the prompt to the newly cloned "Fork-it" directory</span></span>
	<span class="codeline">$ git remote add upstream git://github.com/octocat/Fork-it.git<span class="terminal-tooltip">Creates a remote called "upstream" and assigns it the original repo URL</span></span>
	<span class="codeline">$ git fetch upstream<span class="terminal-tooltip">Pulls in any changes not present in your local repository, but doesn't modify your working files</span></span>
	</pre>
	
	&#42;A &ldquo;remote&rdquo; is a reference to the GitHub URL where your commits are stored.

##<span>Then:</span> More Things You Can Do

Congratulations, you&rsquo;ve successfully forked a repo, but get a load of these other cool things you can do:

- <span class="step-title">Push commits</span>

	Once you&rsquo;ve made some commits to a forked repo and want to push it to your forked project, you do it the same way you would with a regular repo:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git push origin master<span class="terminal-tooltip">Pushes commits to GitHub</span></span>
	</pre>

- <span class="step-title">Pull in upstream changes</span>

	If the original repo you forked your project from gets updated, you can add those updates to your fork by running the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git fetch upstream<span class="terminal-tooltip">Fetches any new changes from the original repo</span></span>
	<span class="codeline">$ git merge upstream/master<span class="terminal-tooltip">Merges any changes fetched into your working files</span></span>
	</pre>

- <span class="step-title">Pull requests</span>

	If you are hoping to contribute back to the original fork, you can send the original author a [pull request](/pull-requests/).

##<span>Lastly:</span> Celebrate

You have now created forked a repo. What do you want to do next?

<ol class="next-steps">
<li><a href="/set-up-git-redirect/">Set Up Git</a></li>
<li><a href="/create-a-repo/">Create A Repository</a></li>
<li>Fork A Repository</li>
<li><a href="/be-social/">Be Social</a></li>
</ol> 