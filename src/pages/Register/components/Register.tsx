import { LinkedAnotation } from '@/components/LinkedAnotation'
import { SectionTitle } from '@/components/SectionTitle'
import { SubmitButton } from '@/components/SubmitButton'
import { TextInput } from '@/components/TextInput'
import { registerUser } from '@/services/registerUser'
import { FormDataType } from '@/types/dataTypes'
import { formatFormData } from '@/utilities/formatFormData'
import React, { useState } from 'react'
import { Form } from '@/components/Form'
import { useSession } from '@/hooks/useSession'
import { useNavigate } from 'react-router-dom'

interface RegisterProps {
  onError: () => void
}

export const Register: React.FC<RegisterProps> = ({ onError }) => {
  const [emailError, setEmailError] = useState(false)
  const [usernameError, setUsernameError] = useState(false)

  const { createSession } = useSession()
  const navigate = useNavigate()

  const usernameHelper =
    'This username is already taken. Please try another one.'
  const emailHelper = 'This email is already taken. Please try another one.'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Crear un objeto FormData para obtener los valores de los inputs
    const formData = new FormData(e.target as HTMLFormElement)

    // Obtener los valores directamente desde FormData
    const fields: string[] = ['username', 'email', 'password']
    const data: FormDataType = formatFormData(fields, formData)

    registerUser(data)
      .then((response) => {
        if (response.errorMessage) {
          // Se ha producido un error en la petición, por parte del cliente
          const errorMessageLower = response.errorMessage.toLowerCase()

          if (errorMessageLower.includes('username')) {
            setEmailError(false)
            setUsernameError(true)
          } else if (errorMessageLower.includes('email')) {
            setUsernameError(false)
            setEmailError(true)
          }
        } else {
          // La petición ha sido exitosa
          setUsernameError(false)
          setEmailError(false)

          // Crear la sesión del usuario
          createSession({
            username: data.username || '',
            email: data.email || '',
            accessToken: response.data?.accessToken || '',
            refreshToken: response.data?.refreshToken || '',
          })

          // Redirigir al usuario a la página de inicio
          navigate('/')
        }
      })
      .catch(() => {
        // Es un error del servidor no esperado
        onError()
      })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <SectionTitle title="Register" />
      <TextInput
        required
        error={usernameError}
        helperText={usernameHelper}
        label="Username"
        name="username"
      />
      <TextInput
        required
        error={emailError}
        helperText={emailHelper}
        label="Email"
        name="email"
        type="email"
      />
      <TextInput required label="Password" name="password" type="password" />
      <SubmitButton text="Register" />

      <LinkedAnotation
        text="Already have an account?"
        linkedText="Log in"
        to="/login"
      />
    </Form>
  )
}
