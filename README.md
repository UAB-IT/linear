# Ember
Framework for UAB IT website
# Gitflow & Versioning
## Versioning
This repository uses the standard X.Y.Z version notation. 
X should be incremented when non backwards compatible code is added to the project. When X is incremented, Y and Z is reset to 0
Y is incremented when a new feature or functionality is added. When Y is incremented, Z is reset to 0.
Z is incremented when a backwards compatible change to the code is made that does not introduce a new feature, such as a bug fix. 

## Git Workflow
Branches:
* master
* development
* gh-pages

`master` branch is the current published build of the project. 
`development` is the unstable / active development branch, and has the most recent development build.
`gh-pages` is the branch that the website and documentation is hosted from. It is never merged with `master` and exists in parallel with the project.

<img src="https://stratus.skykit.io/assets/images/gitFlowv2.svg" width="500" height="500" />

## To make a bug fix:
1. Make a branch off of master
	* Name the branch `X.Y.Z` replacing “X.Y.Z” with the version number
2. Develop the bug fix
3. Create a new pull request to `master`
4. Create a new release from `master` with the new version number
5. Merge master back into `development` and `gh-pages`

## Developing a feature
1. Make a branch off of `development`
	* Name the branch with the feature name
2. Develop the feature
3. Create a new pull request to `development` 

## Releasing new features
1. Make a new branch off of `development`
	* Name the branch `X.Y.Z` replacing “X.Y.Z” with the version number
	* Develop bug fixes
2. Make a new branch off of `gh-pages`
	* Name the branch `X.Y.Z-Docs` replacing “X.Y.Z” with the version number
	* Develop documentation on the new version
3. Create 2 pull requests
	1. Pull `X.Y.Z` into `master`
	2. Pull `X.Y.Z-Docs` into `gh-pages`
4. Create a new release from `master` with the new version number
5. Merge master back into `development` and `gh-pages`
