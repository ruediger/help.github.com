---
layout: default
title: Deploy keys
description: Do you need a deploy key?
categories: intermediate
---

<p class="intro">Deploy keys are a handy yet misunderstood feature here on github.  This guide will explain when and how to use them instead of normal user keys.</p>

##Do you even need a deploy key?

If your deploy process involves sshing into the server you are deploying to, you probably **do not** need to use deploy keys.  Instead, you should use ssh-agent forwarding to temporarily allow the server to use your local ssh keys.  Not only is this method easier to maintain, since you don't have any extra keys, but it's also more secure as the server never has keys saved to disk in case of a compromise.  As always, you should use a [strong passphrase](/working-with-key-passphrases/) on your keys and let ssh-agent manage them for you.

If your deploy process is remotely triggered and you do not log in to the deploying server via ssh, then you might need deploy keys.  Read on to find out if you do.

##What are deploy keys?

Deploy keys are ssh keys just like the ones you attach to your account to allow you to push to and pull from your repos.  The only difference is that deploy keys are designed to allow access to a single private repo.  This will allow your staging or production server to pull in from your repo, most likely using a deploy tool like [Capistrano](http://www.capify.org/).

Remember, ssh keys are unique, you cannot use the same key on two repos, or on a repo and a user account.

##When should I use a deploy key?

Simple, when you have a server that needs pull access to a single private repo.

###I'm working with public repos, do I still need deploy keys?

No!  You can simply use the public clone URL for the project.

###My server needs access to many private repos, how do I handle this?

The simplest way is to add your server's key to the account of the repo owner.  This will allow the server access to any private repo that user owns or is a collaborator on.

If you don't want your deploy server to have access to every repo, you can make an account specifically for the server, attach its key to the account, and add that account as a collaborator to any repo you do want access to.

## How do I add my deploy key?

To add your deploy key, you first have to click on one of your repos. Once you've done that:

1. In your repo, click the "admin" button.

   ![In your repo, click the "admin" button.](/images/deploy_1.jpg)

2. Click on "deploy keys"

   ![Click on "deploy keys"](/images/deploy_2.jpg)

3. Click "Add another deploy key"

   ![Click "Add another deploy key"](/images/deploy_3.jpg)

4. Fill in your info and click "Add key"

   ![Fill in your info and click "Add key"](/images/deploy_4.jpg)