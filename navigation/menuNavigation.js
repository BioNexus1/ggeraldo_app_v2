import {React} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import QRScanScreen from '../screens/QRScanScreen';
import MainScreen from '../screens/MainScreen';
import CartScreen from '../screens/CartScreen';
import Colors from '../constantes/colors'
import MesasMainScreen from '../screens/Mesas/MesasMainScreen';
import OnWorkingScreen from '../screens/OnWorkingScreen';
import MesasDetail from '../screens/Mesas/MesasDetail';
import MenuMainScreen from '../screens/Menu/MenuMainScreen';

import MenuTopTabMaterialNavigation from './MenuTopTabMaterialNavigation';
// stack o drawer -> asignamos a la constante la funcion de navegacion
const Stack = createNativeStackNavigator()

const ShopNavigator = () => {
    return (

            // <NavigationContainer>
                <Stack.Navigator initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Colors.primary,
                    },
                    headerTintColor: Colors.headerTextColor,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily: 'PattayaRegular',
                        fontWeight: "200",
                        fontSize: 32
                    },
                    // headerShown: false
                    
                }}>
                    <Stack.Screen name='Home' component={MainScreen}  options={{headerShown: false }}/>
                    <Stack.Screen name='QR' component={QRScanScreen} options={({route}) => ({headerTitle: route.params.title})} />
                    <Stack.Screen name='CartScreen' component={CartScreen} options={({route}) => ({headerTitle: route.params.title})} />
                    <Stack.Screen name='Mesas' component={MesasMainScreen} options={({route}) => ({headerTitle: route.params.title})} />
                    <Stack.Screen name='Menu' component={MenuTopTabMaterialNavigation} options={({route}) => ({headerTitle: route.params.title})} />
                    <Stack.Screen name='OnWorking' component={OnWorkingScreen} options={({route}) => ({headerTitle: route.params.title})} />
                    <Stack.Screen name='MesasDetail' component={MesasDetail} options={({route}) => ({headerTitle: route.params.title})} />
                    {/* <Stack.Screen name='Detail' component={BreadDetailScreen} /> */}

                </Stack.Navigator>
            // </NavigationContainer>
    )
}
export default ShopNavigator;


