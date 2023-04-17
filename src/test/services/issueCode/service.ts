import { AxiosError, isAxiosError } from 'axios'
import { issueCode } from '@/index'
import errorMessages from '@/libs/errorMessages'
import { gauthUrl } from '@/libs/serverUrls'

describe('reissueToken test', () => {
  it('should throw error', async () => {
    const result = async () => issueCode({ email: 's12345', password: '1234' })
    await expect(result).rejects.toThrowError(AxiosError)
  })

  it('should matched error message', async () => {
    try {
      issueCode({ email: 's12345', password: '1234' })
    } catch (e) {
      if (!isAxiosError(e)) throw Error('Not AxiosError')

      expect(e.message).toBe(
        errorMessages[gauthUrl]['/oauth/code']['POST'][400]
      )
    }
  })
})
