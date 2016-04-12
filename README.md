# Testing Module

## About
In this module we'll be practicing writing tests for an existing codebase, and then adding new features and tests for those features. You'll be provided a codebase for a functioning Tic Tac Toe game and will work to write some tests for it.

The learning goals for this unit are as follows:
- Gain familiarity with different testing tools such as Mocha, expect, Chai, Supertest, and more
- Practice writing unit tests and integration tests
- Learn two different ways of testing client-side code: Headless browsers and React shallow rendering
- Learn to identify when a function is testable or not, and learn to correct that problem

## Setup
- [ ] run `npm install`
- [ ] `npm start` to start your server on port 3000 and test it out
- [ ] `npm test` to run your test suite

## Getting Started
- Take a look around and familiarize yourself with the codebase.
  - There's a React app in `src/` and an express server in `index.js`
  - Since the focus of this unit is on testing and not databases, a simplified json "database" is implemented for you in `server/db/`
- Use `npm test` to run your tests

## Challenges
- [ ] Complete the server integration tests in `test/supertest.js`
- [ ] Complete 3 of the Zombie.js tests in `test/zombie.js`
- [ ] Complete 3 of the front-end unit tests in `test/compiled/phantom.js`
- [ ] Write a front-end test that clicks on the `#solve` button and makes sure that the solution JSON is displayed on the DOM.
  - Have your test mock the server using `sinon` so that it's not testing the actual server route, but rather the front-end code for updating the DOM.
  - You will need to complete the functionality in the `addSolutionToDom` function in `public/js/main.js`
- [ ] Add an npm script that uses `eslint` to lint your code. An `.eslintrc` file configured with the airbnb style guide has been provided.
- [ ] Add a code coverage library and figure out what our code coverage percentage is. Probably not very high...


### Part 1 - Setup
- [ ] This project requires some build tools setup in order to run. Figure out what needs to be done to build the project.
