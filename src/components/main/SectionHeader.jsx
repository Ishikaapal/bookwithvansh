import { motion } from "framer-motion";

const SectionHeader = ({ headerSpan, headerH2, headerSpanText }) => {
  return (
    <div className="headerMain">
      <span className="headerSpan">
        {headerSpan}
      </span>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="headerH2"
      >
        {headerH2}{" "}
        <span className="italic text-primary">
          {headerSpanText}
        </span>
      </motion.h2>
    </div>
  );
};

export default SectionHeader;