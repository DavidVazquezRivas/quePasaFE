import { useUser } from '@/hooks/useUser'
import { getChatMessages } from '@/services/messageService'
import { Message as MessageType, User } from '@/types/models'
import { useEffect, useState, useRef } from 'react'
import { Message } from './Message'
import { Box } from '@mui/material'
import { useMessageContext } from '@/pages/Chat/contexts/MessageContext'

interface MessageListProps {
  chatId: number
}

export const MessageList: React.FC<MessageListProps> = ({ chatId }) => {
  const [messages, setMessages] = useState<MessageType[]>([])
  const { user } = useUser()
  const prevMessagesRef = useRef<MessageType[]>([])
  const { messageSent } = useMessageContext()

  const fetchMessages = async () => {
    try {
      const response = await getChatMessages(chatId, user as User)

      if (response.errorMessage) {
        // Error controlado
        console.error('Error fetching messages:', response.errorMessage)
        return
      }

      const currentMessages = response.data ?? []
      if (
        JSON.stringify(currentMessages) !==
        JSON.stringify(prevMessagesRef.current)
      ) {
        setMessages(currentMessages)
        prevMessagesRef.current = currentMessages
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [chatId, user?.accessToken, messageSent])

  const messagesContent = messages.map((message) => (
    <Message
      key={message.id}
      message={message}
      username={user?.username as string}
    />
  ))

  return (
    <Box component="ul" sx={containerStyles} className="scrollbar-custom">
      {messagesContent}
    </Box>
  )
}

const containerStyles = {
  display: 'flex',
  flexDirection: 'column-reverse',
  gap: 1,
  padding: 2,
  height: '100%',
  overflowY: 'auto',
  width: '100%',
}
