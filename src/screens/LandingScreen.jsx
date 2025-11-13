import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function LandingScreen(){
  const navigate = useNavigate()
  return (
    <div className="screen center">
      <h1>Welcome</h1>
      <p>This is the landing page for the web version.</p>
      <button onClick={()=>navigate('/login')}>Go to Login</button>
    </div>
  )
}
