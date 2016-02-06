# testing-module
Testing module

## About
In this module you'll be taking an existing codebase which the previous developer did not follow best practices when coding. The codebase has no tests, may not be written in an object-oriented approach, and has functionality that is potentially unreliable.

The purpose of this unit is to give you practice adding tests to someone else's code, and to hopefully teach you why it's a good idea to always write tests for your code. You'll gain familiarity and practice with mocha, zombie, supertest, and different assertion libraries of your choice.

## Setup
- [ ] run `npm install`
- [ ] `npm start` to start your server on port 3000 and test it out
- [ ] `npm test` to run your test suite
- [ ] `bower install` to install front-end testing dependencies

## Getting Started
- The files you will be working in are `server/util.js`, `test/`, `index.js`, and potentially in `public/js/main.js`. It wouldn't hurt to take a look around and get a feel for the rest of the code base though.
- You'll need to do a combination of writing tests, changing functionality in order to make tests pass, and potentially adding new functionality for the tests you've written.
- 

## Challenges
Your client has assigned you the task of cleaning up this codebase. To fulfill your contract, you'll need to achieve the following:
  - [ ] Write unit tests for `server/util.js`
  - [ ] Write front-end unit tests for some of jQuery functionality in `public/js/main.js`
  - [ ] Integration tests
    - Headless browser integration testing with [Zombie](http://zombie.js.org/)
    - Backend API testing of routes with [supertest](https://github.com/visionmedia/supertest)
  - [ ] Add a code-coverage library

## Extension
Your client wants the following features added to this app. Write tests for each currently nonexistent feature listed below, and then implement the feature to pass your tests (if you have time).
  - [ ] Currently when multiple letters are selected the user is only allowed to deselect the most recently selected letter. Add functionality so that clicking any previously selected letter deselects that letter and all letters after it.
    - e.g. User clicks on 'A', then on 'N', then on 'I', then on 'M'. User then clicks on the original 'N'. 'N, 'I', and 'M' are all deselected, leaving just 'A' selected.
  - [ ] Add a `New Game` button that resets the board and clears the score.
  - [ ] Add a timer that counts down from 3 minutes once the `New Game` button has been pressed. At the end of the timer, all the input buttons should be disabled.
    - Hint: you'll need to use `Sinon` to mock the JavaScript timer in order to test this one
