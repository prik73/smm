import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import Gallery from './pages/Gallery';


function App() {
 

  return (
    <div>
      <Analytics />
      <header>
        <Navbar />
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />          
        </Routes>

        <Footer />
    </div>

  )
}

export default App
