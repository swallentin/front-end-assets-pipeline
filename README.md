# SMACSS and LESS boilerplated #

> SMACSS and LESS boilerplated is a suggestion on how one could structure his or hers assets. It adopts the SMACSS for structuring your CSS and LESS to gain leverage of modern toolings and simple html tests written in Jade. It uses grunt, npm and SEMVER for mastering, minifying, linting and builds.

## Quick setup ##

1. ``git clone https://github.com/swallentin/smacss-less-boilerplated``
2. ``cd smacss-lesss-boilerplated``
3. ``npm install``
4. ``grunt build``

## How to create a release ##

1. ``grunt build``
2. ``npm version x.y.z`` or ``npm version major|minor|patch`` - this will increment version in package.json and create a git tag using the version name.
3. ``grunt release``
4. Commit and push your code.
5. Deploy the files in ``dist/latest`` or ``dist/vX.Y.Z``


## Requirements ##

- nodejs
- npm

## How to build ##

- ``grunt default`` will combine your less and javascripts into dist/revision.
- ``grunt release`` will copy files from dist/revision into dist/latest and dist/vX.Y.Z. Build version will be fetched from package.json.

## Purpose ##

- Allow a developer to quickly start a sandbox project that still has a good and familiar structure
- Simply development and testing of your css.
- Offer a build script agnostic development environment.

## Structure ##

- ``assets/`` - contains all development files, less, images, icons, javascripts etc
- ``dist/latest/`` - contains the latest release build
- ``dist/revision/`` - contains the latest build using the current branch


## Influences ##

- Scalable and Modular Cascadig Stylesheets, SMACCS
- Separation of Concerns, separating content used for development from content used for production
- Enable working with your favorite tools, LESS.
- A flexible development environment that gives you a short feedback loop and allows you to focus on coding.