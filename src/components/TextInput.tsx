import TextField from '@mui/material/TextField'

interface TextInputProps {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: boolean
  helperText?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type,
  required = false,
  error = false,
  helperText,
}) => {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      fullWidth
      margin="normal"
      required={required}
      error={error}
      helperText={error ? helperText : ''}
      sx={inputStyles}
    />
  )
}

const inputStyles = {
  '& .MuiInputLabel-root': {
    color: 'var(--color-gray)',
  },
  '& .MuiInputBase-root': {
    color: 'var(--color-black)',
    borderColor: 'var(--color-gray)',
  },
  '& .MuiOutlinedInput-root': {
    // Borde al pasar el ratón
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-medium-purple)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      // Enfocado
      borderColor: 'var(--color-dark-purple)',
    },
  },
}
