import { UserChat } from './models'

export type AuthResponseType = {
  data: {
    accessToken: string
    refreshToken: string
  } | null
  errorMessage: string | null
}

export type ChatResponseType = {
  data: UserChat[] | null
  errorMessage: string | null
}
