// @flow
import React, { Component } from 'react';
import { ListView, Text, TouchableOpacity } from 'react-native';

// TODO: define outside and import only type
type ComponentT = {
    displayName: string,
    description: string,
};

export type ComponentListProps = {
    components: ComponentT[],
    navigate: (route: string, params?: any) => void,
};

type RenderRowProps = ComponentT;

type DataSource = typeof ListView.DataSource;

export default class ComponentList extends Component {
    static navigationOptions = {
        title: 'Components',
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

    renderRow = ({ displayName }: RenderRowProps) => (
        <TouchableOpacity
            onPress={() => this.props.navigate('demo', { displayName })}
        >
            <Text>{displayName}</Text>
        </TouchableOpacity>
    );

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
