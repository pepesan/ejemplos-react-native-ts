import * as React from 'react';
import {Button, Text, View} from "react-native";

function Details({navigation}): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Haces Pop"
        onPress={() => navigation.pop(1)}
      />
    </View>
  );
}

export default Details;
