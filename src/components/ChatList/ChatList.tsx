import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { ChatCard } from './ChatCard'
import { getUserChats } from '@/services/chatService'
import { User, UserChat } from '@/types/models'
import { Spinner } from '@/components/Spinner'
import { ChatListHeader } from './ChatListHeader'
import { POLLING_INTERVAL } from '@/config/config'
import { generateLogo } from '@/utilities/generateLogo'
import { Link } from 'react-router-dom'
import { useUser } from '@/hooks/useUser'
import { areObjectsEqualInOrder } from '@/utilities/objectEquals'

interface ChatListProps {
  selected?: number
}

export const ChatList: React.FC<ChatListProps> = ({ selected = 0 }) => {
  const [chats, setChats] = React.useState<UserChat[] | null>(null)
  const { user } = useUser()

  // Obtener los chats del usuario cada x tiempo
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getUserChats(user as User)
        if (response.errorMessage) {
          console.error('Error controlado:', response.errorMessage)
        } else {
          if (areObjectsEqualInOrder(chats, response.data)) {
            console.log('No hay cambios en los chats')
            return
          }
          console.log('Chats actualizados')
          setChats(response.data)
        }
      } catch (error) {
        console.error('Error no controlado:', error)
      }
    }

    // Llamar la función al montar el componente
    fetchChats()

    // Configurar el intervalo para ejecutarla cada 5 segundos
    const intervalId = setInterval(fetchChats, POLLING_INTERVAL)

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalId)
  }, [])

  const placeholderLogo = generateLogo('', '#9575cd')
  const chatCards = chats ? (
    chats.map((chat) => {
      const chatUrl = `/chat/${chat.id}`
      return (
        <Link to={chatUrl}>
          <ChatCard
            key={chat.id}
            chatName={chat.name}
            chatLogo={chat.logo || placeholderLogo}
            unreadMessages={chat.unreadMessages}
            selected={chat.id === selected}
          />
        </Link>
      )
    })
  ) : (
    <Spinner />
  )

  return (
    <Box sx={chatListContainerStyles} component="aside">
      <ChatListHeader />

      <Box component={'ul'} sx={chatListStyles} className="scrollbar-custom">
        {chatCards}
      </Box>
    </Box>
  )
}

const chatListContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  minHeight: '100%',
  maxHeight: '100%',
  backgroundColor: 'var(--color-light-gray)',
  boxShadow: 2,
  borderRight: `1px solid var(--color-dark-gray)`,
}

const chatListStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxHeight: '100%',
  padding: 2,
  gap: 2,
  backgroundColor: 'var(--color-light-gray)',
  boxShadow: 2,
  overflowY: 'auto',
}
