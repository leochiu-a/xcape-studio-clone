"use client";

import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "motion/react";
import { useLayoutEffect, useRef, useState } from "react";
import TextReveal from "./components/text-reveal";

const Page = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [numberOfCards, setNumberOfCards] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // h1 - 1
  const opacity1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.5],
    [0, 1, 1, 0]
  );
  const blur1 = useTransform(
    scrollYProgress,
    [0, 0.25, 0.4, 0.5],
    [20, 0, 0, 20]
  );
  const filter1 = useTransform(() => `blur(${blur1.get()}px)`);
  // h1 - 2
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.45], [0, 1]);
  const blur2 = useTransform(scrollYProgress, [0.4, 0.45], [20, 0]);
  const filter2 = useTransform(() => `blur(${blur2.get()}px)`);

  // cards reveal animation
  const scale = useTransform(scrollYProgress, [0.4, 0.5], [0.02, 1.25]);

  useLayoutEffect(() => {
    function calculateCards() {
      if (ref.current) {
        const h = ref.current.clientHeight / 2;
        const w = ref.current.clientWidth;
        const cardHeight = 300;
        const cardWidth = 200;

        const rows = Math.ceil(h / cardHeight); // 確保超過高度
        const columns = Math.ceil(w / cardWidth) + 1; // 確保超過寬度

        // 總卡片數量
        setNumberOfCards(rows * columns);
      }
    }

    calculateCards();
    window.addEventListener("resize", calculateCards);

    return () => {
      window.removeEventListener("resize", calculateCards);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="h-screen bg-gray-950 flex items-center justify-center text-white relative">
        <h1 className="text-8xl font-semibold text-center max-w-[650px]">
          FRAMER MOTION ANIMATION
        </h1>
      </div>
      <motion.div className="h-[200vh] bg-gray-950" ref={ref}>
        <div className="max-w-screen h-screen flex items-center justify-center sticky top-0 overflow-clip">
          <motion.h1
            className="text-8xl font-semibold text-center max-w-[650px] text-white absolute z-10"
            style={{
              opacity: opacity1,
              filter: filter1,
            }}
          >
            ANYONE CAN BUILD FAST TODAY
          </motion.h1>
          <motion.h1
            className="text-8xl font-semibold text-center max-w-[700px] text-gray-950 absolute z-10"
            style={{
              opacity: opacity2,
              filter: filter2,
            }}
          >
            Let&apos;s build with Framer Motion
          </motion.h1>
          <div className="absolute min-h-screen w-[120%] grid grid-cols-[repeat(auto-fill,200px)] grid-rows-[repeat(auto-fill,300px)] place-content-center">
            {Array.from({ length: numberOfCards }).map((_, index) => (
              <motion.div
                key={index}
                className="rounded-xl bg-[#F1F1F1]"
                style={{ scale }}
              ></motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="bg-[#F1F1F1]">
        <TextReveal />
      </div>
    </ReactLenis>
  );
};

export default Page;
