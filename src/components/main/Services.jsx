import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IC from "../../assets/media/IC.jpg";
import GD from "../../assets/media/GD.jpg";
import SMM from "../../assets/media/SMM.jpg";
import SMP from "../../assets/media/SMP.jpg";
import WD from "../../assets/media/WD.jpg";
import VE from "../../assets/media/VE.jpg";
import SectionHeader from "./SectionHeader";
const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one open like the video

  const services = [
    {
      title: "Influencer Campaigns",
      description:
        "Connect your narrative with trusted bookstagrammers and bloggers who match your genre and audience. We amplify reach through authentic reader communities.",
      icon: "🕊️",
      img: IC,
    },
    {
      title: "Social Media Promotion",
      description:
        "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: SMP,
    },
    {
      title: "Website Development",
      description:
        "Professional author websites and book landing pages that showcase your work, build credibility, and convert visitors into loyal readers.",
      icon: "🌐",
      img: WD,
    },
    {
      title: "Video Editing",
      description:
        "Engaging short-form videos for Reels, Shorts, and TikTok designed to capture attention and reach new readers visually.",
      icon: "🎬",
      img: VE,
    },
    {
      title: "Graphic Design",
      description:
        "Creative visual designs for book promotions and marketing campaigns that make your content stand out and leave a lasting impression.",
      icon: "🎨",
      img: GD,
    },
    {
      title: "Social Media Management",
      description:
        "Strategic campaigns designed to grow your author presence and increase visibility across platforms like Instagram and Facebook.",
      icon: "📈",
      img: SMM,
    },
  ];

  return (
    <div className="mainContainer">
      <div className="insideContainer">
        
        {/* --- SECTION HEADER --- */}
        <SectionHeader headerSpan="Our Experties" headerH2="Our" headerSpanText="Services" />

        {/* The Expansion Grid */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[32vw]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
              initial={false}
              animate={{
                flex: expandedIndex === index ? 3 : 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-3xl cursor-pointer group border border-background/10 min-h-[250px] md:min-h-0"
            >
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                />

                {/* Stronger overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 backdrop-blur-[1px]" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end px-6 md:p-8">
                {/* Title */}
                <h3
                  className={`font-serif font-bold text-background transition-all duration-500
          ${
            expandedIndex === index
              ? "text-3xl md:text-4xl mb-3"
              : "text-2xl md:text-3xl md:rotate-90 md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2 md:origin-left"
          }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="text-background/80 text-sm md:text-base leading-relaxed max-w-md"
                    >
                      {service.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Glow */}
              {expandedIndex === index && (
                <motion.div
                  layoutId="glow"
                  className="absolute inset-0 border border-background/30 rounded-3xl pointer-events-none"
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
