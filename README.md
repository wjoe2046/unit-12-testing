# Testing Module

## About
In this module we'll be practicing writing tests for an existing codebase, and then adding new features and tests for those features. You'll be provided a codebase for a functioning Boggle game and will work to write some tests for it. Note how all of the game logic functions and DOM manipulation functions are written such that their dependencies are injected and they don't rely on global variables. They are far from perfect but should be testable.

The learning goals for this unit are as follows:
- Gain familiarity with different testing tools such as Mocha, expect, Chai, Supertest, and more
- Learn two different ways of testing client-side code: PhantomJS and ZombieJS
- Practice writing unit tests and integration tests
- Learn to identify when a function is testable or not, and learn to correct that problem

## Setup
- [ ] run `npm install`
- [ ] `npm start` to start your server on port 3000 and test it out
- [ ] `npm test` to run your test suite
- [ ] `bower install` to install front-end testing dependencies

## Getting Started
- The files you will be working in are `server/util.js`, `test/`, `index.js`, and `public/js/main.js`. Take a look around and get a feel for the code base.
- Use `npm test` to run the entire suite of tests. There are also individual test scripts for each type of test:
  - `npm run zombie`
  - `npm run supertest`
  - `npm run phantomjs`

## Challenges
- [ ] Complete the server integration tests in `test/supertest.js`
- [ ] Complete 3 of the Zombie.js tests in `test/zombie.js`
- [ ] Complete 3 of the front-end unit tests in `test/compiled/phantom.js`
- [ ] Write a front-end test that clicks on the `#solve` button and makes sure that the solution JSON is displayed on the DOM.
  - Have your test mock the server using `sinon` so that it's not testing the actual server route, but rather the front-end code for updating the DOM.
  - You will need to complete the functionality in the `addSolutionToDom` function in `public/js/main.js`
- [ ] Add an npm script that uses `eslint` to lint your code. An `.eslintrc` file configured with the airbnb style guide has been provided.
- [ ] Add a code coverage library and figure out what our code coverage percentage is. Probably not very high...
