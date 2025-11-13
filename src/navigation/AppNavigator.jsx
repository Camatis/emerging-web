import React from 'react'
import { Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import LandingScreen from '../screens/LandingScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import DashboardScreen from '../screens/DashboardScreen'
import AdminScreen from '../screens/AdminScreen'
import { useAuthStore } from '../store/useAuthStore'

export default function AppNavigator(){
  const isAdmin = useAuthStore(state => state.isAdmin)
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()

  function handleLogout(){
    useAuthStore.getState().clearUser()
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <div>
      <header className="app-header">
        <nav>
          <Link to="/">Welcome</Link>
          {!user && <Link to="/login">Login</Link>}
          {!user && <Link to="/signup">Sign up</Link>}
          {user && <Link to="/dashboard">Dashboard</Link>}
          {isAdmin && <Link to="/admin">Admin</Link>}
          {user && <button onClick={handleLogout} style={{marginLeft:12}}>Logout</button>}
        </nav>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingScreen/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/signup" element={<SignupScreen/>} />
          <Route path="/dashboard" element={<DashboardScreen/>} />
          <Route path="/admin" element={isAdmin ? <AdminScreen/> : <Navigate to="/login" replace/>} />
        </Routes>
      </main>
    </div>
  )
}
