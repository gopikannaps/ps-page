import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import Footer from './components/FooterComponent/Footer'
import MainContainer from './components/MainComponent/MainContainer'
import Overview from './components/DescriptionComponent/Overview'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <HeaderComponent></HeaderComponent>
      </main>
      <MainContainer></MainContainer>
      <Overview></Overview>
      <Footer />
    </div>

  )
}

export default App
