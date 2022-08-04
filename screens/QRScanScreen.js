import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const QRScanScreen = ({route}) => {

    const { title } = route.params;

    return (
        <View style={styles.screen}>
            <Text>{title}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default QRScanScreen