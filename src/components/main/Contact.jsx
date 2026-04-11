import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiArrowRight, FiInstagram, FiLinkedin, FiMail } from 'react-icons/fi';

// 1. IMPORT YOUR IMAGE
import contactBg from '../../assets/media/Contact.png';

const Contact = () => {
  const containerRef = useRef(null);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center py-24 px-6 overflow-hidden bg-white"
    >
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={contactBg} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-30" // Lower opacity to keep the light theme feel
        />
        {/* Cinematic Overlays: Keeps text readable and merges image with the theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-[#FAF9F6] z-6" />
        <div className="absolute inset-0 bg-[#FAF9F6]/40 backdrop-blur-[2px] z-10" />
      </div>
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-20">
        
        {/* LEFT SIDE: THE PREMIUM BOOK SCULPTURE */}
        <div className="lg:col-span-5 relative flex justify-center items-center perspective-[1500px]">
          <div className="absolute w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full" />
          
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-[280px] h-[420px] md:w-[340px] md:h-[500px] shadow-[40px_40px_90px_rgba(0,0,0,0.1)]"
          >
            <div className="absolute left-0 top-0 w-[45px] h-full bg-[#1A1A1B] z-20 rounded-l-sm flex items-center justify-center">
               <div className="rotate-90 whitespace-nowrap text-[9px] tracking-[0.5em] text-primary font-bold uppercase">
                  Books With Vansh 
               </div>
            </div>

            <div className="absolute inset-0 ml-[43px] bg-white rounded-r-md border-y border-r border-stone-100 p-10 flex flex-col justify-between overflow-hidden">
              
              
              <div className="relative z-10">
                <div className="w-10 h-[3px] bg-primary mb-8" />
                <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1B] leading-[1.1] mb-2">
                  The <br /> <span className="italic text-primary">Masterpiece</span> <br /> Blueprint
                </h3>
                <p className="text-stone-400 text-[10px] tracking-[0.2em] uppercase font-bold mt-4">Elevating Author Brands</p>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary text-xs font-serif">V</div>
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Premium Strategy</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FAF9F6] border border-stone-100 rounded-full flex items-center justify-center -rotate-12 shadow-sm">
                <span className="text-[8px] font-black text-primary text-center leading-tight uppercase tracking-tighter">
                    Crafted <br/> with <br/> Passion
                </span>
              </div>
            </div>

            <div className="absolute top-[1.5%] right-[-10px] w-full h-[97%] bg-stone-50 border border-stone-200 rounded-r-md -z-10" />
            <div className="absolute top-[3%] right-[-20px] w-full h-[94%] bg-stone-100 border border-stone-200 rounded-r-md -z-20" />
          </motion.div>
        </div>

        {/* RIGHT SIDE: CONTACT FORM */}
        <div className="lg:col-span-7 lg:pl-12">
          <div className="max-w-xl">
            <header className="mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary" />
                <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase">Connect</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1B] leading-[1.05]">
                Write your <br /> <span className="italic text-primary underline decoration-primary/20 underline-offset-8">next chapter.</span>
              </h2>
            </header>

            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <input type="text" required className="peer w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-primary transition-colors text-[#1A1A1B] placeholder-transparent" id="name" placeholder="Name" />
                  <label htmlFor="name" className="absolute left-0 -top-4 text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary">Full Name</label>
                </div>

                <div className="relative group">
                  <input type="email" required className="peer w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-primary transition-colors text-[#1A1A1B] placeholder-transparent" id="email" placeholder="Email" />
                  <label htmlFor="email" className="absolute left-0 -top-4 text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary">Email Address</label>
                </div>
              </div>

              <div className="relative group">
                <textarea rows="3" className="peer w-full bg-transparent border-b border-stone-300 py-3 focus:outline-none focus:border-primary transition-colors text-[#1A1A1B] placeholder-transparent resize-none" id="msg" placeholder="Message" />
                <label htmlFor="msg" className="absolute left-0 -top-4 text-stone-500 text-[10px] uppercase tracking-[0.2em] font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-primary">How can we help your book grow?</label>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-10 pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full md:w-auto flex items-center justify-center gap-4 bg-[#1A1A1B] text-white px-12 py-5 rounded-full font-bold text-xs tracking-[0.2em] transition-all hover:bg-primary hover:shadow-2xl shadow-primary/20"
                >
                  SEND ENQUIRY <FiArrowRight className="text-lg" />
                </motion.button>

                <div className="flex gap-8 text-stone-500">
                  <a href="https://www.instagram.com/bookswithvansh/" className="hover:text-primary transition-colors duration-300"><FiInstagram size={22} /></a>
                  <a href="#" className="hover:text-primary transition-colors duration-300"><FiLinkedin size={22} /></a>
                  <a href="mailto:bookswithvansh@gmail.com" className="hover:text-primary transition-colors duration-300"><FiMail size={22} /></a>
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