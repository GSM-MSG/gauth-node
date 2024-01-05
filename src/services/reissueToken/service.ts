import Response from './response'
import Request from './request'
import { gauthApi } from '@/apis'

/**
 * 토큰을 재발급합니다
 * @param {Request} data - ReissueTokenRequest
 * @throws {AxiosError}
 * @returns {Promise<Response>} - ReissueTokenResponse
 */
const reissueToken = async (data: Request): Promise<Response> => {
  const { data: body } = await gauthApi({
    method: 'PATCH',
    url: '/oauth/token',
    withCredentials: true,
    headers: {
      refreshToken: `Bearer ${data.refreshToken}`,
    },
  })

  return body
}

export default reissueToken
