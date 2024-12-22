import { User } from '@/types/models'

export const authHeaderInterceptor = (user: User) => {
  if (user.accessToken === undefined) {
    // We can manage to refresh etc. here
    throw new Error('User is not logged in')
  }

  return `Bearer ${user.accessToken}`
}
