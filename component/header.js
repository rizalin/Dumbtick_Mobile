import React, { Component } from 'react';
import {
    Container, Header, Body, Right, Title,
} from 'native-base';
import { StyleSheet, Image, } from 'react-native'


export default class Headers extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Category');
    }

    handlePresses = () => {
        this.props.navigation.navigate('Detail');
    }

    render() {
        return (
            <Header style={styles.header}>
                <Body style={{ marginLeft: '5%' }}>
                    <Title>Home</Title>
                </Body>
                <Right>
                    <Image style={styles.profile} source={{ uri: 'https://livedoor.blogimg.jp/anibuhi/imgs/1/e/1e77636b.jpg' }} />
                </Right>
            </Header>
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