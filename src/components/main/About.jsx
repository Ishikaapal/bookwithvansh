import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const About = () => {
  return (
    <div className="mainContainer">
      {/* 2. THE CONTENT (Center-Pinned) */}
      <div className=" w-full insideContainer max-w-4xl  flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-background/60 backdrop-blur-md p-8 md:p-16 border border-primary/10 rounded-[4rem] text-center"
        >
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-text-primary mb-8">
            About{" "}
            <span className="text-primary italic text-3xl md:text-6xl block mt-2">
              Books With Vansh
            </span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-text-secondary leading-relaxed font-light">
            <p>
              Books With Vansh is a creative book promotion and author branding
              platform that helps writers grow their visibility in the digital
              world.
            </p>
            <p>
              We work with authors, publishers, and digital creators to promote
              books through
              <span className="text-text-primary font-medium px-2 underline decoration-primary/30 underline-offset-4">
                strategic marketing
              </span>
              , creative design, and engaging content.
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
                To help authors build strong personal brands and reach more
                readers through smart marketing strategies and modern digital
                promotion.
              </p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-primary font-bold tracking-widest text-xs uppercase mb-4">
                <span className="w-6 h-[1px] bg-primary" /> Our Approach
              </h3>
              <p className="text-base text-text-secondary">
                Combining creativity, strategy, and data to create campaigns
                tailored to your specific book genre and audience.
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
