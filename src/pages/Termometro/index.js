import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Termometro() {
  const [celsius, setCelsisus] = useState(''); // Recebe o peso em celsius
  const [f, setF] = useState('');
  const [kelvin, setKelvin] = useState('');

  const calcular = function() {
    // celsius -> farenheit
    let convertF = ((9*celsius) + (5*32)) / 5

    // celsius -> kelvin
    let convertK = parseFloat(celsius) + 273.15

    setF(convertF)
    setKelvin(convertK)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversão de temperatura</Text>

      <TextInput 
        style={styles.input}
        value={celsius}
        onChangeText={ (celsius) => setCelsisus(celsius)}
        placeholder="Informe a temperatura em °C"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}
        onPress={calcular}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      <View style={styles.resultArea}>
        <Text style={styles.result}>Temperatura °C: {celsius}</Text>
        <Text style={styles.result}>Temperatura °F: {f}</Text>
        <Text style={styles.result}>Temperatura  Kelvin: {kelvin}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001d3d',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    marginVertical: 25,
    fontSize: 27,
    color: "#ffc300"
  },
  input: {
    width: "100%",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    backgroundColor: "#FFF",
    color: "#001d3d",
    fontSize: 23
  },
  btnText: {
    color: '#001d3d',
    fontWeight: 700,
    fontSize: 25,
  },
  button: {
    width: "100%",
    backgroundColor: '#ffc300',
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
    marginVertical: 5
  },
  resultArea: {
    width: "100%",
    marginTop: 20,
  },
  result: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: 600,
    color: "#FFF"
  }
});