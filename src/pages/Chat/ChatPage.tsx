import { MainFrame } from '@/components/containers/MainFrame'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

export const ChatPage = () => {
  const { chatId } = useParams<{ chatId: string }>()

  return (
    <MainFrame>
      <Box sx={containerStyle} className="smooth-pattern" component="main">
        {/* Temporal */}
        <Typography variant="h4" sx={typographyStyle}>
          Chat page
        </Typography>
        <Typography variant="body1" sx={{ color: 'var(--color-gray)' }}>
          Chat ID: {chatId}
        </Typography>
      </Box>
    </MainFrame>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  flexGrow: 1,
  padding: 2,
}

const typographyStyle = {
  fontWeight: 'bold',
  marginBottom: 2,
  color: 'var(--color-dark-gray)',
}
