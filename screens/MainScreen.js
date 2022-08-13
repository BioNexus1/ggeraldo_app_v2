import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Entypo from '@expo/vector-icons/Entypo';

import MainContainer from '../components/Container'
import Header from '../components/Header/Header'
import Colors from '../constantes/colors'

const MainScreen = ({navigation}) => {

    return (
        <SafeAreaView
            style={styles.screen}
            // onLayout={onLayoutRootView}
        >
            <Header title='AltiroVoy' />
            
            <View style={styles.body} >
                <MainContainer navigation={navigation} />
                <Text style={styles.title}>Working For you!</Text>
                <Entypo name="tools" size={70} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex:1,
        textAlign: 'center',
        alignItems: 'center'
    },
    buttonContainer:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    menuButton: {
        width: '50%',
        minHeight: '30%',
    },
    image:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor:'white',
        alignItems: 'center'
    },
    text: {
        color:'black',
        fontSize:42,
        lineHeight: 84,
        // fontWeight: 'bold',
        fontFamily: 'OpenSansRegular'
    }
})

export default MainScreen