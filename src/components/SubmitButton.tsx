import Button from '@mui/material/Button'

interface SubmitButtonProps {
  text?: string
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        marginTop: 2,
        backgroundColor: 'var(--color-medium-purple)',
        '&:hover': { backgroundColor: 'var(--color-dark-purple)' },
      }}
    >
      {text ? text : ''}
    </Button>
  )
}
