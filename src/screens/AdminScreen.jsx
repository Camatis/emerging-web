import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'

export default function AdminScreen(){
  const navigate = useNavigate()
  const user = useAuthStore(state => state.user)

  function signOut(){
    useAuthStore.getState().clearUser()
    navigate('/')
  }

  return (
    <div className="screen">
      <h1>Admin</h1>
      <p>Welcome admin {user?.email ?? ''}.</p>
      <p>This page is protected and only accessible by admins.</p>
      <button onClick={signOut}>Sign out</button>
    </div>
  )
}
