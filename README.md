# testing-module
Testing module

## About
In this module you'll be taking an existing codebase which the previous developer did not follow best practices when coding. The codebase has no tests, may not be written in an object-oriented approach, and has functionality that is potentially unreliable.

The purpose of this unit is to give you practice adding tests to someone else's code, and to hopefully teach you why it's a good idea to always write tests for your code. You'll gain familiarity and practice with mocha, zombie, supertest, and the assertion library of your choice.

## Setup
- [ ] run `npm install`
- [ ] `npm start` to start your server on port 3000 and test it out
- [ ] `npm test` to run your test suite

## Challenges
Your client has assigned you the task of cleaning up this codebase. To fulfill your contract, you'll need to achieve the following:
  - [ ] 100% test coverage of this library
  - [ ] Unit tests for each function in `public/js/main.js`
  - [ ] Unit tests for each function in `server/util.js`
  - [ ] Integration tests
    - Headless browser integration testing with [Zombie](http://zombie.js.org/)
    - Backend API testing with [supertest](https://github.com/visionmedia/supertest)

## Extension
Your client wants the following features added to this app. Write tests for each currently nonexistent feature listed below, and then implement the feature to pass your tests (if you have time).
  - [ ] Currently when multiple letters are selected the user is only allowed to deselect the most recently selected letter. Add functionality so that clicking any previously selected letter deselects that letter and all letters after it.
    - e.g. User clicks on 'A', then on 'N', then on 'I', then on 'M'. User then clicks on the original 'N'. 'N, 'I', and 'M' are all deselected, leaving just 'A' selected.
  - [ ] Add a `New Game` button that resets the board and clears the score.
  - [ ] Add a timer that counts down from 3 minutes once the `New Game` button has been pressed. At the end of the timer, all the input buttons should be disabled.
    - Hint: you'll need to use `Sinon` to mock the JavaScript timer in order to test this one
