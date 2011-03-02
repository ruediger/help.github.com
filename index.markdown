---
layout: default
title: Welcome
---

Welcome to the GitHub Help site. Here we have compiled many guides to help you set up and use git and GitHub.

Use the sidebar on the right side of this site to access our guides!

If you would like to submit your own guides, please fork [our repo](http://github.com/github/help.github.com/) and send a pull request.


GitHub Bootcamp
---------------

If you are still new to things, we've provided a few walkthroughs to get you started:

1. Take a quick [crash course](http://gitref.org/) on git
2. [Set up git](set-up-git-redirect)
3. [Create a Repo](create-a-repo)
4. [Fork a Repo](fork-a-repo)
5. [Be Social](be-social)

To learn more about git's commands, we highly recommend you check out [GitRef](http://gitref.org/), the [Pro Git book](http://progit.org/) and the [git man pages](http://www.kernel.org/pub/software/scm/git/docs/).  If you need help or have any questions, feel free to [contact support](http://support.github.com) or [ask the community](http://groups.google.com/group/github/).

Popular guides
--------------

<dl>
  {% for post in site.categories.popular reversed %}
    <dt><a href="{{ post.url }}" id="{{ cat }}">{{ post.title }}</a></dt>
    <dd>{{ post.description }}</dd>
  {% endfor %}
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
* [git ready](http://www.gitready.com/) -- Tips and hints for using git.
