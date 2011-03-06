---
layout: default
title: Setting user name, email and GitHub token
description: Configure your local git installation so that commits are linked to your GitHub account
categories: troubleshooting popular
---

This guide covers basic git settings you should set before making any commits.

Please note that config changes will only affect future commits.  Existing commits will retain the info they were committed with.  Also, the environment variables `GIT_COMMITTER_NAME`, `GIT_COMMITTER_EMAIL`, `GIT_AUTHOR_NAME` and `GIT_AUTHOR_EMAIL` will override git-config settings if they are defined.

{% include email_setup.markdown %}
