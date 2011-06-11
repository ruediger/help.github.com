---
layout: default
title: Move a repo
description: How to move a repo from one account to another
categories: beginner
---

This guide details the process of moving a repo to another account.

Direct move
-----------

You can transfer a repository you own into an organization account for which you have admin rights. This covers the majority of cases. You can [contact support](https://github.com/contact) in the rare chance you want to transfer to another user.

In the admin page of your repository, you can find the following section:

![Type in the new owner and click the "Tranfer" button.](/images/danger_zone_transfer.jpg)

There are a few caveats, especially with regards to private repos:

* The target user must not have a repository with the same name, or a fork in the same network.
* If the repository is private the target user must have a paid account with at least one unused private repository available.
* Private forks cannot be transferred, only root private repos.

We cannot set up redirects with git, so every clone of the repository will need to have its remote updated. All you need to run to update your local repository is

<pre class="terminal">
git remote set-url remote_name new_url
</pre>

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
