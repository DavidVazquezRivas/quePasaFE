import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'

interface ErrorToastProps {
  trigger: boolean // Prop para activar el Toast
  onClose: () => void // Callback al cerrar el toast
  message: string
}

export const ErrorToast: React.FC<ErrorToastProps> = ({
  trigger,
  onClose,
  message,
}) => {
  const [open, setOpen] = useState(false)

  // Renderiza el toast si trigger cambia a true
  React.useEffect(() => {
    if (trigger) {
      setOpen(true)
    }
  }, [trigger])

  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="error" onClose={() => setOpen(false)}>
        {message}
      </Alert>
    </Snackbar>
  )
}
