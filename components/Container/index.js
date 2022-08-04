import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ImageBackground} from 'react-native';
import Colors from '../../constantes/colors'


const Container = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={{...styles.menuButton, backgroundColor: Colors.accent}}
                onPress={() => {navigation.navigate('QR' , { title: 'Modulo en desarrollo'})}}
            > 
                
                <ImageBackground 
                    source={require('../../assets/images/background/qr_background_cover.jpg')} 
                    resizeMode="cover" 
                    style={styles.image} 
                    imageStyle={{opacity:0.5}} 
                    // onPress={() => {navigation.navigate('Mesas' , { title: 'MESAS'})}}
                >
                    <Text style={styles.text}>QR</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{...styles.menuButton, backgroundColor: Colors.accent}}> 
                
                <ImageBackground 
                    source={require('../../assets/images/background/mesas_background_cover.jpg')} 
                    resizeMode="cover" 
                    style={styles.image} 
                    imageStyle={{opacity:0.5}} >
                    <Text style={styles.text}>Mesas</Text>
                </ImageBackground>
            </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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


export default Container