import React, { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import { Register } from './components/Register'

export const RegisterPage: React.FC = () => {
  const [openToast, setOpenToast] = useState(false)

  return (
    <>
      <Register onError={() => setOpenToast(true)} />
      <Snackbar
        open={openToast}
        autoHideDuration={3000}
        onClose={() => setOpenToast(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setOpenToast(false)}>
          The server could not process your request. Please try again later.
        </Alert>
      </Snackbar>
    </>
  )
}
