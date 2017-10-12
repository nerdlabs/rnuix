// @flow
import * as React from 'react';

import Icon from './';

export default {
    displayName: 'Icon',
    description: 'Renders an icon',
    demos: [
        {
            title: 'Arrow Back',
            render: () => <Icon name="arrow_back" />,
        },
        {
            title: 'Close',
            render: () => <Icon name="close" />,
        },
        {
            title: 'Fullscreen',
            render: () => <Icon name="fullscreen" />,
        },
    ],
};
