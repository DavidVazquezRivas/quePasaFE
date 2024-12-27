import { Header } from '@/components/Header'
import { Box } from '@mui/material'
import { Spinner } from '@/components/Spinner'
import { ChatList } from '@/components/ChatList/ChatList'
import { useSession } from '@/hooks/useSession'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface MainFrameProps {
  children: React.ReactNode
}

export const MainFrame: React.FC<MainFrameProps> = ({ children }) => {
  const { checkSession } = useSession()
  const navigate = useNavigate()

  // Estado para verificar la sesión
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const verifySession = async () => {
      const sessionActive = await checkSession()

      if (!sessionActive) {
        // Si no hay sesión activa, redirigir al usuario a la página de login
        navigate('/login')
      } else {
        // Si hay sesión activa, actualizamos el estado de loading
        setLoading(false)
      }
    }

    verifySession()
  }, [checkSession, navigate])

  const headerSize = 64
  const containerStyle = {
    display: 'flex',
    height: `calc(100vh - ${headerSize}px)`,
    marginTop: `${headerSize}px`,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <>
      <Header height={headerSize} />
      <Box sx={containerStyle}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ChatList />
            {children}
          </>
        )}
      </Box>
    </>
  )
}
