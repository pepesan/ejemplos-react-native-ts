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
            <View
              style={[
                styles.container,
                {
                  // Try setting `flexDirection` to `"row"`.
                  flexDirection: 'row',
                },
              ]}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:
                    'https://cursosdedesarrollo.com/pactometro/img/' +
                    item.imagen,
                }}
              />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={{flex: 2}}>{item.dipu}</Text>

            </View>
          )}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    flex: 3,
  },
  logo: {
    width: 66,
    height: 58,
  },
  nombre: {
    textAlign: 'center',
    flex: 1,
  },
});

export default MyApiClient;
