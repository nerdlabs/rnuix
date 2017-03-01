// @flow
import React from 'react';
import { Text } from 'react-native';

import Touchable from './';

export default {
    displayName: 'Touchable',
    description: 'Renders a TouchableNativeFeedback on Android, otherwise a TouchableOpacity.',
    demos: [
        {
            title: 'Text content',
            render: () => <Touchable><Text>Touch me!</Text></Touchable>,
        },
        {
            title: 'Custom style',
            render: () => (
                <Touchable
                    style={{
                        backgroundColor: '#78c',
                        borderRadius: 3,
                        margin: 10,
                        padding: 10,
                    }}
                >
                    <Text
                        style={{
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Touch me!
                    </Text>
                </Touchable>
            ),
        },
    ],
};
