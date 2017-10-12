// @flow
jest.unmock('../');

import * as React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';

import DemoTile from '../';

const shallow = new ShallowRenderer();
const render = jest.fn();

describe('DemoTile', () => {
    it('renders default', () => {
        const tree = shallow.render(<DemoTile title="Foo" render={render} />);
        expect(tree).toMatchSnapshot();
    });

    it('renders fullscreen', () => {
        const tree = shallow.render(
            <DemoTile title="Foo" render={render} isFullScreen />,
        );
        expect(tree).toMatchSnapshot();
    });

    it('calls the passed render function', () => {
        const tree = renderer.create(<DemoTile title="Foo" render={render} />);
        expect(render).toHaveBeenCalled();
    });
});
