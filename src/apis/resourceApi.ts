import axios, { isAxiosError } from 'axios'
import { resourceUrl } from '@/libs/serverUrls'
import errorMapper from '@/libs/errorMapper'

const resourceApi = axios.create({ baseURL: resourceUrl })

resourceApi.interceptors.response.use(
  (res) => res,
  (e) => {
    if (!isAxiosError(e) || !e.response) return Promise.reject(e)

    e.message = errorMapper(
      `${resourceUrl}${e.config?.url}`,
      e.config?.method || '',
      e.response.status
    )

    return Promise.reject(e)
  }
)

export default resourceApi
