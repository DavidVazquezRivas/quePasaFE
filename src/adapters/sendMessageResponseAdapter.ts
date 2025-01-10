import { SendMessageResponseType } from '@/types/responseTypes'

export const sendMessageResponseAdapter = async (
  response: Response
): Promise<SendMessageResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: {
        id: responseData.data.id,
        chatId: responseData.data.chatId,
        senderId: responseData.data.author.id,
        senderName: responseData.data.author.username,
        content: responseData.data.content,
        createdAt: responseData.data.timestamp,
        type: responseData.data.type,
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
