import React from "react";
import { View, Text, StyleSheet } from 'react-native'

export default function Home({navigation}) {
  return (
    <View style={estilo.container}>
      <Text style={estilo.title}>CALCULADORAS</Text>
      <View style={estilo.boxCalc}>  
        <Text
          style={estilo.button}
          onPress={() => navigation.navigate('Imc')}
        >IMC</Text>
        <Text
          style={estilo.button}
          onPress={() => navigation.navigate('Termometro')}
        >Termômetro</Text>
        {/* <Text
          style={estilo.button}
          onPress={() => navigation.navigate('Tip')}
        >Gorjeta</Text>
        <Text
          style={estilo.button}
          onPress={() => navigation.navigate('Math')}
        >Matemática</Text> */}
      </View>
    </View>
  )
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000814"
  },
  boxCalc: {
    flex: 1
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    textAlign: 'center',
    margin: 10,
    color: "#fff"
  },
  button: {
    backgroundColor: '#ffc300',
    color: "#001d3d",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
  }
})