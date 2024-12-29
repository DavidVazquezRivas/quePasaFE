import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import { useSession } from '@/hooks/useSession'
import { Link, useNavigate } from 'react-router-dom'

interface HeaderProps {
  height: number
}

export const Header: React.FC<HeaderProps> = ({ height }) => {
  const { deleteSession } = useSession()
  const navigate = useNavigate()

  const onLogout = () => {
    // Eliminar la sesión del usuario
    deleteSession()

    // Redirigir al usuario a la página de login
    navigate('/login')
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'var(--color-dark-purple)',
        height: { height },
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: 'var(--color-white)',
          }}
        >
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'var(--color-white)' }}
          >
            Que Pasa
          </Link>
        </Typography>
        <Button
          color="inherit"
          sx={{ color: 'var(--color-white)' }}
          onClick={onLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  )
}
