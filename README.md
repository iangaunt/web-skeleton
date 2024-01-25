# iangaunt/web-skeleton

A very basic webpage backbone in order to create a simple website using a Sass-TypeScript-ESLint-React toolchain. The provided `package.json` file contains linting for SCSS and TypeScript files.

## Linting

`web-skeleton` provides functionality for linting multiple types of files. `lint-scss` and `lint-ts` will use ESLint and Stylelint to lint your Sass and TypeScript files respectively, built in with both React and Webpack linting. `tsc` will also build your TypeScript files into JavaScript for testing purposes, as Webpack will build your JavaScript files into `dist` anyway.

## Building & Running

`build` will run the Webpack library on your current web skeleton and build your website into the `dist` folder, and `start` will host the build on your local machine. Once you have committed to Git in your terminal, you can use the `gh` command to push the distribution folder to a new branch called `gh-pages`. This name can be modified in the `package.json` file.

## Cloning

For simple cloning of the repo, run:
```git clone https://github.com/iangaunt/web-skeleton.git```
