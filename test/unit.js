// require('blanket');
var util = require(`../server/util`);

/**
* include your assertion library here
*/
var expect = require('expect');
// var expect = require('chai').expect;
// var assert = require('chai').assert;

describe('Server unit tests', () => {
  
  describe('insertScore function', () => {
    var highScores = require('./mockScores');
    var newScore;
    
    beforeEach(() => {
      newScore = {
        score: 20,
        name: 'Test'
      };
    });
    
    it('properly inserts score into middle of list', () => {
      expect(util.insertScore(newScore, highScores)).toEqual(1, 'score went into index 1');
      expect(highScores.length).toEqual(5, 'length is now 5');
    });
    
    it('gracefully handles improper input', () => {
      expect(util.insertScore(undefined, highScores)).toEqual(-1, 'returns -1 if first arg missing');
      expect(util.insertScore(newScore, undefined)).toEqual(-1, 'returns -1 if second arg missing');
    });
    
    xit('properly inserts score into beginning of list', () => {
      // write test here
    });
    
    xit('properly inserts score into end of list', () => {
      // write test here
    });
    
  });
  
});
