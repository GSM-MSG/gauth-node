import { AxiosError } from 'axios'
import { issueToken } from '@/index'

describe('issueCode test', () => {
  it('should throw error', async () => {
    const result = async () =>
      issueToken({
        code: 'wf',
        clientId: 'wef',
        redirectUri: 'wef',
        clientSecret: 'wef',
      })
    expect(result).rejects.toThrowError(AxiosError)
  })
})
