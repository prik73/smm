import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import logo from '../assets/log.svg';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about', text: 'About' },
    { to: '/contribute', text: 'Contribute' },
    { to: '/events', text: 'Events' },
    { to: '/contact', text: 'Contact-Us' },
    { to: '/gallery', text: 'Gallery' }
  ];

  return (
    <nav
      className={`
        font-mono text-lg antialiased font-light
        fixed top-0 left-0 right-0 z-50
        h-[110px] w-full
        bg-white
        ${hasScrolled ? 'shadow-md backdrop-blur-md' : ''}
        transition-all duration-300 ease-in-out
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <AnimatePresence mode="wait">
              {hasScrolled ? (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-semibold text-blue-800 mt-[81px]"
                >
                  SMM Foundation
                </motion.div>
              ) : (
                <motion.img
                  key="logo"
                  src={logo}
                  className="w-auto h-[110px]"
                  alt="Logo"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(({ to, text }) => (
              <Link
                key={to}
                to={to}
                className="relative text-stone-800 hover:text-blue-800 transition-colors duration-300 group py-2"
              >
                {text}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-slate-100 transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-x-0 top-[110px] bg-white/95 backdrop-blur-sm shadow-lg h-[50vh]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 pt-6 pb-8 space-y-6">
                {navLinks.map(({ to, text }, index) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={to}
                      className="block text-2xl text-stone-800 hover:text-blue-800 transition-colors duration-300 relative group py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{text}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
