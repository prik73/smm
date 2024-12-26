import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
 

  return (
    <div>
      <header>
        <Navbar />
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>

        <Footer />
    </div>

  )
}

export default App
