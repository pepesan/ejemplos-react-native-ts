import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import Partido from './Partido';
import Item from './Item';

function Listado(): JSX.Element {
  const [data, setData] = useState<Partido[]>([]);
  useEffect(() => {
    setData([
      {
        nombre: 'PP',
        dipu: 2,
        imagen: 'logo.png',
      },
      {
        nombre: 'PSOE',
        dipu: 2,
        imagen: 'logo.png',
      },
    ]);
  }, []);
  return (
    <View
      style={{
        flexDirection: 'column',
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Item
              nombre={item.nombre}
              dipu={item.dipu}
              imagen={item.imagen}></Item>
          </View>
        )}
        keyExtractor={item => item.nombre}
      />
    </View>
  );
}

export default Listado;
