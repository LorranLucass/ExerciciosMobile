import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filme(props) {

    
  return (
    <View>
      
      {/* Resolve o warning de lista sem chave, usando a posição do array como key */}
      {listaFilmes.map((filmes, index) => <Text key={index} >{filmes}</Text>)}

      {listaFilmes.map(filmes => <Text>{filmes}</Text>)}

      {
        listaFilmes.map(
          (filmes) => <Text>{filmes}</Text>
        )
      }

      {listaFilmes.map(
        filmes => <Text>{filmes}</Text>
      )
      }

      {
        listaFilmes.map(
          (filmes) => {
            return (
              <View style={styles.containerAmarelo}>
                <Text>{filmes}</Text>
              </View>
            )
          }
        )
      }






    </View>
  )
}

const styles = StyleSheet.create({})