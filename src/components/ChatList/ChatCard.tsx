import React from 'react'
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material'

interface ChatCardProps {
  chatName: string
  chatLogo: string
  unreadMessages: number
  selected?: boolean
}

export const ChatCard: React.FC<ChatCardProps> = ({
  chatName,
  chatLogo,
  unreadMessages,
  selected = false,
}) => {
  const badgeStyle = {
    width: badgeSize,
    height: badgeSize,
    borderRadius: '50%',
    backgroundColor:
      unreadMessages > 0 ? 'var(--color-dark-purple)' : 'transparent',
    color: unreadMessages > 0 ? 'var(--color-white)' : 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
  }

  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: 1,
    boxShadow: 3,
    width: '100%',
    height: '80px',
    minHeight: '80px',
    border: selected ? '3px solid var(--color-medium-purple)' : 'none',
    backgroundColor: selected
      ? 'var(--color-light-gray)'
      : 'var(--color-white)',
  }

  const shownMessages = unreadMessages > 9 ? '9+' : unreadMessages

  return (
    <Card sx={cardStyle} component="li">
      <CardMedia
        component="img"
        sx={cardMediaStyle}
        image={chatLogo}
        alt={chatName}
      />
      <CardContent sx={cardContentStyle}>
        <Typography variant="h6" sx={chatTitleStyle}>
          {chatName}
        </Typography>
      </CardContent>
      <Box sx={badgeStyle}>{shownMessages}</Box>
    </Card>
  )
}

const imageSize = 56

const cardMediaStyle = {
  width: imageSize,
  height: imageSize,
  borderRadius: '50%',
}

const chatTitleStyle = {
  fontWeight: 'bold',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}

const badgeSize = 24

const cardContentStyle = {
  width: `calc(100% - ${imageSize}px - ${badgeSize}px)`,
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
}
