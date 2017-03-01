// @flow
import React, { Component } from 'react';
import { ListView, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { colors } from '../../../themes';
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
        <TouchableOpacity
            onPress={() => this.props.navigate('demo', {
                ...props,
                navigate: this.props.navigate,
            })}
            style={styles.row}
        >
            <Text style={styles.displayName}>{props.displayName}</Text>
            <Text style={styles.description}>{props.description}</Text>
        </TouchableOpacity>
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
    row: {
        backgroundColor: colors.white,
        borderBottomColor: colors.silverDark,
        borderBottomWidth: 1,
        padding: 10,
    },
    displayName: {
        color: colors.black,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    description: {
        color: colors.gray,
        fontSize: 12,
    },
});
