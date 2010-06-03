---
layout: default
title: Dealing with firewalls and proxies
categories: troubleshooting
---

There are a few ways to deal with a draconian firewall or an unruly proxy:

* [Smart HTTP](http://github.com/blog/642-smart-http-support) -- By far the easiest approach.  Available with git v1.7 and later.  Works great with proxies and firewalls that block non-HTTP outbound connections.

  * [Not-so-smart HTTP](http://github.com/blog/92-http-cloning) -- For cloning public repos only, on pre-1.7 git clients.  Use only if Smart HTTP is not an option.

* [corkscrew](http://blog.codeslower.com/2008/8/Using-PuTTY-and-SSL-to-securely-access-GitHub-repositories-via-SSH) -- Works best with firewalls, creates an outbound ssh connection on port 80.  Proxies may interfere.

  * [another corkscrew guide](http://dilipm79.blogspot.com/2008/11/why-i-love-git-and-github.html)

  * [and another](http://returnbooleantrue.blogspot.com/2009/06/using-github-through-draconian-proxies.html)

* [ssh forwarding](http://gist.github.com/423642) -- Similar to corkscrew, requires access to an external ssh server.  Two slightly different methods are provided.
