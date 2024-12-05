import { motion } from "motion/react";

const TheEnd = () => {
  return (
    <div className="bg-[#F1F1F1] py-20">
      <motion.div
        className="rounded-3xl w-[90%] uppercase bg-gray-950 text-8xl p-20 mx-auto text-center font-semibold color text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Inspired from XSCAPE.STUDIO
      </motion.div>

      <div className="uppercase text-8xl mt-20 mx-auto text-center text-gray-950 font-semibold">
        LEO.WEB.DEV
      </div>
    </div>
  );
};

export default TheEnd;
