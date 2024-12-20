import { AuthResponseType } from '@/types/responseTypes'

// Adapter para transformar la respuesta de la API en AuthResponseType
export const authResponseAdapter = async (
  response: Response
): Promise<AuthResponseType> => {
  const responseData = await response.json()

  // Verificar si la respuesta tiene los datos esperados
  if (response.ok) {
    return {
      data: {
        accessToken: responseData.accessToken,
        refreshToken: responseData.refreshToken,
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
