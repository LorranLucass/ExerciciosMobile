import React from 'react';
import { View, Image } from 'react-native';
import { Title } from 'react-native-paper';

const EscudoScreen = () => {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Title>{time.nome}</Title>
      <Image source={{ uri: time.escudo }} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default EscudoScreen;
