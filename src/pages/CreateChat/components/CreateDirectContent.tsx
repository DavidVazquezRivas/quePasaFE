import { ExternalUser } from '@/types/models'
import { ParticipantAdd } from './ParticipantAdd'
import { ParticipantList } from './ParticipantList'

interface CreateDirectContentProps {
  participants: ExternalUser[]
  addParticipant: (participantName: string) => void
  removeParticipant: (participant: ExternalUser) => void
}

export const CreateDirectContent: React.FC<CreateDirectContentProps> = ({
  participants,
  addParticipant,
  removeParticipant,
}) => {
  const handleAddParticipant = (participantName: string) => {
    // Eliminar el participante anterior
    if (participants.length > 0) {
      removeParticipant(participants[0])
    }
    addParticipant(participantName)
  }

  return (
    <>
      <ParticipantAdd addParticipant={handleAddParticipant} />
      <ParticipantList
        participants={participants}
        handleRemoveParticipant={removeParticipant}
      />
    </>
  )
}
