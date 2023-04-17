<div align="center">
  <h1>GAuth - Node</h1>

  <p>단 하나의 계정으로 <strong>광주소프트웨어마이스터고등학교</strong>의 모든 서비스를 이용할 수 있게</p>
</div>

## 📚 Description

`GAuth`를 더 편하게 이용할 수 있도록 node 버전으로 만들어진 라이브러리입니다.

## ⚡ Requirements

- axios

## 🛠️ Installation

```
// npm
> npm i @msg-team/gauth-node

// yarn
> yarn add @msg-team/gauth-node
```

## 🙋 How to use

### code 발급

```ts
import Gauth from '@msg-team/gauth-node'

const result = await Gauth.issueCode({
  email: 's12345', // s12345 or s12345@gsm.hs.kr
  password: '1234',
})

// { code: string }
console.log(result)
```

### token 발급

```ts
import Gauth from '@msg-team/gauth-node'

const result = await Gauth.issueToken({
  code: 'string',
  clientId: 'string',
  redirectUri: 'string',
  clientSecret: 'string',
})

// { accessToken: string, refreshToken: string }
console.log(result)
```

### token 재발급

```ts
import Gauth from '@msg-team/gauth-node'

const result = await Gauth.reissueToken({
  refreshToken: 'string',
})

// { accessToken: string, refreshToken: string }
console.log(result)
```

### 유저 정보 가져오기

```ts
import Gauth from '@msg-team/gauth-node'

const result = await Gauth.getUser({
  accessToken: 'string',
})

// { accessToken: string, refreshToken: string }
console.log(result)
```
