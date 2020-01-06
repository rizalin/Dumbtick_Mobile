import React, { Component } from "react";
import axios from "axios";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import moment from "moment"
import { StyleSheet, Image, View } from 'react-native'
import {
    Container, Header, Content, Button, Text, Left, Icon, Body, Right, Title,
    H1, Item, Input, Card, CardItem, Footer, FooterTab
} from 'native-base';


export default class EventMap extends Component {
    state = {
        eventList: []
    };

    componentDidMount() {
        axios
            // .get("http://192.168.1.33:5000/api/v1/events")
            .get("http://192.168.1.33:5000/api/v1/events")
            .then(res => {
                this.setState({ eventList: res.data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }




    render() {
        const today = new Date()
        const DateNow = moment(today).format("DD MMM YYYY")
        console.log(this.props)
        const date = moment(this.state.eventList.startTime).format("DD MMM YYYY")
        const { eventList } = this.state
        return (
            <ScrollView horizontal>
                {eventList
                    .filter(event => (moment(event.startTime).format("DD MMM YYYY").toString() == DateNow))
                    .map(event => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            price={event.price}
                            date={event.startTime}
                            img={event.img}
                            nave={() => this.props.navigation.navigate('Category')}

                        />
                    ))}
            </ScrollView>


        );
    }
}

class EventCard extends Component {
    render() {
        const dates = new Date(this.props.date);
        const date = moment(dates).format("DD MMM YYYY")
        return (
            <Card style={{ minWidth: 300 }}>
                <CardItem >
                    <Image source={{ uri: `${this.props.img}` }} style={{ height: 200, width: 200, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <View>
                        <Text style={styles.cardTitle} onPress={this.props.nave}>
                            {this.props.title}
                        </Text>
                        <View style={styles.group1}>
                            <View>
                                <Text style={{ color: '#7f7f7f' }}>{date}</Text>
                                <Text style={{ color: '#ff5555', fontWeight: '700' }}>Rp {this.props.price} </Text>
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