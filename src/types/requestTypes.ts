import { ChatTypesEnum } from './models'

export type CreateChatRequestType = {
  name?: string
  userIds: number[]
  type: ChatTypesEnum
}
