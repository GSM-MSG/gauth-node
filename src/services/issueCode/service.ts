import { isAxiosError } from 'axios'
import Request from './request'
import Response from './response'
import { gauthApi } from '@/apis'

const issueCode = async (data: Request): Promise<Response | undefined> => {
  try {
    return gauthApi({
      url: '/oauth/code',
      data,
    })
  } catch (e) {
    if (!isAxiosError(e) || !e.response) throw e

    if (e.response.status === 400) e.message = '비밀번호가 일치하지 않습니다'
    else if (e.response.status === 404)
      e.message = '이메일에 따른 유저를 찾지 못했습니다'
    else e.message = '서버에 문제가 발생했습니다\n관리자에게 문의해 주세요'

    throw e
  }
}

export default issueCode
