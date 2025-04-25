import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Title, Paragraph, List, Button } from 'react-native-paper';

const ReceitaScreen = ({ route, navigation }) => {
  const { receita } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.imagem} />
      <View style={styles.content}>
        <Title style={styles.title}>{receita.nome}</Title>
        <Paragraph>Tempo de preparo: {receita.tempoPreparo}</Paragraph>
        <Paragraph>Porções: {receita.porcoes}</Paragraph>

        <Title style={styles.sectionTitle}>Ingredientes</Title>
        {receita.ingredientes.map((item, index) => (
          <List.Item key={index} title={item} left={() => <List.Icon icon="check" />} />
        ))}

        <Title style={styles.sectionTitle}>Modo de Preparo</Title>
        {receita.modoPreparo.map((item, index) => (
          <List.Item key={index} title={item} left={() => <List.Icon icon="numeric" />} />
        ))}

        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={styles.button}
        >
          Voltar
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#6200ea',
  },
});

export default ReceitaScreen;