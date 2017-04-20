// @flow
import React from 'react';
import { Image } from 'react-native';

export type IconProps = {
    name: string,
};

export default function Icon({ name }: IconProps) {
    return <Image source={icons[name]} />;
}

const icons = {
    fullscreen: require('./assets/ic_fullscreen.png'),
    close: require('./assets/ic_close.png'),
};
