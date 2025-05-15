import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const dezenas = [];
    while (dezenas.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!dezenas.includes(numero)) dezenas.push(numero);
    }
    dezenas.sort((a, b) => a - b);
    setJogosMegaSena([dezenas, ...jogosMegaSena]);
  };

  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={gerarJogo}>
        Gerar Jogo
      </Button>
      <FlatList
        data={jogosMegaSena}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Content>
              <Text>Jogo: {item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { marginTop: 10 },
});
