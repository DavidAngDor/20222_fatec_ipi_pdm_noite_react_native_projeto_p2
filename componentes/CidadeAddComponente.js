import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View 
} from 'react-native'
import React, { useState } from 'react'
import {
  Button,
  Card,
  Input
} from '@rneui/themed-edge'

const CidadeAddComponente = ({navigation}) => {
  
  const [itens, setItens] = useState([])

  const getCidade = (cidade) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},br&appid=0a2f38e7438699b0ead786a746a9d6fb&units=metric&lang=pt_br`
    fetch(url)
      .then(res => {
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
      <FlatList 
        data={itens}
        keyExtractor={item => item.dt}
        renderItem={p => (
          <View>
            <Input
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
           
            
          </View>
        )}
      />
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
    </>
  )
}

export default CidadeAddComponente

const styles = StyleSheet.create({})