---
layout: default
title: Managing multiple clients
description: How to manage multiple clients and their repositories
categories: collaborating setup
main_category: setup
---

Are you a freelance developer working on multiple projects for multiple clients, and want to manage them here on GitHub?  Never fear, this guide will detail the most common solutions to this problem

One account, multiple collaborators
===================================

This design lets you retain control over the repos, but still gives your clients access to them.

This is the simplest (and cheapest) approach.  Simply create one account with a plan that provides enough private repos to cover all your projects.  If your client needs access to the source code, have them create a free account.  You can then add their free account as a collaborator on the projects you wish for them to have access to.

If you wish, you can even bill your clients for the cost of your account, and maintaining their repos on it!

Multiple accounts, one collaborator
===================================

This design gives the control over the repos (and the bill) to your client, but still allows you to push into all your clients' repos from a single account.

With this design, have your clients each open their own paid account and create empty repos for each project.  Add your account to the repos as a collaborator.  You can now push to their repos as if they were your own!

Multiple accounts, no collaborators
===================================

__This is by far the most complicated setup, and should be avoided if at all possible.__

If, for whatever reason, you *must* push to each client's repos using _their_ account, this is the setup you will have to use.

First, generate a second keypair to use for your second account.  To create this key follow [this guide](/key-setup-redirect), but specify a path for the key.  If you do not specify a path you may overwrite your existing key.  For example, you could use `~/.ssh/id_rsa_client`.  Once the key has been created, add the new public key to the client's account on GitHub.  To configure your local settings, see [this guide](/multiple-keys).
