import React, { FC, ReactNode } from 'react'
import { Box } from '@mui/material'

interface FormProps {
  children: ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <Box component="form" onSubmit={onSubmit} sx={formStyles}>
      {children}
    </Box>
  )
}

// Estilos reutilizables para el contenedor del formulario
const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: 500,
  margin: '0 auto',
  padding: 4,
  borderRadius: 2,
  boxShadow: 3,
  backgroundColor: 'var(--color-light-gray)',
}
