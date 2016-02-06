
/**
 * @author Jasim
 * @company Aitrich Technologies, Thrissur, Kerala, India.
 *
 * Copyright (C) 2015-2016 Aitrich Technologies, Thrissur, Kerala, India.
 */
    'use strict';

    import React, {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
    import Icon from 'react-native-vector-icons/Ionicons';

    /**
     * @class Detail
     * @extends React.Component
     */
    export class Detail extends React.Component {

        /**
         * @constructor
         */
        constructor() {

            super();
            /**
             * @state
             */
            this.state={};
        }

        /**
         * @render
         * @return {View} container
         */
        render(){
            return(
                <View style = {styles.container}>

                        <Image source = {{uri:'http://c.saavncdn.com/503/Saala-Khadoos-Hindi-2016-500x500.jpg'}} style = {styles.imageAlbum} >
                                <Image source = {{uri:'http://c.saavncdn.com/503/Saala-Khadoos-Hindi-2016-500x500.jpg'}}  style = {styles.innerImage}></Image>
                        </Image>
                        <ScrollView showsVerticalScrollIndicator={true} style={styles.container} vertical={true}>
                        <View style = {styles.detailContainer} >
                                <Text style = {styles.tittle}>Juma Kutuba by Maulana...</Text>
                                <Text style = {styles.subTitle}>Duration :25:00</Text>
                                <Text style = {styles.subTitle}>Category Name</Text>
                                <Text style = {styles.subTitle}>Author Name</Text>
                        </View>
                        <View style = {styles.rowItem}>
                                <Text style = {styles.rowText}>Show More by this Author</Text>
                                <Icon style = {{marginTop : 2,width: 40,height: 40,borderRadius: 20,justifyContent: 'center',alignItems: 'center',marginLeft: 110}} name="arrow-right-b" size={20} color="#000" />
                        </View>
                        <View style = {styles.rowItem}>
                                <Text style = {styles.rowText}>Show More by this Category</Text>
                                <Icon style = {{marginTop : 2,width: 40,height: 40,borderRadius: 20,justifyContent: 'center',alignItems: 'center',marginLeft: 99}} name="arrow-right-b" size={20} color="#000" />
                        </View>
                        <View style={styles.socialIconsWrapper}>
                            <View style={styles.socialIcon}>
                                <Icon name="social-facebook" size={18} color="#FFF" />
                            </View>
                            <View style={styles.socialIcon}>
                                <Icon name="social-twitter" size={18} color="#FFF" />
                            </View>
                            <View style={styles.socialIcon}>
                                <Icon name="social-instagram" size={18} color="#FFF" />
                            </View>
                            <View style={styles.socialIcon}>
                                <Icon name="social-google" size={18} color="#FFF" />
                            </View>
                        </View>
                    </ScrollView>
                    <View style={{height: 60, backgroundColor: '#F4F4F4', borderTopWidth: 1, borderTopColor: '#E2E2E2', justifyContent: 'center', alignItems: 'center'}}>
                        <Text> Advertisement</Text>
                    </View>
                </View>
            );
        }

    }

    /**
     * @style
     */
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'column',
            backgroundColor: '#FFF',
            flex:1
        },
        imageAlbum: {
            width : null,
            height: 250,
            alignItems:'center',
            justifyContent:'center',

        },
        innerImage: {
            width: 150,
            height: 150,
            elevation:8,
            borderColor: '#000',
            borderWidth: 2
        },
        detailContainer:{
            flexDirection: 'column',
            margin:10,
            borderBottomColor:'#000',
            borderBottomWidth:0.5,
            padding:5
        },
        tittle: {
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: 18,
            color: '#000',
            marginTop: 10,
        },
        subTitle: {
            marginTop:10,
            marginLeft: 20,
            fontSize: 16,
            color: '#7f7f7f',
        },
        rowItem:{
            flexDirection:'row',
        },
        rowText:{
            fontSize:14,
            fontWeight:'bold',
            marginLeft:21,
        },
        socialIconsWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            paddingTop: 40,
            paddingBottom: 40
        },
        socialIcon: {
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#30B55A',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10
        },

    })
