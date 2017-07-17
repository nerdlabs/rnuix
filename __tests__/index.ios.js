import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.ios.js';

it('renders correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
});
