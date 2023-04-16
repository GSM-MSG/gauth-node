import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'
import errorMapper from '@/libs/errorMapper'
import { gauthUrl } from '@/libs/serverUrls'

/**
 * code를 통해 토큰을 발급받을 수 있습니다
 * @param {Request} data - IssueTokenRequest
 * @throws {AxiosError}
 * @returns {Response} IssueTokenResponse
 */
const issueToken = async (data: Request): Promise<Response> => {
  try {
    const { data: body } = await gauthApi({
      method: 'POST',
      url: '/oauth/token',
      data,
    })

    return body
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
