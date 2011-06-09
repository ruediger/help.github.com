---
layout: default
title: Move a repo
description: How to move a repo from one account to another
categories: beginner
---

This guide details the process of moving a repo to another account.

Direct move
-----------

You can transfer ownership of a repository you own in the Admin page of your repository. For example https://github.com/amiridis/playground/admin. There you can find the following section:

![Type in the new owner and click the "Tranfer" button.](/images/danger_zone_transfer.jpg)

Existing forks
--------------

If a fork of the repo you wish to move already exists on the target account, you can [contact support](https://github.com/contact) to have the roots switched.  Note that deleting the root repo will either delete all forks if the repo is private, or automatically pick a new root if the repo is public.  You cannot pick which repo will become the root, so please contact support if you want a specific repo to become the new root.

Note that if the repo is private the new owner will need a paid plan to support the repo.  Issues, wikis, pages, commits comments and non-repo downloads **will not** be transferred to the new root.  Make sure you do not delete your old repo if you have any of these you wish to keep.

Manual clone and push
---------------------

If you have a repo on an external server that you wish to move to GitHub, you can move it with a special clone and push.  This method will create an exact mirror of the repo into the new repo.

First, create a new repo on the target account.  Next, create a mirror that includes all branches and tags.  To do this you need to do a bare-clone followed by a mirror-push:

<pre class="terminal">
git clone --bare url/for/my-old-repo.git
cd my-old-repo.git
git push --mirror git@github.com:mycompany/my-new-repo.git
cd ..
rm -rf my-old-repo.git
</pre>
