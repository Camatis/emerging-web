import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function DashboardScreen(){
  const navigate = useNavigate()
  const user = useAuthStore(state => state.user)

  function signOut(){
    useAuthStore.getState().clearUser()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <div className="screen">
      <h1>Dashboard</h1>
      <p>Welcome {user?.username ?? 'guest'}.</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
