import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'



export default function Fead({ navigation, route }) {

    console.log("ROUTE => ", route, params)
    return (
        <View>
            <Text>Paramento Recebido </Text>
            <Button
                mode='contained'
                onPress={() => navigation.navigation('Post')}
            ></Button>
            <Button
                mode='contained'
                onPress={() => navigation.goBack()}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({})