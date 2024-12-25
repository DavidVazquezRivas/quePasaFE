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
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'column',
        textAlign: 'center',
        flexGrow: 1,
        padding: 2,
      }}
      className="smooth-pattern"
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: 2,
          color: 'var(--color-dark-gray)',
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ color: 'var(--color-gray)' }}>
        {description}
      </Typography>
    </Box>
  )
}
