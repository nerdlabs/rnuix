import React from 'react';
import { StyleSheet } from 'react-native';

export type Component = {
    displayName: string,
    description: string,
    demos: { title: string, render: () => React.Element<*> }[],
    hideHeader?: boolean,
    exitButtonStyle?: StyleSheet.Style,
};
