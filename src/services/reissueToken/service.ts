import { isAxiosError } from 'axios'
import Response from './response'
import Request from './request'
import { gauthApi } from '@/apis'
import { gauthUrl } from '@/libs/serverUrls'
import errorMapper from '@/libs/errorMapper'

/**
 * 토큰을 재발급합니다
 * @param {Request} data - ReissueTokenRequest
 * @throws {AxiosError}
 * @returns {Promise<Response>} - ReissueTokenResponse
 */
const reissueToken = async (data: Request): Promise<Response> => {
  try {
    const { data: body } = await gauthApi({
      method: 'PATCH',
      url: '/oauth/token',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${data.refreshToken}`,
      },
    })

    return body
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    e.message = errorMapper(
      `${gauthUrl}/oauth/token`,
      'PATCH',
      e.response.status
    )

    throw e
  }
}

export default reissueToken
