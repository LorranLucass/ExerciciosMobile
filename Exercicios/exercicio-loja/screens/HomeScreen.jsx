import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(response => setCategorias(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Card onPress={() => navigation.navigate('Produtos', { categoria: item })} style={{ margin: 8 }}>
          <Card.Content>
            <Text>{item}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}
