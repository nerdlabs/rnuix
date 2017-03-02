// @flow
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Navigator from './';

const FirstScene = ({ navigate }) => (
    <View>
        <TouchableOpacity onPress={() => navigate('second')}>
            <Text>navigate to second scene</Text>
        </TouchableOpacity>
    </View>
);
const SecondScene = ({ navigate }) => (
    <View>
        <TouchableOpacity onPress={() => navigate('third')}>
            <Text>navigate to third scene</Text>
        </TouchableOpacity>
    </View>
);
const ThirdScene = ({ navigate }) => <View><Text>third scene</Text></View>;

const basicRoutes = {
    first: FirstScene,
    second: SecondScene,
    third: ThirdScene,
};
const verticalRoutes = (function() {
    const First = props => <FirstScene {...props} />;
    First.navigationOptions = { direction: 'vertical' };
    const Second = props => <SecondScene {...props} />;
    Second.navigationOptions = { direction: 'vertical' };
    const Third = props => <ThirdScene {...props} />;
    Third.navigationOptions = { direction: 'vertical' };

    return {
        first: First,
        second: Second,
        third: Third,
    };
})();
const titleRoutes = (function() {
    const First = props => <FirstScene {...props} />;
    First.navigationOptions = { header: { title: 'title' } };
    const Second = props => <SecondScene {...props} />;
    Second.navigationOptions = { header: { title: 'title' } };
    const Third = props => <ThirdScene {...props} />;
    Third.navigationOptions = { header: { title: 'title' } };

    return {
        first: First,
        second: Second,
        third: Third,
    };
})();
const rightComponentRoutes = (function() {
    const First = props => <FirstScene {...props} />;
    First.navigationOptions = { header: { right: () => <Text>Right</Text> } };
    const Second = props => <SecondScene {...props} />;
    Second.navigationOptions = { header: { right: () => <Text>Right</Text> } };
    const Third = props => <ThirdScene {...props} />;
    Third.navigationOptions = { header: { right: () => <Text>Right</Text> } };

    return {
        first: First,
        second: Second,
        third: Third,
    };
})();
const leftComponentRoutes = (function() {
    const First = props => <FirstScene {...props} />;
    First.navigationOptions = { header: { left: () => <Text>Left</Text> } };
    const Second = props => <SecondScene {...props} />;
    Second.navigationOptions = { header: { left: () => <Text>Left</Text> } };
    const Third = props => <ThirdScene {...props} />;
    Third.navigationOptions = { header: { left: () => <Text>Left</Text> } };

    return {
        first: First,
        second: Second,
        third: Third,
    };
})();
const leftRightTitleComponentRoutes = (function() {
    const First = props => <FirstScene {...props} />;
    First.navigationOptions = {
        header: {
            left: () => <Text>Left</Text>,
            right: () => <Text>Right</Text>,
            title: 'This is a title (#1)',
        },
    };
    const Second = props => <SecondScene {...props} />;
    Second.navigationOptions = {
        header: {
            left: () => <Text>Left</Text>,
            right: () => <Text>Right</Text>,
            title: 'This is a title (#2)',
        },
    };
    const Third = props => <ThirdScene {...props} />;
    Third.navigationOptions = {
        header: {
            left: () => <Text>Left</Text>,
            right: () => <Text>Right</Text>,
            title: 'This is a title (#3)',
        },
    };

    return {
        first: First,
        second: Second,
        third: Third,
    };
})();

export default {
    displayName: 'Navigator',
    description: 'The navigator is used to navigate between scenes',
    demos: [
        {
            title: 'Basic example',
            render: () => (
                <Navigator
                    routes={basicRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
        {
            title: 'Scenes are using vertical transitions',
            render: () => (
                <Navigator
                    routes={verticalRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
        {
            title: 'Setting a title',
            render: () => (
                <Navigator
                    routes={titleRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
        {
            title: 'Specifying right component',
            render: () => (
                <Navigator
                    routes={rightComponentRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
        {
            title: 'Specifying left component',
            render: () => (
                <Navigator
                    routes={leftComponentRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
        {
            title: 'Specifying left, right and title component',
            render: () => (
                <Navigator
                    routes={leftRightTitleComponentRoutes}
                    initialRoute={{ key: 'first' }}
                />
            ),
        },
    ],
};
