import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ListaProdutosScreen({ route, navigation }) {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(response => setProdutos(response.data.products))
      .catch(error => console.error(error));
  }, [categoria]);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card onPress={() => navigation.navigate('Produto', { idProduto: item.id })} style={{ margin: 8 }}>
          <Card.Content>
            <Text>{item.title}</Text>
            <Text>R$ {item.price}</Text>
          </Card.Content>
        </Card>
      )}
    />
  );
}
