import {
  createChatResponseAdapter,
  getChatsResponseAdapter,
} from '@/adapters/chatResponseAdapter'
import { API_URL } from '@/config/config'
import { authHeaderInterceptor } from '@/interceptors/authHeaderInterceptor'
import { User } from '@/types/models'
import { CreateChatRequestType } from '@/types/requestTypes'
import { CreateChatResponseType, ChatResponseType } from '@/types/responseTypes'

export const getUserChats = async (user: User): Promise<ChatResponseType> => {
  try {
    const authHeader = authHeaderInterceptor(user)
    const url = `${API_URL}/api/chats`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
    })

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await getChatsResponseAdapter(response)
  } catch (error) {
    console.error('Error fetching user chats:', error)
    throw error
  }
}

export const createChat = async (
  createChatRequest: CreateChatRequestType,
  user: User
): Promise<CreateChatResponseType> => {
  try {
    const authHeader = authHeaderInterceptor(user)
    const url = `${API_URL}/api/chats`
    console.log('createChatRequest', createChatRequest)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: JSON.stringify(createChatRequest),
    })

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await createChatResponseAdapter(response)
  } catch (error) {
    console.error('Error creating chat:', error)
    throw error
  }
}
