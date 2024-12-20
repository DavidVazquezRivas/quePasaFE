import { useUser } from '@/hooks/useUser'
import { Session, User } from '@/types/models'

interface createSessionProps {
  username: string
  email: string
  accessToken: string
  refreshToken: string
}

export const useSession = () => {
  const { user, setUser } = useUser()

  const createSession = ({
    username,
    email,
    accessToken,
    refreshToken,
  }: createSessionProps) => {
    // Guardar usuario en el contexto
    const newUser: User = {
      username,
      email,
      accessToken,
    }
    setUser(newUser)

    // Guardar token de refresco en localStorage
    localStorage.setItem('refreshToken', refreshToken)
  }

  const deleteSession = () => {
    // Eliminar usuario del contexto
    setUser(null)

    // Eliminar token de refresco de localStorage
    localStorage.removeItem('refreshToken')
  }

  const getSession = (): Session => {
    // Se extrae así porque en caso de que no exista el token de refresco, devuelve 'undefined' como string
    const refreshToken: string =
      localStorage.getItem('refreshToken') || 'undefined'

    return {
      username: user?.username,
      email: user?.email,
      accessToken: user?.accessToken,
      refreshToken: refreshToken === 'undefined' ? undefined : refreshToken,
    }
  }

  return { createSession, deleteSession, getSession }
}
