import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import database from '@react-native-firebase/database';

function Collection(): JSX.Element {
  const [user, setUser] = useState({
    name: '',
    age: 0,
  });
  const reference = database().ref('/users/123');
  function add() {
    const myUser = {
      name: 'Ada Lovelace',
      age: 31,
    };
    console.log('Adding item');
    reference.set(myUser).then(() => {
      console.log('Data set.');
      setUser(myUser);
    });
  }

  async function read() {
    reference.once('value').then(snapshot => {
      console.log('User data: ', snapshot.val());
    });
  }

  function query() {
    const scores = database().ref('/users').limitToFirst(10).once('value');
    console.log(scores);
  }

  function modify() {
    reference
      .update({
        age: 32,
      })
      .then(() => {
        console.log('Data updated.');
        setUser({
          name: 'Ada Lovelace',
          age: 32,
        });
      });
  }

  async function deleteItem() {
    await reference.remove();
    setUser({
      name: '',
      age: 0,
    });
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
      }}>
      <Text>Collection</Text>
      <Button title="Add" onPress={() => add()} />
      <Button title="Read" onPress={() => read()} />
      <Button title="Query" onPress={() => query()} />
      <Button title="Modify" onPress={() => modify()} />
      <Button title="Delete" onPress={() => deleteItem()} />
      <View>
        <Text>Nombre: {user.name}</Text>
        <Text>Edad: {user.age}</Text>
      </View>
    </View>
  );
}

export default Collection;
