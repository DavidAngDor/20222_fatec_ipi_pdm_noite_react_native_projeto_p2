import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from "@rneui/themed";

import { obterHistorico } from '../service/OracleCloudService'

const Historico = () => {
  const [itens, setItens] = useState([])
  useEffect(() => {
    const vai = async () => {
      const resultado = (await obterHistorico()).data.items
      setItens(resultado)
    }
    vai()
  }, [])

  return (
    <View>
      {
       itens.map((item, index) => 
       <ListItem key={index} bottomDivider>
         <Text key={item.cod_historico}>{item.cidade}</Text>          
       </ListItem>
       ) 
      }
    </View>
  )
}

export default Historico

const styles = StyleSheet.create({})