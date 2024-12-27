import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/log.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/contribute', text: 'Contribute' },
    { to: '/events', text: 'Events' },
    { to: '/contact', text: 'Contact-Us' },
    { to: '/gallery', text: 'Gallery' }
  ];

  return (
    <nav className={`font-mono text-lg antialiased font-light sticky top-0 z-50 h-[110px] 
      ${hasScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-white'} 
      transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} className="w-auto h-[110px] " alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className="relative text-stone-800 hover:text-blue-800 transition-colors duration-300 group"
              >
                {text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-stone-800 hover:text-blue-800 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`
          md:hidden fixed inset-0 top-[110px] bg-white transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="px-4 pt-2 pb-4 space-y-4">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className="block text-stone-800 hover:text-blue-800 transition-colors duration-300 relative group"
                onClick={() => setIsOpen(false)}
              >
                {text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;