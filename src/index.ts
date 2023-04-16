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
import {
  reissueToken,
  ReIssueTokenRequest,
  ReIssueTokenResponse,
} from '@/services/reissueToken'

const Gauth = {
  issueCode,
  issueToken,
  reissueToken,
}

export {
  issueCode,
  IssueCodeResponse,
  IssueCodeRequest,
  issueToken,
  IssueTokenResponse,
  IssueTokenRequest,
  reissueToken,
  ReIssueTokenResponse,
  ReIssueTokenRequest,
}

export default Gauth
