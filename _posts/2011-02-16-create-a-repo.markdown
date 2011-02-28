---
layout: default
title: Create A Repo
description: Create the place where your commits will be stored
categories: bootcamp
main_category: bootcamp
---

<span class="intro">If you&rsquo;ve found yourself on this page, we&rsquo;re assuming you&rsquo;re brand new to Git and GitHub. This guide will walk you through the basics and explain a little bit about how everything works along the way.</span>

##<span>First:</span> Create A Repo

Every time you make a commit with Git, it is stored in a repository (a.k.a. &ldquo;repo&rdquo;). To put your project up on GitHub, you&rsquo;ll need to have a GitHub repository for it to live in.

<div class="more-info">
	<h4 class="compressed">More about repositories</h4>
	<div class="more-content">
		<p>
			Git stores all of your project files in a <em>repository.</em> If you are able to view hidden files on your system, you&rsquo;ll see a subdirectory called &ldquo;.git&rdquo; in the project directory where you run <code>git init</code>. This is where Git stores all of your commits, as well as everything else it needs. In addition to your local, you can also have remote repositories (like GitHub repos). Remote repositories are the same as your local repo, but stored on a different server or computer for easy collaboration, backup, and general awesomeness.
		</p>
	</div>
</div>

1. <span class="step-title">Create a new repo</span>

	Click &ldquo;New Repository.

	<img src="/images/bootcamp/bootcamp_2_newrepo.jpg" width="558" height="291" alt="Click &ldquo;New Repository" />
	
	Fill out the information on this page. When you&rsquo;re done, click &ldquo;Create Repository.&rdquo;
	
	<img src="/images/bootcamp/bootcamp_2_repoinfo.jpg" width="558" height="437" alt="Fill in the info" />
	
	Congratulations! You have successfully created your first repo!

##<span>Next:</span> Create a README for your repo.

While a README isn&rsquo;t a required part of a GitHub repo, it is a good idea to have one. READMEs are a great place to describe your project or add some documentation such as how to install or use your project.

<div class="more-info">
	<h4 class="compressed">More about READMEs</h4>
	<div class="more-content">
		<p>
			If you include a file with the filename &ldquo;README&rdquo; in your repo, it will automatically be shown on your repo&rsquo;s front page. Pretty cool, huh? GitHub supports a number of different README formats. The one in this tutorial will result in a basic text file but other formats like .markdown or .textile can be used to render HTML content like links and headers. For more info about the supported markup formats, check out the <a href="https://github.com/github/markup" target="_blank">github markup repo</a>.
		</p>
	</div>
</div>

1. <span class="step-title">Create the README file</span>

	In the prompt, type the following code:

	<pre class="terminal bootcamp">
	<span class="codeline">$ mkdir ~/Hello-World<span>Creates a directory for your project called "Hello-World" in your user directory</span></span>
	<span class="codeline">$ cd ~/Hello-World<span>Changes the current working directory to your newly created directory</span></span>
	<span class="codeline">$ git init<span>Sets up the necessary Git files</span></span>
	<span class="bash-output">Initialized empty Git repository in /Users/<em>your_user_directory</em>/Hello-World/.git/</span>
	<span class="codeline">$ touch README<span>Creates a file called &ldquo;README&rdquo; in your Hello-World directory</span></span>
	</pre>

	Open the new README file found in your Hello-World directory in a text editor and add the text &ldquo;Hello World!&rdquo; When you are finished, save and close the file.

2. <span class="step-title">Commit your README</span>

	Now that you have your README set up, it&ldquo;s time to commit it. A commit is essentially a snapshot of all the files in your project at a particular point in time. In the prompt, type the following code:
	
	<div class="more-info">
		<h4 class="compressed">More about commits</h4>
		<div class="more-content">
			<p>
				Think of a <em>commit</em> as a snapshot of your project &mdash;code, files, everything &mdash; at a particular point in time. More accurately, after your first commit, each subsequent commit is only a snapshot of your changes. For code files, this means it only takes a snapshot of the lines of code that have changed. For everything else like music or image files, it saves a new copy of the file.
			</p>
		</div>
	</div>
	
	<pre class="terminal bootcamp">
	<span class="codeline">$ git add README<span>Stages your README file, adding it to the list of files to be committed</span></span>
	<span class="codeline">$ git commit -m 'first commit'<span></span>Commits your files, adding the message "first commit"</span>
	</pre>
	
	The code above executes actions locally, meaning you still haven&rsquo;t done anything on GitHub yet. To connect your local repository to your GitHub account, you will need to set a remote for your repo and push your commits to it:
	
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