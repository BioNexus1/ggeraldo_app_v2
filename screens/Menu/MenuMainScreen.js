import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import OnWorkingFooter from '../../components/footer/OnWorkingFooter';
import  Colors  from '../../constantes/colors';

const MenuMainScreen = ({route}) => {

    // const { title } = route.params;

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Menu Screen</Text>
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(0,0,0,0.8)', 'transparent']}
                style={styles.background}
            />
            <OnWorkingFooter />

        </View> 
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.Container
        // alignItems: 'center'
    },
    background: {
        flex: 1,
        maxHeight: '30%'
        // left: 0,
        // right: 0,
        // top: 0,
        // height: 300,
    },
    title:{
        fontSize: 42,
        fontFamily: 'OpenSansRegular'
    },
    image:{
        flex: 1,
    }
})

export default MenuMainScreen