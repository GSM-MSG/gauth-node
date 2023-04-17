import {
  issueCode,
  IssueCodeRequest,
  IssueCodeResponse,
} from './services/issueCode'
import {
  issueToken,
  IssueTokenRequest,
  IssueTokenResponse,
} from './services/issueToken'
import {
  reissueToken,
  ReIssueTokenRequest,
  ReIssueTokenResponse,
} from './services/reissueToken'
import { getUser, GetUserRequest, GetUserResponse } from './services/getUser'

const Gauth = {
  issueCode,
  issueToken,
  reissueToken,
  getUser,
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
  getUser,
  GetUserResponse,
  GetUserRequest,
}

export default Gauth
