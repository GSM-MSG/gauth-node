import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'
import errorMapper from '@/libs/errorMapper'
import { gauthUrl } from '@/libs/serverUrls'

/**
 * code를 발급받습니다
 * @param {Request} data - IssueCodeRequest
 * @throws {AxiosError}
 * @returns {Response} - IssueCodeResponse
 */
const issueCode = async (data: Request): Promise<Response> => {
  try {
    const { data: body } = await gauthApi<Response>({
      method: 'POST',
      url: '/oauth/code',
      data,
    })

    return body
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    e.message = errorMapper(`${gauthUrl}/oauth/code`, 'POST', e.response.status)

    throw e
  }
}

export default issueCode
