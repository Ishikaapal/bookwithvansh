import { motion } from "framer-motion";
import { FiInstagram, FiArrowUpRight, FiUsers, FiMail, FiPhone, FiTarget, FiEye } from "react-icons/fi";
import instaSS from "../../assets/media/Insta.jpeg";
import bgImage from "../../assets/media/1.png";

const About = () => {
  return (
    <div className="mainContainer relative overflow-hidden py-16 md:py-24">
      
      {/* --- BACKGROUND IMAGE LAYER --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="background" 
          className="w-full h-full object-cover opacity-[0.08] pointer-events-none" 
        />
      </div>
      
      {/* --- PREMIUM DECORATION --- */}
      <div className="absolute top-0 left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-radial from-amber-100/40 to-transparent blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-1" />

      <div className="insideContainer relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20 px-4">
          <span className="inline-block py-1.5 px-5 rounded-full border border-stone-100 bg-white text-primary text-[10px] md:text-xs font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase mb-6 md:mb-8 backdrop-blur-md shadow-sm">
            Meet Your Strategic Partner
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-[#1A1A1B] leading-[1.1]"
          >
            About <span className="italic text-primary">Books With Vansh</span>
          </motion.h2 >
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch px-4">
          
          {/* LEFT SIDE: NARRATIVE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-background p-8 md:p-12 lg:p-14 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-stone-100 flex flex-col justify-between"
          >
            <div>
              <div className="space-y-6 text-base md:text-lg lg:text-xl text-stone-600 leading-relaxed font-light mb-10">
                <p>
                  Founded by a dedicated literary strategist, <span className="text-[#1A1A1B] font-medium">Books With Vansh</span> is a premier creative book promotion and author branding platform designed to help writers amplify their voice.
                </p>
                <p className="text-primary font-semibold text-2xl md:text-3xl font-serif italic leading-snug">
                  "We don’t just promote books. We craft author legacies."
                </p>
              </div>

              {/* MISSION & VISION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-100 group transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm border border-stone-100">
                    <FiTarget size={20} />
                  </div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-[#1A1A1B] mb-2">Our Mission</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    Empowering authors to build enduring personal brands through precision-targeted marketing.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-stone-100 group transition-all">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary mb-4 shadow-sm border border-stone-100">
                    <FiEye size={20} />
                  </div>
                  <h4 className="text-xs font-bold tracking-widest uppercase text-[#1A1A1B] mb-2">Our Vision</h4>
                  <p className="text-sm text-stone-500 leading-relaxed">
                    To become the global standard for book promotion through creative excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs - Properly Aligned */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 pt-8 border-t border-stone-100">
               <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-[10px] md:text-xs transition-all hover:scale-105 shadow-lg shadow-primary/20">
                  <FiArrowUpRight size={16} /> Partner with us
               </button>
               
               <div className="flex gap-8 text-stone-400">
                  <a href="#" className="hover:text-primary transition-colors"><FiInstagram size={20} /></a>
                  <a href="mailto:bookswithvansh@gmail.com" className="hover:text-primary transition-colors"><FiMail size={20} /></a>
                  <a href="tel:+" className="hover:text-primary transition-colors"><FiPhone size={20} /></a>
               </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: SOCIAL PROOF */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center lg:items-end perspective-[1500px]"
          >
            {/* Soft Glow behind image */}
            <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-primary/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
            
            <motion.div 
              whileHover={{ rotateY: -5, rotateX: 2 }}
              className="relative w-full max-w-[340px] md:max-w-[380px] bg-white rounded-3xl p-4 md:p-6 shadow-2xl border border-stone-100 z-10"
            >
               <div className="flex justify-between items-center mb-4 pb-2 border-b border-stone-100 text-stone-900">
                  <span className="text-xs font-bold tracking-tight">bookswithvansh</span>
                  <FiInstagram className="text-primary" />
               </div>

               <img 
                  src={instaSS} 
                  alt="Instagram Account" 
                  className="w-full h-auto object-cover rounded-xl shadow-inner border border-stone-50"
               />
               
               <div className="absolute inset-0 border-2 border-primary/20 rounded-3xl pointer-events-none" />
            </motion.div>

            {/* FOLLOWER BADGE - Repositioned for Mobile */}
            <div className="absolute -bottom-6 left-4 sm:left-10 lg:-left-4 bg-white border border-stone-100 p-4 md:p-6 rounded-2xl flex flex-col items-center text-center shadow-xl z-20 -rotate-3 lg:-rotate-6">
               <div className="flex items-center gap-2 text-primary mb-1">
                  <FiUsers className="text-xl md:text-2xl" />
                  <span className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1A1A1B] tracking-tight">99.5K</span>
               </div>
               <span className="text-[8px] md:text-[10px] uppercase font-bold tracking-widest text-stone-400">Followers reached</span>
            </div>
          </motion.div>

        </div>
      </div>
      
      {/* TRANSITION OVERLAY */}
      <div className="absolute bottom-0 inset-x-0 h-24 md:h-40 bg-gradient-to-t from-background via-transparent to-transparent z-20 pointer-events-none" />
    </div>
  );
};

export default About;