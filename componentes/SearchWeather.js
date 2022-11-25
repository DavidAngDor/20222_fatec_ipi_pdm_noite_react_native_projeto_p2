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

const SearchWeather = () => {

  const capturarTexto = (cidadeDigitada) => {
    setCidade(cidadeDigitada);
  };
  const [cidade, setCidade] = useState("");
  const [cidadeEscolhida, setCidadeEscolhida] = useState(null);
  const [historico, setHistorico] = useState([]);

  const [itens, setItens] = useState([])

  const buscar = (cidade) => {
    obterPrevisoes(cidade)
    .then(res => {
      /* cidade = res.city[0].name; */
      console.log(res)
      setItens(itens => {
        console.log(res.data.list)
        return res.data.list
      })
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
/* 
<View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
  <View style={{ display: "flex", alignItems: "center" }}> 
    <Text style={{ fontSize: 10 }}>
      {cidade.data.getDate() +
        "/" +
        month +
        "/" +
        cidade.data.getFullYear() +
        " " +
        cidade.data.getHours() +
        ":" +
        cidade.data.getMinutes()}
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
      <img style={{with: 120, height:120}} 
        src={ "http://openweathermap.org/img/wn/"+cidade.icone+"@2x.png"} 
      />    
    </View>
    <View style={{justifyContent: "center"}}>
      <Text> {cidade.cidade} </Text>
    </View>
    <View style={{justifyContent: "center"}}>
      <Text>Temp. Max: {Math.round(cidade.temperaturaMaxima)} °C</Text>
    </View>
    <View style={{justifyContent: "center"}}>
      <Text>Temp. Min: {Math.round(cidade.temperaturaMinima)} °C</Text>
    </View>
  </View>
</View> */
          <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
            <View style={{ display: "flex", alignItems: "center" }}> 
              <Text style={{ fontSize: 15 }}>
                {cidade}
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
                  style={{width: 50, height: 50}}
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