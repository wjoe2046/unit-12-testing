# testing-module
Testing module

## About
In this module you'll be taking an existing codebase which the previous developer did not follow best practices when coding. The codebase has no tests, may not be written in an object-oriented approach, and has functionality that is potentially unreliable.

The purpose of this unit is to give you practice adding tests to someone else's code, and to hopefully teach you why it's a good idea to always write tests for your code. You'll also gain some familiarity and practice with mocha, zombie, supertest, and the assertion library of your choice.

## Setup
- [ ] Skim the docs for each assertion library and decide which one you'd like to use:
  - [Chai Expect](http://chaijs.com/guide/styles/#expect)
  - [Chai Assert](http://chaijs.com/guide/styles/#assert)
  - [mjackson's expect](https://github.com/mjackson/expect)
  - Or, [bring in a different one own](http://stackoverflow.com/questions/10472152/standalone-assertion-libraries)
- [ ] run `npm install`
- [ ] `npm start` to start your server on port 3000
- [ ] `npm test` to run your test suite

## Challenges
Your client has assigned you the task of cleaning up this codebase. To fulfill your contract, you'll need to achieve the following:
  - [ ] 100% test coverage of this library
  - [ ] Unit tests for each function in `public/js/main.js`
  - [ ] Integration tests
    - Headless browser integration testing with Zombie
    - Backend API testing with Supertest

Your client has also asked that you add the following features to this app, and that you PLEASE make sure to write tests for them before adding them:
  - [ ] Currently when multiple letters are selected the user is only allowed to deselect the most recently selected letter. Add functionality so that clicking any previously selected letter deselects that letter and all letters after it.
    - e.g. User clicks on 'A', then on 'N', then on 'I', then on 'M'. User then clicks on the original 'N'. 'N, 'I', and 'M' are all deselected, leaving just 'A' selected.
  - [ ] Please add a `New Game` button that resets the board and clears the score.
  - [ ] Add a timer that counts down from 3 minutes once the `New Game` button has been pressed. At the end of the timer, all the input buttons should be disabled.
