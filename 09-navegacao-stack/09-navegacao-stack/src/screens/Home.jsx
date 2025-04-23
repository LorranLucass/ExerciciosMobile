import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'



export default function Home({navigaton, route}) {
  return (
    <View>
        <Text>Home</Text>


        <Button
            mode='contained'
            onPress={() => navigaton.navigaton('Feed', {id: 1, nome: "joão"})}
        >
            Ir para Feed
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})