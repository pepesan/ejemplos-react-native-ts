import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home2 from './Home2';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About2 from './About2';

const Stack = createNativeStackNavigator();
function Main2(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home2">
        <Stack.Screen
          name="Home2"
          component={Home2}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="About" component={About2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main2;
