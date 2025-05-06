import React from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from './sections/Navbar/Navbar'
import About from './sections/About/About'
import Power from './sections/Power/Power'
import Map from './sections/Map/Map'
import Footer from './sections/Footer/Footer'
import ImageCarousel from './sections/ImageCarousel/ImageCarousel'
import GetQuoteSection from './sections/GetQuote/GetQuoteSection'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Power />
      <Map />
      <ImageCarousel />
      <GetQuoteSection />
      <Footer />
    </section>
  )
}

export default App