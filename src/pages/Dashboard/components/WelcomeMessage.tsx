import { Box, Typography } from '@mui/material'

interface WelcomeMessageProps {
  title: string
  description: string
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  title,
  description,
}) => {
  return (
    <Box sx={containerStyle} className="smooth-pattern" component="main">
      <Typography variant="h4" sx={typographyStyle}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--color-gray)' }}>
        {description}
      </Typography>
    </Box>
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
