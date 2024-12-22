import { useState } from 'react'
import { Login } from './components/Login'
import { ErrorToast } from '@/components/ErrorToast'

export const LoginPage: React.FC = () => {
  const [errorTriggered, setErrorTriggered] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleError = (message: string) => {
    setErrorMessage(message)
    setErrorTriggered(true)
  }

  return (
    <>
      <Login onError={handleError} />
      <ErrorToast
        trigger={errorTriggered}
        onClose={() => setErrorTriggered(false)}
        message={errorMessage}
      />
    </>
  )
}
