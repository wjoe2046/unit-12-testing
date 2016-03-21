
/*
* Unit tests for front-end jQuery
*/

// expect (https://github.com/mjackson/expect) and expect-element scripts have run
// in index.html, so we have access to those libraries.

// Since this is a phantomjs script it runs IN THE BROWSER. Note how index.html
// is requiring this file in. Thus, we CANNOT use require statements in this file.

describe('client side unit tests', function() {
  describe('randomChar', function() {
    it('it returns a string of length 1', function() {
      expect(randomChar('aaafrs')).toBeA('string');
      expect(randomChar('dhlnor').length).toEqual(1);
    });

    it('returns a string from the passed in string', function() {
      expect('aaafrs').toContain(randomChar('aaafrs'));
    });
  });

  describe('clearBoardSelected', function() {
    it('.selected class is removed from selected square', function() {
      const $square = $('.square').first();
      $square.addClass('selected');
      expect($square.attr('class')).toContain('selected');
      clearBoardSelected();
      expect($square.attr('class')).toNotContain('selected');
    });
  });

  // TODO:
  // Choose 3 other functions in public/js/main.js and unit test them here.
  // Which functions are easier to test? Which are harder?
});
