---
layout: default
title: Install Git HTML help
description: How to install the local git HTML help files
categories: intermediate
---

<p class="intro">This guide will help you install the local git HTML help files and set git to use them by default instead of the man pages.</p>

<p class="intro">Most git installations will install man files for help, but not the HTML help files (the same files seen on git's <a href="http://www.kernel.org/pub/software/scm/git-core/docs/">online documentation</a>).  Installing these help files is a fairly simple process.</p>

Windows
-------

[Msysgit](http://code.google.com/p/msysgit/) installs and sets the HTML help files as the default automatically.  You don't need to do anything!

OSX
---

To install web docs we simply need to clone the main git repo to the correct path and check out the "html" branch.  Your documentation path may be different, pay attention to the output of `git help --web commit` for where your git is set to look for the HTML files.

<pre class="terminal">
$ git help --web commit
fatal: '/usr/local/git/share/doc/git-doc': not a documentation directory.

$ sudo mkdir -p /usr/local/git/share/doc
$ cd /usr/local/git/share/doc
$ sudo git clone git://git.kernel.org/pub/scm/git/git.git git-doc --branch html
</pre>

To verify that the web docs now work, run `git help --web commit`.  If your browser launches then you're good to go.  You can now set git to default to the web docs by running `git config --global help.format web`

### Updating the docs

Updating is a simple matter of pulling:

<pre class="terminal">
$ cd /usr/local/git/share/doc
$ sudo git pull
</pre>
