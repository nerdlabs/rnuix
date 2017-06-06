// @flow
import React from 'react';
import { Image } from 'react-native';

export type IconProps = {
    name: string,
    tintColor?: string,
};

export default function Icon({ name, tintColor }: IconProps) {
    return <Image source={icons[name]} style={{ tintColor }} />;
}

const icons = {
    arrow_back: require('./assets/ic_arrow_back.png'),
    close: require('./assets/ic_close.png'),
    fullscreen: require('./assets/ic_fullscreen.png'),
};
