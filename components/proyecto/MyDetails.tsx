import * as React from 'react';
import { Button, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import database from "@react-native-firebase/database";

function MyDetails({route, navigation}): JSX.Element {
  var {itemP, key} = route.params;
  const [item, setItem] = useState({
    name: '',
    age: 0,
  });
  const reference = database().ref('/users/' + key);
  console.log(item);

  function recarga() {
    reference.on('value', snapshot => {
      console.log('User data: ', snapshot.val());
      setItem(snapshot.val());
    });
  }

  useEffect(() => {
    recarga();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Button
        title="Edit"
        onPress={() => {
          navigation.navigate('Edit', {
            item: item,
            key: key,
          });
        }}
      />
      <Button
        title="Delete"
        onPress={async () => {
          await reference.remove();
          navigation.pop(1);
        }}
      />
      <Text style={styles.titleText}>Details Screen</Text>
      <Text style={styles.baseText}>{item.name}</Text>
      <Text style={styles.baseText}>{item.age}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
    color: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default MyDetails;
