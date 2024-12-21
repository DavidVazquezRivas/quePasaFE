import { authResponseAdapter } from '@/adapters/authResponseAdapter'
import { API_URL } from '@/config/config'
import { loginInterceptor } from '@/interceptors/loginInterceptor'
import { registerInterceptor } from '@/interceptors/registerInterceptor'
import {
  FormDataType,
  LoginDataType,
  RegisterDataType,
} from '@/types/dataTypes'
import { AuthResponseType } from '@/types/responseTypes'

export const loginUser = async (
  data: FormDataType
): Promise<AuthResponseType> => {
  try {
    const loginData: LoginDataType = loginInterceptor(data)
    const url = `${API_URL}/auth/login`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    })

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await authResponseAdapter(response)
  } catch (error) {
    console.error('Login failed: ', error)

    throw error
  }
}

export const registerUser = async (
  data: FormDataType
): Promise<AuthResponseType> => {
  try {
    const registerData: RegisterDataType = registerInterceptor(data)
    const url = `${API_URL}/auth/register`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })

    if (response.status === 500) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }

    return await authResponseAdapter(response)
  } catch (error) {
    console.error('Registration failed: ', error)

    throw error
  }
}
