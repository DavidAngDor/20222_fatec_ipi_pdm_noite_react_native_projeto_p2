import { View, Text } from "react-native";
import React from "react";

export default function ClimaHistorico(cidade) {
  return (
    <View
      style={{
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: "90%",
      }}
    >
      <View style={{ display: "flex", alignItems: "center", flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text style={{ fontSize: 10 }}>
          {cidade.cidade.data.getDate() + "/" + cidade.cidade.data.getMonth()}
        </Text>
        <Text>{cidade.cidade.nome}</Text>
      </View>
    </View>
  );
}
