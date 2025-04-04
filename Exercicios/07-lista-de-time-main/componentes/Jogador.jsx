import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

export default function Jogador({ nome, numero, imagem }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: imagem, width: 200, height: 200 }} />
      <Card.Content>
        <Title>{nome}</Title>
        <Paragraph>Número: {numero}</Paragraph>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 5,
  },
});
