export type AuthResponseType = {
  data: {
    accessToken: string
    refreshToken: string
  } | null
  errorMessage: string | null
}
