import { TextInput } from '@/components/TextInput'
import { Box, Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { useUser } from '@/hooks/useUser'
import { MessageTypesEnum, User } from '@/types/models'
import { sendMessage } from '@/services/messageService'
import { useMessageContext } from '@/pages/Chat/contexts/MessageContext'

interface MessageFormProps {
  chatId: number
}

export const MessageForm: React.FC<MessageFormProps> = ({ chatId }) => {
  const { user } = useUser()
  const { setMessageSent } = useMessageContext()

  async function handleSendMessage(message: string) {
    try {
      const response = await sendMessage(
        message,
        MessageTypesEnum.TEXT,
        chatId,
        user as User
      )
      if (response.errorMessage) {
        // Error controlado
        console.error('Error sending message:', response.errorMessage)
      } else {
        // Mensaje enviado correctamente
        setMessageSent((prev) => !prev) // trigger re-fetch messages
      }
    } catch (error) {
      // Error no controlado
      console.error('Error sending message:', error)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Enviar mensaje
    const formData = new FormData(event.currentTarget)
    const message = formData.get('message') as string
    handleSendMessage(message)

    // Limpiar el campo de texto
    event.currentTarget.reset()
  }

  return (
    <Box sx={containerStyle} component="form" onSubmit={handleSubmit}>
      <TextInput label="Write a message" name="message" />
      <Button type="submit" sx={buttonStyle}>
        <SendIcon />
      </Button>
    </Box>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 2,
  gap: 1,
  width: '100%',
  backgroundColor: 'var(--color-light-gray)',
}

const buttonStyle = {
  backgroundColor: 'var(--color-dark-purple)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'var(--color-darker-purple)',
  },
  padding: 1,
  marginTop: 1,
  minWidth: 'auto',
  borderRadius: '50%',
}
