// @flow
import React from 'react';
import { Alert } from 'react-native';

import ComponentList from './';

const navigate = (route: string, params?: any) => {
    Alert.alert(
        `Navigation to: ${route}`,
        `Route: ${route}\nParams: ${JSON.stringify(params)}`,
    );
};

const noComponents = [];
const oneComponent = [
    {
        displayName: 'Component',
        description: 'A demo component',
        demos: [],
    },
];
const manyComponents = Array.from({ length: 100 }).map((_, i) => ({
    displayName: `Component${i}`,
    description: `Demo component #${i}`,
    demos: [],
}));

export default {
    displayName: 'ComponentList',
    description: 'This scene renders a list of all components.',
    demos: [
        {
            title: 'No components',
            render: () => (
                <ComponentList components={noComponents} navigate={navigate} />
            ),
        },
        {
            title: 'One component',
            render: () => (
                <ComponentList components={oneComponent} navigate={navigate} />
            ),
        },
        {
            title: 'Many components',
            render: () => (
                <ComponentList
                    components={manyComponents}
                    navigate={navigate}
                />
            ),
        },
    ],
};
