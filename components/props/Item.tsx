import React from 'react';
import {View, Text} from 'react-native';
import Partido from './Partido';
function Item(partido: Partido): JSX.Element {
  return (
    <View>
      <Text>{partido?.nombre}</Text>
      <Text>{partido?.dipu}</Text>
      <Text>{partido?.imagen}</Text>
    </View>
  );
}

export default Item;
