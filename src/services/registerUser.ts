import { API_URL } from '@/config/config'
import { FormDataType } from '@/types/dataTypes'
import { authResponseType } from '@/types/responseTypes'

export const registerUser = async (
  data: FormDataType
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

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Registration failed: ', error)

    throw error
  }
}
