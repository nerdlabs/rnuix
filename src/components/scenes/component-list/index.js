// @flow
import React, { PureComponent } from 'react';
import { ListView, Platform, StyleSheet } from 'react-native';

import { colors } from '../../../themes';
import ComponentRow from '../../molecules/component-row';
import Icon from '../../atoms/icon';
import Touchable from '../../atoms/touchable';
import type { Component } from '../../../../type-definitions';

export type Props = {
    navigation: {
        navigate: (route: string, params?: any) => void,
    },
    screenProps: {
        components: Component[],
        onExit?: () => void,
    },
};
type RenderRowProps = Component;
type DataSource = typeof ListView.DataSource;

export default class ComponentList extends PureComponent {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Components',
        headerBackTitle: null,
        headerLeft: screenProps.onExit && (
            <Touchable
                onPress={screenProps.onExit}
                style={styles.exitButton}
                borderless
                rippleColor="rgba(0, 0, 0, 0.32)"
            >
                <Icon
                    name="close"
                    tintColor={
                        Platform.OS === 'ios' ? colors.blue : colors.black
                    }
                />
            </Touchable>
        ),
    });
    props: Props;

    state: { dataSource: DataSource };

    dataSource: DataSource;

    constructor(props: Props) {
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        const { components } = props.screenProps;

        this.state = {
            dataSource: this.dataSource.cloneWithRows(components),
        };
    }

    renderRow = (props: RenderRowProps) => (
        <ComponentRow
            title={props.displayName}
            description={props.description}
            onPress={() => this.props.navigation.navigate('demo', props)}
        />
    );

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    exitButton: {
        padding: 16,
    },
});
