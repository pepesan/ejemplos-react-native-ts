import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainScreen from './AuthScreen';
import MiListadoRemoto from './MiHome';

const Tab = createBottomTabNavigator();

export default function MainTabsStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'HomeStack') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'SettingsStack') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          options={{headerShown: false}}
          name="HomeStack"
          component={MiListadoRemoto}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="SettingsStack"
          component={MainScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
