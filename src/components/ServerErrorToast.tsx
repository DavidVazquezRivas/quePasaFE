import React, { useState } from 'react'
import { Snackbar, Alert } from '@mui/material'

interface ServerErrorToastProps {
  trigger: boolean // Prop para activar el Toast
}

export const ServerErrorToast: React.FC<ServerErrorToastProps> = ({
  trigger,
}) => {
  const [open, setOpen] = useState(false)

  // Renderiza el toast si trigger cambia a true
  React.useEffect(() => {
    if (trigger) {
      setOpen(true)
    }
  }, [trigger])

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity="error" onClose={() => setOpen(false)}>
        The server could not process your request. Please try again later.
      </Alert>
    </Snackbar>
  )
}
