import { useState } from 'react'
import { MainFrame } from '@/components/containers/MainFrame'
import { CreateChatForm } from '@/pages/CreateChat/components/CreateChatForm'
import { ErrorToast } from '@/components/ErrorToast'

export const CreateChatPage: React.FC = () => {
  const [errorTrigger, setErrorTrigger] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Función para manejar el error
  const handleError = (message: string) => {
    setErrorMessage(message)
    setErrorTrigger(true)
  }

  // Callback para cerrar el Toast
  const handleCloseToast = () => {
    setErrorTrigger(false)
  }

  return (
    <MainFrame>
      <ErrorToast
        trigger={errorTrigger}
        onClose={handleCloseToast}
        message={errorMessage}
      />

      <CreateChatForm onError={handleError} />
    </MainFrame>
  )
}
