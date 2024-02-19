import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TrackPlayer from 'react-native-track-player';

import HomeScreen from './src/home/screen/home';
import HeroesScreen from './src/heroes/screen/heroes';
import MapsScreen from './src/maps/screen/maps';
import { addTracks, setupPlayer, play, stop } from './trackPlayerServices';
import { AppState } from 'react-native';

const Stack = createNativeStackNavigator();
const handleAppStateChange = (nextAppState: any) => {
  if (nextAppState === 'background') {
    stop();
  }
  else if (nextAppState === "active") {
    play();
  }
}

AppState.addEventListener('change', handleAppStateChange);

function App(): React.JSX.Element {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    async function setup() {
      let isSetup = await setupPlayer();
      const queue = await TrackPlayer.getQueue();

      if (isSetup && queue.length <= 0) {
        await addTracks();
      }

      setIsPlayerReady(isSetup);
    }

    setup();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Heroes"
          component={HeroesScreen}
        />
        <Stack.Screen
          name="Maps"
          component={MapsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
