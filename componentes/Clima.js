import { View, Text, FlatList } from "react-native";
import React from "react"; 

export default function Clima({ cidade }) {
  const month = cidade.data.getMonth() + 1;
  return (
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
    <>
      <FlatList 
        data={itens}
        keyExtractor={item => item.dt}
        renderItem={p => (
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
          </View>
        )}
      />
      <Button 
        title='Buscar'
        onPress={() => buscar()}/>
    </>
  );
}
