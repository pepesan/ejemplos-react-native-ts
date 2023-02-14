import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Flexbox03(): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
      <View style={{flex: 0.2, backgroundColor: 'red'}} />
      <View
        style={{flex: 2, backgroundColor: 'yellow', flexDirection: 'column'}}>
        <View style={{flex: 0.2, backgroundColor: 'blue'}}></View>
        <View style={{flex: 1, backgroundColor: 'green'}}></View>
        <View style={{flex: 0.2, backgroundColor: 'blue'}}></View>
      </View>
      <View style={{flex: 0.2, backgroundColor: 'purple'}} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 20,
  },
  hola_mundo: {
    flex: 2,
    backgroundColor: 'red',
  },
  primero: {
    backgroundColor: 'darkorange',
  },
  tercero: {
    backgroundColor: 'green',
  },
});
export default Flexbox03;
