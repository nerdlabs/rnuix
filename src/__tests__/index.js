import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import createApp from '../';

const renderer = new ShallowRenderer();

describe('App', () => {
    it('renders without demos', () => {
        const App = createApp();
        const tree = renderer.render(<App />);
        expect(tree).toMatchSnapshot();
    });

    it('renders with demos', () => {
        const render = jest.fn();
        const components = [
            {
                displayName: 'DisplayName 1',
                description: 'Description 1',
                demos: [
                    {
                        title: 'Demo 1a',
                        render,
                    },
                    {
                        title: 'Demo 1b',
                        render,
                    },
                ],
            },
            {
                displayName: 'DisplayName 2',
                description: 'Description 2',
                demos: [
                    {
                        title: 'Demo 2a',
                        render,
                    },
                    {
                        title: 'Demo 2b',
                        render,
                    },
                ],
            },
        ];
        const App = createApp(components);
        const tree = renderer.render(<App />);
        expect(tree).toMatchSnapshot();
    });
});
