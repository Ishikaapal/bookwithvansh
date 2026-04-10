import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi'; // Professional, minimal icon

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Ketaki Pawar",
      role: "Author — The Emotional Reset",
      quote: "His review was incredibly thoughtful and insightful. He truly understands how to capture the essence of a book and present it in a way that resonates with readers.",
      accent: "from-amber-200/20"
    },
    {
      name: "Maria",
      role: "Author — Unbreakable Determination",
      quote: "I’m really happy with the website they created for me. The design looks modern, works smoothly, and perfectly reflects my vision as an author.",
      accent: "from-blue-200/20"
    },
    {
      name: "Aksindiagroup",
      role: "Marketing Partner",
      quote: "The promotional creatives and marketing support helped our content reach a much wider audience. The team understands digital promotion very well.",
      accent: "from-emerald-200/20"
    },
    {
      name: "Daniel Carter",
      role: "Self-Published Author",
      quote: "The social media promotion helped my book reach readers I wouldn’t have been able to connect with on my own. Their strategy made a real difference.",
      accent: "from-purple-200/20"
    },
    {
      name: "Sophia Bennett",
      role: "Content Creator",
      quote: "The short-form videos they created were amazing. The editing style was engaging and perfect for platforms like Instagram and YouTube Shorts.",
      accent: "from-rose-200/20"
    }
  ];

  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0B] flex items-center justify-center overflow-hidden py-24">
      
      {/* --- BACKGROUND KINETIC LAYER --- */}
      <div className="absolute inset-0 z-0 opacity-30">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].accent} to-transparent`}
          />
        </AnimatePresence>
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* --- LEFT SIDE: THE NAVIGATOR --- */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-2">
          <motion.span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            Voices of Impact
          </motion.span>
          
          {testimonials.map((item, idx) => (
            <button
              key={idx}
              onMouseEnter={() => setActiveIndex(idx)}
              className="group relative text-left py-4 transition-all"
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ 
                    width: activeIndex === idx ? 40 : 0,
                    opacity: activeIndex === idx ? 1 : 0 
                  }}
                  className="h-[1px] bg-primary"
                />
                <span className={`text-2xl md:text-4xl font-serif transition-all duration-500 ${activeIndex === idx ? 'text-white translate-x-2' : 'text-white/20 hover:text-white/40'}`}>
                  {item.name}
                </span>
                {activeIndex === idx && (
                  <motion.span layoutId="arrow" className="text-primary">
                    <FiArrowUpRight />
                  </motion.span>
                )}
              </div>
              <p className={`text-[10px] uppercase tracking-widest mt-1 ml-14 transition-opacity duration-500 ${activeIndex === idx ? 'text-primary opacity-100' : 'opacity-0'}`}>
                {item.role}
              </p>
            </button>
          ))}
        </div>

        {/* --- RIGHT SIDE: THE SHOWCASE --- */}
        <div className="lg:col-span-7 relative flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              {/* Massive Backdrop Quote Mark */}
              <span className="absolute -top-20 -left-10 text-[200px] font-serif text-white/5 select-none">“</span>
              
              <div className="relative">
                <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-white leading-[1.4] italic tracking-tight">
                  {testimonials[activeIndex].quote}
                </p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100px" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="h-[2px] bg-primary mt-12" 
                />
                
                <div className="mt-8">
                  <h4 className="text-white font-bold text-lg uppercase tracking-tighter">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="text-primary text-xs font-medium opacity-80">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative Corner Numbers */}
      <div className="absolute bottom-12 right-12 md:left-12 font-serif text-white/10 text-9xl pointer-events-none">
        0{activeIndex + 1}
      </div>

    </section>
  );
};

export default Testimonials;