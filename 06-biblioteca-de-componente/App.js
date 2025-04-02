import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Button, Divider} from 'react-native-paper'


export default function App() {
  return (
    <PaperProvider>

      <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button mode='contained'>Clicar</Button>
      <Button mode='contained-tonal'>Clicar</Button>
      <Button mode='elevated'>Clicar</Button>
      <Button mode='outlined'>Clicar</Button>

    <Text variant='bodyLarge'>Um texto qualquer</Text>
    <Divider bold={true}/>
    <Text variant='bodyMedium'>Um texto qualquer</Text>
    <Text variant='headlineLarge'>Um texto qualquer</Text>





      <Card style={{margin: 10}}>

        <Card.Content>
          <Title>
            Um titulo qualquer
          </Title>
          <Paragraph> inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache 
          if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and power
          </Paragraph>
        </Card.Content>
      </Card>

    </View>
    </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
