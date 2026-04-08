import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one open like the video

  const services = [
    {
      title: "Influencer Campaigns",
      description: "Connect your narrative with trusted bookstagrammers and bloggers who match your genre and audience. We amplify reach through authentic reader communities.",
      icon: "🕊️",
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2070", 
    },
    {
      title: "Social Media Promotion",
      description: "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974",
    },
    {
      title: "Website Development",
      description: "Professional author websites and book landing pages that showcase your work, build credibility, and convert visitors into loyal readers.",
      icon: "🌐",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
    },
    {
      title: "Video Editing",
      description: "Engaging short-form videos for Reels, Shorts, and TikTok designed to capture attention and reach new readers visually.",
      icon: "🎬",
      img: "https://images.unsplash.com/photo-1536243298747-ea8874136d64?q=80&w=1974",
    },
    {
      title: "Graphic Design",
      description: "Creative visual designs for book promotions and marketing campaigns that make your content stand out and leave a lasting impression.",
      icon: "🎨",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964",
    },
    {
      title: "Social Media Management",
      description: "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974",
    },
  ];

  return (
    <div className="mainContainer bg-[#0A0A0B]">
      <div className="insideContainer">
        
        {/* Header Section */}
        <div className="mb-16 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-4 justify-center md:justify-start"
          >
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs">Expert Solutions</span>
            <div className="h-[1px] w-12 bg-primary/40" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">
            Our <span className="italic text-primary">Services</span>
          </h2>
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
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                
                {/* Icon & Title (Visible when collapsed) */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-3xl filter drop-shadow-[0_0_10px_rgba(200,155,60,0.5)]">
                    {service.icon}
                  </span>
                  <h3 className={`text-xl font-serif font-bold text-white transition-all duration-300 ${expandedIndex === index ? 'opacity-100' : 'md:rotate-90 md:origin-left md:absolute md:left-12 md:bottom-24 md:w-max'}`}>
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
                      className="mt-4"
                    >
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                        {service.description}
                      </p>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-6 py-3 bg-primary text-black font-bold rounded-full text-xs uppercase tracking-widest flex items-center gap-2"
                      >
                        Learn More <span className="text-lg">→</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Selection Glow */}
              {expandedIndex === index && (
                <motion.div 
                  layoutId="glow"
                  className="absolute inset-0 border-2 border-primary/50 rounded-[2rem] pointer-events-none"
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