import { Box, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { ExternalUser } from '@/types/models'

interface ParticipantListProps {
  participants: ExternalUser[]
  handleRemoveParticipant: (participant: ExternalUser) => void
}

export const ParticipantList: React.FC<ParticipantListProps> = ({
  participants,
  handleRemoveParticipant,
}) => {
  const participantList = participants.map((participant) => (
    <Button
      key={participant.id}
      onClick={() => handleRemoveParticipant(participant)}
      sx={buttonStyle}
      aria-label={`Remove participant: ${participant.username}`}
    >
      <Typography sx={userCardStyle}>{participant.username}</Typography>
      <DeleteIcon />
    </Button>
  ))

  const participantContent =
    participants.length === 0 ? (
      <Typography sx={textStyleCenter}>No participants added yet</Typography>
    ) : (
      participantList
    )

  return (
    <Box component="section" sx={containerStyle}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          color: 'var(--color-dark-gray)',
        }}
      >
        Participants
      </Typography>
      <Box sx={listContainerStyle} component="ul">
        {participantContent}
      </Box>
    </Box>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  gap: 2,
}

const listContainerStyle = {
  ...containerStyle,
  backgroundColor: 'rgba(158, 158, 158, 0.5)', // Es un var(--color-gray) con opacidad
  borderRadius: '8px',
  padding: 2,
}

const textStyleCenter = {
  color: 'var(--color-dark-purple)',
  textAlign: 'center',
  width: '100%',
  padding: 1,
  fontWeight: 'bold',
}

const buttonStyle = {
  backgroundColor: 'var(--color-dark-purple)',
  color: 'var(--color-white)',
  '&:hover': {
    backgroundColor: 'var(--color-darker-purple)',
  },
  padding: 1,
  width: '100%',
}

const userCardStyle = {
  textAlign: 'left',
  width: '100%',
  padding: '16px 24px',
  fontWeight: 'bold',
}
