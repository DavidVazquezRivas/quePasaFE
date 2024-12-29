import React from 'react'
import { Box, CircularProgress } from '@mui/material'

export const Spinner: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CircularProgress sx={{ color: 'var(--color-medium-purple)' }} />
    </Box>
  )
}
