import React from 'react';
import { View, Text } from 'react-native';

export default function Settings({ route }) {
  return (
    <View>
      <Text>Perfil do usuário </Text>
      <Text>Nome: {route.params.nome}</Text>

      <Text>Alterar senha</Text>
    </View>
  );
}