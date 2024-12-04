import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
  Variant,
  Variants,
} from "motion/react";
import { useRef, useState } from "react";

const HowToBegin = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // free
  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const blur1 = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const translate1Y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
  const filter1 = useTransform(() => `blur(${blur1.get()}px)`);
  const translate1 = useTransform(() => `0px ${translate1Y.get()}px`);

  // prototype
  const opacity2 = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);
  const blur2 = useTransform(scrollYProgress, [0.4, 0.7], [20, 0]);
  const translate2Y = useTransform(scrollYProgress, [0.4, 0.7], [100, 0]);
  const filter2 = useTransform(() => `blur(${blur2.get()}px)`);
  const translate2 = useTransform(() => `0px ${translate2Y.get()}px`);

  const [current, setCurrent] = useState<0 | 1 | 2>(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.4) {
      setCurrent(0);
    } else if (latest < 0.7) {
      setCurrent(1);
    } else {
      setCurrent(2);
    }
  });
  const contents = [];

  return (
    <div className="h-[250vh] bg-gray-950" ref={ref}>
      <div className="h-screen sticky top-0 flex items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between gap-20 w-full">
          <div className="space-y-8">
            <h1 className="text-8xl font-semibold text-white">
              Framer & Motion
            </h1>
            <motion.h1
              className="text-8xl font-semibold text-white"
              style={{
                opacity: opacity1,
                filter: filter1,
                translate: translate1,
              }}
            >
              Free
            </motion.h1>
            <motion.h1
              className="text-8xl font-semibold text-white"
              style={{
                opacity: opacity2,
                filter: filter2,
                translate: translate2,
              }}
            >
              Prototype
            </motion.h1>
          </div>

          <AnimatePresence mode="popLayout">
            {current === 0 && (
              <motion.div
                key={0}
                className="rounded-2xl border-white border-[1px] w-[360px] p-8 text-xl"
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(20px)" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </motion.div>
            )}
            {current === 1 && (
              <motion.div
                key={1}
                className="rounded-2xl border-white border-[1px] w-[360px] p-8 text-xl"
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(20px)" }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </motion.div>
            )}
            {current === 2 && (
              <motion.div
                key={2}
                className="rounded-2xl border-white border-[1px] w-[360px] p-8 text-xl"
                initial={{ opacity: 0, filter: "blur(20px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(20px)" }}
              >
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HowToBegin;
