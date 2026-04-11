import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiZap, FiLayout, FiTrendingUp, FiUser, FiEdit3 } from 'react-icons/fi';

// 1. IMPORT YOUR IMAGE
import bgImage from '../../assets/media/2.png';

const WhyUs = () => {
  const reasons = [
    {
      title: "Strategic Book Marketing",
      desc: "We use data-driven strategies to help authors increase visibility and reach targeted readers across digital platforms.",
      icon: <FiTarget />,
      color: "from-amber-500/10"
    },
    {
      title: "Personalized Author Support",
      desc: "Every author is unique. We create custom promotion strategies tailored to your genre and publishing goals.",
      icon: <FiUser />,
      color: "from-blue-500/10"
    },
    {
      title: "Creative Content & Design",
      desc: "From graphics to short-form videos, we create high-quality content that strengthens your author brand.",
      icon: <FiZap />,
      color: "from-purple-500/10"
    },
    {
      title: "Multi-Platform Promotion",
      desc: "We promote your book across social media and influencer networks to maximize reader engagement.",
      icon: <FiCheckCircle />,
      color: "from-emerald-500/10"
    },
    {
      title: "Professional Digital Presence",
      desc: "Our author websites and landing pages help establish credibility and convert visitors into loyal readers.",
      icon: <FiLayout />,
      color: "from-rose-500/10"
    },
    {
      title: "Results-Focused Approach",
      desc: "We focus on real results — increased visibility and long-term author brand growth.",
      icon: <FiTrendingUp />,
      color: "from-orange-500/10"
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      
      {/* --- REFRESHED BACKGROUND DECORATION --- */}
      
      {/* 2. FULL BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background Texture" 
          className="w-full h-full object-cover opacity-[0.15]" // Subtle opacity so it doesn't overwhelm the text
        />
        {/* Slight parchment overlay to keep the "Books" theme consistent */}
        <div className="absolute inset-0  backdrop-blur-[2px]" />
      </div>
      
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block py-1.5 px-5 rounded-full border border-stone-200 bg-white/80 text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-sm">
            The Distinction
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif font-bold text-text-primary leading-tight"
          >
            Why Choose <br />
            <span className="italic text-[#c89b3c]">Books With Vansh</span>
          </motion.h2 >
        </div>

        {/* --- GRID OF REASONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[3rem] bg-white/90 backdrop-blur-sm border border-stone-100 hover:border-[#c89b3c]/20 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              {/* Subtle Gradient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[3rem]`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#FAF9F6] rounded-2xl flex items-center justify-center text-[#c89b3c] text-2xl mb-8 group-hover:bg-[#c89b3c] group-hover:text-white transition-all duration-500 shadow-inner border border-stone-100">
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-text-primary mb-4 group-hover:text-[#c89b3c] transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed font-light text-sm md:text-base">
                  {reason.desc}
                </p>
                
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#c89b3c]/20 group-hover:bg-[#c89b3c] transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- TRUST FOOTER --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 z-10 relative"
        >
          <div className="flex gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
             <span className="font-serif italic font-bold text-xl">Authors First</span>
             <span className="font-serif italic font-bold text-xl">Digital Growth</span>
             <span className="font-serif italic font-bold text-xl">Creative Soul</span>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] font-bold text-text-secondary">
            Empowering 100+ Authors Worldwide
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default WhyUs;