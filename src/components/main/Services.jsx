import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IC from "../../assets/media/IC.jpg";
import GD from "../../assets/media/GD.jpg";
import SMM from "../../assets/media/SMM.jpg";
import SMP from "../../assets/media/SMP.jpg";
import WD from "../../assets/media/WD.jpg";
import VE from "../../assets/media/VE.jpg";
const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one open like the video

  const services = [
    {
      title: "Influencer Campaigns",
      description: "Connect your narrative with trusted bookstagrammers and bloggers who match your genre and audience. We amplify reach through authentic reader communities.",
      icon: "🕊️",
      img: IC, 
    },
    {
      title: "Social Media Promotion",
      description: "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: SMP,
    },
    {
      title: "Website Development",
      description: "Professional author websites and book landing pages that showcase your work, build credibility, and convert visitors into loyal readers.",
      icon: "🌐",
      img: WD,
    },
    {
      title: "Video Editing",
      description: "Engaging short-form videos for Reels, Shorts, and TikTok designed to capture attention and reach new readers visually.",
      icon: "🎬",
      img: VE,
    },
    {
      title: "Graphic Design",
      description: "Creative visual designs for book promotions and marketing campaigns that make your content stand out and leave a lasting impression.",
      icon: "🎨",
      img: GD,
    },
    {
      title: "Social Media Management",
      description: "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: SMM,
    },
  ];

  return (
    <div className="mainContainer">
      <div className="insideContainer">
        
        {/* Header Section */}
         {/* --- SECTION HEADER --- */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                  
                  <span className="inline-block py-1.5 px-5 rounded-full border border-primary/20 bg-background-soft/80 text-primary-dark text-xs font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-md shadow-sm">
                    Our Experties
                  </span>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-text-primary leading-tight"
                  >
                    Our <span className='text-primary'>Services</span>
                  </motion.h2 >
                </div>

        {/* The Expansion Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] md:h-[500px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              initial={false}
              animate={{ 
                flex: expandedIndex === index ? 3 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Professional "Cubic Bezier" curve
              className="relative overflow-hidden rounded-[2rem] cursor-pointer group border border-white/5"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/30 via-text-secondary/20 to-transparent opacity-80" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                
                {/* Icon & Title (Visible when collapsed) */}
                <div className="flex items-center justify-start gap-4 mb-2">
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(200,155,60,0.5)]">
                    {service.icon}
                  </span>
                  <h3 className={`text-xl font-serif font-bold text-background transition-all duration-300 ${expandedIndex === index ? 'opacity-100' : 'md:rotate-90 md:origin-left md:absolute md:left-12 md:top-40 md:w-max'}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="mt-4 "
                    >
                      <p className="text-background-soft text-sm md:text-base leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                      
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Selection Glow */}
              {expandedIndex === index && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 border-2 border-primary/50 rounded-4xl pointer-events-none"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;