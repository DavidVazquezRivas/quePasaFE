import { ChatList } from '@/components/ChatList/ChatList'
import { Header } from '@/components/Header'
import { useSession } from '@/hooks/useSession'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { WelcomeMessage } from './components/WelcomeMessage'

export const DashboardPage: React.FC = () => {
  const { checkSession } = useSession()
  const navigate = useNavigate()
  useEffect(() => {
    checkSession().then((sessionActive) => {
      if (!sessionActive) {
        // Si no hay sesión activa, redirigir al usuario a la página de login
        navigate('/login')
      }
    })
  })
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
        }}
      >
        <ChatList />
        <WelcomeMessage
          title="Select a chat"
          description="Choose a conversation from the list on the left to start chatting."
        />
      </Box>
    </>
  )
}
