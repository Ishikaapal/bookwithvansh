import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const FloatingBook = ({ book, progress }) => {
  // Speed multiplier: Higher depth = faster movement
  // We use -1 * book.depth to ensure they move UP as we scroll DOWN
  const y = useTransform(progress, [0, 1], [0, book.depth * -1.5]);
  
  // Opacity: Fade in/out at the edges of the scroll track
  const opacity = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Premium Depth Effects
  const blurValue = book.depth < 150 ? 2 : book.depth > 500 ? 1 : 0;
  const brightnessValue = book.depth < 150 ? 0.4 : 1;

  return (
    <motion.div
      style={{
        y,
        opacity,
        top: book.top,
        left: book.left,
        rotate: book.rotate,
        zIndex: book.zIndex,
        filter: `blur(${blurValue}px) brightness(${brightnessValue})`,
        willChange: "transform", // Performance optimization
      }}
      className="absolute w-32 md:w-56 aspect-[2/3]"
    >
      <motion.div
        whileHover={{ 
          scale: 1.05, 
          rotateY: 10, 
          filter: "brightness(1.2) blur(0px)",
          transition: { duration: 0.4 } 
        }}
        style={{ perspective: "1000px" }}
        className="relative w-full h-full group cursor-pointer"
      >
        {/* Book Shadow - Becomes softer for foreground books */}
        <div 
          className="absolute inset-0 bg-black/60 rounded-sm blur-xl translate-y-6 scale-90 group-hover:translate-y-10 transition-transform duration-500" 
          style={{ opacity: book.depth / 600 }}
        />
        
        <div className="relative w-full h-full bg-neutral-900 rounded-sm border border-white/10 overflow-hidden ring-1 ring-white/5">
          <img
            src={`https://picsum.photos/seed/${book.id + 123}/400/600`}
            alt="Book Cover"
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
            loading="lazy"
          />
          {/* Edge Sheen */}
          <div className="absolute inset-y-0 left-0 w-[2px] bg-white/20" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Parallax = () => {
  const scrollRef = useRef(null);

  // Target the tall container (scrollRef) to get progress from 0 to 1
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 50,
    mass: 0.5,
  });

  const floatingBooks = [
    // BACKGROUND (Slow, Dim)
    { id: 1, top: "10%", left: "5%",  scale: 0.4, depth: 80,  rotate: -12, zIndex: 10 },
    { id: 2, top: "40%", left: "85%", scale: 0.5, depth: 120, rotate: 8,   zIndex: 10 },
    { id: 3, top: "70%", left: "40%", scale: 0.3, depth: 60,  rotate: 15,  zIndex: 10 },
    { id: 4, top: "15%", left: "75%", scale: 0.5, depth: 140, rotate: -5,  zIndex: 10 },

    // MIDGROUND
    { id: 5, top: "25%", left: "12%", scale: 0.8, depth: 250, rotate: -10, zIndex: 20 },
    { id: 6, top: "50%", left: "65%", scale: 0.9, depth: 300, rotate: 12,  zIndex: 20 },
    { id: 7, top: "10%", left: "45%", scale: 0.8, depth: 280, rotate: -18, zIndex: 20 },
    { id: 8, top: "80%", left: "10%", scale: 0.9, depth: 320, rotate: 5,   zIndex: 20 },
    { id: 9, top: "65%", left: "80%", scale: 0.8, depth: 290, rotate: -8,  zIndex: 20 },
    { id: 10, top: "5%", left: "20%", scale: 0.9, depth: 350, rotate: 14, zIndex: 20 },

    // FOREGROUND (Fast, Fly-by)
    { id: 11, top: "20%", left: "-10%", scale: 1.4, depth: 650, rotate: 20,  zIndex: 30 },
    { id: 12, top: "5%",  left: "85%",  scale: 1.6, depth: 700, rotate: -15, zIndex: 30 },
    { id: 13, top: "55%", left: "90%",  scale: 1.5, depth: 680, rotate: 10,  zIndex: 30 },
    { id: 14, top: "85%", left: "-5%",  scale: 1.7, depth: 750, rotate: -22, zIndex: 30 },
    { id: 15, top: "90%", left: "70%",  scale: 1.4, depth: 620, rotate: 15,  zIndex: 30 },
    { id: 16, top: "40%", left: "40%",  scale: 1.3, depth: 600, rotate: -5,  zIndex: 30 },
  ];

  return (
    /* The Scroll Track: determines how long the user scrolls */
    <div ref={scrollRef} className="relative h-[200vh]">
      
      {/* The Sticky Viewport: stays fixed while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Subtle Background Grain/Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 to-black pointer-events-none" />

        <div className="relative w-full h-full flex items-center justify-center">
          {/* Optional: Hero Text behind foreground books */}
          <motion.div 
            style={{ opacity: useTransform(smoothProgress, [0, 0.2], [1, 0]) }}
            className="z-0 text-center pointer-events-none"
          >
            <h1 className="text-primary-dark font-serif italic text-[8vw]">Books Are Amazing</h1>
          </motion.div>

          {floatingBooks.map((book) => (
            <FloatingBook key={book.id} book={book} progress={smoothProgress} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parallax;