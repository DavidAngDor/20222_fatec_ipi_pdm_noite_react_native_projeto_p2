import axios from 'axios'

const oracleCloudInstance = axios.create({
  baseURL: 'https://g6ca8cb0cf67636-pessoahobbiesrest.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin',
  headers: {'Content-Type': 'application/json'}
})


export const armazenarNoHistorico = (item) => {
  return oracleCloudInstance.post('/bossini/', item)
}

export const obterHistorico = () => {
  return oracleCloudInstance.get('/bossini/')
}