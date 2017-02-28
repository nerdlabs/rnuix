// @flow
import React, { Component } from 'react';
import { Image, ListView, StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../themes';
import DemoTile from '../../organisms/demo-tile';
import type { Component as ComponentT } from '../../../../type-definitions';

type DemoListProps = {
    demos: ComponentT[],
};
type RenderRowProps = ComponentT;
type DataSource = typeof ListView.DataSource;

export default class Demo extends Component {
    static navigationOptions = {
        header: {
            title: ({ scene: { route: { params } } }) => params.displayName,
        },
    };

    props: DemoListProps;

    state: { dataSource: DataSource };

    dataSource: DataSource;

    constructor(props: DemoListProps) {
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });

        this.state = {
            dataSource: this.dataSource.cloneWithRows(props.demos),
        };
    }

    renderRow = (props: RenderRowProps) => (
        <DemoTile
            style={styles.demo}
            title={props.title}
            render={props.render}
            onEnterFullScreen={() => props.navigate('fullScreen', props.demo)}
            onExitFullScreen={() => props.navigate('demo', props)}
        />
    );

    render() {
        return (
            <ListView
                style={styles.scene}
                dataSource={this.state.dataSource}
                enableEmptySections={true}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        padding: 10,
    },
    demo: {
        marginBottom: 10,
    },
});
