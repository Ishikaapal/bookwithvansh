import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInstagram, FiLinkedin, FiMail, FiPhone, FiArrowUp, FiSend, FiCheckCircle } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'

  const socialLinks = [
    { id: 1, name: "Instagram", icon: <FiInstagram />, link: 'https://instagram.com/bookswithvansh' },
    { id: 2, name: "LinkedIn", icon: <FiLinkedin />, link: '#' },
    { id: 3, name: "Email", icon: <FiMail />, link: 'mailto:bookswithvansh@gmail.com' },
    { id: 4, name: "Phone", icon: <FiPhone />, link: 'tel:9140264635' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnjlnzqp", {
        method: "POST",
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="relative bg-[#0A0A0B] py-12 overflow-hidden">
      
      {/* 1. KINETIC BRANDING BACKGROUND */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none opacity-[0.03]">
        <h2 className="text-[22vw] font-serif font-bold text-background leading-none select-none">
          VANSH
        </h2>
      </div>

      <div className="insideContainer relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-background/10 pb-20">
          
          {/* LEFT: THE CALL TO ACTION */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs block">
                Next Chapter
              </span>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-background leading-tight">
                Ready to make your <br />
                <span className="italic text-primary underline decoration-primary/20 underline-offset-8">book a masterpiece?</span>
              </h3>
            </motion.div>
          </div>

          {/* RIGHT: NEWSLETTER & SOCIALS */}
          <div className="lg:col-span-6 space-y-16">
            
            {/* --- NEWSLETTER SECTION --- */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <h4 className="text-background font-serif text-xl mb-6 italic">Subscribe for Literary Insights</h4>
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 py-4 text-primary"
                  >
                    <FiCheckCircle className="text-2xl" />
                    <span className="font-bold tracking-widest uppercase text-xs">Welcome to the inner circle!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="relative flex items-center">
                    <input 
                      required
                      type="email" 
                      name="email"
                      placeholder="Your Email Address" 
                      disabled={status === 'loading'}
                      className="w-full bg-transparent border-b border-background/10 py-4 text-background placeholder:text-gray-600 focus:outline-none focus:border-primary transition-all duration-500 disabled:opacity-50"
                    />
                    <button 
                      type="submit" 
                      disabled={status === 'loading'}
                      className="absolute right-0 p-2 text-primary hover:text-background transition-colors disabled:opacity-50"
                    >
                      {status === 'loading' ? (
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <FiSend className="text-xl" />
                      )}
                    </button>
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-primary group-hover:w-full transition-all duration-700" />
                  </form>
                )}
              </AnimatePresence>

              {status === 'error' && (
                <p className="text-red-500 text-[10px] mt-2 uppercase tracking-widest">Something went wrong. Please try again.</p>
              )}
              
              <p className="text-[9px] uppercase tracking-widest text-gray-600 mt-4">Join 500+ authors getting weekly branding tips.</p>
            </motion.div>

            {/* --- SOCIAL ORBIT --- */}
            <div className="grid grid-cols-2 gap-4 md:flex md:justify-start md:gap-12 pt-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="group flex flex-col items-start gap-2"
                >
                  <span className="text-2xl text-gray-500 group-hover:text-primary transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 group-hover:text-background transition-colors duration-300">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>

          </div>
        </div>

        {/* 2. SECONDARY LINKS & COPYRIGHT */}
        <div className="py-4 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: '#c89b3c' }}
            className="w-12 h-12 rounded-full border border-background/10 flex items-center justify-center text-background group"
          >
            <FiArrowUp className="group-hover:text-black transition-colors" />
          </motion.button>

          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 text-center md:text-right">
            © {currentYear} BOOKS WITH VANSH — ALL RIGHTS RESERVED. <br className="md:hidden" />
            Crafted By <a target='__blank' href='https://ipvertex.netlify.app/' className='text-primary hover:animate-pulse transition-all'>IP VERTEX</a>
          </p>
        </div>

      </div>

      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    </footer>
  );
};

export default Footer;