---
layout: default
title: Create A Repo
description: Create the place where your commits will be stored
categories: bootcamp
main_category: bootcamp
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through creating your first repo, creating a README file, and making your first commit.</span>

##<span>First:</span> Create A Repo

Every time you push your commits to GitHub, they get stored in a repository (a.k.a. &ldquo;repo&rdquo;)

1. <span class="step-title">Create a new repo</span>

	Click &ldquo;New Repository.

	<img src="/images/bootcamp/bootcamp_2_newrepo.jpg" width="558" height="291" alt="Click &ldquo;New Repository" />
	
	Fill out the information on this page. When you&rsquo;re done, click &ldquo;Create Repository.&rdquo;
	
	<img src="/images/bootcamp/bootcamp_2_repoinfo.jpg" width="558" height="437" alt="Fill in the info" />
	
	Congratulations! You have successfully created your first repo!

##<span>Next:</span> Create a README for your repo.

While a README isn&rsquo;t a required part of a GitHub repo, it is a good idea to have one. READMEs are a great place to describe your project or add some documentation such as how to install or use your project.

1. <span class="step-title">Create the README file</span>

	In the prompt, type the following code:

	<pre class="terminal bootcamp">
	<span class="codeline">$ mkdir ~/Hello-World<span>Creates a folder for your project called "Hello-World" in your user folder</span></span>
	<span class="codeline">$ cd ~/Hello-World<span>Changes the active directory in the prompt to your newly created folder</span></span>
	<span class="codeline">$ git init<span>Sets up the necessary Git files</span></span>
	<span class="terminal-output">Initialized empty Git repository in /Users/<em>your_user_directory</em>/Hello-World/.git/</span>
	<span class="codeline">$ touch README<span>Creates a file called "README" in your Hello-World folder</span></span>
	</pre>

	Open the new README file found in your Hello-World folder in a text editor and add the text &ldquo;Hello World!.&rdquo; When you are finished, save and close the file.

2. <span class="step-title">Commit your README</span>

	Now that you have your README set up, it's time to commit it. A commit is essentially a snapshot of all the files in your project at a particular point in time. In the prompt, type the following code:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git add README<span>Stages your README file, adding it to the list of files to be committed</span></span>
	<span class="codeline">$ git commit -m 'first commit'<span></span>Commits your files, adding the message "first commit"</span>
	</pre>
	
	The code above executes actions locally, meaning you still haven&rsquo;t done anything on GitHub yet. To connect your local repository to your GitHub account, you will need to set a remote for your repo and push your commits to it:
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git remote add origin git@github.com:<em>username</em>/Hello-World.git<span>Sets the origin for the Hello-World repo</span></span>
	<span class="codeline">$ git push origin master<span></span>Sends your commit to GitHub</span>
	</pre>
	
	Now if you look at your repository on GitHub, you will see your README has been added to it.
	
	<img src="/images/bootcamp/bootcamp_2_updatedreadme.jpg" width="558" height="577" alt="Your README has been created" />
	
##<span>Lastly:</span> Celebrate

Congratulations! You have now created a repository on GitHub, created a README, committed it, and pushed it to GitHub. What do you want to do next?

<ol class="next-steps">
<li><a href="/set-up-git-redirect/">Set Up Git</a></li>
<li>Create A Repository</li>
<li><a href="/fork-a-repo/">Fork A Repository</a></li>
<li><a href="/be-social/">Be Social</a></li>
</ol> 