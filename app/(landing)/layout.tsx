import React from 'react'


interface LayoutProps{
    children: React.ReactNode
}
const LandingLayout = ({children}: LayoutProps) => {
  return (
    <main>
        {children}
    </main>
  )
}

export default LandingLayout