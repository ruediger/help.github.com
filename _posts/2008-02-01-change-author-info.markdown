---
layout: default
title: Change author info
description: How to modify author info in your repo's history
categories: intermediate
---

<p class="intro">If you need to modify the author info in your repo's history, you can do so with this script.</p>

<p class="attention"><strong>Big bold warning</strong> This action is destructive to your repo's history.  It's best to do this on a clone, just in case.  Also beware that this should not be performed on a repo that has been shared with others.  Use at your own risk.</p>

{% highlight bash %}
#!/bin/sh

git filter-branch --env-filter '

an="$GIT_AUTHOR_NAME"
am="$GIT_AUTHOR_EMAIL"
cn="$GIT_COMMITTER_NAME"
cm="$GIT_COMMITTER_EMAIL"

if [ "$GIT_COMMITTER_EMAIL" = "your@email.to.match" ]
then
    cn="Your New Committer Name"
    cm="Your New Committer Email"
fi
if [ "$GIT_AUTHOR_EMAIL" = "your@email.to.match" ]
then
    an="Your New Author Name"
    am="Your New Author Email"
fi

export GIT_AUTHOR_NAME="$an"
export GIT_AUTHOR_EMAIL="$am"
export GIT_COMMITTER_NAME="$cn"
export GIT_COMMITTER_EMAIL="$cm"
'
{% endhighlight %}