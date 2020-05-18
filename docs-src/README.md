# Introduction

This project was developed by the University of Alabama at Birmingham's Department of Information Technology for use on UABIT websites and projects. This project runs on UAB Joomla sites also running the Linear template, it has not been tested with legacy templates and is incompatible with UAB Wordpress sites.

[![Release](https://img.shields.io/github/v/release/UAB-IT/website-design?include_prereleases)](https://github.com/UAB-IT/website-design/releases)
![Valid?](https://img.shields.io/badge/w3c-validated-green)
[![License](https://img.shields.io/github/license/UAB-IT/website-design?color=green)](https://github.com/UAB-IT/website-design/blob/master/LICENSE)
[![Sass](https://img.shields.io/badge/made%20with-Sass-%23bf4080)](https://github.com/sass/dart-sass)

This CSS library is maintained by UABIT's Communications team and builds on the CSS written by the central University Relations and Web Communications team. It takes direction from the [UAB brand toolkit](https://www.uab.edu/toolkit/) and other UAB websites to reinforce the UAB brand and the personality of Information Technology at UAB.

## Deployment

Currently, this library is a work-in-progress and is not used on any production sites, but is planned to be implemented Spring 2020.

As of writing, this CSS library is planned to be used on
* https://www.uab.edu/it/home/
* https://www.uab.edu/it/news/
* https://www.uab.edu/it/techconnect/
* https://www.uab.edu/it/annualreport/

It is currently used on
* https://dev.uab.edu/it/home/
* https://dev.uab.edu/it/news/
* https://dev.uab.edu/it/techconnect/
* https://dev.uab.edu/it/annualreport/

Note that you will need to be on the secure UAB network to access any development server. You can log in through the on-campus wifi or through use of the VPN.

## Development
### Prerequisits:
1. Become familiar with [Sass (SCSS)](https://sass-lang.com/guide)
2. Install [Node.js](https://nodejs.org/en/) and NPM (included with Node)
3. Install [VS Code](https://code.visualstudio.com/) and [Comment Anchors](https://marketplace.visualstudio.com/items?itemName=ExodiusStudios.comment-anchors)
4. Review this project's [contributor guide](https://github.com/UAB-IT/website-design/blob/master/.github/CONTRIBUTING.md)

### Getting Started
1. Clone this repository to your local directory using [github desktop](https://desktop.github.com/) or command line
2. Run `npm install` to install this project's dependencies.

You can now make edits to the project's source files

### Building
When you are ready to build the project, run `npm run build`. This will create files in the `build/` and `dist/` folders, you can upload these to Joomla to test. To publish the CSS to a live site, see [Releasing a new build](https://github.com/UAB-IT/website-design/blob/master/.github/CONTRIBUTING.md#releasing-a-new-build) in the contributor guide.

## Authors and acknowledgment
Kerry Bean, IT Communications & Marketing Director<br>
[Jessika Reed](https://github.com/orgs/UAB-IT/people/jessikareed), Project Coordinator<br>
[Matt McAdams](https://github.com/MattMcAdams), Web designer & developer<br>
[MJ Moon](https://github.com/orgs/UAB-IT/people/macymoon), Designer

I'd also like to thank all the great folks from UAB Web Communications for helping out with the back-end parts of this project and answering tons of questions. You guys are great and we couldn't have done it without your knowledge and support.
