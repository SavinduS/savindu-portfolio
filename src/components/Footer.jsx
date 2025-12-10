import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#020617] border-t border-white/10 py-8 px-6 relative">
      <div className="max-w-7xl mx-auto">
          
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textSecondary text-sm">
            © {new Date().getFullYear()} Savindu Weerarathna. All rights reserved.
          </p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-textSecondary hover:text-primary transition-colors"
          >
            Back to Top <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
};

// Helper Component for consistency
const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-textSecondary hover:bg-primary hover:text-background transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;