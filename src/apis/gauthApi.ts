import axios from 'axios'

const gauthApi = axios.create({ baseURL: 'https://server.gauth.co.kr' })

export default gauthApi
