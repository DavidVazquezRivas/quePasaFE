import { UserContextType } from '@/types/contextTypes'
import { useContext } from 'react'
import { UserContext } from '@/contexts/UserContext'

// Hook para consumir el contexto
export const useUser = (): UserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser debe ser usado dentro de un UserProvider')
  }
  return context
}
