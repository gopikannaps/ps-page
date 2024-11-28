import React from 'react'
import Navbar from './components/HeaderComponent/Navbar'
import Footer from './components/FooterComponent/Footer'
import MainContainer from './components/MainComponent/MainContainer'
import Overview from './components/DescriptionComponent/Overview'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar></Navbar>
      </main>
      <MainContainer></MainContainer>
      <Overview></Overview>

      <Footer />
    </div>

  )
}

export default App
