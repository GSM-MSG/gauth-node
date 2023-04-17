import { AxiosError } from 'axios'
import { issueToken } from '@/index'

describe('issueToken test', () => {
  it('should throw error', async () => {
    const result = async () =>
      issueToken({
        code: 'wf',
        clientId: 'wef',
        redirectUri: 'wef',
        clientSecret: 'wef',
      })
    await expect(result).rejects.toThrowError(AxiosError)
  })
})
