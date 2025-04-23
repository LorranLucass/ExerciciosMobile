import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Feed from '../screens/Fead'
import Feed from '../screens/Post'
import Feed from '../screens/Home'

const Stack = createStackNavigator()
export default function StackRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {Home} />
        <Stack.Screen name = 'Feed' component = {Feed} />
        <Stack.Screen name = 'Post' component = {Post} />
    </Stack.Navigator>
  )
}

