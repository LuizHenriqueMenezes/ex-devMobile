import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useState, useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import Form from './src/form'
import ExibirDados from './src/resultado/index'


const Stack = createStackNavigator();


export default function App(){
  //useEffect( () => {
    //alert('Mais funções em breve para os perigosos!')
  //}, []);

  return(
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name="Form" component={Form} options={{
          title:'Fizemos aqui dps do projeto <3',
          headerStyle:{
            backgroundColor: '#003262'
          },
          headerTintColor: '#89CFF0',
          //headerShown: false,
        }}
        />

        <Stack.Screen name="FORMULÁRIO PRA DOR" component={Form} />
        <Stack.Screen name="ExibirDados" component={ExibirDados} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}
