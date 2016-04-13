const expect = require('expect');
const React = require('react');
import Square from '../../src/components/Square';

// Skin-deep is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
// https://github.com/glenjamin/skin-deep/tree/one-point-oh
const sd = require('skin-deep');

describe('React unit tests', () => {
  describe('Square', () => {
    let tree;

    before(() => {
      tree = sd.shallowRender(<Square row="0" square="1" letter="X" handleClick={() => {}} />);
    });

    it('Renders a <div> with class "square"', () => {
      expect(tree.text()).toEqual('X');
      expect(tree.type).toEqual('div');
      expect(tree.props.className).toEqual('square');
    });

    xit('Clicking on the square calls passes row and square props to handleClick', () => {
      // Hint: https://github.com/glenjamin/skin-deep/tree/one-point-oh#triggering-events
    });
  });

  describe('Row', () => {
    // TODO: Write a test to make sure a Row renders 3 Squares
  });

  describe('GameList', () => {
    // TODO: Write a test to make sure a GameList renders a <ul> with an <li>
    // for every item in its gameList array prop
  });
});
