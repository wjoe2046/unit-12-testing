const Browser = require('zombie');

// You may use whatever assertion library you would like.
const expect = require('expect');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

const PORT = process.env.PORT || 3000;
const app = require('../');

// Regex which matches strings that are a single capital letter A-Z or Qu
const letterRegex = /^(?=[A-Z])[^Q]$|(Qu)$/;

describe('Boggle Tests', () => {
  const browser = new Browser();

  before(done => {
    browser.visit(`http://localhost:${PORT}/`, done);
  });

  it('server sends index page', () => {
    browser.assert.success();
  });

  it('board has 25 elements with class .square', () => {
    browser.assert.elements('.square', 25);
  });

  it('has a table with id #score', () => {
    browser.assert.element('table#score');
  });

  it('has a div with id #currentWord', () => {
    browser.assert.element('div#currentWord');
  });

  it('clicking on letters adds them to #currentWord div', () => {
    const squares = browser.queryAll('.square');
    const letters = squares.slice(0, 4).map(square => square.textContent).join('');

    return browser
      .fire(squares[0], 'click')
      .then(() => browser.fire(squares[1], 'click'))
      .then(() => browser.fire(squares[2], 'click'))
      .then(() => browser.fire(squares[3], 'click'))
      .then(() => {
        const text = browser.query('div#currentWord').textContent;
        return expect(text.toLowerCase()).toMatch(RegExp(letters.toLowerCase()));
      });
  });

  // TODO:
  // Pick at least 3 of the following Zombie.js tests to complete

  xit('every square has a random letter', () => {
  });

  xit('the letter on each square is capitalized, except for Qu', () => {
  });

  xit('clicking on letters gives them class .selected', () => {
  });

  xit('has a button with id #submitWord', () => {
  });

  xit('clicking submit button removes word from #currentWord', () => {
  });

  xit('clicking submit button adds word to #score table', () => {
  });

  xit('displays points for word in score table', () => {
  });

  xit('displays total points for multiple words in score table', () => {
  });

  xit('can only click on adjacent letters', () => {
  });

  xit('can click on diagonal adjacent letters', () => {
  });

  xit('can deselect the last selected letter', () => {
  });

  xit('can deselect only the last selected letter, not previous letters', () => {
  });

  xit('can deselect all previously selected letters if clicked in the right order', () => {
  });
});
