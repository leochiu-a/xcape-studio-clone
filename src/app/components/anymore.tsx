import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const useDisplay = (
  scrollYProgress: MotionValue<number>,
  range: [number, number],
) => {
  const opacity = useTransform(scrollYProgress, range, [0, 1]);
  const blur = useTransform(scrollYProgress, range, [20, 0]);
  const translateX = useTransform(scrollYProgress, range, [100, 0]);
  const filter = useTransform(() => `blur(${blur.get()}px)`);
  const translate = useTransform(() => `${translateX.get()}px 0px`);

  return {
    opacity,
    filter,
    translate,
  };
};

const Anymore = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const background = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    ["#030712", "#F1F1F1"],
  );
  const color = useTransform(
    scrollYProgress,
    [0.6, 0.7],
    ["#F1F1F1", "#030712"],
  );
  const style1 = useDisplay(scrollYProgress, [0.0, 0.2]);
  const style2 = useDisplay(scrollYProgress, [0.15, 0.25]);
  const style3 = useDisplay(scrollYProgress, [0.2, 0.3]);
  const style4 = useDisplay(scrollYProgress, [0.25, 0.35]);
  const style5 = useDisplay(scrollYProgress, [0.3, 0.4]);
  const style6 = useDisplay(scrollYProgress, [0.35, 0.45]);
  const style7 = useDisplay(scrollYProgress, [0.4, 0.5]);
  const style8 = useDisplay(scrollYProgress, [0.45, 0.55]);
  const style9 = useDisplay(scrollYProgress, [0.5, 0.6]);

  return (
    <motion.div ref={ref} style={{ background }} className="overflow-hidden">
      <div className="mx-auto w-full max-w-7xl space-y-4 px-10 py-20 xl:px-4">
        <motion.h1 className="heading-md" style={{ ...style1, color }}>
          THE
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style2, color }}>
          STANDARD
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style3, color }}>
          LOREM
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style4, color }}>
          IPSUM
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style5, color }}>
          PASSAGE
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style6, color }}>
          USED
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style7, color }}>
          SINCE
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style8, color }}>
          THE
        </motion.h1>
        <motion.h1 className="heading-md" style={{ ...style9, color }}>
          1500s
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default Anymore;
