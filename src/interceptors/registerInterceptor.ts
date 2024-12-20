import { FormDataType, RegisterDataType } from '@/types/dataTypes'

export const registerInterceptor = (data: FormDataType): RegisterDataType => {
  if (!data.username || !data.email || !data.password) {
    throw new Error('Missing required fields')
  }

  return {
    username: data.username,
    email: data.email,
    password: data.password,
  }
}
