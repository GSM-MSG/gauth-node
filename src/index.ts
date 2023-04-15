import {
  issueCode,
  IssueCodeRequest,
  IssueCodeResponse,
} from '@/services/issueCode'
import {
  issueToken,
  IssueTokenRequest,
  IssueTokenResponse,
} from '@/services/issueToken'

const Gauth = {
  issueCode,
  issueToken,
}

export {
  issueCode,
  IssueCodeResponse,
  IssueCodeRequest,
  issueToken,
  IssueTokenResponse,
  IssueTokenRequest,
}

export default Gauth
