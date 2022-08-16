import React from 'react'
import MenuMainScreen from '../screens/Menu/MenuMainScreen';
import OnWorkingScreen from '../screens/OnWorkingScreen';
import { StyleSheet, useWindowDimensions  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DATA from '../testData/categoryMenu.json'
import Colors from '../constantes/colors';

const Tab = createMaterialTopTabNavigator();
const MenuTopTabMaterialNavigation = () => {
    const data = DATA.data.categoryMenu
    const {width, height } = useWindowDimensions() //para el uso de las dimensiones de la pantalla

    // console.log(data)
    // console.log(DATA)
    
    return (
        <Tab.Navigator  
            initialRouteName='Todos'
            // lazy={true}
            backBehavior='initialRoute'
            // initialLayout={{width: width * 1}}
            screenOptions={{
                tabBarLabelStyle: { fontSize: 12, color: Colors.headerTextColor },
                tabBarItemStyle: { width: 100 },
                tabBarStyle: { backgroundColor: Colors.Container },
                tabBarScrollEnabled: true

            }}
        >
            {/* <Tab.Screen name="Todos" component={MenuMainScreen} /> */}
            {data.map((data) => (<Tab.Screen key={data.id} name={data.name} component={MenuMainScreen} />))}
            {/* <Tab.Screen name="Settings" component={OnWorkingScreen} /> */}
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    navtab:{
        flex:1
    }
})
export default MenuTopTabMaterialNavigation