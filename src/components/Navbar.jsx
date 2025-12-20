import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa'; // Added FaFileDownload

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const menuVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 } },
    exit: { x: '100%', opacity: 0, transition: { type: 'tween', ease: 'easeInOut', duration: 0.4 } }
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg shadow-primary/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-mono text-white"
          >
            <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Savindu<span className="text-primary">.dev</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  activeClass="active-nav"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="cursor-pointer text-textSecondary hover:text-white transition-colors text-sm font-medium tracking-wide"
                >
                  {link.name.toUpperCase()}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white z-50">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl focus:outline-none">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center z-40"
          >
            <ul className="flex flex-col gap-8 text-center">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    onClick={handleLinkClick}
                    activeClass="active-nav"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="cursor-pointer text-textSecondary hover:text-white transition-colors text-2xl font-medium tracking-wide"
                  >
                    {link.name.toUpperCase()}
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* --- NEW DOWNLOAD CV BUTTON FOR MOBILE --- */}
            <motion.a 
              href="/cv.pdf"
              download
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }} // Delays until after links appear
              className="mt-10 px-8 py-3 bg-primary text-background font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400 active:scale-95 transition-all"
            >
              <FaFileDownload /> Download CV
            </motion.a>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;