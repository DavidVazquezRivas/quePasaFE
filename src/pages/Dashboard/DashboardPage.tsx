import { ChatList } from '@/components/ChatList/ChatList'
import { Header } from '@/components/Header'
import { useSession } from '@/hooks/useSession'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { WelcomeMessage } from './components/WelcomeMessage'
import { Spinner } from '@/components/Spinner'

export const DashboardPage: React.FC = () => {
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

  return (
    <>
      <Header height={headerSize} />
      <Box
        sx={{
          display: 'flex',
          height: `calc(100vh - ${headerSize}px)`,
          marginTop: `${headerSize}px`,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ChatList />
            <WelcomeMessage
              title="Select a chat"
              description="Choose a conversation from the list on the left to start chatting."
            />
          </>
        )}
      </Box>
    </>
  )
}
