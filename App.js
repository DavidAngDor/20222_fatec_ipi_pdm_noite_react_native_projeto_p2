import {
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { Tab, TabView, Button, ListItem } from "@rneui/themed";
import Clima from "./Clima";
import ClimaHistorico from "./ClimaHistorico";

export default function App() {
  const historicoMock = [
    {
      id: 1,
      nome: "Santo André",
      data: new Date(),
    },

    {
      id: 2,
      nome: "São Paulo",
      data: new Date(),
    },
  ];

  const [index, setIndex] = React.useState(0);
  const capturarTexto = (cidadeDigitada) => {
    setCidade(cidadeDigitada);
  };
  const [cidade, setCidade] = useState("");
  const [cidadeEscolhida, setCidadeEscolhida] = useState(null);
  const [historico, setHistorico] = useState(historicoMock);
  const getCidade = (cidade) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=0a2f38e7438699b0ead786a746a9d6fb&units=metric&lang=pt`;
    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        console.log(json);
        const temp = {
          atual: json.main.temp,
          max: json.main.temp_max,
          main: json.weather[0].description,
          min: json.main.temp_min,
        };
        setCidadeEscolhida(temp);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possivel carregar os dados dessa cidade");
      });
  };

  return (
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
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            <TextInput
              gti
              style={{
                borderBottomColor: "#CCC",
                borderBottomWidth: 2,
                padding: 12,
                marginBottom: 4,
                marginHorizontal: 10,
                borderRadius: 10,
                marginVertical: 10,
              }}
              placeholder="Digite uma cidade"
              onChangeText={capturarTexto}
              value={cidade}
            />
            {cidadeEscolhida && <Clima cidade={cidadeEscolhida}></Clima>}
            <Button
              buttonStyle={{
                backgroundColor: "rgba(90, 154, 230, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              title="OK"
              onPress={() => getCidade(cidade)}
            />
          </ScrollView>
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <ScrollView>
            {historico.map((item, index) => (
              <ListItem key={index} bottomDivider>
                <ClimaHistorico cidade={item}></ClimaHistorico>
              </ListItem>
            ))}
          </ScrollView>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerList: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
