import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CidadeListComponente = () => {
    return (
        <View>
            <View>
                <Tab
                    value={index}
                    onChange={(e) => setIndex(e)}
                    indicatorStyle={{
                    backgroundColor: "white",
                    height: 3,
                    }}
                    variant="primary"
                >
                    <Tab.Item title="Pesquisar" titleStyle={{ fontSize: 12 }} />
                    <Tab.Item title="Histórico" titleStyle={{ fontSize: 12 }} />
                </Tab>
            </View>
            <View>
                {historico.map((item) => (
                    <ListItem key={item.cod_prev}>
                        <ClimaHistorico consulta={item}></ClimaHistorico>
                    </ListItem>
                ))}
            </View>
        </View>
    )
}

export default CidadeListComponente

const styles = StyleSheet.create({})