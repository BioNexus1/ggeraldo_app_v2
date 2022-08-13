import React from 'react'
import { View, Text } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import CartScreen from '../screens/CartScreen';
import  Colors  from '../constantes/colors';

const Stack = createNativeStackNavigator()

const CartNavigation = () => {
  return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle:{
                    backgroundColor: Colors.primary 
                },
                headerTitleAlign: 'center',
                headerTintColor: Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: Colors.headerTextColor,
                    fontFamily: 'Minimal',
                    fontWeight: "200",
                    fontSize: 45

                }
            }}
        >
            <Stack.Screen 
                name='Cart'
                component={CartScreen}
                options={{title: 'Carrito'}}
            />
        </Stack.Navigator>
  )
}

export default CartNavigation