---
layout: default
title: Fork A Repo
description: Copy a repo to create a new, unique project from its contents.
categories: bootcamp
main_category: bootcamp
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through the basics and explain a little bit about how everything works along the way.</span>

##<span>First:</span> Fork A Repo

At some point you may find yourself wanting to contribute to someone else's project, or would like to use someone's project as the starting point for your own. This is known as &ldquo;forking.&rdquo; For this tutorial, we&rsquo;ll be using the <a href="https://github.com/octocat/Spoon-Knife" target="_blank">Spoon-Knife</a> project.

1. <span class="step-title">Fork the &ldquo;Spoon-Knife &rdquo; repo</span>

	To fork this project, click the &ldquo;Fork&rdquo; button.
	
	<img src="/images/bootcamp/bootcamp_3_fork.jpg" width="558" height="137" alt="Click &ldquo;Fork"  />

##Next: Set Up Your Local Repo

You&rsquo;ve successfully forked the Spoon-Knife repo, but so far it only exists on GitHub. To be able to work on the project, you will need to clone it to your local machine.

1. <span class="step-title">Clone the &ldquo;Spoon-Knife&rdquo; project</span>

	Run the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git clone git@github.com:<em>username</em>/Spoon-Knife.git<span>Clones your copy of the repo into the current directory in terminal</span></span>
	</pre>

2. <span class="step-title">Configure remotes</span>

	When clone a repo, it has a default remote called `origin` that points to your fork on GitHub, not the original repo it was forked from. To keep track of the original repo, you need to add another remote named `upstream`:
	
	<div class="more-info">
		<h4 class="compressed">More about remotes</h4>
		<div class="more-content">
			<p>
				A <em>remote</em> is a repo stored on another computer, in this case on GitHub&rsquo;s server. It is standard practice (and also the default in some cases) to give the name <code>origin</code> to the remote that points to your main offsite repo (for example, your GitHub repo).
			</p>
			<p>
				Git supports multiple remotes. This is commonly used when forking a repo.
			</p>
		</div>
	</div>
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ cd Spoon-Knife<span>Changes the active directory in the prompt to the newly cloned "Spoon-Knife" directory</span></span>
	<span class="codeline">$ git remote add upstream git://github.com/octocat/Spoon-Knife.git<span>Assigns the original repo to a remote called "upstream"</span></span>
	<span class="codeline">$ git fetch upstream<span>Pulls in any changes not present in your local repository, but doesn't modify your working files</span></span>
	</pre>

##<span>Then:</span> More Things You Can Do

You&rsquo;ve successfully forked a repo, but get a load of these other cool things you can do:

- <span class="step-title">Push commits</span>

	Once you&rsquo;ve made some commits to a forked repo and want to push it to your forked project, you do it the same way you would with a regular repo:
	
	<div class="more-info">
		<h4 class="compressed">More about commits</h4>
		<div class="more-content">
			<p>
				Think of a <em>commit</em> as a snapshot of your project &mdash;code, files, everything &mdash; at a particular point in time. More accurately, after your first commit, each subsequent commit is only a snapshot of your changes. For code files, this means it only takes a snapshot of the lines of code that have changed. For everything else like music or image files, it saves a new copy of the file.
			</p>
		</div>
	</div>
	
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
				There are two ways to get commits from a remote repo or branch: <code>fetch</code> and <code>pull</code>. While they might seem similar at first, there are distinct differences you should consider.
			</p>
			<h4>Pull</h4>
				<pre class="terminal bootcamp">
					<span class="codeline">$ git pull upstream<span>Pulls commits from 'upstream' and adds them to the local repo</span></span>
				</pre>
			<p>When you use <code>pull</code>, Git tries to automatically do your work for you. It is context sensitive, so Git will merge any pulled commits into the branch you are currently working in. One thing to keep in mind is that <code>pull</code> automatically merges the commits without letting you review them first. If you don&rsquo;t closely manage your branches you may run into frequent conflicts.</p>
			
			<h4>Fetch/Merge</h4>
				<pre class="terminal bootcamp">
					<span class="codeline">$ git fetch upstream<span>Fetches any new commits from the original repo</span></span>
					<span class="codeline">$ git merge upstream/master<span>Merges any commits fetched into your working files</span></span>
				</pre>
			<p>When you <code>fetch</code>, Git gathers any commits from the target branch that do not exist in your current branch and stores them in your local repo. However, it does not merge them with your current branch. This is particularly useful if you need to keep your repo up to date but are working on something that might break if you update your files. To integrate the commits into your master branch, you use <code>merge</code>. This combines the specified branches and prompts you if there are any conflicts.</p>
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
				<span class="codeline">$ git branch <em>mybranch</em><span>Creates a new branch called "mybranch"</span></span>
				<span class="codeline">$ git checkout <em>mybranch</em><span>Makes "mybranch" the active branch</span></span>
			</pre>
			
			<p>Alternatively, you can use the shortcut:</p>
			
			<pre class="terminal bootcamp">
				<span class="codeline">$ git checkout -b <em>mybranch</em><span>Creates a new branch called "mybranch" and makes it the active branch</span></span>
			</pre>
			
			<p>To switch between branches, use <code>checkout</code>.</p>
			
			<pre class="terminal bootcamp">
				<span class="codeline">$ git checkout master<span>Makes "master" the active branch</span></span>
				<span class="codeline">$ git checkout <em>mybranch</em><span>Makes "mybranch" the active branch</span></span>
			</pre>
			
			<p>Once you&rsquo;re finished working on your branch and are ready to combine it back into the <code>master</code> branch, use <code>merge</code>.</p>
			
			<pre class="terminal bootcamp">
				<span class="codeline">$ git checkout master<span>Makes "master" the active branch</span></span>
				<span class="codeline">$ git merge <em>mybranch</em><span>Merges the commits from "mybranch" into "master"</span></span>
				<span class="codeline">$ git branch -d <em>mybranch</em><span>Deletes the "mybranch" branch</span></span>
			</pre>
			
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