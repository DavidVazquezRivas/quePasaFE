import { Form } from '@/components/Form'
import { LinkedAnotation } from '@/components/LinkedAnotation'
import { SectionTitle } from '@/components/SectionTitle'
import { SubmitButton } from '@/components/SubmitButton'
import { TextInput } from '@/components/TextInput'
import { useSession } from '@/hooks/useSession'
import { loginUser } from '@/services/authService'
import { FormDataType } from '@/types/dataTypes'
import { formatFormData } from '@/utilities/formatFormData'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
  onError: (message: string) => void
}

export const Login: React.FC<LoginProps> = ({ onError }) => {
  const { createSession } = useSession()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Crear un objeto FormData para obtener los valores de los inputs
    const formData = new FormData(e.target as HTMLFormElement)

    // Obtener los valores directamente desde FormData
    const fields: string[] = ['username', 'password']
    const data: FormDataType = formatFormData(fields, formData)

    loginUser(data)
      .then((response) => {
        if (response.errorMessage) {
          // Se ha producido un error en la petición, por parte del cliente
          onError('Incorrect username or password. Please try again.')
        } else {
          // La petición ha sido exitosa
          // Crear la sesión del usuario
          createSession({
            username: data.username || '',
            accessToken: response.data?.accessToken || '',
            refreshToken: response.data?.refreshToken || '',
          })

          // Redirigir al usuario a la página de inicio
          navigate('/')
        }
      })
      .catch(() => {
        // Es un error del servidor no esperado
        onError(
          'The server could not process your request. Please try again later.'
        )
      })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <SectionTitle title="Login" />
      <TextInput required label="Username" name="username" />
      <TextInput required label="Password" name="password" type="password" />
      <SubmitButton text="Login" />
      <LinkedAnotation
        text="Don't have an account?"
        to="/register"
        linkedText="Register"
      />
    </Form>
  )
}
