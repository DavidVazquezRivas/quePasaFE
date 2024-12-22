import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { ChatCard } from './ChatCard'
import { getUserChats } from '@/services/chatService'
import { UserChat } from '@/types/models'
import { Spinner } from '@/components/Spinner'
import { ChatListHeader } from './ChatListHeader'
import { POLLING_INTERVAL } from '@/config/config'
import { generateLogo } from '@/utilities/generateLogo'

interface ChatListProps {
  selected?: number
}

export const ChatList: React.FC<ChatListProps> = ({ selected = 0 }) => {
  const [chats, setChats] = React.useState<UserChat[] | null>(null)

  // Obtener los chats del usuario cada x tiempo
  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await getUserChats()
        if (response.errorMessage) {
          console.error('Error controlado:', response.errorMessage)
        } else {
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
      return (
        <ChatCard
          key={chat.id}
          chatName={chat.name}
          chatLogo={chat.logo || placeholderLogo}
          unreadMessages={chat.unreadMessages}
          selected={chat.id === selected}
        />
      )
    })
  ) : (
    <Spinner />
  )

  return (
    <Box sx={chatListContainerStyles}>
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
  maxHeight: '100%',
  backgroundColor: 'var(--color-light-gray)',
  boxShadow: 2,
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
