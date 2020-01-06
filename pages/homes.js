import React, { Component } from 'react';
import {
    Container, Header, Content, Button, Text, Left, Icon, Body, Right, Title,
    H1, Item, Input, Card, CardItem, Footer, FooterTab
} from 'native-base';
import { StyleSheet, Image, View } from 'react-native'
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
import UpcomingMap from "../mapping/upcoming"
import EventMap from '../mapping/event';
import Headers from "../component/header"


export default class Home extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Detail');
    }

    handlePresses = () => {
        this.props.navigation.navigate('Category');
    }

    onPress = () => {
        navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
        });
    }

    render() {
        console.log(this.props.navigation)
        return (
            <Container style={styles.header}>
                <Headers />
                <Content padder style={styles.home}>
                    <H1 style={styles.title}>
                        Today's Event
                    </H1>
                    <ScrollView horizontal>
                        <EventMap />
                    </ScrollView>
                    <H1 style={styles.title}>
                        Upcoming Event
                    </H1>
                    <ScrollView horizontal>
                        <UpcomingMap />
                    </ScrollView>

                </Content>
                <Footer>
                    <FooterTab style={{ backgroundColor: '#ff5555' }}>
                        <Button vertical style={{ color: '#ff5555' }}>
                            <Text style={{ color: 'white' }} onPress={this.handlePress}>SPORT</Text>
                        </Button>
                        <Button vertical style={{ color: '#ff5555' }}>
                            <Text style={{ color: 'white' }} onPress={this.handlePresses}>MUSIC</Text>
                        </Button>
                        <Button vertical style={{ color: '#ff5555' }}>
                            <Text style={{ color: 'white' }}>SCIENCE</Text>
                        </Button>
                        <Button vertical style={{ color: '#ff5555' }}>
                            <Text style={{ color: 'white' }}>OTHER</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container >
        );
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
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    cardTitle: {
        fontSize: 25,
        fontWeight: '700'
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
        width: "100%",
    },
    group1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%'
    },

    fav: {
        fontSize: 35,
        textAlign: 'center'
    },
    button: {
        justifyContent: 'flex-end'
    }
});