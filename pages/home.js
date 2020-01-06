import React from "react"
import { StyleSheet, View, Text, SafeAreaView, Image } from 'react-native'
import Icon from './src/img/dumb-ticket.png'

const App: () => React$Node = () => {
    return (
        <>
            <SafeAreaView>
                <View style={styles.BG}>
                    <Image source={Icon} style={styles.image} />
                </View>
            </SafeAreaView>

        </>
    );
};

const styles = StyleSheet.create({
    BG: {
        backgroundColor: "#ff5555",
        height: '100%'
    },
    image: {
        alignSelf: "center",
        justifyContent: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        height: 150,
        width: 150,
    }
});

export default App;
