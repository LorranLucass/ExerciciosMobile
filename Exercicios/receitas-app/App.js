import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './Screens/HomeScreen';
import ReceitaScreen from './Screens/ReceitaScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: '#6200ea' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Receitas Deliciosas' }}
          />
          <Stack.Screen
            name="Receita"
            component={ReceitaScreen}
            options={({ route }) => ({ title: route.params.receita.nome })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}