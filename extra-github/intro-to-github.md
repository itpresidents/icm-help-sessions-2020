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
| `$ git clone [url]`|Clones a repo form `url`|
| `$ git add -A`|Stages all changes made on the curren repo [(diff between -a and .?)](https://gist.github.com/dsernst/ee240ae8cac2c98e7d5d)|
| `$ git commit -m "message"`|Commits the previously added changes, letting them ready to push|
| `$ git push`|Pushes the commited changes to the remote branch (origin)|
| `$ git pull`|Pulls all changes locally to keep your repo updated with the remote|
| `$ git checkout --b`|Shows the user all the existing branches |
| `$ git status`|Shows the working tree status|
| `$ git reset`|Resets current HEAD to the specified state|
| `$ git rebase`|Reapply commits on top of another base tip|

## Outline

* Setup account locally byt using `git config`
```batch
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global init.defaultBranch main
```
* Command Line
  * cd / ls / pwd / cd ..
  * `git --version` (install git prompt)
* Create first repo
  * Create with readme
  * Clone locally
* Make your first commit/push
* Forks
* Pull requests

### Corpora example

#### Facilitators

* Fork original [Dariusk's Corpora](https://github.com/dariusk/corpora) to ITP [Residents](https://github.com/itpresidents)

#### Students

* [**Fork**](https://guides.github.com/activities/forking/) the [ITP Residents' corpora](https://github.com/itpresidents/corpora) repo to your own account
* [**Clone**]() your own corpora repo to your machine
* Open the repo on your code editor
* You can create a category or add new data to any
* Commit the changes to your personal fork of the repo
* Pull request your perfonal fork to the ITP Residents' fork
* We will accept changes in real time

## Resources

* [Handbook - Github](https://guides.github.com/introduction/git-handbook/)
* [Hello World – Github](https://guides.github.com/activities/hello-world/)
* [Understanding the Github flow](https://guides.github.com/introduction/flow/)
* [Github Guides](https://guides.github.com/)
