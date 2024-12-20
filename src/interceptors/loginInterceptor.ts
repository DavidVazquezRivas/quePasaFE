import { FormDataType, LoginDataType } from '@/types/dataTypes'

export const loginInterceptor = (data: FormDataType): LoginDataType => {
  if (!data.username || !data.password) {
    throw new Error('Missing required fields')
  }

  return {
    username: data.username,
    password: data.password,
  }
}
