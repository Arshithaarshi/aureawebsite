import { motion } from "framer-motion";

const BackgroundVideo = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        AUREA
      </motion.h1>
    </div>
  );
};

export default BackgroundVideo;
