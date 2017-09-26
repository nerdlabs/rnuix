// @flow
import React from 'react';

import { colors } from '../../../themes';
import FloatingButton from './';

export default {
    displayName: 'FloatingButton',
    description:
        'Renders a rounded button appropriate for primary screen actions.',
    demos: [
        {
            title: 'Default',
            render: () => (
                <FloatingButton name="arrow_back" onPress={() => {}} />
            ),
        },
        {
            title: 'Custom style',
            render: () => (
                <FloatingButton
                    name="close"
                    buttonStyle={{ backgroundColor: colors.blue }}
                    onPress={() => {}}
                />
            ),
        },
        {
            title: 'Custom style and tintColor',
            render: () => (
                <FloatingButton
                    name="fullscreen"
                    tintColor={colors.black}
                    buttonStyle={{ backgroundColor: colors.silverLight }}
                    onPress={() => {}}
                />
            ),
        },
    ],
};
