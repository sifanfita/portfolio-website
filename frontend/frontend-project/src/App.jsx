import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'

import Testimonials from './pages/Testimonials.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />

        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

