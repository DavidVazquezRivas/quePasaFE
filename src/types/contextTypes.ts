import { User } from '@/types/models'

export interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}
