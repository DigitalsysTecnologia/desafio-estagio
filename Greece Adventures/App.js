import 'react-native-gesture-handler'
import Menu from './src/screens/menu'
import CatalogM from './src/screens/catalogM'
import CatalogC from './src/screens/catalogC'
import TxtUniverse from './src/screens/txtUniverse'
import Blue from './src/screens/characters/blue'
import Cerberus from './src/screens/characters/cerberus'
import Lily from './src/screens/characters/lily'
import Owl from './src/screens/characters/owl'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font';

console.disableYellowBox = true;

async function loadFonts() {
  await Font.loadAsync({
    'dominica': require('./assets/fonts/dominica.ttf'),
  });
}

loadFonts();

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="menu">
        <Stack.Screen name="menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="catalogM" component={CatalogM} options={{ headerShown: false }}/>
        <Stack.Screen name="catalogC" component={CatalogC} options={{ headerShown: false }}/>
        <Stack.Screen name="txtUniverse" component={TxtUniverse} options={{ headerShown: false }}/>
        <Stack.Screen name="cerberus" component={Cerberus} options={{ headerShown: false }}/>
        <Stack.Screen name="blue" component={Blue} options={{ headerShown: false }}/>
        <Stack.Screen name="lily" component={Lily} options={{ headerShown: false }}/>
        <Stack.Screen name="owl" component={Owl} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App