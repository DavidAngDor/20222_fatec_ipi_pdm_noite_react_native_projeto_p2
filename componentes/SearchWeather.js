import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import React, { useState } from 'react'
import { obterPrevisoes } from '../service/WeatherMapService'
import { armazenarNoHistorico, obterHistorico } from '../service/OracleCloudService'


const SearchWeather = ({ historico }) => {

  const capturarTexto = (cidadeDigitada) => {
    setCidade(cidadeDigitada);
  };
  const [cidade, setCidade] = useState("");
  const [itens, setItens] = useState([])
  const [nomeCidade, setNomeCidade] = useState('')


  const buscar = (cidade) => {
    obterPrevisoes(cidade)
      .then(res => {
        const data = new Date();
        const model = {
          cidade: res.data.city.name,
          link: `http://openweathermap.org/img/wn/${res.data.list[0].weather[0].icon}@2x.png`,
          data: data.getDate() + "/" + (parseInt(data.getMonth()) + 1),
        };
        armazenarNoHistorico(model);
        setItens(res.data.list)
        setNomeCidade(res.data.city.name)
        const vai = async () => {
          const resultado = (await obterHistorico()).data.items.sort((a, b) => b.cod_prev - a.cod_prev)
          historico(resultado)
        }
        vai()
      })
      .catch(erro => {
        console.log('erro', erro)
      })
  }

  return (
    <>
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
      <FlatList
        data={itens}
        keyExtractor={item => item.dt}
        renderItem={p => (
          <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: 15 }}>
                {nomeCidade}
              </Text>
            </View>
            <View style={{ display: "flex", alignItems: "center" }}>
              <Text style={{ fontSize: 10 }}>
                {p.item.dt_txt}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                marginTop: 10,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50 }}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${p.item.weather[0].icon}.png`,
                  }}
                />
              </View>
              <View>
                <Text>Temp Min: {p.item.main.temp_min}{`\u00B0`}C</Text>
                <Text>Temp Max: {p.item.main.temp_max}{`\u00B0`}C</Text>
              </View>
            </View>
          </View>
        )}
      />
      <Button
        title='Buscar'
        onPress={() => buscar(cidade)}
      />
    </>
  )
}

export default SearchWeather

const styles = StyleSheet.create({})