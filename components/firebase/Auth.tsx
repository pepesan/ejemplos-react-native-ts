import React from 'react';
import {Text} from 'react-native';
import auth from '@react-native-firebase/auth';
function Auth(): JSX.Element {
  const user = auth().currentUser;

  return <Text>Welcome {user?.email}</Text>;
}

export default Auth;
