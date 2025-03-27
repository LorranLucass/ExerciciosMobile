import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const listCarros = ["Gol", "Palio", "Celta", "uno", "Honda Civic"]

  return (
    <View>

        {listCarros.map(carro => <Text>{carro}</Text>)}

        {
            listCarros.map(
                carro => {
                    return (
                        <View styles= {styles.containerAmarelo}>
                            <Text>{carro}</Text> 
                        </View> 
                     )
                }
            )
        }
    </View>
  )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        borderWidth: 5,
        padding: 10
    }, containerAmarelo: {
        fontSize:20,
        fontWeight:400,
        backgroundColor:"yellow",
    }
    
})