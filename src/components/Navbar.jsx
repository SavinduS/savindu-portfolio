import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaFileDownload } from 'react-icons/fa';

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

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-md py-4 shadow-lg shadow-primary/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="text-2xl font-bold font-mono text-white">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer" onClick={() => setMenuOpen(false)}>
              Savindu<span className="text-primary">.dev</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="md:hidden text-white z-50 text-2xl focus:outline-none p-2 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className={`fixed inset-0 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center z-40 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-8 text-center">
            {navLinks.map((link, index) => (
              <li key={index}>
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
              </li>
            ))}
          </ul>

          {/* Download CV Button for Mobile */}
          <a 
            href="/cv.pdf"
            download
            onClick={() => setMenuOpen(false)}
            className="mt-10 px-8 py-3 bg-primary text-background font-bold rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:bg-cyan-400 active:scale-95 transition-all"
          >
            <FaFileDownload /> Download CV
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;