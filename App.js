
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './src/screens/Menu';
import SelectMissao from './src/screens/SelectMissao';
import SelectHeroi from './src/screens/SelectHeroi';

const Stack = createNativeStackNavigator();

/**/

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu" screenOptions={{headerShown: false}}>
          <Stack.Screen name="SelectMissao" component={SelectMissao} options={{headerTransparent: true, headerShown: true,headerTitle: 'Selecione uma Missão', headerTitleStyle: { fontFamily: 'PixelifySans-Bold', fontSize: 20, color: '#4A0404'}}}/>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="SelectHeroi" component={SelectHeroi} options={{headerTransparent: true, headerShown: false, headerTitle: 'Heróis', headerTitleStyle: { fontFamily: 'PixelifySans-Bold', fontSize: 20, color: '#1b2b0d' }}}/>
        </Stack.Navigator>
      </NavigationContainer>

  );
}


export default App;
