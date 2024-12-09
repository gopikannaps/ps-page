import React from 'react'
import NavBar from './NavBar'
import MenuBar from './MenuBar'

const HeaderComponent = () => {
  return (
    <header className="w-full">
      <NavBar />
      <MenuBar />
    </header>
  )
}

export default HeaderComponent