import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

function Auth() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const email = 'jane.doe@example.com';
  const password = 'SuperSecretPassword!';
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Button title="Sign up" onPress={() => signUp()} />
        <Button title="Login" onPress={() => login()} />
      </View>
    );
  }

  // @ts-ignore
  return (
    <View>
      <Text>Welcome {user?.email}</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}

export default Auth;
