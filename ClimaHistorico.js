import { View, Text } from "react-native";
import React from "react";

export default function ClimaHistorico({consulta}) {
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
          {consulta.data}
        </Text>
        <Text>{consulta.cidade}</Text>
      </View>
    </View>
  );
}
