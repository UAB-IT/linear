# Contributing to the UABIT CSS Library

Following these guidelines helps ensure this project has consistent, maintainable code, as well as a standard publication workflow which increases the quality of updates, and reduces bugs and regressions. Following these guides are essential for the long term health of the project and should be considered throughout every step of the development process.

## Ground Rules

1. Every change must conform to the UAB [policies](https://www.uab.edu/policies/), [toolkit](https://www.uab.edu/toolkit/), and [accessibility](https://www.uab.edu/accessibility/) guidelines.
2. After Version 1.0, no non-backwards compatible code may be added. If a good case is made for this kind of change, it may be discussed with IT leadership to determine if the team has the bandwidth to manage a breaking upgrade.
3. All code must comply with the [SCSS Style Guide](https://github.com/UAB-IT/website-design/wiki/SCSS-Style-Guide).
4. Contributors are encouraged to comment their code throughly using the [Code Comment Guide](https://github.com/UAB-IT/website-design/wiki/Code-Comment-Guide).

## Versioning
This project uses the [Semver](https://semver.org/) method of semantic versioning.

## Getting started

1. Ensure you have Git installed. You can do this by entering `git --version` in the terminal app on Mac OS
2. Download and install [Node.js](https://nodejs.org/en/)
3. Download and install [VS Code](https://code.visualstudio.com/) and [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)
4. Download and install [github desktop](https://desktop.github.com/) (or use command line if you're comfortable)
5. Sign in and clone the project from the **development** branch

Now open the project in VS Code. Go to **File** > **Add folder to workspace** and you should be able to find the project under **documents** > **GitHub**

Now open a new terminal in VS Code and enter `npm install` in the command line. This will install all of the project's dependencies.

You should be familiar with these technologies:

* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [SCSS](https://sass-lang.com/)
* [JavaScript ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Stratus](https://github.com/MattMcAdams/stratus)

## Developing

Take a look at this project's [wiki](https://github.com/UAB-IT/website-design/wiki) for more things to be mindful of while developing on this project.

Build the project using the terminal `npm run build`, then test the code on the development servers by uploading the distributable files to the dev server's media folder. JavaScript will need to be copied and pasted into a Joomla custom module in the **ribbon** position and initallized in a module in the **debug** position.

### To make changes

1. Commit all changed to the **development** branch
2. Create a new pull request to the **master** branch


### Releasing a new build

1. Create a new release from **master** with the new version number. Include a change log of **New Features**, **Bug Fixes**, **Optimizations**, and **experimental** if applicable. Link to any relevent Issues, Commits, or Pull Requests
2. Send the distributables from this new release to Webcomm to review and distribute to the live sites.

## Maintenence

Using Git as source control is a highly important component of this project. Because this project builds on decades of CSS and is subject to bugs introduced by changes to that CSS, it is key that good versioning and change tracking is maintained. This allows us greater insight to bugs, a safety net to deal with regressions, and a formal history of changes to the website's style. Without these, there would be no way to successfully maintain this project in the future.

## Specificity

To deal with specificity issues out of our control, there is are several variables used to globally control the specificity of this project. Every selector should be as flat as possible but include this variable at the front. This variable can then be modified as core specificity issues are resolved.

These specificity variables can be found in **src** > **scss** > **01-core** > **_config.scss**

Because this CSS project is built on and overrides decades of CSS, it is crucial to check every now and again that excessive overrides, odd work-arounds, and less than optimal tricks are still necessary. The hope is that over time, this project can be cleaner, faster, and more in line with best practices as specificity issues in the central CSS are addressed and ironed out.
