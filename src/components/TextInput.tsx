import TextField from '@mui/material/TextField'
import { KeyboardEventHandler } from 'react'

interface TextInputProps {
  label: string
  name: string
  type?: string
  required?: boolean
  error?: boolean
  helperText?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onEnter?: () => void
  value?: string
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  type,
  required = false,
  error = false,
  helperText,
  onChange,
  onEnter,
  value,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Enter' && onEnter) {
      event.preventDefault()
      onEnter()
    }
  }

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
      onChange={onChange}
      onKeyDown={handleKeyDown}
      value={value}
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
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-medium-purple)',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-dark-purple)',
    },
  },
}
