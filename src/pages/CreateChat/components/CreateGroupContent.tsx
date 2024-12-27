import { TextInput } from '@/components/TextInput'
import { ExternalUser } from '@/types/models'
import { ParticipantAdd } from './ParticipantAdd'
import { ParticipantList } from './ParticipantList'

interface CreateGroupContentProps {
  participants: ExternalUser[]
  addParticipant: (participantName: string) => void
  removeParticipant: (participant: ExternalUser) => void
}

export const CreateGroupContent: React.FC<CreateGroupContentProps> = ({
  participants,
  addParticipant,
  removeParticipant,
}) => {
  const handleAddParticipant = (participantName: string) => {
    // Verificar si aún no se ha añadido el participante
    if (
      participantName &&
      !participants.some(
        (participant) => participant.username === participantName
      )
    ) {
      addParticipant(participantName)
    }
  }

  return (
    <>
      <TextInput label="Group Name" name="groupName" required />
      <ParticipantAdd addParticipant={handleAddParticipant} />
      <ParticipantList
        participants={participants}
        handleRemoveParticipant={removeParticipant}
      />
    </>
  )
}
