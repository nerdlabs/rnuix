// @flow
import * as React from 'react';

import ComponentRow from './';

export default {
    displayName: 'ComponentRow',
    description: 'Renders a row for the components list.',
    demos: [
        {
            title: 'Title only',
            render: () => <ComponentRow title="Title" />,
        },
        {
            title: 'Title and short description',
            render: () => (
                <ComponentRow title="Title" description="Description" />
            ),
        },
        {
            title: 'Title and long description',
            render: () => (
                <ComponentRow
                    title="Title"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
            ),
        },
    ],
};
