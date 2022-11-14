import { View, Text } from "react-native";
import React from "react";

export default function Clima(cidade) {
  const dataHora = new Date();
  console.log(cidade);
  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ fontSize: 10 }}>
          {dataHora.getDate() +
            "/" +
            dataHora.getMonth() +
            "/" +
            dataHora.getFullYear() +
            " " +
            dataHora.getHours() +
            ":" +
            dataHora.getMinutes()}
        </Text>
      </View>
      <View style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 10}}>
        <View>
          <Text>Temp. Max: {Math.round(cidade.cidade.max, 1)} °C</Text>
        </View>
        <View>
          <Text>Temp. Min: {Math.round(cidade.cidade.min)} °C</Text>
        </View>
      </View>
    </View>
  );
}
