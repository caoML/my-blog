import axios from 'axios'
const server = axios.create({
  timeout: 30000,
  baseURL: '/api'
})
export default server
