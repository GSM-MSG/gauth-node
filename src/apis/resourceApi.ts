import axios from 'axios'

const resourceApi = axios.create({ baseURL: 'https://open.gauth.co.kr' })

export default resourceApi
