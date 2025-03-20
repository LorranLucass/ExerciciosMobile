import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, ScrollView, Image } from 'react-native';


export default function App() {

function alerta() {
  alert("GOLLLL DO FLAMENGOOO")
}



  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.textoTitulo}>FLAMENGO</Text>
      <Text >Lorran Lucas Pereira de Sousa é um futebolista brasileiro que atua como meia-atacante e ponta. Atualmente, joga no Flamengo. Wikipédia</Text>
      <Text>Nascimento: 4 de julho de 2006 </Text>
      <Text>idade 18 anos</Text>
      <Text>Altura: 1,8 - Peso: 72 kg</Text>
      <StatusBar style="auto" />

      <Button title="Gol" onPress={alerta}></Button>
      
      <Image 
      source={{uri: 'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0512%2Fr1331751_1296x729_16%2D9.jpg'}}
      style={{
        height: 400,
        width: 400
      }}
    />
    <Image 
      source={{uri: 'https://s2-ge.glbimg.com/ieesgc2vhLXRIAdWtks2-6UP9zY=/0x0:1280x851/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/p/H/1uHMATQFAvAEecvY5BCg/whatsapp-image-2022-12-26-at-14.36.52.jpeg'}}
      style={{
        height: 400,
        width: 400
      }}
    />
    <Image 
      source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY4SFbdUEX2sKJDIZdW8Rstza8nGcrHzU_g&s'}}
      style={{
        height: 400,
        width: 400
      }}
    />
    <Image 
      source={{uri: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_2000,h_1125,x_0,y_230/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_pt-BR_international_web/01jj4t8hxzqa55fajwax.jpg'}}
      style={{
        height: 400,
        width: 400
      }}
    />
    <Image 
      source={{uri: 'https://lncimg.lance.com.br/cdn-cgi/image/width=828,quality=75,fit=pad,format=webp/uploads/2022/07/04/62c3682658919.jpeg'}}
      style={{
        height: 400,
        width: 400
      }}
    />


    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:"60",
    marginTop:"20"
    
  },
  textoTitulo: {
   fontWeight: "bold",
   padding:"50",
   fontSize:"20",
  },
  
  
});
