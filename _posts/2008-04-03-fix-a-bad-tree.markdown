---
layout: default
title: Fix a bad tree
description: How to fix the bad tree error on a github repo caused by egit
categories: troubleshooting
---

Due to a bug in egit's implementation of the `git rm` command, empty trees may not be removed from the index and result in a "bad tree" error on github:

![](https://img.skitch.com/20110308-875n82b15ktc8kc34wdaj1euky.jpg)

Fixing the repo
---------------

Fixing this error is fairly simple with the commandline.  To fix the error you need to recreate the tree and then remove it using `git rm` to ensure it is removed correctly.

For example, if the bad tree is at `badtree/` we would run:

<pre class="terminal">tekkub@iSenberg ~/tmp/fixing_bad_tree master
> mkdir badtree

tekkub@iSenberg ~/tmp/fixing_bad_tree master
> touch badtree/temp

tekkub@iSenberg ~/tmp/fixing_bad_tree master
> git add badtree/temp

tekkub@iSenberg ~/tmp/fixing_bad_tree master+
> git commit -m "Fixing bad tree, step one"
[master dbe6a08] Fixing bad tree, step one
 0 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 badtree/temp

tekkub@iSenberg ~/tmp/fixing_bad_tree master
> git rm badtree/temp
rm 'badtree/temp'

tekkub@iSenberg ~/tmp/fixing_bad_tree master+
> git commit -m "Fixing bad tree, step two"
[master 46ae6d2] Fixing bad tree, step two
 0 files changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 badtree/temp
</pre>

We can then confirm the tree is removed by making sure it is not listed by `git ls-tree`:

<pre class="terminal">tekkub@iSenberg ~/tmp/fixing_bad_tree master
> git ls-tree -r HEAD | grep badtree
</pre>

If this returns no results, push the repo and everything should be fixed!

Avoiding future corruption
--------------------------

We recommend users avoid using egit to remove files from their repos.  Always use `git rm` from the command line.
