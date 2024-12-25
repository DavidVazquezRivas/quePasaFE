import { getExternalUserAdapter } from '@/adapters/getExternalUserAdapter'
import { API_URL } from '@/config/config'
import { authHeaderInterceptor } from '@/interceptors/authHeaderInterceptor'
import { User } from '@/types/models'
import { UserResponseType } from '@/types/responseTypes'

export const getExternalUser = async (
  username: string,
  user: User
): Promise<UserResponseType> => {
  try {
    const authHeader = authHeaderInterceptor(user)
    const url = `${API_URL}/api/users/exist?username=${username}`
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

    return await getExternalUserAdapter(response)
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}
