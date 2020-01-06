import React, { Component } from "react"
import { StyleSheet, View, Text, SafeAreaView, Image, Button } from 'react-native'
// import { Button } from "native-base"
import Icon from '../src/img/dumb-ticket.png'

class Welcome extends Component {

    handlePress = () => {
        this.props.navigation.navigate('Home');
    }

    render() {
        console.log(this.props)
        return (
            <SafeAreaView>
                <View style={styles.BG}>
                    <View style={styles.center}>
                        <Image source={Icon} style={styles.image} />
                        <Button title="Enter" onPress={this.handlePress} style={styles.button} color="#ff5555" />
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

export default Welcome;

const styles = StyleSheet.create({
    center: {
        height: '100%',
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    BG: {
        backgroundColor: "#ff5555",
    },
    image: {
        height: 150,
        width: 150,
    },
    button: {
        color: "white",
        fontSize: 50,
        marginBottom: 'auto',
        paddingBottom: 200
    }
});
