import { UserResponseType } from '@/types/responseTypes'

export const getExternalUserAdapter = async (
  response: Response
): Promise<UserResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: {
        id: responseData.data.id,
        username: responseData.data.username,
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
