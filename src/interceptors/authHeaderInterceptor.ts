import { useSession } from '@/hooks/useSession'

export const authHeaderInterceptor = () => {
  const { getSession } = useSession()

  const session = getSession()
  if (session.accessToken === undefined) {
    // We can manage to refresh etc. here
    throw new Error('User is not logged in')
  }

  return `Bearer ${session.accessToken}`
}
