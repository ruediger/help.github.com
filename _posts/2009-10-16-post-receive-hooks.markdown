---
layout: default
title: Post-Receive Hooks
description: Working with GitHub's post-receive web hooks.
categories: collaborating
---

_For help testing webhooks, see [this guide](/testing-webhooks)_

If you supply a post-receive URL, GitHub will POST to that URL when someone uses `git push` on that repository.

![](http://img.skitch.com/20100620-r8st7468q7q5waf3y85hmpwtqs.png)

![](http://img.skitch.com/20100620-br6dw5iiyk2643fahkqbi54h36.png)

What we'll send is JSON containing information about the push and the commits involved.

Here's the template we use in Ruby to generate the JSON:

<script src="http://gist.github.com/212213.js"> </script>

This is sent as a POST with a single parameter: 'payload'

So, for example, you'd do something like this in a [Sinatra](http://sinatra.rubyforge.org/) server:

<script src="http://gist.github.com/212212.js"> </script>

The `commits` array is ordered with the most recent commit as the first element.  The last element, therefor, is the oldest commit.

Here's an example payload:

<script src="http://gist.github.com/212211.js"> </script>

For more information on this technique, see the [Web Hooks Wiki](http://webhooks.pbwiki.com/).

Links
-----

* [raggi/github_post_receive_server](http://github.com/raggi/github_post_receive_server/) -- A template Rack server
* [jnewland/github-campfire](http://github.com/jnewland/github-campfire/)
* [webs/irccat](http://github.com/webs/irccat)
* [jnunemaker/github-twitter](http://github.com/jnunemaker/github-twitter/)
