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

<div class="list-module">
  <h2>Popular Guides</h2>
  <div class="list-body">
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