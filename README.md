# cypress-react-app-actions

> Access the internals of React components from Cypress end-to-end tests

![cypress version](https://img.shields.io/badge/cypress-9.4.1-brightgreen) ![cypress-react-selector version](https://img.shields.io/badge/cypress--react--selector-2.3.15-brightgreen) ![react version](https://img.shields.io/badge/react-17.0.2-brightgreen) [![ci](https://github.com/bahmutov/cypress-react-app-actions/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/bahmutov/cypress-react-app-actions/actions/workflows/ci.yml)

Read [Access React Components From Cypress E2E Tests](https://glebbahmutov.com/blog/react-state-from-e2e-tests/) and [Control React Applications From Cypress Tests](https://glebbahmutov.com/blog/react-app-actions/).

## Install

```
$ npm i -D cypress-react-app-actions
# or install using Yarn
$ yarn add -D cypress-react-app-actions
```

Import this module from the support file or from the spec file

```js
// https://github.com/bahmutov/cypress-react-app-actions
import 'cypress-react-app-actions'
```

It will add a new custom child command `cy.getComponent()`

## Use

TODO

## Videos

- [A Little Taste Of React App Actions](https://www.youtube.com/watch?v=7tzstwfuA6g)

## Examples

- [cypress-example-forms](https://github.com/bahmutov/cypress-example-forms)
- [react-counter](https://github.com/bahmutov/react-counter)

## Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2022

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Advent 2021](https://cypresstips.substack.com/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/cypress-react-app-actions/issues) on Github

## MIT License

Copyright (c) 2022 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
