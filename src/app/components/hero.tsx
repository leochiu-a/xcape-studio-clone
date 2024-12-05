import { motion } from "motion/react";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-gray-950 flex items-center justify-center text-white relative">
      <motion.h1
        className="text-9xl font-semibold text-center max-w-[1200px] origin-center absolute"
        initial={{ lineHeight: "120px" }}
        whileInView={{ lineHeight: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        FRAMER MOTION ANIMATION
      </motion.h1>
      <motion.div
        className="text-3xl text-center max-w-[850px] origin-center absolute leading-[200px]"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div>FRAMER</div>
        <div>FRAMER</div>
        <div>FRAMER</div>
      </motion.div>
    </div>
  );
};

export default Hero;
