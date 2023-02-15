import * as React from 'react';
import {Button, Text, View} from 'react-native';

function Home2({navigation}): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

export default Home2;
