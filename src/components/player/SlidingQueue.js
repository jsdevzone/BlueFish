/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
 'use strict';

import React, { Text, View, StyleSheet, ListView, Image, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Dimensions from 'Dimensions';

//stores
import { CategoryStore } from '../../stores/CategoryStore';

const DEVICE_HEIGHT = Dimensions.get('window').height;
const DEVICE_WIDTH =  Dimensions.get('window').width;

 /**
  * @class SlidingQueue
  * @extends React.Component
  */
export class SlidingQueue extends React.Component {

     /**
      * @constructor
      */
    constructor() {
        super();

        // ListView data source object
        this.listDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        /**
         * @state
         */
        this.state = {
            dataSource: this.listDataSource.cloneWithRows([
                { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},
                { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},
                { title: 'Loveshhuda', cover: 'http://c.saavncdn.com/012/Loveshhuda-Hindi-2015-150x150.jpg', subTitle: 'Parichay,  Mithoon' },
                { title: 'Sanam - Tere Bina Zindagi Se', cover: 'http://c.saavncdn.com/556/Sanam-Tere-Bina-Zindagi-Se-Hindi-2016-150x150.jpg', subTitle: 'Sanam Puri'},
                { title: 'Sanam Re', cover: 'http://c.saavncdn.com/829/Sanam-Re-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik' },
                { title: 'Airlift', cover: 'http://c.saavncdn.com/451/Airlift-Hindi-2015-150x150.jpg', subTitle: 'Amaal Mallik'},
            ])
        };
    }

    /**
     * Transforms each row of list view. [See ListView for more details]
     *
     * @param {Object} rowData
     * @param {Number} sectionID
     * @param {Number} rowID
     */
    renderRow(rowData, sectionID: number, rowID: number) {
        return (
            <View style={styles.row}>
                <Image style={styles.cover} source={{uri: rowData.cover}} />
                <View style={styles.titleWrapper}>
                    <View style={{flex: 1}}>
                        <Text style={{ fontSize: 18, color: '#333'}}>{rowData.title}</Text>
                        <Text style={{fontSize: 14}}>{rowData.subTitle}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="ios-cloud" style={[styles.playerIcon, { marginTop: 3}]} size={35} color="#4F8EF7" />
                        <Icon name="ios-download" style={[styles.playerIcon]} size={35} color="#4F8EF7" />
                    </View>
                </View>
            </View>
        );
    }

    /**
     * @render
     * @return {View} container
     */
    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    style={{flex: 1}} />
            </View>
        );
    }
}

/**
 * @style
 */
 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4F4F4',
        borderTopColor: '#e4e4e4',
        borderTopWidth: 1,
        flex: 1,
        width: DEVICE_WIDTH
    },
    row: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'stretch'
    },
    cover: {
        width: 60,
        height: 60,
        margin: 10,
        marginTop: 5
    },
    titleWrapper: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomWidth : 1,
        borderBottomColor: '#CCC',
        flex: 1,
        height: 70,
        flexDirection: 'row'
    },
    playerIcon: {
        marginLeft: 5,
        marginRight: 10
    }
});
