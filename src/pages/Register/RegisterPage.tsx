import React, { useState } from 'react'
import { Register } from './components/Register'
import { ServerErrorToast } from '@/components/ServerErrorToast'

export const RegisterPage: React.FC = () => {
  const [errorTriggered, setErrorTriggered] = useState(false)

  return (
    <>
      <Register onError={() => setErrorTriggered(true)} />
      <ServerErrorToast trigger={errorTriggered} />
    </>
  )
}
