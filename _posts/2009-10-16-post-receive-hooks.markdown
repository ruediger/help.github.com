---
layout: default
title: Post-Receive Hooks
description: Working with GitHub's post-receive web hooks.
categories: advanced
---

_For help testing webhooks, see [this guide](/testing-webhooks)_

If you supply a post-receive URL, GitHub will POST to that URL when someone uses `git push` on that repository.

![](http://img.skitch.com/20100620-r8st7468q7q5waf3y85hmpwtqs.png)

![](http://img.skitch.com/20100620-br6dw5iiyk2643fahkqbi54h36.png)

What we'll send is JSON containing information about the push and the commits involved.

Here's the template we use in Ruby to generate the JSON:

{% highlight ruby %}
{
  :before     => before,
  :after      => after,
  :ref        => ref,
  :commits    => [{
    :id        => commit.id,
    :message   => commit.message,
    :timestamp => commit.committed_date.xmlschema,
    :url       => commit_url,
    :added     => array_of_added_paths,
    :removed   => array_of_removed_paths,
    :modified  => array_of_modified_paths,
    :author    => {
      :name  => commit.author.name,
      :email => commit.author.email
    }
  }],
  :repository => {
    :name        => repository.name,
    :url         => repo_url,
    :pledgie     => repository.pledgie.id,
    :description => repository.description,
    :homepage    => repository.homepage,
    :watchers    => repository.watchers.size,
    :forks       => repository.forks.size,
    :private     => repository.private?,
    :owner => {
      :name  => repository.owner.login,
      :email => repository.owner.email
    }
  }
}
{% endhighlight %}

This is sent as a POST with a single parameter: 'payload'

So, for example, you'd do something like this in a [Sinatra](http://sinatra.rubyforge.org/) server:

{% highlight ruby %}
post '/' do
  push = JSON.parse(params[:payload])
  "I got some JSON: #{push.inspect}"
end
{% endhighlight %}

The `commits` array is ordered with the oldest commit as the first element.  The last element is the newest commit and should match the "after" value for the branch.

Here's an example payload:

{% highlight javascript %}
{
  "before": "5aef35982fb2d34e9d9d4502f6ede1072793222d",
  "repository": {
    "url": "http://github.com/defunkt/github",
    "name": "github",
    "description": "You're lookin' at it.",
    "watchers": 5,
    "forks": 2,
    "private": 1,
    "owner": {
      "email": "chris@ozmm.org",
      "name": "defunkt"
    }
  },
  "commits": [
    {
      "id": "41a212ee83ca127e3c8cf465891ab7216a705f59",
      "url": "http://github.com/defunkt/github/commit/41a212ee83ca127e3c8cf465891ab7216a705f59",
      "author": {
        "email": "chris@ozmm.org",
        "name": "Chris Wanstrath"
      },
      "message": "okay i give in",
      "timestamp": "2008-02-15T14:57:17-08:00",
      "added": ["filepath.rb"]
    },
    {
      "id": "de8251ff97ee194a289832576287d6f8ad74e3d0",
      "url": "http://github.com/defunkt/github/commit/de8251ff97ee194a289832576287d6f8ad74e3d0",
      "author": {
        "email": "chris@ozmm.org",
        "name": "Chris Wanstrath"
      },
      "message": "update pricing a tad",
      "timestamp": "2008-02-15T14:36:34-08:00"
    }
  ],
  "after": "de8251ff97ee194a289832576287d6f8ad74e3d0",
  "ref": "refs/heads/master"
}
{% endhighlight %}

For more information on this technique, see the [Web Hooks Wiki](http://webhooks.pbwiki.com/).

Links
-----

* [raggi/github_post_receive_server](http://github.com/raggi/github_post_receive_server/) -- A template Rack server
* [jnewland/github-campfire](http://github.com/jnewland/github-campfire/)
* [webs/irccat](http://github.com/webs/irccat)
* [jnunemaker/github-twitter](http://github.com/jnunemaker/github-twitter/)
