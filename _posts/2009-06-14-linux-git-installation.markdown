---
layout: default
title: Installing git (Linux)
description: How to install git on Linux
categories: linux
---

Ubuntu
------

Git can be installed on ubuntu from the default package repositories using synaptic or apt-get.  It is suggested you install git-core, git-gui, and git-doc.  If you are moving from svn you may want to install git-svn as well.

After you have completed installation you will need to [generate an SSH keypair](/linux-key-setup) and [set your local git config](/git-email-settings).

### Synaptic (GUI)

Launch Synaptic:

![launch](http://img.skitch.com/20100224-b2qe2x24fke3y9y4s3tmb2mhjb.jpg)

Select the packages you wish to install.

![pick packs](http://img.skitch.com/20100224-cfpf7ki753fdw9tf89a7grgb1g.jpg)

Click apply to install:

![apply](http://img.skitch.com/20100224-82sg5b1pje12sjr3d8tkntmpmd.jpg)

### apt-get (command line)

<pre class="terminal">$ sudo apt-get install git-core git-gui git-doc
Reading package lists... Done
Building dependency tree
Reading state information... Done
The following packages were automatically installed and are no longer required:
  linux-headers-2.6.28-11 linux-headers-2.6.28-11-generic
Use 'apt-get autoremove' to remove them.
The following extra packages will be installed:
  gitk tcl tcl8.4 tk tk8.4
Suggested packages:
  git-arch git-cvs git-svn git-email git-daemon-run gitweb tclreadline
The following NEW packages will be installed:
  git-core git-doc git-gui gitk tcl tcl8.4 tk tk8.4
0 upgraded, 8 newly installed, 0 to remove and 112 not upgraded.
Need to get 4074kB/8396kB of archives.
After this operation, 22.7MB of additional disk space will be used.
Do you want to continue [Y/n]? y
Get:1 http://us.archive.ubuntu.com jaunty/main git-doc 1:1.6.0.4-1ubuntu2 [1126kB]
Get:2 http://us.archive.ubuntu.com jaunty/main tcl8.4 8.4.19-2 [1178kB]
Get:3 http://us.archive.ubuntu.com jaunty/main tcl 8.4.16-2 [4154B]
Get:4 http://us.archive.ubuntu.com jaunty/main tk8.4 8.4.19-2 [1019kB]
Get:5 http://us.archive.ubuntu.com jaunty/main tk 8.4.16-2 [4184B]
Get:6 http://us.archive.ubuntu.com jaunty/universe git-gui 1:1.6.0.4-1ubuntu2 [425kB]
Get:7 http://us.archive.ubuntu.com jaunty/main gitk 1:1.6.0.4-1ubuntu2 [318kB]
Fetched 4074kB in 1min 12s (56.6kB/s)
Selecting previously deselected package git-core.
(Reading database ... 121308 files and directories currently installed.)
Unpacking git-core (from .../git-core_1%3a1.6.0.4-1ubuntu2_i386.deb) ...
Selecting previously deselected package git-doc.
Unpacking git-doc (from .../git-doc_1%3a1.6.0.4-1ubuntu2_all.deb) ...
Selecting previously deselected package tcl8.4.
Unpacking tcl8.4 (from .../tcl8.4_8.4.19-2_i386.deb) ...
Selecting previously deselected package tcl.
Unpacking tcl (from .../archives/tcl_8.4.16-2_all.deb) ...
Selecting previously deselected package tk8.4.
Unpacking tk8.4 (from .../tk8.4_8.4.19-2_i386.deb) ...
Selecting previously deselected package tk.
Unpacking tk (from .../archives/tk_8.4.16-2_all.deb) ...
Selecting previously deselected package git-gui.
Unpacking git-gui (from .../git-gui_1%3a1.6.0.4-1ubuntu2_all.deb) ...
Selecting previously deselected package gitk.
Unpacking gitk (from .../gitk_1%3a1.6.0.4-1ubuntu2_all.deb) ...
Processing triggers for man-db ...
Setting up git-core (1:1.6.0.4-1ubuntu2) ...
Setting up git-doc (1:1.6.0.4-1ubuntu2) ...
Setting up tcl8.4 (8.4.19-2) ...

Setting up tcl (8.4.16-2) ...

Setting up tk8.4 (8.4.19-2) ...

Setting up tk (8.4.16-2) ...

Setting up git-gui (1:1.6.0.4-1ubuntu2) ...
Setting up gitk (1:1.6.0.4-1ubuntu2) ...
Processing triggers for libc6 ...
ldconfig deferred processing now taking place</pre>
