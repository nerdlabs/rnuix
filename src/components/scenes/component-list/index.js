// @flow
import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../themes';
import ComponentRow from '../../molecules/component-row';
import type { Component as ComponentT } from '../../../../type-definitions';

type ComponentListProps = {
    components: ComponentT[],
    navigate: (route: string, params?: any) => void,
};
type RenderRowProps = ComponentT;
type DataSource = typeof ListView.DataSource;

export default class ComponentList extends Component {
    static navigationOptions = {
        header: {
            title: 'Components',
        },
    };

    props: ComponentListProps;

    state: { dataSource: DataSource };

    dataSource: DataSource;

    constructor(props: ComponentListProps) {
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: this.dataSource.cloneWithRows(props.components),
        };
    }

    renderRow = (props: RenderRowProps) => (
        <ComponentRow
            title={props.displayName}
            description={props.description}
            onPress={() => this.props.navigate('demo', {
                ...props,
                navigate: this.props.navigate,
            })}
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
