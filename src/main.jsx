import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import { useAuthStore } from './store/useAuthStore'

// Initialize auth store from localStorage (if user previously logged in)
const initAuth = () => {
  try {
    const raw = localStorage.getItem('user')
    if (raw) {
      const user = JSON.parse(raw)
      useAuthStore.getState().setUser(user)
      if (user.role === 'admin') useAuthStore.getState().setAdmin(true)
    }
  } catch (e) {
    console.warn('Failed to initialize auth from localStorage', e)
  }
}

initAuth()

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
