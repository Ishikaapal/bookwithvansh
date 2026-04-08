import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiMail, FiInstagram, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const containerRef = useRef(null);

  // 3D Tilt Logic for the Book
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-[#FAF9F6] flex items-center justify-center py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* LEFT SIDE: THE ARTISTIC BOOK VISUAL (5 Cols) */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Subtle Background glow for depth */}
          <div className="absolute w-[400px] h-[400px] bg-stone-200/50 blur-[100px] rounded-full -z-10" />
          
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[300px] h-[450px] md:w-[380px] md:h-[540px] shadow-[30px_35px_80px_rgba(0,0,0,0.1)] group"
          >
            {/* The Spine */}
            <div className="absolute left-0 top-0 w-[40px] h-full bg-[#2C2C2C] z-20 rounded-l-sm shadow-inner overflow-hidden">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 whitespace-nowrap text-[10px] tracking-[0.3em] text-stone-400 font-bold uppercase">
                  Volume — 2026
               </div>
            </div>

            {/* The Front Cover */}
            <div className="absolute inset-0 ml-[38px] bg-[#F4F1EA] rounded-r-md border-y border-r border-stone-200 p-12 flex flex-col justify-between overflow-hidden">
              {/* Paper Texture Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
              
              <div className="relative z-10">
                <div className="w-12 h-[2px] bg-stone-800 mb-8" />
                <h3 className="text-4xl font-serif text-stone-900 leading-[1.1] mb-4">
                  The Path of <br /> <span className="italic">Excellence</span>
                </h3>
                <p className="text-stone-500 text-sm tracking-widest uppercase">A New Chapter in Design</p>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">Authorized Edition</span>
                <div className="h-[1px] w-full bg-stone-200" />
              </div>

              {/* Decorative Gold Leaf Detail */}
              <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-stone-100 rounded-full blur-3xl opacity-50" />
            </div>

            {/* Animated "Pages" behind the cover */}
            <div className="absolute top-[2%] right-[-8px] w-full h-[96%] bg-stone-100 border border-stone-200 rounded-r-md -z-10 transition-transform group-hover:translate-x-2" />
            <div className="absolute top-[4%] right-[-16px] w-full h-[92%] bg-stone-200 border border-stone-300 rounded-r-md -z-20 transition-transform group-hover:translate-x-4" />
          </motion.div>
        </div>

        {/* RIGHT SIDE: PROFESSIONAL CONTACT FORM (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="max-w-xl">
            <header className="mb-12">
              <span className="text-stone-400 text-sm font-bold tracking-[0.4em] uppercase block mb-4">Contact the Author</span>
              <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-tight">
                Let’s begin a <br /> <span className="italic text-stone-500">conversation.</span>
              </h2>
            </header>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" required className="peer w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors text-stone-800 placeholder-transparent" id="name" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-stone-400 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-stone-800">Full Name</label>
                </div>

                <div className="relative">
                  <input type="email" required className="peer w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors text-stone-800 placeholder-transparent" id="email" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-stone-400 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-stone-800">Email Address</label>
                </div>
              </div>

              <div className="relative">
                <textarea rows="4" className="peer w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-stone-800 transition-colors text-stone-800 placeholder-transparent resize-none" id="msg" placeholder="Message" />
                <label htmlFor="msg" className="absolute left-0 -top-3.5 text-stone-400 text-xs uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-3.5 peer-focus:text-xs peer-focus:tracking-widest peer-focus:text-stone-800">Your Vision / Inquiry</label>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="w-full md:w-auto flex items-center justify-center gap-4 bg-stone-900 text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest transition-shadow hover:shadow-xl"
                >
                  SEND MESSAGE <FiArrowRight />
                </motion.button>

                <div className="flex gap-6 text-stone-400">
                  <a href="#" className="hover:text-stone-900 transition-colors"><FiInstagram size={20} /></a>
                  <a href="#" className="hover:text-stone-900 transition-colors"><FiTwitter size={20} /></a>
                  <a href="#" className="hover:text-stone-900 transition-colors"><FiMail size={20} /></a>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;