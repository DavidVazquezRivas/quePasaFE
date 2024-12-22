import { API_URL } from '@/config/config'
import { authHeaderInterceptor } from '@/interceptors/authHeaderInterceptor'
import { ChatResponseType } from '@/types/responseTypes'

export const getUserChats = async (): Promise<ChatResponseType> => {
  /* Endpoint not implemented yet
  try {
    const authHeader = authHeaderInterceptor()
    const url = `${API_URL}/api/chat`
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

    return await response.json()
  } catch (error) {
    console.error('Error fetching user chats:', error)
    throw error
  }
  */

  const mockData = {
    data: [
      {
        id: 1,
        name: 'Grupo de Amigos con un nombre extremadamente largo',
        unreadMessages: 1234,
      },
      {
        id: 2,
        name: 'Familia',
        unreadMessages: 0,
      },
      {
        id: 3,
        name: 'Trabajo',
        unreadMessages: 5,
      },
      {
        id: 4,
        name: 'Estudio',
        unreadMessages: 2,
      },
      {
        id: 5,
        name: 'Vacaciones',
        unreadMessages: 0,
      },
      {
        id: 6,
        name: 'Colegas de la universidad',
        unreadMessages: 1,
      },
      {
        id: 7,
        name: 'Proyecto de Desarrollo',
        unreadMessages: 4,
      },
      {
        id: 8,
        name: 'Noticias',
        unreadMessages: 0,
      },
      {
        id: 9,
        name: 'Redes Sociales',
        unreadMessages: 7,
      },
      {
        id: 10,
        name: 'Familia Política',
        unreadMessages: 0,
      },
      {
        id: 11,
        name: 'Club de Lectura',
        unreadMessages: 6,
      },
      {
        id: 12,
        name: 'Comida',
        unreadMessages: 0,
      },
      {
        id: 13,
        name: 'Películas',
        unreadMessages: 3,
      },
      {
        id: 14,
        name: 'Amigos de la escuela',
        unreadMessages: 2,
      },
      {
        id: 15,
        name: 'Eventos',
        unreadMessages: 8,
      },
      {
        id: 16,
        name: 'Viajes',
        unreadMessages: 0,
      },
      {
        id: 17,
        name: 'Trabajo Remoto',
        unreadMessages: 4,
      },
      {
        id: 18,
        name: 'Conciertos',
        unreadMessages: 1,
      },
      {
        id: 19,
        name: 'Fotografía',
        unreadMessages: 0,
      },
      {
        id: 20,
        name: 'Música',
        unreadMessages: 9,
      },
    ],
    errorMessage: null,
  }

  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 500)
  })
}
