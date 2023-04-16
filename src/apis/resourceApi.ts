import axios from 'axios'
import { resourceUrl } from '@/libs/serverUrls'

const resourceApi = axios.create({ baseURL: resourceUrl })

export default resourceApi
