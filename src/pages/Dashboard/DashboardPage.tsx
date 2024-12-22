import { WelcomeMessage } from './components/WelcomeMessage'
import { MainFrame } from '@/components/MainFrame'

export const DashboardPage: React.FC = () => {
  return (
    <MainFrame>
      <WelcomeMessage
        title="Select a chat"
        description="Choose a conversation from the list on the left to start chatting."
      />
    </MainFrame>
  )
}
