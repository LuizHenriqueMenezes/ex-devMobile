import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExibirDadosScreen = ({ route }) => {
  const { nome, idade, sexo, escolaridade, valor, status } = route.params;

  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Sexo: {sexo === 1 ? 'Feminino' : 'Masculino'}</Text>
      <Text>Problema: {escolaridade}</Text>
      <Text>Nível da dor: {valor}</Text>
      <Text>Plano de saúde: {status ? 'SIM' : 'NÃO'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExibirDadosScreen;
