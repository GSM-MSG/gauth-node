import axios, { isAxiosError } from 'axios'
import { gauthUrl } from '@/libs/serverUrls'
import errorMapper from '@/libs/errorMapper'

const gauthApi = axios.create({ baseURL: gauthUrl })

gauthApi.interceptors.response.use(
  (res) => res,
  (e) => {
    if (!isAxiosError(e) || !e.response) return Promise.reject(e)

    e.message = errorMapper(
      `${gauthUrl}${e.config?.url}`,
      e.config?.method || '',
      e.response.status
    )

    return Promise.reject(e)
  }
)

export default gauthApi
