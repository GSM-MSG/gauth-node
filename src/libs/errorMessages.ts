interface ErrorMessages {
  [hostname: string]: {
    [pathname: string]: {
      [method: string]: {
        [status: number]: string
        '*': string
      }
    }
  }
}

const errorMessages: ErrorMessages = {
  'server.gauth.co.kr': {
    '/oauth/token': {
      POST: {
        400: 'clientSecret이 올바르지 않습니다',
        401: '토큰이 변질 또는 만료되었습니다',
        404: 'clientId가 올바르지 않습니다',
        '*': '서버에 문제가 발생했습니다\n관리자에게 문의해 주세요',
      },
    },
    '/oauth/code': {
      POST: {
        400: '비밀번호가 일치하지 않습니다',
        404: '이메일에 따른 유저를 찾지 못했습니다',
        '*': '서버에 문제가 발생했습니다\n관리자에게 문의해 주세요',
      },
    },
  },
}

export default errorMessages
