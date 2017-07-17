import React from 'react';
import { shallow } from 'enzyme';
import App from '../index.android.js';

it('renders correctly', () => {
    const tree = shallow(<App />);
    expect(tree).toMatchSnapshot();
});
