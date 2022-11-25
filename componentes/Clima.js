import { View, Text, Image } from "react-native";
import React from "react";

export default function Clima({ cidade }) {
  return (
    <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 10 }}>
      <View style={{ textAlign: "center" }}>
        <Text>Cidade: {cidade.cidade}</Text>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ fontSize: 10 }}>
          {cidade.data.getDate() +
            "/" +
            cidade.data.getMonth() +
            "/" +
            cidade.data.getFullYear() +
            " " +
            cidade.data.getHours() +
            ":" +
            cidade.data.getMinutes()}
        </Text>
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri: `http://openweathermap.org/img/wn/${cidade.icone}@2x.png`,
          }}
        />
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
        <View style={{ justifyContent: "center" }}>
          <Text>Temp. Max: {Math.round(cidade.temperaturaMaxima, 1)} °C</Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text>Temp. Min: {Math.round(cidade.temperaturaMinima)} °C</Text>
        </View>
      </View>
    </View>
  );
}
