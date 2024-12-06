import { motion } from "motion/react";
import React from "react";

const HeroMD = () => {
  return (
    <>
      <motion.h1
        className="heading-lg absolute max-w-[1200px] origin-center text-center"
        initial={{ lineHeight: "120px" }}
        whileInView={{ lineHeight: "200px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        FRAMER MOTION ANIMATION
      </motion.h1>
      <motion.div
        className="absolute max-w-[850px] origin-center text-center text-3xl leading-[200px]"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div>FRAMER</div>
        <div>FRAMER</div>
        <div>FRAMER</div>
      </motion.div>
    </>
  );
};

const HeroXS = () => {
  return (
    <>
      <motion.h1
        className="heading-lg max-w-[1200px] text-center"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        FRAMER MOTION ANIMATION
      </motion.h1>
      <motion.div
        className="max-w-[850px] text-center text-3xl"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
      >
        <div>FRAMER</div>
        <div>FRAMER</div>
        <div>FRAMER</div>
      </motion.div>
    </>
  );
};

const Hero = () => {
  return (
    <div className="h-[100vh] bg-gray-950 text-white">
      <div className="relative hidden h-full w-full place-items-center md:grid">
        <HeroMD />
      </div>
      <div className="relative block h-full w-full place-content-center md:hidden">
        <HeroXS />
      </div>
    </div>
  );
};

export default Hero;
