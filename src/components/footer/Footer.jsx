import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { id: 1, name: 'Instagram', icon: <FiInstagram />, link: 'https://instagram.com/bookswithvansh' },
    { id: 2, name: 'LinkedIn', icon: <FiLinkedin />, link: '#' },
    { id: 3, name: 'Email', icon: <FiMail />, link: 'mailto:bookswithvansh@gmail.com' },
    { id: 4, name: 'Call', icon: <FiPhone />, link: 'tel:9140264635' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0B] pt-32 pb-10 overflow-hidden">
      
      {/* 1. KINETIC BRANDING BACKGROUND */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[25vw] font-serif font-bold text-white leading-none select-none">
          VANSH
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end border-b border-white/10 pb-20">
          
          {/* LEFT: THE CALL TO ACTION */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">
                Next Chapter
              </span>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                Ready to make your <br />
                <span className="italic text-primary underline decoration-primary/20 underline-offset-8">book a masterpiece?</span>
              </h3>
            </motion.div>
          </div>

          {/* RIGHT: THE SOCIAL ORBIT */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-8 md:flex md:justify-end md:gap-12">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-center md:items-end gap-3"
                >
                  <span className="text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 2. SECONDARY LINKS & COPYRIGHT */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Back to Top - Floating Circle */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#c89b3c' }}
            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group"
          >
            <FiArrowUp className="group-hover:text-black transition-colors" />
          </motion.button>

          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600">
            © {currentYear} BOOKS WITH VANSH — ALL RIGHTS RESERVED
          </p>
        </div>

      </div>

      {/* 3. DECORATIVE GRADIENT FADE (Top Border) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    </footer>
  );
};

export default Footer;