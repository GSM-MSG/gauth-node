import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'

const issueToken = (data: Request): Promise<Response> => {
  try {
    return gauthApi({
      url: '/oauth/token',
      data,
    })
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    if (e.response.status === 400)
      e.message = 'clientSecret이 올바르지 않습니다'
    else if (e.response.status === 401)
      e.message = '토큰이 변질 또는 만료되었습니다'
    else if (e.response.status === 404)
      e.message = 'clientId가 올바르지 않습니다'
    else e.message = '서버에 문제가 발생했습니다\n관리자에게 문의해 주세요'

    throw e
  }
}

export default issueToken
