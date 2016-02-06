
/*
* Unit tests for front-end jQuery
*/

// expect.js is required in compiled/index.html
// feel free to require in chai.expect or chai.assert if you would like

// mocha-phantomjs doesn't like arrow functions :(

describe('front end jQuery tests', function() {
  
  before(function() {
    // If you make server requests with your front-end code, then mock your server 
    // here with sinon so that you can Unit test jQuery!
  });
  
  describe('rollDie', function() {
    
    it('returns a string of length 1', function() {
      expect(rollDie('aaafrs')).to.be.a('string');
      expect(rollDie('dhlnor').length).to.equal(1);
    });
    
    it('returns a string from the passed in string', function() {
      expect('aaafrs').to.contain(rollDie('aaafrs'));
    });
    
    xit('returns a random letter', function() {
      
      // TODO: Test the randomness of the rollDie function
      
    });
    
  });
  
  describe('clickSquare', function() {
    
    // TODO: test the clickSquare function
    
  });
  
  describe('unplayable', function() {
    
    // TODO: test the unplayable function
    
  });
  
});
