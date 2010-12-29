---
layout: default
title: Installing git (OSX)
description: How to install git on OSX
categories: mac
main_category: setup
---

There are a number of methods to install git on OSX.  This guide details the most common methods, in order of ease of install.

After you have completed installation you will need to [generate an SSH keypair](/mac-key-setup) and [set your local git config](/git-email-settings).

Pre-compiled Installer
----------------------

Download and run [git-osx-installer](http://code.google.com/p/git-osx-installer/)

Homebrew
--------

1.  Install "Homebrew":http://github.com/mxcl/homebrew if you haven't already done so.
2.  Install Git *(You may want to include Subversion support if you want to import SVN repositories. Snow Leopard already contains a copy of SVN)*

    $ brew install git
    ==> Downloading http://kernel.org/pub/software/scm/git/git-1.6.5.7.tar.bz2
    ######################################################################## 100.0%
    ==> ./configure --prefix=/usr/local/Cellar/git/1.6.5.7
    ==> make install
    ==> Downloading http://kernel.org/pub/software/scm/git/git-manpages-1.6.5.7.tar.bz2
    ######################################################################## 100.0%
    /usr/local/Cellar/git/1.6.5.7: 383 files, 16M, built in 74 seconds

Compiling git manually
----------------------

See [this guide](http://gist.github.com/423308).
