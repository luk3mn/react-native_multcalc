// Lista de icones
// LINK: https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json

import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home'
import Settings from './src/pages/Settings'
import Autentication from './src/pages/Autentication'
import Imc from './src/pages/Imc';
import Termometro from './src/pages/Termometro';
import About from './src/pages/About';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (

    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'About') {
              iconName = focused ? 'ios-aperture-outline' : 'ios-aperture-sharp';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Settings' component={Settings} />
        <Tab.Screen name="About" component={About}/> 
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name="Home" 
          component={Tabs}
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#121212'
            },
            headerTintColor: '#FFF'
          }} 
        />
        <Stack.Screen name="Autentication" component={Autentication} />
        <Stack.Screen name="Imc" component={Imc} />
        <Stack.Screen name="Termometro" component={Termometro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}