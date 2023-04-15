import { Method } from 'axios'
import errorMessages from './errorMessages'

const errorMapper = (
  url: string,
  method: Method | string,
  status: number
): string => {
  const Url = new URL(url)

  const messages =
    errorMessages[Url.hostname][Url.pathname][method.toUpperCase()]

  if (!messages) return '알 수 없는 에러'

  return messages[status] ? messages[status] : messages['*']
}

export default errorMapper
