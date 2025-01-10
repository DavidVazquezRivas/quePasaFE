import { getChatMessagesResponseAdapter } from '@/adapters/getchatMessagesResponseAdapter'
import { sendMessageResponseAdapter } from '@/adapters/sendMessageResponseAdapter'
import { API_URL } from '@/config/config'
import { authHeaderInterceptor } from '@/interceptors/authHeaderInterceptor'
import { MessageTypesEnum, User } from '@/types/models'
import {
  ChatMessagesResponseType,
  SendMessageResponseType,
} from '@/types/responseTypes'

export const getChatMessages = async (
  chatId: number,
  user: User
): Promise<ChatMessagesResponseType> => {
  try {
    const authHeader = authHeaderInterceptor(user)
    const url = `${API_URL}/api/messages/${chatId}/messages`
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

    return await getChatMessagesResponseAdapter(response)
  } catch (error) {
    console.error('Error fetching chat messages:', error)
    throw error
  }
}

export const sendMessage = async (
  content: string,
  type: MessageTypesEnum,
  chatId: number,
  user: User
): Promise<SendMessageResponseType> => {
  try {
    const authHeader = authHeaderInterceptor(user)
    const url = `${API_URL}/api/messages/${chatId}/messages`
    const body = JSON.stringify({ content, type })
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
      },
      body: body,
    })

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await sendMessageResponseAdapter(response)
  } catch (error) {
    console.error('Error sending message:', error)
    throw error
  }
}
