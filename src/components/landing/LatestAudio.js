'use strict';
/*
 * @Author Jasim
 *
 * Urudu Radio
 *
 * Copyright (C) YoYoDyne Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import React, { View, Text, StyleSheet, Image, ListView ,TouchableOpacity} from 'react-native';
import { Player } from '../player/Player';
import { SlidingQueue } from '../player/SlidingQueue';

/**
 * @class TitleBar
 * @extends React.Component
 */
export class LatestAudio extends React.Component {
    /**
     * @constructor
     */
    constructor() {
        super();

        this.data = [
            { name: 'Zindagi Guzarne Ka Rasta', author: 'Abdul Bari Nadvi Bhatkal' },
            { name: 'Zindagi Guzarne Ka Rasta', author: 'Abdul Bari Nadvi Bhatkal' },
            { name: 'Zindagi Guzarne Ka Rasta', author: 'Abdul Bari Nadvi Bhatkal' },
            { name: 'Zindagi Guzarne Ka Rasta', author: 'Abdul Bari Nadvi Bhatkal' },
            { name: 'Zindagi Guzarne Ka Rasta', author: 'Abdul Bari Nadvi Bhatkal' },
        ];
        this.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        /**
         * @state
         */
        this.state = {
            dataSource: this.dataSource.cloneWithRows(this.data),
            authors: {}
        };


    }
    onPlayer() {
        this.props.navigator.push({ title: 'Player', component: Player, props: { navigator: this.props.navigator }});
    }
    onAuthor() {
        this.props.navigator.push({ title: 'Author', component: SlidingQueue, props: { navigator: this.props.navigator }});
    }

    renderRow(rowData) {
        let component = (
            <TouchableOpacity onPress={this.onPlayer.bind(this)}>
                <View style={styles.rowContainer}>
                    <View style={{width: 40, height: 40 , borderColor: '#FFF', borderWidth: 2, borderRadius: 25}}/>
                    <View style={{flex:1, marginLeft: 10, marginTop: 1 }}>
                        <Text style={{color:'white', fontSize: 13,fontWeight:'bold',marginTop:4}}>{rowData.name}</Text>
                        <Text style={{color:'white', fontSize: 10}}>{rowData.author}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
        return component;
    }
    /**
     * @render
     * @return {View} Component
     */
     render() {
         return (
             <Image style={[styles.container]}
             source={require('../../../resource/images/gradient-diamond.png')}>
             <View style={{height: 30, justifyContent: 'center', paddingLeft: 10}}>
                <Text style={{color:'white'}}>Latest Audio</Text>
             </View>
             <View style={{backgroundColor:'rgba(0,0,0,0.5)', flex: 1, alignItems: 'stretch'}}>

                <ListView style={{flex:1}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)} />
                <TouchableOpacity onPress={this.onAuthor.bind(this)}>
                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Text style={{color: '#FFF'}}>More</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

             </Image>
         );
     }
}

/**
 * @style
 */
const styles = StyleSheet.create({
     container: {
         margin: 8,
         height: 255,
         width: null,
         alignItems: 'stretch',
     },
     rowContainer: {
         flexDirection: 'row',
         padding: 10
     },
     buttonWrapper: {
         flexDirection: 'row',
         alignItems: 'flex-end',
         justifyContent: 'flex-end',
         padding: 5
     },
     button: {
         backgroundColor: '#7C3539',
         paddingTop: 4,
         paddingBottom: 4,
         paddingLeft: 8,
         paddingRight: 8
     }
});
