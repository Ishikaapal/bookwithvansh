import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {Mouse} from "lucide-react";

// 1. IMPORT YOUR VIDEO (This is the "12+ years exp" way to handle assets in React)
import heroBookVideo from '../../assets/media/heroBook.mp4'; 

const Hero = () => {
  const { scrollY } = useScroll();
  
  // Parallax: Video sinks slightly as we scroll
  const videoY = useTransform(scrollY, [0, 500], [0, 100]);
  const textY = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <div className="mainContainer rowFlex ">
      
      {/* --- VIDEO LAYER --- */}
      <motion.div 
        style={{ y: videoY }}
        className="absolute inset-0 z-0"
      >
        {/* Soft "Paper/Cream" Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background z-10" />
        <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px] z-10" />
        
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          {/* 2. USE THE IMPORTED VARIABLE HERE */}
          <source src={heroBookVideo} type="video/mp4" />
        </video>
      </motion.div>

      

      {/* --- CONTENT LAYER --- */}
      <motion.div 
        style={{ y: textY }}
        className="insideContainer text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-5 rounded-full border border-primary/20 bg-background-soft/80 text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-sm">
            The Author's Creative Partner
          </span>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-text-primary leading-[1.1] tracking-tight">
            Turn Your Book Into a <br />
            <span className="relative inline-block px-2">
              <span className="relative z-10 text-primary-dark italic">Brand</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-2 left-0 h-3 bg-accent-light/40 -z-10"
              />
            </span> Readers Remember
          </h1>

          <p className="mt-8 text-lg md:text-2xl text-text-secondary max-w-3xl mx-auto font-light leading-relaxed">
            At <span className="text-text-primary font-medium">Books With Vansh</span>, we help authors grow through strategic book marketing, creative visuals, and high-impact content.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
            <button className="group relative px-10 py-5 bg-primary text-background font-bold rounded-2xl overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 active:scale-95">
              <span className="relative z-10">📞 Book a Free Strategy Call</span>
              <div className="absolute inset-0 bg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="text-text-primary border-2 border-primary px-10 py-5 rounded-2xl font-bold group flex items-center gap-3 transition-all hover:shadow-2xl hover:bg-primary hover:-translate-y-1 active:scale-95">
              Explore Our Work
              <div className="relative w-10 h-[2px] bg-primary overflow-hidden">
                <motion.div 
                  animate={{ x: [-40, 40] }} 
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-white/50 w-full"
                />
              </div>
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-text-primary">Scroll</span>
        <Mouse  className='w-8 h-8 text-text-primary'/>
      </motion.div>

    </div>
  );
};

export default Hero;