// @flow
import React from 'react';
import { Text } from 'react-native';

import DemoTile from './';

export default {
    displayName: 'DemoTile',
    description: 'Renders a demo.',
    demos: [
        {
            title: 'Normal mode',
            render: () => (
                <DemoTile title="title" render={() => <Text>Content</Text>} />
            ),
        },
        {
            title: 'Full screen mode',
            render: () => (
                <DemoTile
                    title="title"
                    isFullScreen
                    render={() => <Text>Content</Text>}
                    style={{ flex: 1 }}
                />
            ),
        },
    ],
};
