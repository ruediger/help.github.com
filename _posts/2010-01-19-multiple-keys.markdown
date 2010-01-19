---
layout: default
title: Multiple SSH keys
description: How to push using different SSH keys on the same computer
categories: other
---

This guide assumes you have already created two keypairs and attached them to different GitHub user accounts.  For this example we will be using `~/.ssh/id_rsa` attached to the user `joe` and `~/.ssh/id_rsa_client` attached to the user `client`.

Adding your keys to SSH
=======================

The first keypair, `~/.ssh/id_rsa`, uses a default name, so we don't need to do anything special to make SSH use this pair.  The second pair, however, is not a default name.  Therefore, we need to tell ssh about it so that it can use it:

<pre class="terminal">ssh-add ~/.ssh/id_rsa_client</pre>

If the keypair has a passphrase on it (it should!), `ssh-add` will ask you to enter the passphrase.  After you have done this, the key will be available from ssh-agent so you won't have to re-enter the passphrase every time you use it.

Configuring SSH
===============

Once SSH has access to both keys, you need to tell it which key to use for which server.  In most cases you can assume that SSH will fall back to `~/.ssh/id_rsa` by default, but we're going to force it anyway.  To begin, open `~/.ssh/config` in your favorite editor.

<script src="http://gist.github.com/281414.js?file=config"></script>

In short what this does is tells SSH to use the client key when connecting to the server github-client, which is really github.com.

Using the second key
====================

From here on, everything is the same as everyday use except for one component, the domain name.  When working on a repo owned by the primary account, we would use a command like:

<pre class="terminal">git clone git@github.com:joe/my_repo.git</pre>

When we want to use the second account's key, however, we need to change the domain name.  Doing so will use the settings in `~/.ssh/config` to override the defaults.

<pre class="terminal">git clone git@github-client:client/his_repo.git</pre>
