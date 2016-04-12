const Browser = require('zombie');

// Include one of the following assertion libraries if you need to make assertions
// that Zombie does not provide out of the box.
// const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

const PORT = process.env.PORT || 3000;

// Start the server
require('../');

// Regex which matches strings that are a single capital letter A-Z or Qu
describe('Front-end Integration/Features', () => {
  const browser = new Browser();
  browser.silent = true;

  before(done => {
    browser.visit(`http://localhost:${PORT}/`, done);
  });

  it('loads successfully', () => {
    browser.assert.success();
  });

  it('displays a board', () => {
    browser.assert.element('#board');
  });

  xit('displays 3 rows', () => {
    // TODO
  });

  xit('displays 9 squares', () => {
    // TODO: Assert that there are 9 divs with the class square inside the div with id board
  });

  xit('clicking on square places an X in square', () => {
  });
});
