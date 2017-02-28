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
            title: 'Exit fullscreen',
            render: () => <Icon name="fullscreen-exit" />,
        },
    ],
};
