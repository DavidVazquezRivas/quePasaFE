import { API_URL } from '@/config/config'
import { FormDataValues } from '@/types/formTypes'
import { authResponseType } from '@/types/responseTypes'

export const registerUser = async (
  data: FormDataValues
): Promise<authResponseType> => {
  try {
    const url = `${API_URL}/auth/register`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Registration failed: ', error)

    throw error
  }
}
