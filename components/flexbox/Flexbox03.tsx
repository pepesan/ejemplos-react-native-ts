import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Flexbox03(): JSX.Element {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
        },
      ]}>
      <Text style={styles.primero}>¡Hola mundo!</Text>
      <Text style={styles.hola_mundo}>Hello world!</Text>
      <Text style={styles.tercero}>Ciao mondo!</Text>
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
