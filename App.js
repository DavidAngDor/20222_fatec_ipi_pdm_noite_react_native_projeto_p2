import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Tab, TabView } from "@rneui/themed";
import Historico from './componentes/Historico';
import SearchWeather from './componentes/SearchWeather';
import React, { useState } from "react";


export default function App() {
  const [index, setIndex] = React.useState(0);
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
          <SearchWeather />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'ligtblue', width: '100%' }}>
          <Historico /> 
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