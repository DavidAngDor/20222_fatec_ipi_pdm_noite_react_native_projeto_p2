import { StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { ListItem } from "@rneui/themed";
import ClimaHistorico from "./ClimaHistorico";

const Historico = ({ historico }) => {
  useEffect(() => {
    setListaHistorico(historico)
  }, [historico])

  const [listaHistorico, setListaHistorico] = useState([]);

  return (
    <View>
      {
        listaHistorico.map((item, index) =>
          <ListItem key={index} bottomDivider>
            <ClimaHistorico consulta={item}></ClimaHistorico>
          </ListItem>
        )
      }
    </View>
  )
}

export default Historico

const styles = StyleSheet.create({})