import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import database from '@react-native-firebase/database';

type ItemProps = {
  item: any;
  navigation: any;
};

type NavigationProps = {
  navigation: any;
};
const Item = ({item, navigation}: ItemProps) => (
  <TouchableWithoutFeedback
    onPress={() => {
      console.log('Item:' + item.key);
      console.log(item);
      navigation.navigate('Details', {
        item: item,
        key: item.key,
      });
    }}>
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.age}</Text>
    </View>
  </TouchableWithoutFeedback>
);

function ListadoFirebase({navigation}: NavigationProps): JSX.Element {
  const [listado, setListado] = useState<any[]>([]);
  useEffect(() => {
    // call api or anything
    list();
    console.log(listado);
  }, []);
  function list() {
    database()
      .ref('/users')
      .limitToFirst(10)
      .on('value', snapshot => {
        const li: any[] = [];
        var index = 0;
        //console.log(snapshot);
        //console.log('antes');
        snapshot.forEach(child => {
          //console.log(child.key);
          //console.log(child.val().name);
          //console.log(child.val().age);
          li.push({
            key: child.key,
            name: child.val().name,
            age: child.val().age,
          });
        });
        setListado(li);
        //console.log(li);
      });
  }

  return (
    <View>
      <FlatList
        data={listado}
        renderItem={({item}) => (
          <Item item={item} navigation={navigation}/>
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListadoFirebase;
