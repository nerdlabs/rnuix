import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../index.ios.js';

const renderer = new ShallowRenderer();

it('renders correctly', () => {
    const tree = renderer.render(<App />);
    expect(tree).toMatchSnapshot();
});
