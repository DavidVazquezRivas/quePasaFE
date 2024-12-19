import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { RegisterPage } from '@/pages/Register/RegisterPage'

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<h1>Dashboard</h1>} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
