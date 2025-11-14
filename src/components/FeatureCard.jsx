import React from 'react'

export default function FeatureCard({ title, subtitle, testId }){
  return (
    <div className="text-center p-6 bg-background border border-border rounded">
      <div className="text-base font-medium text-foreground mb-1" data-testid={testId}>{title}</div>
      <div className="text-sm text-foreground">{subtitle}</div>
    </div>
  )
}
