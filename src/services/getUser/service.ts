import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { resourceApi } from '@/apis'
import { resourceUrl } from '@/libs/serverUrls'
import errorMapper from '@/libs/errorMapper'

/**
 * 유저 정보를 가져옵니다
 * @param {Request} data - GetUserRequest
 * @throws {AxiosError}
 * @returns {Response} - GetUserResponse
 */
const getUser = async (data: Request): Promise<Response> => {
  try {
    const { data: body } = await resourceApi<Response>({
      method: 'GET',
      url: '/oauth/token',
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    })

    return body
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    e.message = errorMapper(
      `${resourceUrl}/oauth/token`,
      'GET',
      e.response.status
    )

    throw e
  }
}

export default getUser
