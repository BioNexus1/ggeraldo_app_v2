import {React} from 'react';
import {Image} from 'react-native'
import { NavigationContainer, TabRouter } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import QRScanScreen from '../screens/QRScanScreen';
import MainScreen from '../screens/MainScreen';
import Colors from '../constantes/colors'

// stack o drawer -> asignamos a la constante la funcion de navegacion
const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primary,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
                
            }}>
                <Stack.Screen name='Home' component={MainScreen}  options={{headerShown: true }}/>
                <Stack.Screen name='QR' component={QRScanScreen} options={({route}) => ({headerTitle: route.params.title})} />
                {/* <Stack.Screen name='Detail' component={BreadDetailScreen} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ShopNavigator;


