---
layout: default
title: Sending pull requests
description: How to notify others of your changes using Pull Requests.
categories: collaborating
main_category: collaborating
---

Pull requests are a way to poke someone and let them know you've got some code
they may want.

They work great when you want to let an upstream maintainer know that you've
pushed some useful changes to your fork of their project.

They also work great if you want to let a fellow developer know that you've
pushed some experimental features to an arbitrary branch.

### Step One

First, navigate to your project with the changes you want someone else to pull.
In this instance, I'm going to go to
"defunkt/grit":http://github.com/defunkt/grit and tell mojombo to pull a change.

<img src="http://img.skitch.com/20080223-xw8wdwkg9abpjtuwu4wutwwcqm.png"/>

### Step Two

I can type in a message if I want and select any number of recipients.  By
default, I'll see everyone who has a project in my project's network.  If I want
to add someone else, I can use the autocompleter and click 'add.'

<img src="http://img.skitch.com/20080223-1njj3f5559un2eyt51j92t2xkf.png"/>

### Step Three

Sent!

<img src="http://img.skitch.com/20080223-8jf2dc17cdtibs2jt13ptgxwts.png"/>

### Step Four

When mojombo logs in, he'll see that there's a new message waiting for him.

<img src="http://img.skitch.com/20080223-rpgh5c4e1n38wc3e45cacq77ww.png"/>

### Step Five

<img src="http://img.skitch.com/20080223-p9erf1mhepf5gc7jy9kek9rgdn.png"/>

mojombo can reply to my message, delete it, or ignore it. Pulling from me is
easy. mojombo can add the defunkt repository as a remote source and fetch its
contents like this:

<pre class="console">
<span>$</span> git remote add defunkt git://github.com/defunkt/grit.git
<span>$</span> git fetch defunkt
</pre>

The 'git remote add' will stay in your repository configuration, so the next
time you get a pull request, you only need to fetch again. Note that to fetch
from a private repository, you need to use the private update URL.  If grit were
private for example, the remote add would look like,
"git@github.com:defunkt/grit.git".

N.B. fetch from a remote by default (without -n flag) would also cause all tags
from that remote to propagate to your local clone, which you might not like.
Thus you might prefer to use -n or just direct pulls from the remote repository
with   git pull git://github.com/defunkt/grit.git master .

Once you have the remote changes fetched locally, you can refer to them as
'remotename/branchname' to any git tool that accepts revision arguments or
lists; see the man page for 'git-rev-parse' and/or 'git-rev-list' for more, but
for example, to see the changes between your 'master' and defunkt's 'master',
  you could use:

<pre class="console">
<span>$</span> gitk master...defunkt/master
</pre>

To see the changes that the branch would introduce as a single patch is slightly
more complicated; if your two branches have diverged, then a simple 'git diff
defunkt/master' would show you those changes backed out as well.  This is not
what you want, you wanted to see what the effect of the merge would be, right?
You could use:

<pre class="console">
<span>$</span> git checkout master
<span>$</span> git diff $(git merge-base master defunkt/master) defunkt/master
</pre>

See below for a simpler way, if you are a n00b and shell scares you.

To merge the changes done in the defunkt repository to a local branch, e.g., the
master branch, you can run

<pre class="console">
<span>$</span> git checkout master
<span>$</span> git merge defunkt/master
</pre>

If you are not sure that you want to merge, and the above steps didn't work or
were too hard, you could use merge with --no-commit and then use git diff;

<pre class="console">
<span>$</span> git checkout master
<span>$</span> git merge --no-commit defunkt/master
<span>$</span> git diff HEAD
</pre>

Once you are finished, use 'git commit' to make the merge commit.

You can also use the git pull helper to do the fetch+merge in one step. This
comes in handy for one-shot pulls where you do not want to use the same
repository again in the near future:

<pre class="console">
<span>$</span> git checkout master
<span>$</span> git pull defunkt master
</pre>

Now that you have merged defunkt/grit's master branch, you should probably push
your branch to let others see the merge.
