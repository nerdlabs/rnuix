// @flow
import React from 'react';
import { Text } from 'react-native';

import FullScreenDemo from './';

export default {
    displayName: 'FullScreenDemo',
    description: 'This scene renders a given demo in fullscreen mode.',
    demos: [
        {
            title: 'Example',
            render: () => (
                <FullScreenDemo
                    title="title"
                    render={() => <Text>Demo</Text>}
                />
            ),
        },
    ],
};
