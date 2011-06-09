
1. <span class="step-title">Check for SSH keys. <span>Have an existing key pair? You can skip to Step 4.</span></span>

	First, we need to check for existing ssh keys on your computer:

	<pre class="terminal bootcamp">
	<span class="codeline">$ cd ~/.ssh<span>Checks to see if there is a directory named ".ssh" in your user directory</span></span>
	</pre>

	If it says &ldquo;No such file or directory&ldquo; skip to __step 3__. Otherwise continue to __step 2__.

2. <span class="step-title">Backup and remove existing SSH keys.</span>

	Since there is already an SSH directory you&rsquo;ll want to back the old one up and remove it:

	<pre class="terminal bootcamp">
	<span class="codeline">$ ls<span>Lists all the subdirectories in the current directory</span></span>
	<span class="bash-output">config	id_rsa	id_rsa.pub	known_hosts</span>
	<span class="codeline">$ mkdir key_backup<span>makes a subdirectory called "key_backup" in the current directory</span></span>
	<span class="codeline">$ cp id_rsa* key_backup<span>Copies the contents of the id_rsa directory into key_backup	 </span></span>
	<span class="codeline">$ rm id_rsa*<span>Deletes the contents of the id_rsa directory</span></span>
	</pre>

3. <span class="step-title">Generate a new SSH key.</span>

	To generate a new SSH key, enter the code below. We want the default settings so when asked to enter a file in which to save the key, just press enter.

	<pre class="terminal bootcamp">
	<span class="codeline">$ ssh-keygen -t rsa -C "<em>your_email@youremail.com</em>"<span>Creates a new ssh key using the provided email</span></span>
	<span class="bash-output">Generating public/private rsa key pair.</span>
	<span class="bash-output">Enter file in which to save the key (/Users/<em>your_user_directory</em>/.ssh/id_rsa):<em>&lt;press enter&gt;</em></span>
	</pre>

	Now you need to enter a passphrase.

	<div class="more-info">
		<h4 class="compressed">Why do passphrases matter?</h4>
		<div class="more-content">
			<p>Passwords aren&rsquo;t very secure, you already know this. If you use one that&rsquo;s easy to remember, it&rsquo;s easier to guess or brute-force (try many options until one works). If you use one that&rsquo;s random it&rsquo;s hard to remember, and thus you&rsquo;re more inclined to write the password down. Both of these are Very Bad Things&trade;. This is why you&rsquo;re using ssh keys.</p>

			<p>But using a key without a passphrase is basically the same as writing down that random password in a file on your computer. Anyone who gains access to your drive has gained access to every system you use that key with. This is also a Very Bad Thing&trade;. The solution is obvious: add a passphrase.</p>

			<p><em>But I don&rsquo;t want to enter a long passphrase every time I use the key!</em></p>

			<p>Neither do we! Thankfully, there&rsquo;s a nifty little tool called <code>ssh-agent</code> that can save your passphrase securely so you don&rsquo;t have to re-enter it. If you&rsquo;re on OSX Leopard or later your keys can be saved in the system&rsquo;s keychain to make your life even easier.</p>

			<p>For more information about SSH key passphrases, check out our <a href="/working-with-key-passphrases">help guide</a>.</p>
		</div>
	</div>

	<pre class="terminal bootcamp">
	<span class="bash-output">Enter passphrase (empty for no passphrase):<em>&lt;enter a passphrase&gt;</em></span>
	<span class="bash-output">Enter same passphrase again:<em>&lt;enter passphrase again&gt;</em></span>
	</pre>

	Which should give you something like this:

	<pre class="terminal bootcamp">
	<span class="bash-output">Your identification has been saved in /Users/<em>your_user_directory</em>/.ssh/id_rsa.</span>
	<span class="bash-output">Your public key has been saved in /Users/<em>your_user_directory</em>/.ssh/id_rsa.pub.</span>
	<span class="bash-output">The key fingerprint is:</span>
	<span class="bash-output">01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db <em>user_name@username.com</em></span>
	<span class="bash-output">The key's randomart image is:</span>
	<span class="bash-output">+--[ RSA 2048]----+</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.+&nbsp;&nbsp;&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;o&nbsp;O&nbsp;.&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;*&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;=&nbsp;+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;S&nbsp;.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;o&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;.&nbsp;E&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</span>
	<span class="bash-output">+-----------------+</span>
	</pre>

4. <span class="step-title">Add your SSH key to GitHub.</span>

	On the GitHub site _Click &ldquo;Account Settings&rdquo;_ &gt; _Click &ldquo;SSH Public Keys&rdquo;_ &gt; _Click &ldquo;Add another public key&rdquo;_

	Open the id_rsa.pub file with a text editor (Notepad, TextEdit, or gedit will do just fine). This is your public SSH key. You may need turn on &ldquo;view hidden files&rdquo; to find it because the <em>.ssh</em> directory is hidden. <span class="attention">It&rsquo;s important you copy your SSH key exactly as it is written without adding any newlines or whitespace.</span> Now paste it into the &ldquo;Key&rdquo; field.

	<div class="more-info">
		<h4 class="compressed">Can&rsquo;t view hidden files? Other ways to copy:</h4>
		<div class="more-content">
			<h4>OSX</h4>
			<pre class="terminal bootcamp">
			<span class="codeline">$ pbcopy &lt; ~/.ssh/id_rsa.pub<span>Copies the contents of the id_rsa.pub file to your clipboard</span></span>
			</pre>
			<h4>Windows</h4>
			<p>Unfortunately, there isn&rsquo;t an easy way to do this from the command line for Windows users. You'll have to use the instructions above.</p>
			<h4>Linux</h4>
			<pre class="terminal bootcamp">
			<span class="codeline">$ sudo apt-get install xclip<span>Downloads and installs xclip</span></span>
			<span class="codeline">$ xclip -sel clip &lt; ~/.ssh/id_rsa.pub<span>Copies the contents of the id_rsa.pub file to your clipboard</span></span>
			</pre>
		</div>
	</div>

	Now paste it into the &ldquo;Key&rdquo; field.

	<img src="/images/bootcamp/bootcamp_1_ssh.jpg" width="558" height="402" alt="Paste your SSH Key" />

	Hit &ldquo;Add Key.&rdquo;

5. <span class="step-title">Test everything out.</span>

	To make sure everything is working you&rsquo;ll now SSH to GitHub. <span class="attention">Don&rsquo;t change the &ldquo;git@github.com&rdquo; part.</span> That&rsquo;s supposed to be there.

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

	<div class="more-info">
		<h4 class="compressed">Having problems?</h4>
		<div class="more-content">
			<p>Setting up SSH can be problematic some times. Here are some frequent issues people run into:</p>
			<h4>SSH to GitHub</h4>
			<p>When it came time to run <code>$ ssh git@github.com</code> did you type your own email in there? If you did, you will need to run it again, making sure it says &ldquo;git@github.com&rdquo;. This is important because it is the address you are trying to SSH to (GitHub), not your email address.</p>
			<h4>Sudo</h4>
			<p>Are you using <code>sudo</code>? If you don&rsquo;t know what that means, then you probably aren&rsquo;t. If you are using it, stop! You shouldn&rsquo;t use <code>sudo</code> unless you have a very good reason.</p>
			<h4>Agent admitted failure to sign using the key</h4>
			<p>This one only seems to happen to Linux users. To solve it, try this:</p>
			<pre class="terminal bootcamp">
			<span class="codeline">$ ssh-add ~/.ssh/id_rsa<span>Associates your ssh key with ssh-agent</span></span>
			</pre>
			<p>If that doesn&rsquo;t solve it, check out <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786">this thread</a>.</p>
			<h4>My connection was refused</h4>
			<p>You may be blocked by a firewall. First, you should check your ssh debug info:</p>
			<pre class="terminal bootcamp">
			<span class="codeline">$ ssh -v git@github.com<span>Prints debug info for the git@github.com SSH connection</span></span>
			</pre>
			<p>Make sure it is connecting to GitHub on port 22. If it is, check to make sure your firewall is not blocking port 22.</p>
			<h4>When all else fails</h4>
			<p>If none of these solved your problem, check out <a href="/troubleshooting-ssh">this guide</a> or contact <a href="https://github.com/contact">GitHub support</a></p>
		</div>
	</div>