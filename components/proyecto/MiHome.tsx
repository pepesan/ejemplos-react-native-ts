import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MiCollection from './MiCollection';
import MyFormFirebase from './MyFormFirebase';
import MyDetails from './MyDetails';
import MyEditFormFirebase from './MyEditFormFirebase';

const HomeStack = createNativeStackNavigator();
function MiListadoRemoto(): JSX.Element {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={MiCollection} />
      <HomeStack.Screen name="Add" component={MyFormFirebase} />
      <HomeStack.Screen name="Details" component={MyDetails} />
      <HomeStack.Screen name="Edit" component={MyEditFormFirebase} />
    </HomeStack.Navigator>
  );
}

export default MiListadoRemoto;
