import { ChatResponseType } from '@/types/responseTypes'

export const chatResponseAdapter = async (
  response: Response
): Promise<ChatResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: {
        id: responseData.data.id,
        name: responseData.data.name,
        unreadMessages: responseData.data.unreadMessages,
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
