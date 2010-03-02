---
layout: default
title: Generating SSH keys (OSX)
description: Setting up SSH keys on Mac OSX
categories: mac
main_category: setup
---

This guide will step you through the process of generating a keypair on Mac OSX and uploading it to GitHub

Generating an SSH key on OSX is a fairly straightforward process.  First and foremost, open up Terminal.app.  You can usually find it at @/Applications/Utilities@.

h2. Backup and remove existing keys

p(. _If you have an existing keypair you wish to use, you can skip this step._

Unless this is your first time setting up ssh or git on your computer, you should double check that keys do not already exist.  If they do you can either use the existing key(s) or remove them.  In either case, you should make a backup of the keys.

First check to see if a ssh key directory exists.

<pre class="terminal">$ cd ~/.ssh</pre>

If you get a "No such file or directory" error, you can skip to "Generating a key".

<pre class="terminal">$ ls
config  id_rsa  id_rsa.pub  known_hosts
$ mkdir key_backup
$ cp id_rsa* key_backup
$ rm id_rsa*</pre>

Here we have an existing keypair, @id_rsa@ and @id_rsa.pub@, which we've copied into @~/.ssh/key_backup@ before removing.  By default, ssh will use keys in @~/.ssh@ that are named @id_rsa@, @id_dsa@ or @identity@.

h2. Generating a key

p(. _If you have an existing keypair you wish to use, you can skip this step._

Now that we're certain ssh won't use an existing key, it's time to generate a new keypair.  Lets make an RSA keypair:

<pre class="terminal">$ ssh-keygen -t rsa -C "tekkub@gmail.com"
Generating public/private rsa key pair.
Enter file in which to save the key (/Users/tekkub/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /Users/tekkub/.ssh/id_rsa.
Your public key has been saved in /Users/tekkub/.ssh/id_rsa.pub.
The key fingerprint is:
01:0f:f4:3b:ca:85:d6:17:a1:7d:f0:68:9d:f0:a2:db tekkub@gmail.com
The key's randomart image is:
+--[ RSA 2048]----+
|     .+   +      |
|       = o O .   |
|        = * *    |
|       o = +     |
|      o S .      |
|     o o =       |
|      o . E      |
|                 |
|                 |
+-----------------+</pre>

At the first prompt you can just hit enter to generate the key with the default name.  *You should use a good passphrase with your key.*  See "Working with SSH key passphrases":/working-with-key-passphrases for more details on why you should use a passphrase and how to avoid re-entering it every time you use your key.

p(. *Note:* If you don't use the default key names, or store your keys in a different path, you will need to run @ssh-add path/to/my_key@ so that ssh knows where to find your key.

h2. Adding the key to your GitHub account

Now launch your browser and open the "account page":https://github.com/account.  In the "SSH Public Keys" section click "add another public key", then paste your public key into the "key" field.  If you leave the title blank the key comment (your email) will be used for the title.

Make sure you use the public key (@id_rsa.pub@ in our example), and do not add any newlines or whitespace inside the key.  To ensure you copy the key correctly, you can copy the key directly into the clipboard from Terminal.app: <pre class="terminal">$ cat ~/.ssh/id_rsa.pub | pbcopy</pre>

!/images/add_key.png!

h2. Testing things out

Testing if our new key works is simple, we just ssh to github.  If this is the first time you're connecting you'll have to save the server's key.  You can confirm the fingerprint on the SSH keys tab of the "account settings page":https://github.com/account

<pre class="terminal">$ ssh git@github.com
The authenticity of host 'github.com (207.97.227.239)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,207.97.227.239' (RSA) to the list of known hosts.
ERROR: Hi tekkub! You've successfully authenticated, but GitHub does not provide shell access
Connection to github.com closed.
</pre>

If you do not get the "successfully authenticated" message, check out the "troubleshooting guide":http://github.com/guides/addressing-authentication-problems-with-ssh.
