import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const QRScanScreen = ({route}) => {

    const { title } = route.params;

    return (
        <View style={styles.screen}>
            <ImageBackground 
                    source={require('../assets/images/background/qr_background_cover_screen.png')} 
                    resizeMode="cover" 
                    style={styles.image} 
                    imageStyle={{opacity:0.3}} 
                />

            <Text style={styles.title}>{title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    title:{
        fontSize: 42,
        fontFamily: 'OpenSansRegular'
    },
    image:{
        flex: 1,
    }
})

export default QRScanScreen