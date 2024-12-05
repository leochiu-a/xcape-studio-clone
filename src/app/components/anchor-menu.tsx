import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useMotionValueEvent,
  useScroll,
  UseScrollOptions,
  useTransform,
} from "motion/react";
import { RefObject, useEffect, useState } from "react";

const Active = ({ width }: { width: MotionValue<string> }) => {
  return (
    <motion.div
      className="absolute border-[1px] rounded-md border-white w-full h-full top-0 left-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="absolute h-full top-0 left-0 bg-white"
        style={{ width }}
      ></motion.div>
    </motion.div>
  );
};

const useFillWidth = ({
  target,
  offset = ["start 0.6", "end 0.6"],
}: UseScrollOptions) => {
  const { scrollYProgress } = useScroll({
    target: target,
    offset: offset,
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const defaultIsInView = useInView(target!, { once: true });
  const [isInView, setIsInView] = useState(defaultIsInView);

  useEffect(() => {
    setIsInView(defaultIsInView);
  }, [defaultIsInView]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value === 1) {
      setIsInView(false);
    } else {
      setIsInView(true);
    }
  });

  return { width, isInView };
};

const AnchorMenu = ({
  heroRef,
  buildFastRef,
  textRevealRef,
  heresNowTextRef,
  howToBeginRef,
  anymoreRef,
}: {
  heroRef: RefObject<HTMLDivElement>;
  buildFastRef: RefObject<HTMLDivElement>;
  textRevealRef: RefObject<HTMLDivElement>;
  heresNowTextRef: RefObject<HTMLDivElement>;
  howToBeginRef: RefObject<HTMLDivElement>;
  anymoreRef: RefObject<HTMLDivElement>;
}) => {
  const hero = useFillWidth({
    target: heroRef,
    offset: ["end end", "end start"],
  });
  const buildFast = useFillWidth({
    target: buildFastRef,
    offset: ["start start", "end 0.6"],
  });
  const textReveal = useFillWidth({ target: textRevealRef });
  const heresNowText = useFillWidth({ target: heresNowTextRef });
  const howToBegin = useFillWidth({ target: howToBeginRef });
  const anymore = useFillWidth({ target: anymoreRef });

  const menuVisible =
    hero.isInView ||
    buildFast.isInView ||
    textReveal.isInView ||
    heresNowText.isInView ||
    howToBegin.isInView ||
    anymore.isInView;

  const handleScrollIntoView = (ref: RefObject<HTMLDivElement>) => () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {menuVisible && (
        <motion.div
          className="fixed bottom-10 w-screen"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gray-300 bg-opacity-30 p-1 backdrop-blur-lg mx-auto w-fit rounded-md flex gap-1">
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(heroRef)}
            >
              <span className="relative z-10">WE&apos;RE</span>
              {hero.isInView && <Active width={hero.width} />}
            </button>
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(buildFastRef)}
            >
              <span className="relative z-10">NOT</span>
              {!hero.isInView && buildFast.isInView && (
                <Active width={buildFast.width} />
              )}
            </button>
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(textRevealRef)}
            >
              <span className="relative z-10">LOOKING</span>
              {!buildFast.isInView && textReveal.isInView && (
                <Active width={textReveal.width} />
              )}
            </button>
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(heresNowTextRef)}
            >
              <span className="relative z-10">FOR</span>
              {!textReveal.isInView && heresNowText.isInView && (
                <Active width={heresNowText.width} />
              )}
            </button>
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(howToBeginRef)}
            >
              <span className="relative z-10">CLIENT</span>
              {!heresNowText.isInView && howToBegin.isInView && (
                <Active width={howToBegin.width} />
              )}
            </button>
            <button
              className="px-4 py-2 text-gray-400 transition duration-300 hover:bg-gray-600 rounded-md relative overflow-hidden"
              onClick={handleScrollIntoView(anymoreRef)}
            >
              <span className="relative z-10">ANYMORE</span>
              {!howToBegin.isInView && anymore.isInView && (
                <Active width={anymore.width} />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnchorMenu;
