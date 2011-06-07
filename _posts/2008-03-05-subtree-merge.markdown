---
layout: default
title: Subtree Merge
description: How to use subtree merge to merge one repo into another as a subpath.
categories: advanced
---

<p class="intro">There are times when submodules are not adequate for the task at hand.  For example, blending multiple repos together into one single repo while still maintaining the history of each repo.  To do this, the subtree merge strategy is a better solution.</p>

Setting up and doing the first merge
------------------------------------

For this example, we'll make an empty "parent" repo and some other repos into it as subpaths.

First, set up an empty repo for our example:

<pre class="terminal">
[tekkub@tekBook: ~/tmp master*]
$ mkdir test

[tekkub@tekBook: ~/tmp master*]
$ cd test

[tekkub@tekBook: ~/tmp/test master*]
$ git init
Initialized empty Git repository in /Users/tekkub/tmp/test/.git/

[tekkub@tekBook: ~/tmp/test master#]
$ touch .gitignore

[tekkub@tekBook: ~/tmp/test master#]
$ git add .gitignore

[tekkub@tekBook: ~/tmp/test master#]
$ git commit -m "initial commit"
[master (root-commit) 3146c2a] initial commit
 0 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .gitignore
</pre>

Now we'll subtree-merge the repo [tekkub/cork](https://github.com/tekkub/cork) into the repo at `cork/`

<pre class="terminal">
[tekkub@tekBook: ~/tmp/test master]
$ git remote add -f cork git://github.com/tekkub/cork.git
Updating cork
warning: no common commits
remote: Counting objects: 1732, done.
remote: Compressing objects: 100% (750/750), done.
remote: Total 1732 (delta 1086), reused 1558 (delta 967)
Receiving objects: 100% (1732/1732), 528.19 KiB | 621 KiB/s, done.
Resolving deltas: 100% (1086/1086), done.
From git://github.com/tekkub/cork
 * [new branch]      lastbuffed -> cork/lastbuffed
 * [new branch]      lock_n_mount -> cork/lock_n_mount
 * [new branch]      master     -> cork/master
 * [new branch]      nothing_to_see_here -> cork/nothing_to_see_here

[tekkub@tekBook: ~/tmp/test master]
$ git merge -s ours --no-commit cork/master
Automatic merge went well; stopped before committing as requested

[tekkub@tekBook: ~/tmp/test master|MERGING]
$ git read-tree --prefix=cork/ -u cork/master

[tekkub@tekBook: ~/tmp/test master+|MERGING]
$ git commit -m "Subtree merged in cork"
[master fe0ca25] Subtree merged in cork
</pre>

Next, we'll merge in [tekkub/panda](https://github.com/tekkub/panda) into the path `panda/`

<pre class="terminal">
[tekkub@tekBook: ~/tmp/test master]
$ git remote add -f panda git://github.com/tekkub/panda.git
Updating panda
warning: no common commits
remote: Counting objects: 974, done.
remote: Compressing objects: 100% (722/722), done.
remote: Total 974 (delta 616), reused 399 (delta 251)
Receiving objects: 100% (974/974), 189.56 KiB, done.
Resolving deltas: 100% (616/616), done.
From git://github.com/tekkub/panda
 * [new branch]      master     -> panda/master
 * [new branch]      transmute  -> panda/transmute

[tekkub@tekBook: ~/tmp/test master]
$ git merge -s ours --no-commit panda/master
Automatic merge went well; stopped before committing as requested

[tekkub@tekBook: ~/tmp/test master|MERGING]
$ git read-tree --prefix=panda/ -u panda/master

[tekkub@tekBook: ~/tmp/test master+|MERGING]
$ git commit -m "Subtree merged in panda"
[master 726a2cd] Subtree merged in panda
</pre>

Finally, we're going to merge the subpath `modules/` from tekkub/cork into `cork2/`

<pre class="terminal">
tekkub@iSenberg ~/tmp/test master
$ git merge -s ours --no-commit cork/master
Automatic merge went well; stopped before committing as requested

tekkub@iSenberg ~/tmp/test master|MERGING
$ git read-tree --prefix=cork2/ -u cork/master:modules

tekkub@iSenberg ~/tmp/test master+|MERGING
$ git commit -m "Subtree merged in cork/modules"
[master f240057] Subtree merged in cork/modules
</pre>

Pulling in changes
------------------

If the merged repo changes in the future, you can pull in its changes by simply using the `-s subtree` flag:

<pre class="terminal">
[tekkub@tekBook: ~/tmp/test master]
$ git pull -s subtree panda master
</pre>

Resources
---------

* [How to use the subtree merge strategy](http://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html)
