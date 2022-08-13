import React from 'react';
import { View, StyleSheet,  StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainContainer from '../components/Container'
import Header from '../components/Header/Header'
import Colors from '../constantes/colors'

const MainScreen = ({navigation}) => {

    return (
        <SafeAreaView
            style={styles.screen}
            // onLayout={onLayoutRootView}
        >
            <StatusBar
                animated={true}
                barStyle='light-content'
                backgroundColor={Colors.statusBarDark}
            />
            <Header title='AltiroVoy' />
            
            <View style={styles.body} >
                <MainContainer navigation={navigation} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.Container
    },
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
})

export default MainScreen