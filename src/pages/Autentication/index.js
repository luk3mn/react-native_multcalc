import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Autentication({navigation}) {
  return (
    <View style={estilo.container}>
      <TextInput
        style={estilo.input}
        placeholder='usuário'
      />
      <TextInput
        style={estilo.input}
        placeholder='Senha'
        secureTextEntry={true}
      />
      <TouchableOpacity style={estilo.button}>
        <Text style={estilo.bntText}>Entrar</Text>
      </TouchableOpacity>
      <Text
        style={estilo.movingHome}
        onPress={ () => navigation.navigate('Home')}
      >Entrar sem login</Text>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25
  },
  input: {
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    border: 'solid red',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 500
  },
  button: {
    backgroundColor: '#ddd',
    width: 100,
    padding: 4,
    borderRadius: 7,
    alignSelf: 'flex-end'
  },
  bntText: {
    fontSize: 16,
    textAlign: 'center'
  },
  movingHome: {
    textAlign: 'center',
    marginTop: 20,
    color: "#000fff"
  }
})