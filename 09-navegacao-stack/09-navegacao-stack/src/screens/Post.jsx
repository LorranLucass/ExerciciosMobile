import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Post() {
    return (
        <View>
            <Text>Post</Text>
            <Button
                mode='contained'
                onPress={() => navigation.goBack()}
            ></Button>
        </View>
    )
}

const styles = StyleSheet.create({})