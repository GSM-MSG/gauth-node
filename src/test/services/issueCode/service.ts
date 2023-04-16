import { AxiosError } from 'axios'
import { issueCode } from '@/index'

describe('reissueToken test', () => {
  it('should throw error', async () => {
    const result = async () => issueCode({ email: 's12345', password: '1234' })
    expect(result).rejects.toThrowError(AxiosError)
  })
})
