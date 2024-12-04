import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max: number) => Math.floor(Math.random() * max);

const HeresNowText = () => {
  const text = "HERE'S NOW".split("");
  const [displayText, setDisplayText] = useState(text);
  const [trigger, setTrigger] = useState(false);
  const iterations = useRef(0);

  const triggerAnimation = () => {
    setTrigger(true);
  };

  useEffect(() => {
    if (trigger) {
      const interval = setInterval(() => {
        if (iterations.current < text.length) {
          setDisplayText((t) =>
            t.map((l, i) =>
              l === " "
                ? l
                : i <= iterations.current
                ? text[i]
                : alphabets[getRandomInt(26)]
            )
          );
          iterations.current = iterations.current + 0.5;
        } else {
          setDisplayText(text);
          setTrigger(false);
          clearInterval(interval);
          iterations.current = 0;
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [displayText, trigger]);

  return (
    <h1
      className="text-8xl font-semibold text-center overflow-hidden font-mono py-2"
      onMouseEnter={triggerAnimation}
    >
      {displayText.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default HeresNowText;
