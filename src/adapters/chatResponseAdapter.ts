import { UserChat } from '@/types/models'
import { ChatResponseType, CreateChatResponseType } from '@/types/responseTypes'
import { generateLogo } from '@/utilities/generateLogo'

export const getChatsResponseAdapter = async (
  response: Response
): Promise<ChatResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: responseData.data.map((chat: UserChat) => ({
        id: chat.id,
        logo: generateLogo(chat.name),
        name: chat.name,
        unreadMessages: chat.unreadMessages,
      })),
      errorMessage: null,
    }
  }

  // Si no es una respuesta correcta, manejar el error
  return {
    data: null,
    errorMessage: responseData.errorMessage || 'Unknown error',
  }
}

export const createChatResponseAdapter = async (
  response: Response
): Promise<CreateChatResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: {
        id: responseData.data.id,
        name: responseData.data.name,
      },
      errorMessage: null,
    }
  }

  // Si no es una respuesta correcta, manejar el error
  return {
    data: null,
    errorMessage: responseData.errorMessage || 'Unknown error',
  }
}
