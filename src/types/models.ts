export interface User {
  username: string | undefined
  email: string | undefined
  accessToken: string | undefined
}

export interface Session extends User {
  refreshToken: string | undefined
}


export interface UserChat {
  id: number
  logo?: string
  name: string
  unreadMessages: number
}

export interface ExternalUser {
  id: number
  username: string
}

export enum ChatTypesEnum {
  DIRECT = 'DIRECT',
  GROUP = 'GROUP',
}

export interface Message {
  id: number
  chatId: number
  senderId: number
  senderName: string
  content: string
  createdAt: string
  type: MessageTypesEnum
}

export enum MessageTypesEnum {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
}