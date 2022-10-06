import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

// styles
import './styles/index.scss'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ThemeProvider>
  </React.StrictMode>
)
