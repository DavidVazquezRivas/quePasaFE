import React from 'react'
import Typography from '@mui/material/Typography'

interface SectionTitleProps {
  title: string
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      gutterBottom
      sx={{
        color: 'var(--color-dark-purple)',
        fontWeight: 'bold',
      }}
    >
      {title}
    </Typography>
  )
}
