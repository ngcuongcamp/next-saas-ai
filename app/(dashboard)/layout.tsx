import React from 'react'

interface LayoutProps{
  children: React.ReactNode
}

const DashboardLayout = ({children}: LayoutProps) => {
  return (
    <main>
      {children}
    </main>
  )
}

export default DashboardLayout