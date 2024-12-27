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

export enum ChatType {
  PRIVATE,
  GROUP
}

export enum MessageType {
  TEXT,
  IMAGE
}


export interface Chat {
  id: number;
  name: string;
  type: ChatType;
}

export interface Message {
  id: number;
  content: string;
  timestamp: string;
  type: MessageType;
  author: string;
}

