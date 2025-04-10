import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import ListaComponente from './componentes/ListaComponente';
import Perfil from './componentes/Perfil'
import Atleta from './componentes/Atleta';

export default function App() {
  return (
    <View style={styles.container}>
      <Atleta />
      {/* <PrimeiroComponente />
      <JavascriptComponente />
      <ListaComponente />
      <Perfil
        nome= "Lorran"  
        sobrenome= "Lucas"
        idade= {24}
      />
      <Perfil
        nome= "Giovanna"  
        sobrenome= "Martins"
        idade= {22}
      />  */}

    



      <StatusBar style="auto" />

    </View>
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
