// @flow
import React from 'react';

import DemoHeader from './';

export default {
    displayName: 'DemoHeader',
    description: 'Renders the header bar of a demo tile.',
    demos: [
        {
            title: 'No title',
            render: () => <DemoHeader title="" />,
        },
        {
            title: 'Short title',
            render: () => <DemoHeader title="x" />,
        },
        {
            title: 'Long title',
            render: () => (
                <DemoHeader title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod" />
            ),
        },
    ],
};
