import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import MenuNavigation from './menuNavigation'
import CartNavigation from './CartNavigation'
import  Colors  from '../constantes/colors'
import { useDispatch, useSelector } from "react-redux";
import { cartTotalSelector } from '../store/selectors'

const BottomsTabs = createBottomTabNavigator()

const TabNavigator = () => {
    const total = useSelector(cartTotalSelector);
    
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
                            <View style={styles.iconContainer}>
                                <Ionicons name='md-home' size={24} color={focused ? Colors.activeItem : 'black'}/>
                            </View>
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
                            <View style={styles.iconContainer}>
                                <Ionicons name='md-cart' size={24} color={focused ? Colors.activeItem : 'black'}/>
                                {
                                    total ?
                                        <View style={styles.quantityContainer}>
                                            <Text style={styles.quantityText}>{total}</Text>
                                        </View> 
                                    : null
                                }
                                
                            </View>
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
    },
    iconContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    quantityContainer:{
        backgroundColor: 'red',
        borderRadius: 50,
        width: '8%',
        alignItems: 'center'
    },
    quantityText:{
        color: 'white',
        fontSize: 12,
    }
})
export default TabNavigator