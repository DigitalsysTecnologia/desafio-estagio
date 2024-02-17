import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TelaJogadores from './ListJogadores';
import TelaMissoes from './ListMissoes';
import TelaJogador from './Jogador';
import TelaMissao from './Missao';

const Stack = createStackNavigator();

const slideFromLeftInterpolator = ({current, layouts}) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

const slideFromRightInterpolator = ({current, layouts}) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}>
        <Stack.Screen
          name="TelaPlayers"
          component={TelaJogadores}
          options={{
            cardStyleInterpolator: slideFromLeftInterpolator,
          }}
        />
        <Stack.Screen
          name="TelaMissoes"
          component={TelaMissoes}
          options={{
            cardStyleInterpolator: slideFromRightInterpolator,
          }}
        />
        <Stack.Screen name="TelaJogador" component={TelaJogador} />
        <Stack.Screen name="TelaMissao" component={TelaMissao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
