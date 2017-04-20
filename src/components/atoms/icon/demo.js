// @flow
import React from 'react';

import Icon from './';

export default {
    displayName: 'Icon',
    description: 'Renders an icon',
    demos: [
        {
            title: 'Fullscreen',
            render: () => <Icon name="fullscreen" />,
        },
        {
            title: 'Close',
            render: () => <Icon name="close" />,
        },
    ],
};
