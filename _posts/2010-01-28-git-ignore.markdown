---
layout: default
title: Ignoring files
description: How to tell git to ignore files
categories: "Everyday git"
---

From time to time there are files you don't want git to track.  There are a few methods of telling git what files to ignore.

.gitignore
----------

If you create a file in your repo named `.gitignore` git will use its rules when looking at files to commit.  Note that git will **not** ignore a file that was already tracked before a rule was added to this file to ignore it.  In such a case the file must be un-tracked, usually with `git rm --cached filename`

This file can be committed into the repo, thus sharing the rule list with any other users that clone the repo.

Note that you can create a `.gitignore` in any subpath to have its rules applied at that path.  Sometimes an empty `.gitignore` file is used as a placeholder for an empty path, for example to force git to generate a `log/` path for your development environment to use.

Global .gitignore
-------------

A global .gitignore file can also be used by adding one to your global git config.  For example, you might create the file `~/.gitignore_global` and add some rules to it.  To add this to your config, run `git config --global core.excludesfile ~/.gitignore_global`

Some good rules to add to this file:

<pre>
# Compiled source #
###################
*.com
*.class
*.dll
*.exe
*.o
*.so

# Packages #
############
# it's better to unpack these files and commit the raw source
# git has its own built in compression methods
*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

# Logs and databases #
######################
*.log
*.sql
*.sqlite

# OS generated files #
######################
.DS_Store?
ehthumbs.db
Icon?
Thumbs.db
</pre>

Repo exclude
-----------

Local per-repo rules can be added to the `.git/info/exclude` file in your repo.  These rules *are not committed* with the repo so they are not shared with others.  This method can be used for locally-generated files that you don't expect other users to generate, like files created by your editor.

Links
-----

* [Pro Git](http://progit.org/book/ch2-2.html)
* [gitignore man page](http://www.kernel.org/pub//software/scm/git/docs/gitignore.html)
