import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { List, Title } from 'react-native-paper';

const titulos = [/* insira os dados aqui, ou importe de um arquivo */];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Section>
          <Title>{item.nome}</Title>
          <List.Item
            title={`Anos: ${item.anos.join(', ')}`}
            left={() => <List.Icon icon="trophy" />}
          />
        </List.Section>
      )}
    />
  );
};

export default TitulosScreen;
