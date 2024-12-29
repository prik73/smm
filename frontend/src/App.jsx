import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contribute from './pages/Contribute';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react";
import Gallery from './pages/Gallery';
import { Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

import { ToastProvider } from "./components/ui/toast";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ToastProvider>
    <div className="relative w-full overflow-x-hidden">
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

      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end z-50">
        <div className="relative">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
            aria-label="More Options"
            initial={{ rotate: 0 }}
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-6 h-6"
              initial={{ scale: 1 }}
              animate={{ scale: isExpanded ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          </motion.button>

          {isExpanded && (
            <motion.div
              className="absolute bottom-14 right-0 flex flex-col space-y-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="tel:+91 8860009103"
                className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
                aria-label="Call Us"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/8860009103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-200"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-6 h-6" />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
    </ToastProvider>
  );
}

export default App;
