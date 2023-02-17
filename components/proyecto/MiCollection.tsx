import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import ListadoFirebase from "./ListadoFirebase";

function MiCollection({navigation}): JSX.Element {
  function add() {
    navigation.navigate('Add');
  }

  return (
    <View
      style={{
        flexDirection: 'column',
        padding: 20,
      }}>
      <Text>Collection</Text>
      <Button title="Add" onPress={() => add()} />
      <View>
        <ListadoFirebase navigation={navigation}></ListadoFirebase>
      </View>
    </View>
  );
}

export default MiCollection;
