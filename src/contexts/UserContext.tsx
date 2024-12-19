import { UserContextType } from '@/types/contextTypes'
import { User } from '@/types/models'
import { createContext, ReactNode, useState } from 'react'

// Crear el contexto con un valor predeterminado
export const UserContext = createContext<UserContextType | undefined>(undefined)

// Proveedor del contexto
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
