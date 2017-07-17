// @flow
jest.unmock('../');

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { shallow } from 'enzyme';

import Touchable from '../';

const onPress = jest.fn();

describe('Touchable', () => {
    let rendered;

    beforeEach(() => {
        rendered = shallow(<Touchable onPress={onPress} />);
    });

    it('should render a View and no Touchable* if no onPress is provided', () => {
        rendered.setProps({
            onPress: null,
        });

        expect(rendered.find(View).length).toBe(1);
        expect(rendered.find(TouchableOpacity).length).toBe(0);
        expect(rendered.find('TouchableNativeFeedback').length).toBe(0);
    });

    it('should render a TouchableOpacity by default if onPress is provided', () => {
        expect(rendered.find(TouchableOpacity).length).toBe(1);
    });

    it('should render a TouchableOpacity by default if onLongPress is provided', () => {
        rendered.setProps({
            onPress: null,
            onLongPress: onPress,
        });

        expect(rendered.find(TouchableOpacity).length).toBe(1);
    });

    it('should render a View if onPress and disabled are provided', () => {
        rendered.setProps({
            disabled: true,
        });

        expect(rendered.find(View).length).toBe(1);
    });

    it('should handle onPress callback', () => {
        rendered.simulate('press');

        expect(onPress).toHaveBeenCalled();
    });
});
