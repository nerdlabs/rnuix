// @flow
import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../themes';
import ComponentRow from '../../molecules/component-row';
import type { Component as ComponentT } from '../../../../type-definitions';

export type Props = {
    navigation: {
        navigate: (route: string, params?: any) => void,
    },
    screenProps: {
        components: ComponentT[],
    },
};
type RenderRowProps = ComponentT;
type DataSource = typeof ListView.DataSource;

export default class ComponentList extends Component {
    static navigationOptions = {
        title: 'Components',
        header: { backTitle: null },
    };

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
