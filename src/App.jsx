import React from 'react'
import Footer from './components/FooterComponent/Footer'
import MainContainer from './components/MainComponent/MainContainer'
import HeaderComponent from './components/HeaderComponent'
import OfferComponent from './components/MainComponent/OfferComponent'
import SimilarProjectsCarousel from './components/DescriptionComponent/SimilarProjectsCarousel'
import OverallDescription from './components/DescriptionComponent/OverallDescription'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Sticky Header - Full Width */}
      <header className="sticky top-0 z-50 col-span-12 bg-white shadow-md">
        <HeaderComponent />
      </header>

      <main className="flex-grow grid grid-cols-12 gap-6 px-4 py-8">
        
        {/* Left Section - Main Content */}
        <div className="col-span-8 space-y-6">
          <MainContainer />
          {/* <Overview /> */}
          <OverallDescription />
        </div>

        {/* Right Section - Sticky Offer */}
        <aside className="col-span-4 sticky top-20">
          <OfferComponent />
        </aside>
      </main>

      {/* Full-Width Components */}
      <section className="col-span-12">
        <SimilarProjectsCarousel />
      </section>

      <footer className="col-span-12">
        <Footer />
      </footer>
    </div>
  )
}

export default App
