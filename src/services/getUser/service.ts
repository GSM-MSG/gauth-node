import Request from './request'
import Response from './response'
import { resourceApi } from '@/apis'

/**
 * 유저 정보를 가져옵니다
 * @param {Request} data - GetUserRequest
 * @throws {AxiosError}
 * @returns {Response} - GetUserResponse
 */
const getUser = async (data: Request): Promise<Response> => {
  const { data: body } = await resourceApi<Response>({
    method: 'GET',
    url: '/user',
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${data.accessToken}`,
    },
  })

  return body
}

export default getUser
