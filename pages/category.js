import React, { Component } from 'react';
import {
    Container, Header, Content, Button, Text, Body, Right, Title,
    H1, Footer, FooterTab
} from 'native-base';
import { StyleSheet, Image, } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import CategoryMap from '../mapping/category';


export default class Category extends Component {

    render() {
        return (
            <Container style={styles.header}>
                <Header style={styles.header}>
                    <Body style={{ marginLeft: '5%' }}>
                        <Title>Category</Title>
                    </Body>
                    <Right>
                        <Image style={styles.profile} source={{ uri: 'https://livedoor.blogimg.jp/anibuhi/imgs/1/e/1e77636b.jpg' }} />
                    </Right>
                </Header>
                <Content padder style={styles.home}>
                    <H1 style={styles.title}>
                        Music
                    </H1>
                    <ScrollView>
                        <CategoryMap />
                    </ScrollView>

                </Content>
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