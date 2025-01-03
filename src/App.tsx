import './App.css'
import './scrollbarStyle.css'
import './smoothPattern.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RegisterPage } from '@/pages/Register/RegisterPage'
import { UserProvider } from './contexts/UserContext'
import { LoginPage } from './pages/Login/LoginPage'
import { DashboardPage } from './pages/Dashboard/DashboardPage'
import { CreateChatPage } from './pages/CreateChat/CreateChatPage'
import { ChatPage } from './pages/Chat/ChatPage'

function App() {
  return (
    <div id="app">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<DashboardPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="chat/create" element={<CreateChatPage />} />
            <Route path="chat/:chatId" element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
