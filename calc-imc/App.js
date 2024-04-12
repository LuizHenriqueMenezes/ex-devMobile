import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaMetros = altura / 100; // Convertendo altura para metros
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setIMC(imcCalculado.toFixed(2)); // Limitando para duas casas decimais
      definirClassificacao(imcCalculado);
    }
  };

  const definirClassificacao = (imc) => {
    if (imc < 18.5) {
      setClassificacao('Abaixo do peso');
    } else if (imc >= 18.5 && imc <= 24.9) {
      setClassificacao('Peso normal');
    } else if (imc >= 25 && imc <= 29.9) {
      setClassificacao('Sobrepeso');
    } else if (imc >= 30 && imc <= 34.9) {
      setClassificacao('Obesidade grau 1');
    } else if (imc >= 35 && imc <= 39.9) {
      setClassificacao('Obesidade grau 2');
    } else {
      setClassificacao('Obesidade grau 3 ou mórbida');
    }
  };

  return (
    <View style={styles.view}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>
      <Image
        source={{
          uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk=w600-h300-pc0xffffff-pd',
        }}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o peso"
        keyboardType="numeric"
        value={peso}
        onChangeText={(texto) => setPeso(texto)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura"
        keyboardType="numeric"
        value={altura}
        onChangeText={(texto) => setAltura(texto)}
      />

      <Button title='Calcular' color='blue' onPress={calcularIMC} />

      {imc !== null && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoText}>Seu IMC: {imc}</Text>
          <Text style={styles.resultadoText}>Classificação: {classificacao}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 20,
    marginTop: 15,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultadoText: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default App;
