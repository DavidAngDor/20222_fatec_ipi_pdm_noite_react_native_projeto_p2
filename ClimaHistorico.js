import { View, Text, Image } from "react-native";
import React from "react";

export default function ClimaHistorico({ consulta }) {
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
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: consulta.link,
            }}
          />
        </View>
        <Text style={{ fontSize: 10 }}>{consulta.data}</Text>
        <Text>{consulta.cidade}</Text>
      </View>
    </View>
  );
}
