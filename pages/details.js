import React, { Component } from 'react';
import {
    Container, Header, Content, Text, Left, Icon, Body, Right, Title,
    H1, Item, Input, Card, CardItem, Footer, FooterTab, Button
} from 'native-base';
import { StyleSheet, Image, View, } from 'react-native'
import Headers from '../component/header'
import moment from "moment"
import axios from 'axios'


export class DetailMap extends Component {
    state = {
        event: [],
        userData: [],
        category: []
    };

    componentDidMount() {
        axios
            // .get("http://192.168.1.20:5000/api/v1/event/2")
            .get("http://192.168.1.33:5000/api/v1/event/2")
            .then(res => {
                this.setState({ event: res.data });
                this.setState({ userData: res.data.createdBy });
                this.setState({ category: res.data.category });
            })
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.props)
        const { event, userData, category } = this.state
        return (
            <Detail
                key={event.id}
                id={event.id}
                title={event.title}
                cate={category.name}
                price={event.price}
                date={event.startTime}
                img={event.img}
                desc={event.description}
                name={userData.name}
                phone={userData.phoneNumber}
                email={userData.email}
                nave={() => this.props.navigation.navigate('Category')}
            />
        );
    }
}



class Detail extends Component {

    render() {
        const dates = new Date(this.props.date);
        const date = moment(dates).format("DD MMM YYYY")
        return (
            <Container>
                <Headers />
                <Content style={{ backgroundColor: '#f4e1e1' }}>
                    <Card>
                        <CardItem cardBody>
                            <Image source={{ uri: 'http://storage.jurnalotaku.com/wp-content/uploads/2017/07/c3-afaid-2017-fhana-fi-700x394.jpg' }} style={{ height: 300, width: '100%', flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text style={styles.cardTitle}>
                                    {this.props.title}
                                </Text>
                                <View style={styles.group}>
                                    <Text>{this.props.cate}</Text>
                                    <Text>Rp{this.props.price}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <View style={{ borderBottomColor: '#7f7f7f', borderBottomWidth: 1, marginLeft: 15, marginRight: 15 }}></View>
                        <CardItem>
                            <View>
                                <View style={styles.group2}>
                                    <View style={styles.miniText}>
                                        <Icon name="pin" />
                                        <Text>Balai Kartini</Text>
                                    </View>
                                    <View style={styles.miniText}>
                                        <Icon name="calendar" />
                                        <Text>{date}</Text>
                                    </View>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>Contact List</Text>
                                <View style={styles.miniText}>
                                    <Icon name="contact" />
                                    <Text>{this.props.name}</Text>
                                </View>
                                <View style={styles.miniText}>
                                    <Icon name="call" />
                                    <Text>{this.props.phone}</Text>
                                </View>
                                <View style={styles.miniText}>
                                    <Icon name="mail-open" />
                                    <Text>{this.props.email}</Text>
                                </View>
                            </View>
                            <View style={styles.buy}>
                                <Button large rounded style={styles.buy} onPress={this.props.nave}>
                                    <Text>BUY</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                    <Text style={styles.title}>Event Description</Text>
                    <Text style={styles.desc}>{this.props.desc}</Text>
                </Content>
            </Container>
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
    cardTitle: {
        fontSize: 25,
        fontWeight: '700',
        width: 300,
        color: '#ff5555'
    },
    title: {
        fontSize: 30,
        color: '#ff5555',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 20,
        marginBottom: 20
    },
    group: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    group2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '89%'
    },
    miniText: {
        flexDirection: 'row'
    },
    desc: {
        width: "90%",
        alignSelf: 'center',
        marginBottom: 20,
        color: '#7f7f7f'
    },
    buy: {
        marginLeft: 'auto',
        alignItems: 'center',
    }
});