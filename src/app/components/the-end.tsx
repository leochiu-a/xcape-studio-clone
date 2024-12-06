import { motion } from "motion/react";

const TheEnd = () => {
  return (
    <div className="bg-[#F1F1F1] py-20">
      <motion.div
        className="heading-md rounded-3xl w-[90%] uppercase bg-gray-950 p-8 lg:p-20 mx-auto text-center color text-white"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <div className="max-w-[1000px] mx-auto">Inspired from XSCAPE STUDIO</div>
      </motion.div>

      <div className="heading-md uppercase mt-20 mx-auto text-center text-gray-950">
        LEO.WEB.DEV
      </div>
    </div>
  );
};

export default TheEnd;
