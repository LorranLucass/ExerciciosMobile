import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Title, Text } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Clube de Regatas do Flamengo</Title>
      <Image
        source={{ uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text>Fundado em: 15 de novembro de 1895</Text>
      <Text>Estádio: Maracanã</Text>
      <Text>Mascote: Urubu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 },
  image: { width: 150, height: 150, marginVertical: 20 },
});

export default EscudoScreen;
