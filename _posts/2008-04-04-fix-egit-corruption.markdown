---
layout: default
title: Fix egit corruption
description: How to fix corruption in a remote repo caused by egit
categories: troubleshooting
---

Due to a bug in the [EGit](http://eclipse.org/egit/)/[JGit](http://eclipse.org/jgit/) implementation of the `git push` command, remote repos can become corrupted due to missing objects:

<pre class="terminal">$ git fsck
broken link from  commit 5b90a930763c442f0fc3d819685083b4eda69f8e
              to  commit e1ea55d308b7808cb982f509c8dfa199ada4677e
missing commit e1ea55d308b7808cb982f509c8dfa199ada4677e</pre>

This can prevent cloning and fetching from the repo.  The objects were never pushed to the remote repo, therefore support cannot recover the repo directly for the user.  The only solution is for the user that pushed the commits to push them again from the command line.

_This issue was fixed in EGit/JGit 0.8.4.  We recommend updating and trying the following commands from EGit/JGit before resorting to the commandline._

Correcting the remote repo
--------------------------

To correct the remote repo the missing objects need to be re-pushed from an uncorrupted repo.  This should be done from the command line, not from egit.  To start, run `git fsck` on your local repo to ensure it has not been corrupted.  If you do not receive any errors about broken links or missing objects, you're clear to continue.

Re-pushing is a simple matter of deleting the remote branch and then pushing it again.  We'll use the first commit in the branch so that we can ensure all the other commits are re-pushed.

If the branch being deleted is the default branch on the remote you'll need to replace it temporarily.  You can do this in the repo's admin page:

![default](http://img.skitch.com/20100203-jm7pty6kf1c72yfksunyf5g5n9.jpg)

<pre class="terminal">$ git log --pretty=oneline | tail -n 1 <span class="comment"># Find the first commit</span>
3b70d98cb968fc35f0c99acfe4d5dfa976ed2536 Initial commit
$ git branch temp_default 3b70d98cb968fc35f0c99acfe4d5dfa976ed2536
$ git push origin temp_default
<span class="comment"># Change the remote default branch to temp_default</span>
$ git push origin :master
$ git push origin master
<span class="comment"># Set the remote default back to master</span>
$ git push origin :temp_default</pre>

You may need to do this for many branches if the remote repo has more than one branch that was pushed by egit.  You can skip `git remote set-head` for these other branches.

After you've pushed and reset HEAD, testing the repo repo is just a matter of cloning it:

<pre class="terminal">$ git clone git://github.com/tekkub/test.git
Initialized empty Git repository in /Users/tekkub/tmp/test/.git/
remote: Counting objects: 1815, done.
remote: Compressing objects: 100% (838/838), done.
remote: Total 1815 (delta 1139), reused 1552 (delta 961)
Receiving objects: 100% (1815/1815), 537.69 KiB | 549 KiB/s, done.
Resolving deltas: 100% (1139/1139), done.</pre>

If you have re-pushed all branches in your repo and cloning still fails, please [contact support](https://github.com/contact) and open a ticket.  Be sure to include a link to your repo and mention that you've already performed the steps on this page.

Avoiding future corruption
--------------------------

We recommend users avoid using EGit/JGit to push their repos if they are using a version prior to 0.8.4.