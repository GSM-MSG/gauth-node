import { Method } from 'axios'
import errorMessages from './errorMessages'

const errorMapper = (
  url: string,
  method: Method | string,
  status: number
): string => {
  const Url = new URL(url)

  try {
    const messages =
      errorMessages[Url.origin][Url.pathname][method.toUpperCase()]

    return messages[status] ? messages[status] : messages['*']
  } catch (e) {
    return '알 수 없는 에러가 발생했습니다'
  }
}

export default errorMapper
