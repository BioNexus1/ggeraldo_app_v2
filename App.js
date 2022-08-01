import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView  } from 'react-native';
import { Asset } from "expo-asset";
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
// Components
import Header from './components/Header/Header';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

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
          'SquareRegular': require('./assets/fonts/SquarePeg-Regular.ttf')
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

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView
      style={styles.screen}
      onLayout={onLayoutRootView}>
      <Header title="MY APP"></Header>
      <View style={styles.body} >
        <Text style={styles.title}>SplashScreen Demo! 👋</Text>
        <Entypo name="rocket" size={30} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  title:{
    fontFamily:'OpenSansBold',
    fontSize: 20,
    marginVertical: 10
  },
  body:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})