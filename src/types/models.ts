export interface User {
  username: string | undefined
  email: string | undefined
  accessToken: string | undefined
}

export interface Session extends User {
  refreshToken: string | undefined
}
