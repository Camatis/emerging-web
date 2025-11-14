import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import FeatureCard from '../components/FeatureCard'

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
      
      
      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-lg font-medium text-foreground mb-2" data-testid="about-title">
              About
            </h2>
            <p className="text-base text-foreground max-w-2xl mx-auto" data-testid="about-subtitle">
              The project proposes a low-cost, Raspberry Pi-based kiosk system that uses a Convolutional Neural Network (CNN) to assess the ripeness and detect defects in Carabao mangoes. It aims to provide an objective, reliable method for fruit quality inspection in supermarkets, reducing human error, minimizing waste, and improving customer trust. The system captures images of a mango, processes them with the CNN model, and displays the ripeness stage (unripe, ripe, overripe) and defect status (defective, non-defective) on a user interface.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-base font-medium text-foreground mb-4" data-testid="about-journey-title"></h3>
              <div className="space-y-4 text-muted-foreground" data-testid="about-description">
                <p></p>
                <p></p>
                <p></p>
              </div>

              <div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <FeatureCard title="Low-cost" subtitle="Accessible Hardware" testId="stat-projects" />
              <FeatureCard title="Dual-Camera" subtitle="Vision System" testId="stat-clients" />
              <FeatureCard title="Non-Destructive" subtitle="Fruit Analysis" testId="stat-experience" />
              <FeatureCard title="Real-Time" subtitle="Fruit Classification" testId="stat-satisfaction" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
