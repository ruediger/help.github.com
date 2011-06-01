---
layout: default
title: Send pull requests
description: How to notify others of your changes using Pull Requests.
categories: beginner
---

<style type="text/css">
.main img {
  border:1px solid #eee;
  padding:5px;
}
.main img.inline {
  vertical-align:middle;
  border:0;
}
</style>

<p class="intro">Pull requests let you tell others about changes you've pushed to a GitHub
repository. Once a pull request is sent, interested parties can review the set
of changes, discuss potential modifications, and even push follow-up commits if
necessary.</p>

<p class="intro">This guide walks through the process of sending a hypothetical pull request and
using the various code review and management tools to take the change to
completion.</p>

## A Quick Note on Collaborative Development Models

There are two popular models of collaborative development on GitHub:

 1. The *Fork + Pull Model* lets anyone fork an existing repository and
    push changes to their personal fork without requiring access be granted
    to the source repository. The changes must then be pulled into the source
    repository by the project maintainer. This model reduces the amount of
    friction for new contributors and is popular with open source projects
    because it allows people to work independently without upfront
    coordination.

 2. The *Shared Repository Model* is more prevalent with small teams and
    organizations collaborating on private projects. Everyone is granted push
    access to a single shared repository and topic branches are used to isolate
    changes.

Pull requests are especially useful in the *Fork + Pull Model* because they
provide a way to notify project maintainers about changes in your fork. However,
they're also useful in the *Shared Repository Model* where they're used to
initiate code review and general discussion about a set of changes before being
merged into a mainline branch.

## Before You Begin

This guide assumes that [you have a GitHub account](http://github.com/signup),
that you've forked an existing repository and pushed your changes. For help with
forking and pushing changes, see the [Forking a project](/forking/) topic.

## Initiating The Pull Request

In the following example, **kneath** has completed some work on an error page
for the GitHub Jobs web application, pushed three commits to a topic branch in
his fork, and would like someone to review and merge.

Navigate to **your repository** with the changes you want someone else to pull and
press the *Pull Request* button.

![](http://img.skitch.com/20100831-qfk1c9wyt89pfgfxg61bh1r8rn.png)

Pull requests can be sent from any branch or commit but it's recommended that a
topic branch be used so that follow-up commits can be pushed to update the pull
request if necessary.

## Previewing The Pull Request

After pressing the *Pull Request* button, you are presented with a preview page
where you can enter a title and optional description, see exactly what
commits will be included when the pull request is sent, and also see who the
pull request will be sent to:

![](http://img.skitch.com/20100831-qit9sjhuqk42t4ww91ifm5tm81.png)

If you're sending from a topic branch, the title is pre-filled based on the name
of the branch. Markdown is supported in the description, so you can embed images
or use preformatted text blocks.

Switch to the *Commits* tab to ensure that the correct set of changes is being
sent:

![](http://img.skitch.com/20100831-c9g4pcsjwnfj14csrpytenxyfn.png)

Review the diff of all changes by switching to the *Files Changed* tab:

![](http://img.skitch.com/20100831-qpc5bu8grycefnnbaagnuwbckq.png)

## Changing The Commit Range and Destination Repository

By default, pull requests are assumed to be based on the parent-most
repository's integration branch. In this case, the `kneath/jobs` repository was
forked from `github/jobs` so the pull request is assumed to be based on the
`master` branch of the `github/jobs` repository. In a great majority of cases,
the defaults will be right; however, if any of this information is incorrect, press
the *Change Commits* button.

![](http://img.skitch.com/20100831-nm1mgb6n8ng7e4nrdesucqx98h.png)

The commit range selector will expand, allowing the base repository, base
branch, and head branch to be customized:

![](http://img.skitch.com/20100831-pwsq1inmr7m7y61dfcyxnhjkkd.png)

The easiest way of thinking about the commit range is this: the *base branch* is
**where** you think changes should be applied, the *head branch* is **what** you
would like to be applied.

Changing the base repository changes who is notified of the pull request.
Everyone that can push to the base repository will receive an email notification
and see the new pull request in their dashboard the next time they log in.

Once you're happy with the commit range, press the *Update Commit Range* button
to update the commit and files changed preview areas.

## Sending The Pull Request

Once you've entered the title and description, made any necessary customizations
to the commit range, and reviewed the commits and file changes to be sent, press
the *Send pull request* button.

![](http://img.skitch.com/20100831-fe6i533swbgsgypgc645f999i.png)

The pull request is sent immediately. You're taken to the main pull request
discussion and review page. Additionally, all repository collaborators and
followers will see an event in their dashboard:

![](http://img.skitch.com/20100831-bj3rg8bac4buemstnwqy7wwxq2.png)

## Managing Pull Requests

All pull requests sent or received by you are browseable through the pull
request dashboard.

![](http://img.skitch.com/20100831-xfscxin81wj5j3gwyas2sd398q.png)

Pull requests for a specific repository are also browseable by anyone with
access by visiting the *Network -> Pull Requests* page.

![](http://img.skitch.com/20100823-bahbpwpemx3jh2kpke77d2dxtc.png)

The pull request dashboard and the repository pull request list support a wide
range of filtering and sorting controls. Use them to narrow down the list to
the pull requests you're interested in.

## Reviewing Proposed Changes

When you receive a pull request, the first thing to do is review the set of
proposed changes. Pull requests are tightly integrated with the underlying git
repository, so you can see exactly what commits would be merged should the
request be accepted:

![](http://img.skitch.com/20100831-81im4n771y5tcwg3ryixajtfeg.png)

You can also review the cumulative diff of all file changes across all commits.

![](http://img.skitch.com/20100831-enh8t415ryr5b1sw45shq9ier3.png)

## Pull Request Discussion

After reviewing the basic description, commits, and cumulative diff, the person
tasked with applying the changes may have questions or comments. Perhaps the
coding style doesn't match project guideline, or the change is missing unit
tests, or maybe everything looks great and some props are in order. The
discussion view is designed to encourage and capture this type of discussion.

![](http://img.skitch.com/20100831-j7fapxihs2a3i48ai5qmqceskp.png)

The discussion view starts with the pull request's original title and
description and then captures additional activity to display chronologically
from there. Any of the following types of activity are captured as they happen:

 * Comments left on the pull request itself.
 * Additional commits pushed to the pull request's branch.
 * File and line notes left on any of the commits included in the pull request's range.

Pull request comments are Markdown compatible, so you can embed images, use
preformatted text blocks, and other formatting supported by Markdown.

## Merging a Pull Request

Once the pull request is deemed satisfactory, someone with push access to the
destination repository must apply the changes and push the updated branch.
There are a variety of ways to accomplish this. Three popular methods are
described below.

#### Fetch and Merge

This is the most common method of fetching and applying changes. It requires
adding a remote for the person that sent the pull request, fetching from that
repository, merging the requested branch, fixing any conflicts, and pushing
the newly merged branch back to the repository:

<pre class="console">
<span>$</span> git checkout master
<span>$</span> git remote add kneath git://github.com/kneath/jobs.git
<span>$</span> git fetch kneath
<span>$</span> git merge kneath/error-page
<span>$</span> git push origin master
</pre>

#### Patch and Apply

The *fetch and merge* approach works great when you're working on a team or
repeatedly applying changes from the same small group of people. Another
approach that's a bit quicker in one-off cases is to use `git-am`.

Every pull request has a `.patch` URL where you can grab a textual patch file
to feed into the `git-am` command:

<pre class="console">
<span>$</span> git checkout master
<span>$</span> curl http://github.com/github/jobs/pull/25.patch | git am
<span>$</span> git push origin master
</pre>

#### Auto Merge

In many cases it is possible to ask github to auto merge a pull request using
the merge button. This was made possible with the launch of Pull Requests 2.0
and is covered in the [related blog post](https://github.com/blog/843-the-merge-button).

## Closing a Pull Request

Pull Requests are automatically closed when the requested commits are merged
into the destination repository. An event is generated to let all repository
collaborators and followers know that the merge occurred:

![](http://img.skitch.com/20100831-x9ush35wkyxwmw4sw8yd5sx1eg.png)

It's also possible to manually close a pull request in cases where the set of
changes are rejected. This is also sometimes necessary if the changes are
applied with `git-cherry-pick` or using some other mechanism that disallows the
merge from being detected.
