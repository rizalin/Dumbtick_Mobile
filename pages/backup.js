import React from "react"
import { StyleSheet, View, Text, TextInput, Image, ScrollView } from 'react-native'
import { Button } from 'native-base'
import Logo from './src/img/dumb-ticket.png'



const App: () => React$Node = () => {
    return (
        <>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={Logo} />
                </View>
                <View style={styles.container}>
                    <TextInput style={styles.search} placeholder="Search" />
                    <Text style={styles.title}>Category</Text>
                    <View style={styles.buttonGroup}>
                        <Button title="Sporty" />
                        <Button title="Music" />
                        <Button title="Science" />
                        <Button title="Programming" />
                    </View>
                    <Text style={styles.title}>Today</Text>
                    <View style={styles.card}>
                        <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/cd/8f/7b/cd8f7bc84cc9fe27505dedae3a0d6ef6.jpg' }} />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>New Year 2020 Party</Text>
                            <Text>Rp 2000001</Text>
                            <Text>31-12-2019</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/cd/8f/7b/cd8f7bc84cc9fe27505dedae3a0d6ef6.jpg' }} />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>New Year 2020 Party</Text>
                            <Text>Rp 2000001</Text>
                            <Text>31-12-2019</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/cd/8f/7b/cd8f7bc84cc9fe27505dedae3a0d6ef6.jpg' }} />
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>New Year 2020 Party</Text>
                            <Text>Rp 2000001</Text>
                            <Text>31-12-2019</Text>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim lectus at velit tincidunt, non hendrerit tellus tincidunt. </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ff5555',
        width: "100%",
        padding: 10
    },
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20
    },
    search: {
        marginTop: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        fontSize: 15,
        height: 40,
    },
    title: {
        textAlign: 'left',
        fontSize: 30,
        fontWeight: '700',

    },
    buttonGroup: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20
    },
    buttons: {
        color: "#ff5555",
    },
    img: {
        height: "50%",
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    card: {
        borderStyle: "solid",
        borderWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        height: 300,
        marginTop: 20
    },
    cardTitle: {
        fontSize: 26,
        fontWeight: '700'
    },
    cardBody: {
        padding: 10,
    }
});

export default App;
