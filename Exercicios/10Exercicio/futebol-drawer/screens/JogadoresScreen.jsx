import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';
import { List, Text } from 'react-native-paper';

const jogadores = [/* insira os dados aqui, ou importe de um arquivo */];

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.numero.toString()}
      renderItem={({ item }) => (
        <List.Item
          title={item.nome}
          description={`${item.posicao} - ${item.idade} anos`}
          left={() => (
            <Image source={{ uri: item.imagem }} style={styles.avatar} />
          )}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
});

export default JogadoresScreen;
