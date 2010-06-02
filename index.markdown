---
layout: default
title: Welcome
---

Welcome to the GitHub Help site. Here we have compiled many guides to help you set up and use git and GitHub.

Use the sidebar on the right side of this site to access our guides!

If you would like to submit your own guides, please fork [our repo](http://github.com/github/help.github.com/) and send pull requests to [tekkub](http://github.com/tekkub)


Getting started with Git and GitHub
-----------------------------------

Getting up and running from scratch is easy:

1. [Install Git](git-installation-redirect)
2. [Generate a keypair](key-setup-redirect) -- *[If you have troubles](troubleshooting-ssh)*
3. [Set your user and email in git](git-email-settings)
4. [Create a repo](creating-a-repo) or [fork an existing repo](forking)

After you've created a repo you will presented with the commands necessary to create a new empty repo locally, push an existing local repo, or import an SVN repo.

If you are collaborating on someone else's repo, you can clone the repo using the command `git clone git@github.com:username/reponame.git`.  You can find this clone URL in the repo's header when viewing its source page.

To learn more about git's commands, we highly recommend you check out the [Pro Git book](http://progit.org/) and the [git man pages](http://www.kernel.org/pub/software/scm/git/docs/).  If you need help or have any questions, feel free to [contact support](http://support.github.com) or [ask the community](http://groups.google.com/group/github/).

Popular guides
--------------

<dl>
  {% for post in site.posts reversed %}{% if post.categories contains "popular" %}
    <dt><a href="{{ post.url }}" id="{{ cat }}">{{ post.title }}</a></dt>
    <dd>{{ post.description }}</dd>
  {% endif %}{% endfor %}
</dl>

Getting help
------------

There are a number of resources available to help you learn git or fix issues with GitHub:

### GitHub

* [GitHub Support](http://support.github.com) -- Resolve issues with GitHub or get help with basic git issues.
* [Contact GitHub](http://github.com/contact) -- This is your direct line to us.
* [GitHub Google Group](http://groups.google.com/group/github/) -- Ask the community for help
* [GitHub Status](http://status.github.com) -- Is GitHub down, or is it just me?

### Git

* [Pro Git](http://progit.org/) -- The greatest book on git, by GitHub's very own Scott Chacon. Available online for free.
* [git-scm](http://git-scm.com/) -- The official git website.
* [git man pages](http://www.kernel.org/pub/software/scm/git/docs/) -- In-depth documentation for every git command.
* [git user's manual](http://www.kernel.org/pub/software/scm/git/docs/user-manual.html) -- Concepts and workflows.
* [Learn.GitHub](http://learn.github.com) -- Git tutorials for beginners and experts.
* [git ready](http://www.gitready.com/) -- Tips and hints for using git.
