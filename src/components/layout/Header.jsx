import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiMenu, HiX, HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/70 shadow-lg border-b border-white/20' 
          : 'backdrop-blur-lg bg-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with Gradient */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <HiSparkles className="text-2xl text-primary-600 group-hover:text-accent-500 transition-colors" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </motion.div>
          <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
            GrowingUpp
          </span>
        </Link>

        {/* Mobile menu button */}
        <motion.button 
          className="md:hidden p-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? 'close' : 'open'}
              initial={{ rotate: 0 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 180 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink 
                to={to}
                className={({isActive}) => 
                  `px-4 py-2 rounded-xl transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-primary-600 bg-white/20 backdrop-blur-sm border border-white/30' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-white/10'
                  }`
                }
              >
                <span className="relative z-10">{label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="absolute top-full left-0 w-full md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-xl">
                <ul className="flex flex-col p-4 space-y-2">
                  {navLinks.map(({ to, label }, index) => (
                    <motion.li 
                      key={to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <NavLink 
                        to={to}
                        className="block px-4 py-3 rounded-xl text-gray-700 hover:text-primary-600 hover:bg-white/50 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
