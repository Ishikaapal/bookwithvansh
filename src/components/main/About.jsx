import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Smooth out the scroll progress for that premium "gliding" feel
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Floating Book Data - Different depths and positions
  const floatingBooks = [
    { id: 1, top: '10%', left: '15%', scale: 0.8, depth: -100, rotate: 15 },
    { id: 2, top: '20%', left: '80%', scale: 1.2, depth: 150, rotate: -10 },
    { id: 3, top: '60%', left: '10%', scale: 1.5, depth: 250, rotate: 25 },
    { id: 4, top: '70%', left: '85%', scale: 0.9, depth: -50, rotate: -20 },
    { id: 5, top: '40%', left: '75%', scale: 1.1, depth: 100, rotate: 5 },
    { id: 6, top: '80%', left: '20%', scale: 1.3, depth: 200, rotate: -15 },
  ];

  return (
    <div 
      ref={containerRef}
      className="mainContainer"
    >
      {/* 1. THE FLOATING BOOK ELEMENTS */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
        {floatingBooks.map((book) => {
          // Each book moves at a different speed based on its "depth"
          const y = useTransform(smoothProgress, [0, 1], [0, book.depth * -5]);
          const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

          return (
            <motion.div
              key={book.id}
              style={{ 
                y, 
                opacity,
                top: book.top,
                left: book.left,
                scale: book.scale,
                rotate: book.rotate,
              }}
              className="absolute w-32 md:w-48 aspect-[2/3] z-0 shadow-2xl"
            >
              <div className="w-full h-full bg-white rounded-sm border border-border overflow-hidden">
                <img 
                  src={`https://picsum.photos/id/${book.id + 30}/300/450`} 
                  alt="Book Cover" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. THE CONTENT (Center-Pinned) */}
      <div className=" w-full insideContainer max-w-4xl  flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-background/60 backdrop-blur-md p-8 md:p-16 border border-primary/10 rounded-[4rem] text-center"
        >
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-text-primary mb-8">
            About <span className="text-primary italic text-3xl md:text-6xl block mt-2">Books With Vansh</span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed font-light">
            <p>
              Books With Vansh is a creative book promotion and author branding platform that helps writers grow their visibility in the digital world.
            </p>
            <p>
              We work with authors, publishers, and digital creators to promote books through 
              <span className="text-text-primary font-medium px-2 underline decoration-primary/30 underline-offset-4">strategic marketing</span>, 
              creative design, and engaging content.
            </p>
            <p className="text-text-primary font-semibold text-2xl font-serif italic">
              "Make your book seen, read, and remembered."
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-left border-t border-border pt-12">
            <div>
              <h3 className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                <span className="w-6 h-[1px] bg-primary" /> Our Mission
              </h3>
              <p className="text-base text-text-secondary">
                To help authors build strong personal brands and reach more readers through smart marketing strategies and modern digital promotion.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                <span className="w-6 h-[1px] bg-primary" /> Our Approach
              </h3>
              <p className="text-base text-text-secondary">
                Combining creativity, strategy, and data to create campaigns tailored to your specific book genre and audience.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. TRANSITION GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
};

export default About;