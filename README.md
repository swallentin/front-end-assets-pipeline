# SMACSS and LESS boilerplated #

> SMACSS and LESS boilerplated is a suggestion on how one could structure his or hers assets. It adopts the SMACSS for structuring your CSS and LESS to gain leverage of modern toolings and simple html tests written in Jade.

## How to setup ##

1. Clone the repository
2. Setup a build flow for the assets, the goal is to have the files in assets/ to generate output into the dist/ folder.

Example

- ``assets/less/theme/default/master.less`` to ``dist/latest/theme/default/master.css``
- ``assets/less/theme/default/tests/index.jade`` to ``dist/css/theme/default/tests/index.html``


## Purpose ##

- Allow a developer to quickly start a sandbox project that still has a good and familiar structure
- Simply development and testing of your css.
- Offer a build script agnostic development environment.


## Structure ##

- ``assets/`` - contains all development files
- ``dist/[version || latest]/`` - contains all output files, concatinated and/or minimized.

## Influences ##

- Scalable and Modular Cascadig Stylesheets, SMACCS
- Separation of Concerns, separating content used for development from content used for production
- Enable working with your favorite tools, LESS.