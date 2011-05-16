---
layout: default
title: Welcome
---

<div class="bootcamp-help">
  <h1>GitHub Bootcamp <span>New to Git and GitHub? This will get you started.</span>
  </h1>
  <div class="bootcamp-body">
  <ul>
    <li class="setup">
      <a href="http://help.github.com/set-up-git-redirect" target="_blank">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Set Up Git</h2>
        </div>
      </a>
    </li>
    <li class="create-a-repo">
      <a href="http://help.github.com/create-a-repo" target="_blank">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Create A Repo</h2>
        </div>
      </a>
    </li>
    <li class="fork-a-repo">
      <a href="http://help.github.com/fork-a-repo" target="_blank">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Fork a Repo</h2>
        </div>
      </a>
    </li>
    <li class="be-social">
      <a href="http://help.github.com/be-social" target="_blank">
        <div class="image">&nbsp;</div>
        <div class="desc">
          <h2>Be social</h2>
        </div>
      </a>
    </li>
  </ul>
  </div> <!-- /bootcamp-body -->
</div>

<div class="popular-guides">
  <h2>Popular Guides</h2>
  <div class="popular-body">
    <ul>
      {% for post in site.categories.popular reversed %}
        <li>
          <a href="{{ post.url }}" id="{{ cat }}">
            <h3>{{ post.title }}</h3>
            <p>{{ post.description }}</p>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

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
