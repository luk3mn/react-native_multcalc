import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function Autentication({navigation}) {
  
  const [name, setName] = useState('');
  
  return (
    <View style={estilo.container}>
      <TextInput
        style={estilo.input}
        value={name}
        onChangeText={ (name) => setName(name) }
        placeholder='Infore seu nome'
        placeholderTextColor={'#FFF'}
      />
      {/* <TextInput
        style={estilo.input}
        placeholder='Senha'
        secureTextEntry={true}
      /> */}
      <TouchableOpacity 
        style={estilo.button}
        onPress={ () => navigation.navigate('Home')}
      >
        <Text style={estilo.bntText}>Entrar</Text>
      </TouchableOpacity>
      <Text
        style={estilo.movingHome}
        onPress={ () => navigation.navigate('Home')}
      >Entrar sem nome</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor: '#001d3d'
  },
  input: {
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ffc300',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    color: "#FFF"
  },
  button: {
    backgroundColor: '#ffc300',
    width: 100,
    padding: 4,
    borderRadius: 7,
    alignSelf: 'flex-end'
  },
  bntText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000814'
  },
  movingHome: {
    textAlign: 'center',
    marginTop: 20,
    color: "#fff",
    fontWeight: 'bold',
  }
})