import React, { Component } from 'react';
import {
    Container, Header, Content, Text, Left, Icon, Body, Right, Title,
    H1, Item, Input, Card, CardItem, Footer, FooterTab, Button
} from 'native-base';
import { StyleSheet, Image, View, } from 'react-native'
import Headers from '../component/header'



export default class Detail extends Component {
    render() {
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
                                    fhana Live at Jakarta
                                </Text>
                                <View style={styles.group}>
                                    <Text>Music</Text>
                                    <Text>Rp250.000</Text>
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
                                        <Text>20-03-2020</Text>
                                    </View>
                                </View>
                            </View>
                        </CardItem>
                        <CardItem>
                            <View>
                                <Text>Contact List</Text>
                                <View style={styles.miniText}>
                                    <Icon name="contact" />
                                    <Text>Pak Bos</Text>
                                </View>
                                <View style={styles.miniText}>
                                    <Icon name="call" />
                                    <Text>081277779999</Text>
                                </View>
                                <View style={styles.miniText}>
                                    <Icon name="mail-open" />
                                    <Text>bos@bos.com</Text>
                                </View>
                            </View>
                            <View style={styles.buy}>
                                <Button large rounded style={styles.buy}>
                                    <Text>BUY</Text>
                                </Button>
                            </View>
                        </CardItem>
                    </Card>
                    <Text style={styles.title}>Event Description</Text>
                    <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. Nullam lacinia elit at est malesuada tempus. Vestibulum sit amet fermentum justo, vitae imperdiet massa. Sed in eros ultrices, porta lectus sit amet, lacinia libero. Nulla non turpis volutpat, egestas purus non, sodales velit. Integer vestibulum tincidunt viverra. Vivamus faucibus condimentum justo, vel posuere mi commodo eu. Suspendisse in nisi laoreet, blandit ex id, maximus tellus. Vivamus vestibulum eget ipsum a suscipit. Suspendisse non est tellus. Integer sit amet mi sapien. Aliquam erat volutpat. Phasellus pellentesque tellus ante, vitae vulputate metus scelerisque nec. Fusce sed fringilla ligula, non tempus neque. Aliquam sit amet dapibus ligula.</Text>
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