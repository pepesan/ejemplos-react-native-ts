import React from 'react';
import {Text, View} from 'react-native';
import Styles from './Styles';
function StyleSheets(): JSX.Element {
  return (
    <View style={Styles.container}>
      <Text style={Styles.title}>React Native</Text>
    </View>
  );
}

export default StyleSheets;
