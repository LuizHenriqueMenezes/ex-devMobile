import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native'; // Importe useNavigation
import { styles } from './styles';

function Form() {
  const navigation = useNavigation(); // Obtenha a função de navegação
  const [idade, setIdade] = useState('');
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState(0);
  const [status, setStatus] = useState(false);
  const [escolaridade, setEscolaridade] = useState(1);
  const [sexo, setSexo] = useState(1);

  const handleConfirmar = () => {
    navigation.navigate('ExibirDados', { // Navegue para a tela de exibição dos dados
      nome,
      idade,
      sexo,
      escolaridade,
      valor: valor.toFixed(0),
      status,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NOME:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNome}
          value={nome}
          placeholder="Digite seu nome"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>IDADE:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setIdade}
          value={idade}
          placeholder="Digite sua idade"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>SEXO:</Text>
        <Picker
          style={styles.input}
          selectedValue={sexo}
          onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
          <Picker.Item key={1} value={1} label="FEMININO" />
          <Picker.Item key={2} value={2} label="MASCULINO" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PROBLEMA:</Text>
        <Picker
          style={styles.input}
          selectedValue={escolaridade}
          onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}>
          <Picker.Item key={1} value={1} label="Gripe" />
          <Picker.Item key={2} value={2} label="Dengue" />
          <Picker.Item key={3} value={3} label="Covid" />
          <Picker.Item key={4} value={4} label="Varíola dos macacos" />
          <Picker.Item key={5} value={5} label="Osso quebrado" />
          <Picker.Item key={6} value={6} label="Bateu a cabeça" />
          <Picker.Item key={7} value={7} label="Overdose" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>NIVEL DA DOR:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          onValueChange={valorSelecionado => setValor(valorSelecionado)}
          value={valor}
          thumbTintColor='#89CFF0'
        />
        <Text style={styles.valor}>{valor.toFixed(0)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>PLANO DE SAÚDE?:</Text>
        <Switch
          value={status}
          onValueChange={valorSwitch => setStatus(valorSwitch)}
          thumbColor='#89CFF0'
        />
        <Text style={status ? styles.nacionalidadeBrasileiro : styles.nacionalidadeEstrangeiro}>
          {status ? "SIM" : "NÃO"}
        </Text>
      </View>
      <Button title="CONFIRMAR" onPress={handleConfirmar} />
    </View>
  );
}

export default Form;
