import { AxiosError } from 'axios'
import { reissueToken } from '@/index'

describe('reissueToken test', () => {
  it('should throw error', async () => {
    const result = async () => reissueToken({ refreshToken: '뷁' })
    expect(result).rejects.toThrowError(AxiosError)
  })
})
