# TypeScripting

An example of how TypeScript can be transpiled into ES5 compatible JavaScript
and then run in VS Code with breakpoints using the Node debugger and source maps
to stop at lines of code in the TypeScript source files.

Organizing code into modules and classes and having type support allows for
better features in an IDE while also making code which is compatible with
modern web browsers.

## VS Code and Gulp

VS Code is free and Open Source. It was used to create and test this sample
project which uses Gulp to automate the transpiling process and watch the
TypeScript files to trigger transpiling each time a change is made. 

 * https://code.visualstudio.com
 * http://gulpjs.com

 
## How to Use
 
 Download and install VS Code for your platform. Then get the latest version of
 Node and install TypeScript and Gulp. You can install them with `package.json`
 for use with this project. Then open the folder for this repository and set
 a breakpoint in the TypeScript file in the `ts` folder. Then use VS Code to
 start the debugging process and see how it stops at the breakpoint and allows
 you to inspect variables. 
 
### Author
 
Brennan Stehling - http://twitter.com/brennansv
 
### License
 
MIT
 