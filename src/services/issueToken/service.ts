import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'

/**
 * code를 통해 토큰을 발급받을 수 있습니다
 * @param {Request} data - IssueTokenRequest
 * @throws {AxiosError}
 * @returns {Response} IssueTokenResponse
 */
const issueToken = async (data: Request): Promise<Response> => {
  const { data: body } = await gauthApi({
    method: 'POST',
    url: '/oauth/token',
    data,
  })

  return body
}

export default issueToken
