interface Response {
  email: string
  name?: string
  grade?: number
  classNum?: number
  num?: number
  gender: 'MALE' | 'FEMALE'
  profileUrl?: string
  role: 'ROLE_STUDENT' | 'ROLE_TEACHER'
}

export default Response
