import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import Square from '../src/components/Square';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('<Square />', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<Square row={0} square={1} letter="X" handleClick={() => {}} />);
    });

    it('Renders a <div> with class "square"', () => {
      expect(wrapper.text()).toEqual('X');
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.props().className).toEqual('square');
    });

    xit('Clicking on the square passes row and square props to handleClick', () => {

    });
  });

  describe('<Row />', () => {
    // TODO: Write a test to make sure a Row renders 3 Squares

  });

  describe('GameList', () => {
    // TODO: Write a test to make sure a GameList renders a <ul> with an <li>
    // for every item in its gameList array prop

  });
});
