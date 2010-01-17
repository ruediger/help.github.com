---
layout: default
title: Understanding deploy keys
description: Do you need a deploy key?
categories: deploying
---

Deploy keys are a handy yet misunderstood feature here on github.  This guide will explain when and how to use them instead of normal user keys.

What are deploy keys?
=====================

Deploy keys are ssh keys just like the ones you attach to your account to allow you to push to and pull from your repos.  The only difference is that deploy keys are designed to allow access to a single private repo.  This will allow your staging or production server to pull in from your repo, most likely using a deploy tool like [Capistrano](http://www.capify.org/).

Remember, ssh keys are unique, you cannot use the same key on two repos, or on a repo and a user account.

When should I use a deploy key?
===============================

Simple, when you have a server that needs pull access to a single private repo.

I'm working with public repos, do I still need deploy keys?
-----------------------------------------------------------

No!  You can simply use the public clone URL for the project.

My server needs access to many private repos, how do I handle this?
-------------------------------------------------------------------

The simplest way is to add your server's key to the account of the repo owner.  This will allow the server access to any private repo that user owns or is a collaborator on.

If you don't want your deploy server to have access to every repo, you can make an account specifically for the server, attach its key to the account, and add that account as a collaborator to any repo you do want access to.
