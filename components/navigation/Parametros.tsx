import * as React from 'react';
import {Button, Text, View} from 'react-native';

function Parametros({route, navigation}): JSX.Element {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title={JSON.stringify(itemId)}
        onPress={() => navigation.pop(1)}
      />
    </View>
  );
}

export default Parametros;
