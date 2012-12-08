# Boilerplated #

> Boilerplated is a suggestion on how one could structure his or hers assets. It adopts the SMACSS for structuring your CSS and LESS to gain leverage of modern toolings. 

## How to use ##

1. Clone the repository
2. Create the folder dist/latest and put all your output in this directory, using either a build script or favorite tool, perhaps LiveReload.

> My setup is adding this project to LiveReload and point the file assets/less/theme/default/master.less be built to dist/latest/theme/default/master.css.

## Purpose ##

- Allow me to quickly start a sandbox project that still has a good and familiar structure

## Structure ##

- assets/ contains all development files
- be build script agnostic, allowing you to determine your own structure.
- dist/[version or latest] contains all output files. This is where one would put his or hers concatinated and minified css files.

## Influences ##

- Scalable and Modular Cascadig Stylesheets, SMACCS
- Separation of Concerns, separating content used for development from content used for production
- Enable working with your favorite tools, LESS.
