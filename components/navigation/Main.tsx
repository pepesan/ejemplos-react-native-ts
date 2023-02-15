import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Details from './Details';
import Parametros from './Parametros';
import Main2 from "./ejercicios/Main2";

const Stack = createNativeStackNavigator();
function Main(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Parametros" component={Parametros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
