import { useUser } from '@/hooks/useUser'
import { User } from '@/types/models'
import { useNavigate } from 'react-router-dom'

interface useRegisterProps {
  username: string
  email: string
  accessToken: string
  refreshToken: string
}

export const useRegister = ({
  username,
  email,
  accessToken,
  refreshToken,
}: useRegisterProps) => {
  const { setUser } = useUser()
  const navigate = useNavigate()

  // Guardar el usuario en el contexto
  const user: User = {
    username,
    email,
    accessToken,
  }
  setUser(user)

  // Guardar el token de refresco en localStrorage
  localStorage.setItem('refreshToken', refreshToken)

  // Redirigir al usuario a la página de inicio
  navigate('/')
}
