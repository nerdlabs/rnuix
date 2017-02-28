// @flow
import React from 'react';
import { Alert, Text } from 'react-native';

const navigate = (route: string, params?: any) => {
    Alert.alert(
        `Navigation to: ${route}`,
        `Route: ${route}\nParams: ${JSON.stringify(params)}`,
    );
};

const noDemos = {
    navigate,
    demos: [],
};
const oneDemo = {
    navigate,
    demos: [
        {
            title: 'This is a demo',
            render: () => <Text>Demo</Text>,
        },
    ],
};
const manyDemos = {
    navigate,
    demos: Array.from({ length: 8 }).map((_, i) => ({
        title: `A demo #${i}`,
        render: () => <Text>Demo #{i}</Text>,
    })),
};

import Demo from './';

export default {
    displayName: 'Demo',
    description: 'This scene renders a component in multiple variations',
    demos: [
        {
            title: 'No demos',
            render: () => <Demo {...noDemos} />,
        },
        {
            title: 'One demo',
            render: () => <Demo {...oneDemo} />,
        },
        {
            title: 'Many demos',
            render: () => <Demo {...manyDemos} />,
        },
    ],
};
