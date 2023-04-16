import { AxiosError } from 'axios'
import { issueCode } from '@/index'

describe('issueCode test', () => {
  it('should throw error', async () => {
    expect(() =>
      issueCode({ email: 's2106', password: '1234' })
    ).rejects.toThrowError(AxiosError)
  })
})
