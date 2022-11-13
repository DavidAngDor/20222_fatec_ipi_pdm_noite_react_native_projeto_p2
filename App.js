import { Alert, ScrollView, Text, StyleSheet, TextInput, View, Button } from 'react-native';
import React, { useState } from 'react'
import { Tab } from '@rneui/themed';


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [cidade, setCidade] = useState('');
  const [cidadeEscolhida, setCidadeEscolhida] = useState(null);
  const [historico, setHistorico] = useState('');
  const capturarTexto = (cidadeDigitada) => {
    setCidade(cidadeDigitada)
  };
  const adicionarCidade = () => {
    console.log("Adicionando...", cidade)
    setHistorico(historico => [cidade, ...historico])
    setCidade('')
    console.log(historico)
  };
  

  const getCidadeData = (cidade) => {
    /* const key = '0a2f38e7438699b0ead786a746a9d6fb'
    const temp = 'metric'
    const lang = 'pt' */
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=0a2f38e7438699b0ead786a746a9d6fb&units=metric&lang=pt`;

    fetch(API)
      .then(resposta => resposta.json())
        .then(json => {
          const temp = {
            // icone: json.weather.icon,
            atual: json.main.temp,
            max: json.main.temp_max,
            main: json.weather.main,
            min: json.main.temp_min,
          };

          setCidadeEscolhida(temp);
        })
        .catch(() => {
          Alert.alert('Erro', 'Não foi possivel carregar os dados dessa cidade');
        });
  };

 
  return (
    <View style={{padding: 40}}>
      <ScrollView>
        <View>
          <Tab value={index} onChange={setIndex} dense>
            <Tab.Item>Tab</Tab.Item>
            <Tab.Item>Tab</Tab.Item>
          </Tab>
          <TextInput gti
            style={{borderBottomColor: '#CCC', borderBottomWidth: 2, padding: 12, marginBottom: 4}}
            placeholder="Lembrar..."
            onChangeText={capturarTexto}
            value={cidade}
          />
          <Button 
            title="OK"
            /* onPress={adicionarCidade} */
            onPress={()=>getCidadeData(cidade)}
          />
        </View>

        {cidadeEscolhida != null && (
          <View>
            <Text>Temp: {cidadeEscolhida.atual}°C</Text>
            <Text>Temp. Max.: {cidadeEscolhida.max}°C</Text>
            <Text>Temp. Min.: {cidadeEscolhida.min}°C</Text>
            <Text>Clima: {cidadeEscolhida.main}</Text>
          </View>
        )}
        <View>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
