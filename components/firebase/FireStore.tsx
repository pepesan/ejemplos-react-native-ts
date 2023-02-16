import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
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
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
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
            <Text>User ID: {item.id}</Text>
            <Text>User Name: {item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default FireStore;
