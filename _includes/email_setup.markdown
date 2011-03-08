
1. <span class="step-title">Set your username and email.</span>

	Git tracks who makes each commit by checking the user&rsquo;s name and email. In addition, we use this info to associate your commits with your GitHub account. To set these, enter the code below, replacing the name and email with your own. The name should be your _actual name_, not your GitHub username.

	<pre class="terminal bootcamp">
		<span class="codeline">$ git config --global user.name "<em>Firstname Lastname</em>"<span>Sets the name of the user for all git instances on the system</span></span>
		<span class="codeline">$ git config --global user.email "<em>your_email@youremail.com</em>"<span>Sets the email of the user for all git instances on the system</span></span>
	</pre>

	<div class="more-info">
		<h4 class="compressed">More about user info</h4>
		<div class="more-content">
			<p>
				The steps listed above show you how to set your user info globally. This means that no matter which repo you work in on your computer, you&rsquo;ll be making commits as that user. If you find yourself needing to make commits with different user info for a specific repo (perhaps for work vs. personal projects), you will have to change the info in that repo itself.
			</p>
			<pre class="terminal bootcamp">
				<span class="codeline">$ cd <em>my_other_repo</em><span>Changes the working directory to the repo you need to switch info for</span></span>
				<span class="codeline">$ git config user.name "<em>Different Name</em>"<span>Sets the user's name for this specific repo</span></span>
				<span class="codeline">$ git config user.email "<em>differentemail@email.com</em>"<span>Sets the user's email for this specific repo</span></span>
			</pre>
			<p>
				Now your commits will be &ldquo;blamed&rdquo; on (associated with) new user name and email whenever working in the specified repo.
			</p>
		</div>
	</div>

2. <span class="step-title">Set your GitHub token.</span>

	Some tools connect to GitHub without SSH. To use these tools properly you need to find and configure your API Token.

	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;Account Admin.&rdquo;_

	<img src="/images/bootcamp/bootcamp_1_token.jpg" width="558" height="245" alt="Copy your API token" />

	At the command line run the following code, using your GitHub username and token in place of the ones shown.

	<pre class="terminal bootcamp">
		<span class="codeline">$ git config --global github.user <em>username</em><span>Sets the GitHub username for all git instances on the system</span></span>
		<span class="codeline">$ git config --global github.token <em>0123456789yourf0123456789token</em><span>Sets the GitHub token for all git instances on the system</span></span>
	</pre>

	__&#42;Note&#42;__ If you ever change your GitHub password, a new token will be created and will need to be updated.
