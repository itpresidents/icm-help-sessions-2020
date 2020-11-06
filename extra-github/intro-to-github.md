# GITHUB WORKSHOP

## Prerequisites

* Make sure you have a Terminal / CLI (Command Line Interface)
  * If using windows, we recommend using Git Bash
* Check if Git is installed in your computer
  * Open CLI and type `$ git --version`
* Create an account on [Github](github.com)
* Make sure you have a code editor
  * We recommend [VS Code](https://code.visualstudio.com/)

## Important Commands
|Syntax|Command|
|:-|:-|
| `$ git config`|Sets up your local github identity|
| `$ git clone [url]`|Clones a repo from `url`|
| `$ git add -A`|Stages all changes made on the curren repo [(diff between -a and .?)](https://gist.github.com/dsernst/ee240ae8cac2c98e7d5d)|
| `$ git commit -m "message"`|Commits the previously added changes, getting them ready to push|
| `$ git push`|Pushes the commited changes to the remote branch (origin)|
| `$ git pull`|Pulls all changes locally to keep your repo updated with the remote|
| `$ git branch`|Shows the user all the existing branches |
| `$ git checkout -b [newBranch] `|Creates and switches to a new branch called `newBranch` |
| `$ git status`|Shows the working tree status|
| `$ git reset`|Resets current HEAD to the specified state|
| `$ git rebase`|Reapply commits on top of another base tip|

## Outline

* Brief explanation of [Github Desktop](https://desktop.github.com/) vs using Git from command line
* Setup account locally by using `git config`
```batch
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global init.defaultBranch main
```
* Command Line
  * cd / ls / pwd / cd ..
  * `git --version` (install git prompt)
* Create first repo from website
  * Create on website with readme
  * Clone locally
* Create repo from existing directory
  * Create on website without readme
  * `git init` locally
* Make your first commit/push
* Can also edit directly on repo website
* Forks
* Pull requests

### Corpora example

#### Facilitators

* Fork original [Dariusk's Corpora](https://github.com/dariusk/corpora) to ITP [Residents](https://github.com/itpresidents)

#### Students

* [**Fork**](https://guides.github.com/activities/forking/) the [ITP Residents' corpora](https://github.com/itpresidents/corpora) repo to your own account
* [**Clone**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) your own corpora repo to your machine
* Open the repo on your code editor
* You can create a category or add new data to any
* Commit the changes to your personal fork of the repo
* Pull request your personal fork to the ITP Residents' fork
* We will accept changes in real time

## Resources

* [Handbook - Github](https://guides.github.com/introduction/git-handbook/)
* [Hello World – Github](https://guides.github.com/activities/hello-world/)
* [Understanding the Github flow](https://guides.github.com/introduction/flow/)
* [Github Guides](https://guides.github.com/)
* [Customize your Terminal on Mac](https://medium.com/ayuth/iterm2-zsh-oh-my-zsh-the-most-power-full-of-terminal-on-macos-bdb2823fb04c)
* [Markdown Guide](https://www.markdownguide.org/basic-syntax)
