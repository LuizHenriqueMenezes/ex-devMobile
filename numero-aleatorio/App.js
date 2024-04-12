import React, { useState } from 'react';
import { View, Text, Button, Image} from 'react-native';

export default function App(){
  const [numeroAleatorio, setNumeroAleatorio] = useState(null);

  function gerarNumeroAleatorio() {
    const numero = Math.floor(Math.random() * 11); // Gera um número aleatório de 0 a 10
    setNumeroAleatorio(numero);
  }

  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 25 }}>Numero aleatório</Text>
      <Image
        source={{ uri: 'https://png.pngtree.com/png-clipart/20221222/ourmid/pngtree-thinking-emoji-png-image_6533047.png' }}
      />
      <Button title="Gerar Número Aleatório" onPress={gerarNumeroAleatorio} />
            <Text style={{ fontSize: 25 }}>{numeroAleatorio}</Text>
    </View>
  )
}
