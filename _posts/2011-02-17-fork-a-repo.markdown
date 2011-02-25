---
layout: default
title: Fork A Repo
description: Copy a repo to create a new, unique project from its contents.
categories: bootcamp
main_category: bootcamp
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. At some point you may want use another user&rsquo;s project as the starting point for your own. This is known as &ldquo;forking.&rdquo;</span>

##<span>First:</span> Fork A Repo

For this tutorial, we&rsquo;ll be using the <a href="https://github.com/octocat/Spoon-Knife" target="_blank">Spoon-Knife</a> project.

1. <span class="step-title">Fork the &ldquo;Spoon-Knife &rdquo; repo</span>

	To fork this project, click the &ldquo;Fork&rdquo; button.
	
	<img src="/images/bootcamp/bootcamp_3_fork.jpg" width="558" height="137" alt="Click &ldquo;Fork"  />

##Next: Set Up Your Local Repo

You&rsquo;ve successfully forked the Spoon-Knife repo, but so far it only exists on GitHub. To be able to work on the project, you will need to clone it to your local machine.

1. <span class="step-title">Clone the &ldquo;Spoon-Knife&rdquo; project</span>

	Run the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git clone git@github.com:<em>username</em>/Spoon-Knife.git<span>Clones your copy of the repo into the current folder in terminal</span></span>
	</pre>

2. <span class="step-title">Configure remotes</span>

	Each repo has a default remote called `origin`. A &ldquo;remote&rdquo; is a repo stored on another computer, in this case on GitHub's server. The `origin` remote in your local repo points to your fork on GitHub, not the original repo it was forked from. To help you keep track of the original repo, you will add another remote named `upstream`:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ cd Spoon-Knife<span>Changes the active directory in the prompt to the newly cloned "Spoon-Knife" directory</span></span>
	<span class="codeline">$ git remote add upstream git://github.com/octocat/Spoon-Knife.git<span>Assigns the original repo to a remote called "upstream"</span></span>
	<span class="codeline">$ git fetch upstream<span>Pulls in any changes not present in your local repository, but doesn't modify your working files</span></span>
	</pre>

##<span>Then:</span> More Things You Can Do

Congratulations, you&rsquo;ve successfully forked a repo, but get a load of these other cool things you can do:

- <span class="step-title">Push commits</span>

	Once you&rsquo;ve made some commits to a forked repo and want to push it to your forked project, you do it the same way you would with a regular repo:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git push origin master<span>Pushes commits to your remote repo stored on GitHub</span></span>
	</pre>

- <span class="step-title">Pull in upstream changes</span>

	If the original repo you forked your project from gets updated, you can add those updates to your fork by running the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git fetch upstream<span>Fetches any new changes from the original repo</span></span>
	<span class="codeline">$ git merge upstream/master<span>Merges any changes fetched into your working files</span></span>
	</pre>
	
	<div class="more-info">
		<h4 class="compressed">What is the difference between fetch and pull?</h4>
		<div class="more-content">
			<p>
				There are two ways to get changes from a remote repo or branch: <code>fetch</code> and <code>pull</code>. While they might seem similar at first, there are distinct differences you should consider.
			</p>
			<h4>Pull</h4>
				<pre class="terminal bootcamp">
					<span class="codeline">$ git pull upstream<span>Pulls changes from upstream and adds them to the local repo</span></span>
				</pre>
			<p>When you use <code>pull</code>, Git tries to automatically do your work for you. It is context sensitive, so Git will apply any pulled changes to the branch you are currently working in. One thing to keep in mind is that <code>pull</code> automatically applies the changes without letting you review them first. If you don't closely manage your branches you may run into frequent conflicts.</p>
			
			<h4>Fetch/Merge</h4>
				<pre class="terminal bootcamp">
					<span class="codeline">$ git fetch upstream<span>Fetches any new changes from the original repo</span></span>
					<span class="codeline">$ git merge upstream/master<span>Merges any changes fetched into your working files</span></span>
				</pre>
			<p>When you <code>fetch</code>, Git downloads any changes from the specified branch, but does not apply them to your files. This is very useful if you need to keep your repo up to date but are working on something that might break if your files are updated. To apply the changes, you use <code>merge</code>. This combines the specified branches and prompts you if there are any conflicts.</p>
		</div>
	</div>
	
- <span class="step-title">Work with branches</span>

	Branching allows you to build new features or test out ideas without putting your main project at risk. A Git branch is a small file that references the commit it was spawned from. This makes Git branches very small and easy to work with.
	
	<div class="more-info">
		<h4 class="compressed">How do I use branches?</h4>
		<div class="more-content">
		
			<p>
				Branches are pretty easy to work with and will save you a lot of headaches, especially when working with multiple people. To create a branch and begin working in it, use the following script:
			</p>
			
			<pre class="terminal bootcamp">
				<span class="codeline">$ git branch newbranch<span>Creates a new branch called "newbranch"</span></span>
				<span class="codeline">$ git checkout newbranch<span>Makes "newbranch" the active branch</span></span>
			</pre>
			
			<p>Alternatively, you can use the shortcut:</p>
			
			<pre class="terminal bootcamp">
				<span class="codeline">$ git checkout -b newbranch<span>Creates a new branch called "newbranch"</span></span>
			</pre>
			
			<p>To switch between branches, use <code>checkout</code>.</p>
			
		</div>
	</div>

	
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