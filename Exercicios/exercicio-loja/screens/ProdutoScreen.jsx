import React, { useEffect, useState } from 'react';
import { ScrollView, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import axios from 'axios';

export default function ProdutoScreen({ route }) {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(response => setProduto(response.data))
      .catch(error => console.error(error));
  }, [idProduto]);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Text variant="titleLarge">{produto.title}</Text>
          <Text variant="bodyMedium">{produto.description}</Text>
          <Text variant="titleMedium">R$ {produto.price}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
