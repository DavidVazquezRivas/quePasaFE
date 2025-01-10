import React, { createContext, useState, useContext } from 'react'

interface MessageContextProps {
  messageSent: boolean
  setMessageSent: React.Dispatch<React.SetStateAction<boolean>>
}

const MessageContext = createContext<MessageContextProps | undefined>(undefined)

interface MessageProviderProps {
  children: React.ReactNode
}

export const MessageProvider: React.FC<MessageProviderProps> = ({
  children,
}) => {
  const [messageSent, setMessageSent] = useState(false)

  return (
    <MessageContext.Provider value={{ messageSent, setMessageSent }}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessageContext = () => {
  const context = useContext(MessageContext)
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider')
  }
  return context
}
