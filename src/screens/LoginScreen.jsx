import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import axios from 'axios'

export default function LoginScreen(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e){
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, {
        username,
        password
      })

      const { token, user } = response.data

      // Store token in localStorage
      localStorage.setItem('token', token)

      // Set user in zustand store
      useAuthStore.getState().setUser(user)

      // Check if user is admin
      if(user.role === 'admin'){
        useAuthStore.getState().setAdmin(true)
        navigate('/admin')
        return
      }

      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  function handleSignupClick() {
    navigate('/signup')
  }

  return (
    <div className="screen center">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input 
            value={username} 
            onChange={e=>setUsername(e.target.value)}
            required 
          />
        </label>
        <label>
          Password
          <input 
            type="password" 
            value={password} 
            onChange={e=>setPassword(e.target.value)}
            required 
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Signing in...' : 'Sign in'}
        </button>
        <button type="button" onClick={handleSignupClick} className="secondary-button">
          Create Account
        </button>
      </form>
    </div>
  )
}
