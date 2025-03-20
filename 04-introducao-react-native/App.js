//Imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//Componente Principal
//Ele deve retornar oque será retornado na tela (template feito com JSX)
export default function App() {
//Lógica ao meu componente 

const nome = "Lorran"

function alerta() {
  alert ("Você clicou no butão")
}
<ScrollView>
// Retorno com JSX
  return (
    <View style={styles.container}>
      {/* Comentario com control  + ; */}
      {/* Codigo JavaScript */}
     <StatusBar style="auto" />
     <Text>Meu Aplicativo RODANDOOOOO!!!</Text>
     <Text> {2 + 2}</Text>
     <Text>{nome}</Text>

     <Button title='Alterar' onPress={alerta}></Button>

    <Image 
      source={{uri: 'https://i.pinimg.com/originals/12/22/77/1222772e2bcfa3ddf2b4d62566b0905b.gif'}}
      style={{
        height: 300,
        width: 300
      }}
    />

    <Image source={require('./images/image.png')}
    style={{
      height: 300,
      width: 300
    }}
    />
    </View>
  );
    </ScrollView>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
