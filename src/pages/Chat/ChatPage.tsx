import { MainFrame } from '@/components/containers/MainFrame'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { MessageForm } from '@/pages/Chat/components/MessageForm'
import { MessageList } from '@/pages/Chat/components/MessageList'
import { MessageProvider } from '@/pages/Chat/contexts/MessageContext'

export const ChatPage = () => {
  const { chatId } = useParams<{ chatId: string }>()

  return (
    <MainFrame>
      <MessageProvider>
        <Box sx={containerStyle} className="smooth-pattern" component="main">
          <MessageList chatId={parseInt(chatId as string)} />
          <MessageForm chatId={parseInt(chatId as string)} />
        </Box>
      </MessageProvider>
    </MainFrame>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'center',
  flexGrow: 1,
}
