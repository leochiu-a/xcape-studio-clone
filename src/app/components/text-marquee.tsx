import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const TextMarquee = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const [repetition, setRepetition] = useState(1);
  const textRef = useRef<HTMLDivElement>(null);

  const x = useTransform(baseX, (x) => `${wrap(-100 / repetition, 0, x)}%`);

  const direction = useRef<1 | -1>(1);
  useAnimationFrame(() => {
    const velocity = 0.1;

    const diff = scrollY.get() - (scrollY.getPrevious() ?? 0);
    direction.current = diff > 0 ? 1 : -1;

    const moveX = velocity * direction.current;
    baseX.set(baseX.get() + moveX);
  });

  useEffect(() => {
    const calculateRepetitions = () => {
      if (textRef.current) {
        const containerWidth = window.innerWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetition(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-gray-950 text-white">
      <motion.div className="inline-block text-2xl" style={{ x }}>
        {Array.from({ length: repetition }).map((_, i) => (
          <span key={i} ref={textRef}>
            Framer Motion{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TextMarquee;
