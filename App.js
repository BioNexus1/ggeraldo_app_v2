import React, {  useEffect, useState } from 'react';
import { Asset } from "expo-asset";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// Components
import TabNavigator from './navigation/TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
//Redux
import { Provider } from "react-redux";
import store from "./store/store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  // when component mount this useEffect first load all required files/fonts to use
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load Images
        await Asset.loadAsync([
          require('./assets/splash.png')
        ]);
        // Pre-load Fonts
        await Font.loadAsync({
          'OpenSansBold': require('./assets/fonts/OpenSans-Bold.ttf'),
          'OpenSansRegular': require('./assets/fonts/OpenSans-Regular.ttf'),
          'SquarePegRegular': require('./assets/fonts/SquarePeg-Regular.ttf'),
          'PattayaRegular': require('./assets/fonts/Pattaya-Regular.ttf'),
          'SouthWest': require('./assets/fonts/SouthWest.otf'),
          'Luna': require('./assets/fonts/Luna.ttf'),
          'AlohaLuna': require('./assets/fonts/AlohaLuna.ttf'),
          'Holiday4': require('./assets/fonts/HolidayFree.otf'),
          'AutoSignature': require('./assets/fonts/aAutoSignature.ttf'),
          'AuthorizedSignature': require('./assets/fonts/aAuthorizedSignature.ttf'),
          'Minimal': require('./assets/fonts/minimal.otf'),

        })
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove/comment on prod
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect( () =>{
    async function AppReady(){
      if(appIsReady) {
        await SplashScreen.hideAsync(); 
      }
    }
    AppReady()
  }, [appIsReady])

    
  if(!appIsReady){
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

