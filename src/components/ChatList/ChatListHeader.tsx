import React from 'react'
import { Box, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { SectionTitle } from '@/components/SectionTitle'

export const ChatListHeader: React.FC = () => {
  return (
    <Box sx={headerStyles}>
      <SectionTitle title="Chats" />
      <Tooltip title="Crear Chat" arrow>
        <Link to="/chat/create" style={{ textDecoration: 'none' }}>
          <Box sx={linkStyles}>
            <AddCircleIcon sx={{ fontSize: 30 }} />
          </Box>
        </Link>
      </Tooltip>
    </Box>
  )
}

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: 2,
}

const linkStyles = {
  color: 'var(--color-white)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--color-medium-purple)',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  '&:hover': {
    backgroundColor: 'var(--color-dark-purple)',
  },
  textDecoration: 'none',
}
