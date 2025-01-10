import React from 'react'
import { Message as MessageType, MessageTypesEnum } from '@/types/models'
import { Box, Typography } from '@mui/material'
import { getConsistentColor } from '@/utilities/generateLogo'

interface MessageProps {
  message: MessageType
  username: string
}

export const Message: React.FC<MessageProps> = ({ message, username }) => {
  const isCurrentUser = message.senderName === username

  const containerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: isCurrentUser ? 'flex-end' : 'flex-start',
  }

  const messageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: isCurrentUser ? 'flex-end' : 'flex-start',
    width: 'fit-content',
    padding: 2,
    backgroundColor: isCurrentUser
      ? 'var(--color-dark-purple)'
      : 'var(--color-light-purple)',
    color: isCurrentUser ? 'white' : 'black',
    borderRadius: '10px',
  }

  const usernameStyle = {
    fontWeight: 'lighter',
    marginRight: 1,
    color: getConsistentColor(username),
  }

  const usernameContent = !isCurrentUser ? (
    <Typography variant="caption" sx={usernameStyle}>
      {message.senderName}
    </Typography>
  ) : (
    '' // No mostrar el nombre del usuario actual
  )

  const messageContent =
    message.type === MessageTypesEnum.TEXT ? (
      <Box sx={containerStyle}>
        <Box sx={messageStyle}>
          {usernameContent}
          <Typography align="left">{message.content}</Typography>
        </Box>
      </Box>
    ) : (
      'Not supported yet'
    )

  return messageContent
}
