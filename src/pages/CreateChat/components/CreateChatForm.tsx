import { useState } from 'react'
import { Box } from '@mui/material'
import { CreateChatFormHeader } from './CreateChatFormHeader'
import { SubmitButton } from '@/components/SubmitButton'
import { CreateGroupContent } from './CreateGroupContent'
import { ChatTypesEnum, ExternalUser, User } from '@/types/models'
import { getExternalUser } from '@/services/userService'
import { useUser } from '@/hooks/useUser'
import { createChat } from '@/services/chatService'
import { CreateChatRequestType } from '@/types/requestTypes'
import { useNavigate } from 'react-router-dom'
import { CreateDirectContent } from './CreateDirectContent'

interface CreateChatFormProps {
  onError: (message: string) => void
}

export const CreateChatForm: React.FC<CreateChatFormProps> = ({ onError }) => {
  const [chatType, setChatType] = useState<ChatTypesEnum>(ChatTypesEnum.DIRECT)
  const [participants, setParticipants] = useState<ExternalUser[]>([])
  const { user } = useUser()
  const navigate = useNavigate()

  const addParticipant = async (participantName: string) => {
    try {
      const response = await getExternalUser(participantName, user as User)
      if (response.errorMessage) {
        // Error controlado (no existe el usuario)
        onError("User doesn't exist")
      } else {
        const participant = response.data as ExternalUser
        setParticipants((prev) => [...prev, participant])
      }
    } catch (error) {
      // Error no controlado
      console.error('Error fetching user:', error)
    }
  }

  const removeParticipant = (participant: ExternalUser) => {
    setParticipants((prev) => prev.filter((p) => p !== participant))
  }

  const handleTypeChange = (newValue: ChatTypesEnum) => {
    // Revisar que no sea un cambio innecesario
    if (newValue === chatType) return

    // Limpiar los participantes si cambia el tipo de chat
    setParticipants([])

    // Cambiar el tipo de chat
    setChatType(newValue)
  }

  async function handleCreateChat(
    chatName: string | undefined,
    chatType: ChatTypesEnum,
    participantIds: number[]
  ) {
    try {
      const createChatRequest = {
        name: chatName,
        type: chatType,
        userIds: participantIds,
      } as CreateChatRequestType
      const response = await createChat(createChatRequest, user as User)
      if (response.errorMessage) {
        // Error controlado
        onError("Couldn't create chat")
      } else {
        // Chat creado correctamente
        const url = response.data?.id
          ? `/chats/${response.data.id}`
          : '/dashboard'
        navigate(url)
      }
    } catch (error) {
      // Error no controlado
      console.error('Error creating chat:', error)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Crear el chat
    const groupName = formData.get('groupName') as string
    const chatName = chatType === ChatTypesEnum.GROUP ? groupName : undefined
    const participantIds = participants.map((participant) => participant.id)
    handleCreateChat(chatName, chatType, participantIds)
  }

  const content =
    chatType === 'GROUP' ? (
      <CreateGroupContent
        participants={participants}
        addParticipant={addParticipant}
        removeParticipant={removeParticipant}
      />
    ) : (
      <CreateDirectContent
        participants={participants}
        addParticipant={addParticipant}
        removeParticipant={removeParticipant}
      />
    )

  return (
    <Box sx={containerStyle} component="main">
      <CreateChatFormHeader
        chatType={chatType}
        onChatTypeChange={handleTypeChange}
      />

      <Box onSubmit={handleSubmit} component="form" sx={containerStyle}>
        {content}
        <SubmitButton text="Create Chat" />
      </Box>
    </Box>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  flexGrow: 1,
  padding: 2,
  backgroundColor: 'var(--color-light-gray)',
}
