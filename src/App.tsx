import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { RegisterPage } from '@/pages/Register/RegisterPage'
import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <div id="app">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<h1>Dashboard</h1>} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App
