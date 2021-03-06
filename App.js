// Lista de icones
// LINK: https://github.com/oblador/react-native-vector-icons/blob/master/glyphmaps/Ionicons.json

import React from 'react';
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
        <Tab.Screen name='Settings' component={Settings} 
          initialParams={{nome: Autentication.name}}
        />
        <Tab.Screen name="About" component={About}/> 
      </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Autentication'>
        <Stack.Screen 
          name="Home" 
          component={Tabs}
          options={{
            title: 'Bem-vindo',
            headerStyle: {
              backgroundColor: '#000814'
            },
            headerTintColor: '#ffc300'
          }} 
        />
        <Stack.Screen 
          name="Autentication" 
          component={Autentication} 
          options={{
            title: 'Autentica????o',
            headerStyle: {
              backgroundColor: '#000814'
            },
            headerTintColor: '#ffc300'
          }}
        />
        <Stack.Screen 
          name="Imc" 
          component={Imc} 
          options={{
            title: 'IMC',
            headerStyle: {
              backgroundColor: '#000814'
            },
            headerTintColor: '#ffc300'
          }}
        />
        <Stack.Screen 
          name="Termometro" 
          component={Termometro} 
          options={{
            title: 'Term??metro',
            headerStyle: {
              backgroundColor: '#000814'
            },
            headerTintColor: '#ffc300'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}