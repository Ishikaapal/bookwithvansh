import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/media/logo.png";   //LOGO IMAGE PATH

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#whyus' },
    { name: 'Testimonials', href: '#testimonials' },
    
  ];

  // Helper to close menu and scroll smoothly
  const handleNavClick = (e, href) => {
    setIsMenuOpen(false);
    // If it's a hash link, let the browser handle it, or add smooth scroll logic here
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-4 py-4 
        ${isScrolled || isMenuOpen ? 'bg-background/90 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Section */}
          <motion.a href="/bookwithvansh/" 
            whileHover={{scale:1.1}} whileTap={{scale:0.94}} 
            className="flex items-center gap-2 group cursor-pointer">
              <img src={logo} alt="logo" className="w-28 h-auto object-cover" />
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary font-semibold text-sm tracking-wide transition-colors relative group uppercase"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Contact CTA (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="px-7 py-3 bg-primary hover:bg-primary-dark text-background font-bold rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] md:hidden bg-background pt-24 px-6 flex flex-col gap-6 items-center justify-start"
          >
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-serif font-bold text-text-primary hover:text-primary transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-full text-center px-8 py-4 bg-primary text-background font-bold rounded-2xl shadow-lg"
            >
              📞 Book a Call
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;