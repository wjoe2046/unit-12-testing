// require('blanket');
var app = require('../');
var Browser = require('zombie');

/**
* include your assertion library here if needed (there might not be built-in zombie assertions for everything)
*/
// var expect = require('expect');
// var expect = require('chai').expect;
// var assert = require('chai').assert;


// HINT:
// Zombie is not always perfectly documented. To click on something that isn't a button, 
// check out the `query` and `fire` methods:

/*
var link = browser.query('.paginate > a');

browser.fire(link, 'click', function() {
  // item has been clicked
});
*/


describe('Boggle headless browser tests', () => {
  
  const browser = new Browser({ waitDuration: 10 * 1000 });
  browser.silent = true;
  
  before((done) => {
    browser.visit('http://localhost:3000', done);
  });
  
  it('successfully loads home page', () => {
    browser.assert.success();
    browser.assert.url('http://localhost:3000');
    browser.assert.text('title', 'Boggle');
  });
  
  xit('sees boggle board', () => {
    
  });
  
  xit('clicking on a letter adds it to current word area', () => {
    
  });
  
  xit('clicking on multiple letters strings them together in current word area', () => {
    
  });
  
  xit('clicking Submit button clears current word area and adds word to score table', () => {
    
  });
  
  xit('clicking Submit button does nothing if no words selected', () => {
    
  });
  
  xit('can deselect the last clicked word by clicking on it again', () => {
    
  });
  
});
