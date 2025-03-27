import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {
    // logica do componente 
    const nome  = "Lorran"
    const idade = 24


    function checarmaioridade () {
        if(idade >= 10) {
            return "Maior de idade"
        }else {
            return "Menor de idade"
        }
    }


    function alerta() {

        alert('Clicou no botão!')
    }



  return (
        <View style={styles.container}>
        <Text style={styles.texto}>Nome: {nome}</Text>
        <Text style={styles.texto}>Idade: {idade}</Text>
        <Text style={styles.texto}>18+:  {checarmaioridade()}</Text>

        <Button title='enviar' onPress={alerta}/>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        borderWidth: 5,
        padding: 10
    }, texto: {
        fontSize:20,
        fontWeight:400
    }
})