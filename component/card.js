import React, { Component } from 'react';
import {
    Container, Header, Content, Button, Text, Left, Icon, Body, Right, Title,
    H1, Item, Input, Card, CardItem, Footer, FooterTab
} from 'native-base';
import { StyleSheet, Image, View } from 'react-native'
import moment from 'moment'



export default function EventCard(props) {

    const dates = new Date(props.date);
    const date = moment(dates).format("DD MMM YYYY")
    return (
        <Card style={{ minWidth: 300 }}>
            <CardItem >
                <Image source={{ uri: `${props.img}` }} style={{ height: 200, width: 200, flex: 1 }} />
            </CardItem>
            <CardItem>
                <View>
                    <Text style={styles.cardTitle}>
                        {props.title}
                    </Text>
                    <View style={styles.group1}>
                        <View>
                            <Text style={{ color: '#7f7f7f' }}>{date}</Text>
                            <Text style={{ color: '#ff5555', fontWeight: '700' }}>Rp {props.price} </Text>
                        </View>
                        <View>
                            <Button transparent style={styles.button}>

                            </Button>
                        </View>
                    </View>
                </View>
            </CardItem>
        </Card>
    )
}



const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'left',
        fontSize: 25,
        fontWeight: '700',
        color: 'white'
    },
    header: {
        backgroundColor: '#ff5555',
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: '700',
        width: 300
    },
    title: {
        fontSize: 30,
        color: '#ff5555',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: '700'
    },
    home: {
        backgroundColor: '#f4e1e1'
    },
    buttonGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    search: {
        borderStyle: 'solid',
        borderWidth: 0,
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    group1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    fav: {
        fontSize: 35,
        textAlign: 'center'
    },
    button: {
        justifyContent: 'flex-end'
    }
});