import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface LinkedAnotationProps {
  text: string
  linkedText: string
  to: string
}

export const LinkedAnotation: React.FC<LinkedAnotationProps> = ({
  text,
  linkedText,
  to,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 2,
      }}
    >
      <Typography variant="body2" sx={{ color: 'var(--color-gray)' }}>
        {text + ' '}
        <Link
          component={RouterLink}
          to={to}
          sx={{
            textDecoration: 'none',
            color: 'var(--color-medium-purple)',
            '&:hover': { color: 'var(--color-dark-purple)' },
          }}
        >
          {linkedText}
        </Link>
      </Typography>
    </Box>
  )
}
