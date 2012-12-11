# front-end-asset-pipline #

> front-end-assets-pipeline is a suggestion on how one could structure his or hers assets pipeline. It adopts the SMACSS for structuring your CSS and LESS to gain leverage of modern toolings and simple html tests written in Jade. It uses grunt, npm and SEMVER for mastering, minifying, linting and builds.

## Quick setup ##

1. ``git clone https://github.com/swallentin/front-end-assets-pipeline.git``
2. ``cd front-end-assets-pipeline``
3. ``npm install``
4. ``grunt``

## Requirements ##

- nodejs
- npm

## How to create a build ##

1. ``npm version x.y.z`` or ``npm version major|minor|patch`` - this will increment version in package.json and create a git tag using the version name.
2. ``grunt dist``
3. Deploy the files in ``dist/latest`` or ``dist/vX.Y.Z``

## Build types ##

- ``grunt default`` will lint and combine your less and javascripts into dist/revision. Will created master.css, app.js, app.amd.js
- ``grunt revision`` same as ``grunt default`` but will add also created minified versions.
- ``grunt dist`` will copy files from dist/revision into dist/latest and dist/vX.Y.Z. Build version will be fetched from package.json.

## Purpose ##

- Allow a developer to quickly start a project with a bunch of the grunt work already setup, lint, concat and min.
- Simply development and testing of your css.
- Have a build agnostic development environment contract. Think assets/ vs dist/
- Separate distributions packages from assets.

## Structure ##

- ``assets/`` - contains all development files, less, images, icons, javascripts etc
- ``dist/latest/`` - contains the latest release build
- ``dist/revision/`` - contains the latest build using the current branch
- ``dist/vX.Y.X/`` - contains 'versions' of the builds.

## Influences ##

- Scalable and Modular Cascadig Stylesheets, SMACCS
- Separation of Concerns, separating content used for development from content used for production
- Enable working with your favorite tools, LESS.
- A flexible development environment that gives you a short feedback loop and allows you to focus on coding.