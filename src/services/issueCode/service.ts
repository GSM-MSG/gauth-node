import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'

/**
 * code를 발급받습니다
 * @param {Request} data - IssueCodeRequest
 * @throws {AxiosError}
 * @returns {Response} - IssueCodeResponse
 */
const issueCode = async (data: Request): Promise<Response> => {
  const { data: body } = await gauthApi<Response>({
    method: 'POST',
    url: '/oauth/code',
    data,
  })

  return body
}

export default issueCode
