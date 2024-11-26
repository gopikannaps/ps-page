import React from 'react'
import Navbar from './components/HeaderComponent/Navbar'
import Footer from './components/FooterComponent/Footer'
import MainContainer from './components/MainComponent/MainContainer'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar></Navbar>
      </main>
      <MainContainer></MainContainer>
      <Footer />
    </div>

  )
}

export default App
