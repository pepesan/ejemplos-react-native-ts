import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

type Partido = {
  nombre: string;
  dipu: number;
  imagen: string;
};

const MyApiClient = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Partido[]>([]);

  const getResultados = async () => {
    try {
      const response = await fetch(
        'https://cursosdedesarrollo.com/pactometro/resultados.json',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResultados();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({nombre}) => nombre}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image
                style={styles.fotoPartido}
                source={{
                  uri:
                    'https://cursosdedesarrollo.com/pactometro/img/' +
                    item.imagen,
                }}
              />
              <View style={styles.info}>
                <Text style={styles.title}>Nombre: {item.nombre}</Text>
                <Text style={styles.id}>Diputados: {item.dipu}</Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: 'grey',
    padding: 5,
    // marginVertical: 4,
    // marginHorizontal: 8,
    margin: 4,
    flexDirection: 'row',
  },
  info: {
    flexDirection: 'column',
    flex: 0.55,
  },
  fotoPartido: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    flex: 0.45,
  },
  title: {
    fontSize: 16,
    flex: 0.9,
  },
  id: {
    fontSize: 16,
    flex: 0.1,
  },
});

export default MyApiClient;
