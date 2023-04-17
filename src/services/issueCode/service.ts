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
  const prefix = '@gsm.hs.kr'
  const { data: body } = await gauthApi<Response>({
    method: 'POST',
    url: '/oauth/code',
    data: {
      ...data,
      email: data.email.includes(prefix)
        ? data.email
        : `${data.email}${prefix}`,
    },
  })

  return body
}

export default issueCode
