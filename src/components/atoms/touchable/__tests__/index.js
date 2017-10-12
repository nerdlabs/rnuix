// @flow
jest.unmock('../');

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Touchable from '../';

const shallow = new ShallowRenderer();
const onPress = jest.fn();

describe('Touchable', () => {
    it('renders a View and no Touchable* if no onPress is provided', () => {
        const tree = shallow.render(<Touchable />);
        expect(tree).toMatchSnapshot();
    });

    it('renders a TouchableOpacity by default if onPress is provided', () => {
        const tree = shallow.render(<Touchable onPress={onPress} />);
        expect(tree).toMatchSnapshot();
    });

    it('renders a TouchableOpacity by default if onLongPress is provided', () => {
        const tree = shallow.render(<Touchable onLongPress={onPress} />);
        expect(tree).toMatchSnapshot();
    });

    it('renders a View if onPress and disabled are provided', () => {
        const tree = shallow.render(<Touchable onPress={onPress} disabled />);
        expect(tree).toMatchSnapshot();
    });

    it('handles onPress callback', () => {
        const tree = shallow.render(<Touchable onPress={onPress} />);
        tree.props.onPress();
        expect(onPress).toHaveBeenCalled();
    });
});
