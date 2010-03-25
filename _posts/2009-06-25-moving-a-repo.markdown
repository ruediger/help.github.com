---
layout: default
title: Moving a repo
description: How to move a repo from one account to another
categories: repos
---

This guide details the process of moving a repo to another account.  There are two ways to do this: manually cloning and pushing to a new repo, or forking the repo and changing the network's root.

Forking and Rooting
-------------------

The simplest route to transfer ownership is to make a fork and change the root.  To do this:

* Add the new owner as a collab if the repo is private
* Fork the repo on the new owner's account
* Contact [support](support@github.com) from the email of the current owner's account and request the new owner's fork be made the root.

Note that if the repo is private the new owner will need a paid plan to support the repo.  Issues, wikis, pages, commits comments and non-repo downloads will not be transferred to the new root.  Make sure you do not delete your old repo if you have any of these you wish to keep.

Manual clone and push
---------------------

This method is a bit more involved, but will create an exact mirror of the repo into the new repo.  Forks, collaborators and non-repo data will **not** be transferred to the new repo, it will be a fresh mirror.

First, create a new repo on the target account.  Next, create a mirror that includes all branches and tags.  To do this you need to do a bare-clone followed by a mirror-push:

<pre class="terminal">
git clone --bare git@github.com:myaccount/my-old-repo.git
cd my-old-repo
git push --mirror git@github.com:mycompany/our-new-repo.git
cd ..
rm -rf my-old-repo
</pre>
