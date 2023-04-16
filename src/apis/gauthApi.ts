import axios from 'axios'
import { gauthUrl } from '@/libs/serverUrls'

const gauthApi = axios.create({ baseURL: gauthUrl })

export default gauthApi
