import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Button,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function FireStore(): JSX.Element {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState<any[]>([]); // Initial empty array of users
  useEffect(() => {
    const subscriber = firestore()
      .collection('Users')
      .onSnapshot(querySnapshot => {
        const users: any[] = [];

        querySnapshot.forEach(documentSnapshot => {
          users.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setUsers(users);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  function add() {
    firestore()
      .collection('Users')
      .doc('ABC')
      .set({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  }

  function read() {
    firestore()
      .collection('Users')
      .doc('ABC')
      .get()
      .then(documentSnapshot => {
        console.log('User exists: ', documentSnapshot.exists);

        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
        }
      });
  }

  function query() {
    firestore()
      .collection('Users')
      // Filter results
      .where('age', '>=', 18)
      // Limit results
      .limit(20)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.data());
        });
      });
  }

  function modify() {
    firestore()
      .collection('Users')
      .doc('ABC')
      .update({
        age: 31,
      })
      .then(() => {
        console.log('User updated!');
      });
  }

  function deleteItem() {
    firestore()
      .collection('Users')
      .doc('ABC')
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  }

  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <Button title="Add" onPress={() => add()} />
      <Button title="Read" onPress={() => read()} />
      <Button title="Query" onPress={() => query()} />
      <Button title="Modify" onPress={() => modify()} />
      <Button title="Delete" onPress={() => deleteItem()} />
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View
            style={{
              height: 50,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>User Name: {item.name}</Text>
            <Text>User Name: {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});

export default FireStore;
