import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import MenuNavigation from './menuNavigation'
import CartNavigation from './CartNavigation'
import  Colors  from '../constantes/colors'

const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <BottomsTabs.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
            // tabBarActiveBackgroundColor: Colors.accent
        }}
        
    >
        <BottomsTabs.Screen
            name='MainTab'
            component={MenuNavigation}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-home' size={24} color={focused ? Colors.activeItem : 'black'}/>
                        <Text style={{color: focused ? Colors.activeItem : 'black'}} >Inicio</Text>
                    </View>
                )
            }}
        />
        <BottomsTabs.Screen
            name='CartTab'
            component={CartNavigation}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={styles.item}>
                        <Ionicons name='md-cart' size={24} color={focused ? Colors.activeItem : 'black'}/>
                        <Text style={{color: focused ? Colors.activeItem : 'black'}}>Carrito</Text>
                    </View>
                )
            }}
        />
        
    </BottomsTabs.Navigator>
  )
}
const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.45,
        shadowRadius: 0.25,
        elevation: 7,
        backgroundColor: Colors.primary,
        // position: 'absolute',
        // bottom: 25,
        // left: 20,
        // right: 20,
        // borderRadius: 15,
        // borderBottomRightRadius: 20,
        // borderBottomLeftRadius: 20,
        minHeight: '7%'
        // height: 90
    },
    item:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default TabNavigator