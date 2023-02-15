import * as React from 'react';
import {Button, Text, View} from 'react-native';

function About2({navigation}): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Volver"
        onPress={() => navigation.pop(1)}
      />
    </View>
  );
}

export default About2;
