import {
  Alert,
  ScrollView,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Tab, TabView, Button, ListItem, Image } from "@rneui/themed";
import Clima from "./Clima";
import ClimaHistorico from "./ClimaHistorico";

export default function App() {
  useEffect(() => {
    getHistorico();
  }, []);

  const [index, setIndex] = React.useState(0);
  const capturarTexto = (cidadeDigitada) => {
    setCidade(cidadeDigitada);
  };
  const [cidade, setCidade] = useState("");
  const [cidadeEscolhida, setCidadeEscolhida] = useState(null);
  const [historico, setHistorico] = useState([]);

  const getCidade = (cidade) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=0a2f38e7438699b0ead786a746a9d6fb&units=metric&lang=pt`;
    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        const model = {
          cidade: json.name,
          temperaturaMaxima: json.main.temp_max,
          temperaturaMinima: json.main.temp_min,
          icone: json.weather[0].icon,
          data: new Date(),
        };
        setCidadeEscolhida(model);
        criarHistorico(model);
      })
      .catch(() => {
        Alert.alert("Erro", "Não foi possivel carregar os dados dessa cidade");
      });
  };

  const criarHistorico = (model) => {
    const request = {
      cidade: model.cidade,
      data: model.data.getDate() + "/" + (parseInt(model.data.getMonth()) + 1),
      link: `http://openweathermap.org/img/wn/${model.icone}@2x.png`,
    };

    const url =
      "https://g6ca8cb0cf67636-pessoahobbiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bossini/";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }).then((data) => {
      getHistorico();
    });
  };

  const getHistorico = () => {
    const url =
      "https://g6ca8cb0cf67636-pessoahobbiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/bossini/";

    fetch(url)
      .then((resposta) => resposta.json())
      .then((json) => {
        if (json.items.length > 0) {
          setHistorico(json.items.sort((a, b) => b.cod_prev - a.cod_prev));
        }
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
            {historico.map((item) => (
              <ListItem key={item.cod_prev}>
                <ClimaHistorico consulta={item}></ClimaHistorico>
              </ListItem>
            ))}
          </ScrollView>
        </TabView.Item>
      </TabView>
    </>
  );
}
