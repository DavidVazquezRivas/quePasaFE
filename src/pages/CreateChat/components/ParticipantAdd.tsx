import { TextInput } from '@/components/TextInput'
import { Button } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { useState } from 'react'
import { TextWithButton } from '@/components/containers/TextWithButton'

interface ParticipantAddProps {
  addParticipant: (participantName: string) => void
}

export const ParticipantAdd: React.FC<ParticipantAddProps> = ({
  addParticipant,
}) => {
  const [participantInput, setParticipantInput] = useState<string>('')
  const handleAddParticipant = (participantName: string) => {
    if (participantName) {
      addParticipant(participantName)
      setParticipantInput('')
    }
  }

  return (
    <TextWithButton component="section">
      <TextInput
        label="Add Participant"
        name="participant"
        value={participantInput}
        onChange={(e) => setParticipantInput(e.target.value)}
        onEnter={() => handleAddParticipant(participantInput)}
      />
      <Button
        onClick={() => handleAddParticipant(participantInput)}
        sx={buttonStyle}
      >
        <PersonAddIcon />
      </Button>
    </TextWithButton>
  )
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
}
