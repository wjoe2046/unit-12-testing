import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import LabeledText from '../client/components/LabeledText';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('LabeledText', () => {
    let wrapper;

    beforeAll(() => {
      wrapper = shallow(<LabeledText label="Mega" text="Markets" />);
    });

    it('Renders a <p> tag with the label in bold', () => {
      expect(wrapper.type()).toEqual('p');
      expect(wrapper.text()).toEqual('Mega: Markets');
      expect(wrapper.find('strong').text()).toMatch('Mega');
    });
  });

  describe('MarketDisplay', () => {
    // TODO: Test the following:
    // 1. A MarketDisplay should display all of its text props inside a
    // LabeledText component
    // 2. It should also contain a div with two buttons
    // 3. The functions passed down should be invoked on click
    // 4. MarketDisplay should render a div with a class of `innerbox`, and the
    // interior div wrapping the two buttons should have a class of `flex`

  });

  describe('MarketsDisplay', () => {
    // TODO: Test the following:
    //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
    //   title
    //   2. A single MarketDisplay is rendered for each market in the
    //   marketList prop
    //   3. The special `key` prop in React should NOT receive the index of the
    //   market from its array (right now this is implemented incorrectly, so
    //   follow TDD here)
  });
});
