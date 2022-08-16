import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

const OnWorkingFooter = () => {
    return (
        <View style={styles.body} >
            <Text style={styles.text}>Working For you!</Text>
            <Entypo name="tools" size={70} color='white' />
            <Text style={styles.subText}>Made with ❤️</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // maxHeight: '10%'

    },
    text: {
        color:'white',
        fontSize:42,
        // fontWeight: 'bold',
        fontFamily: 'OpenSansRegular'
    },
    subText:{
        fontSize: 23,
        color: 'white',
        fontFamily: 'AlohaLuna'
    }

})
export default OnWorkingFooter