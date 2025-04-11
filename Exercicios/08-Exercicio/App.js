import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === 'Escudo') {
                iconName = 'shield';
              } else if (route.name === 'Jogadores') {
                iconName = 'account-group';
              } else if (route.name === 'Títulos') {
                iconName = 'trophy';
              }

              return <Icon name={iconName} color={color} size={size} />;
            },
            tabBarActiveTintColor: 'crimson',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelStyle: { fontSize: 12 },
            tabBarStyle: { paddingBottom: 5, height: 60 },
          })}
        >
          <Tab.Screen name="Escudo" component={EscudoScreen} />
          <Tab.Screen name="Jogadores" component={JogadoresScreen} />
          <Tab.Screen name="Títulos" component={TitulosScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
