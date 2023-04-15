import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'
import errorMapper from '@/libs/errorMapper'

const issueToken = (data: Request): Promise<Response> => {
  try {
    return gauthApi({
      method: 'POST',
      url: '/oauth/token',
      data,
    })
  } catch (e) {
    if (
      !isAxiosError(e) ||
      !e.response ||
      !e.response.config.url ||
      !e.response.config.method
    )
      throw e

    e.message = errorMapper(
      e.response.config.url,
      e.response.config.method,
      e.response.status
    )

    throw e
  }
}

export default issueToken
