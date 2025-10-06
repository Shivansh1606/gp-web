import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Fixed Header - Always White Background */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <HiSparkles size={16} />
              </motion.div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GrowingUpp
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative ${
                      location.pathname === link.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                        layoutId="activeIndicator"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="/contact"
                className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                Get Started
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isOpen ? 'auto' : 0, 
            opacity: isOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
                transition={{ delay: isOpen ? index * 0.1 : 0 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="/contact"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -50, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: isOpen ? navLinks.length * 0.1 : 0 }}
              className="block px-4 py-3 mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </motion.a>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
}
