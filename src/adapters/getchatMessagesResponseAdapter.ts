import { ChatMessagesResponseType } from '@/types/responseTypes'

export const getChatMessagesResponseAdapter = async (
  response: Response
): Promise<ChatMessagesResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: responseData.data.map((message: any) => ({
        id: message.id,
        chatId: message.chatId ?? undefined,
        senderId: message.author.id,
        senderName: message.author.username,
        content: message.content,
        createdAt: message.timestamp,
        type: message.type,
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
