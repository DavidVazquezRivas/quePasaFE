import { useUser } from '@/hooks/useUser'
import { refreshToken } from '@/services/authService'
import { Session, User } from '@/types/models'

interface createSessionProps {
  username?: string
  email?: string
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

  const checkSession = async (): Promise<boolean> => {
    const session = getSession()

    if (session.accessToken) {
      // Hay sesión de usuario activa
      return true
    }

    if (!session.refreshToken) {
      // No hay token de refresco ni de acceso, eliminar la sesión
      deleteSession()
      return false
    }

    try {
      // Intentar refrescar el token
      const response = await refreshToken(session.refreshToken)

      if (response.errorMessage) {
        // Error controlado al refrescar el token
        console.error('Error al refrescar el token:', response.errorMessage)
        deleteSession()
        return false
      }

      // Crear nueva sesión con el token refrescado
      createSession({
        username: session.username,
        email: session.email,
        accessToken: response.data?.accessToken || '',
        refreshToken: response.data?.refreshToken || '',
      })

      return true
    } catch (error) {
      // Error no controlado al refrescar el token
      console.error('Error inesperado al refrescar el token:', error)
      deleteSession()
      return false
    }
  }

  return { createSession, checkSession, deleteSession, getSession }
}
