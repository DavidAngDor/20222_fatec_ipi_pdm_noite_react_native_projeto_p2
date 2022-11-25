import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Tab, TabView } from "@rneui/themed";
import Historico from './componentes/Historico';
import SearchWeather from './componentes/SearchWeather';
import React, { useState, useEffect } from "react";
import { obterHistorico } from './service/OracleCloudService'


export default function App() {
  useEffect(() => {
    const vai = async () => {
      const resultado = (await obterHistorico()).data.items.sort((a, b) => b.cod_prev - a.cod_prev)
      setHistorico(resultado)
    }
    vai()
  }, [])

  const [index, setIndex] = React.useState(0);
  const [historico, setHistorico] = useState([])
  const handleChange = (change) => setHistorico(change); 

  return(
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Pesquisar" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="Histórico" titleStyle={{ fontSize: 12 }} />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: 'ligtblue', width: '100%' }}>
          <SearchWeather historico={handleChange}/>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'ligtblue', width: '100%' }}>
          <Historico historico={historico} /> 
        </TabView.Item>
      </TabView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});