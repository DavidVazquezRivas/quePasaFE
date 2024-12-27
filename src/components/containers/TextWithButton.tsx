import { Box } from '@mui/material'

interface TextWithButtonProps {
  children: React.ReactNode
  component?: React.ElementType
  key?: number | string
  color?: string
  backgroundColor?: string
}

export const TextWithButton: React.FC<TextWithButtonProps> = ({
  children,
  key,
  color = 'inherit',
  backgroundColor = 'inherit',
  component = 'div',
}) => {
  const textWithButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    gap: 1,
    width: '100%',
    color: color,
    backgroundColor: backgroundColor,
  }

  return (
    <Box key={key} sx={textWithButtonStyle} component={component}>
      {children}
    </Box>
  )
}
