import React, { useState } from 'react'
import { Register } from './components/Register'
import { ErrorToast } from '@/components/ErrorToast'

export const RegisterPage: React.FC = () => {
  const [errorTriggered, setErrorTriggered] = useState(false)

  return (
    <>
      <Register onError={() => setErrorTriggered(true)} />
      <ErrorToast
        trigger={errorTriggered}
        onClose={() => setErrorTriggered(false)}
        message="The server could not process your request. Please try again later."
      />
    </>
  )
}
