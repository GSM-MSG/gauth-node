import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'
import errorMapper from '@/libs/errorMapper'
import { gauthUrl } from '@/libs/serverUrls'

const issueToken = (data: Request): Promise<Response> => {
  try {
    return gauthApi({
      method: 'POST',
      url: '/oauth/token',
      data,
    })
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    e.message = errorMapper(
      `${gauthUrl}/oauth/token`,
      'POST',
      e.response.status
    )

    throw e
  }
}

export default issueToken
