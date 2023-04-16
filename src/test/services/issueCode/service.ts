import { AxiosError } from 'axios'
import { issueCode } from '@/index'

describe('issueCode test', () => {
  it('should throw error', async () => {
    const result = async () => issueCode({ email: 's210', password: '1234' })
    expect(result).rejects.toThrowError(AxiosError)
  })
})
