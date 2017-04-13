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
const manyComponents = Array.from({ length: 8 }).map((_, i) => ({
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
                <ComponentList
                    navigation={{
                        navigate,
                    }}
                    screenProps={{ components: noComponents }}
                />
            ),
        },
        {
            title: 'One component',
            render: () => (
                <ComponentList
                    navigation={{
                        navigate,
                    }}
                    screenProps={{ components: oneComponent }}
                />
            ),
        },
        {
            title: 'Many components',
            render: () => (
                <ComponentList
                    navigation={{
                        navigate,
                    }}
                    screenProps={{ components: manyComponents }}
                />
            ),
        },
    ],
};
