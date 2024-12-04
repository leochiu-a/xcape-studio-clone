"use client";

import { PropsWithChildren, useMemo, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useWindowSize } from "usehooks-ts";

type WordType = { word: string; range: [number, number] };

const TextRevealByWord = ({ paragraphs }: { paragraphs: string[] }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const paragraphWords = useMemo(() => {
    const arr = paragraphs.map((text) => text.split(" "));
    const totalWords = arr.reduce((acc, cur) => acc + cur.length, 0) * 2;

    let accumulatedWords = 0;
    return arr.reduce<WordType[][]>((acc, cur, index) => {
      if (index > 0) {
        accumulatedWords += arr[index - 1].length;
      }

      const words: WordType[] = cur.map((word, wordIndex) => {
        const start = (accumulatedWords + wordIndex) / totalWords;
        const end = (accumulatedWords + wordIndex + 1) / totalWords;
        return { word, range: [start, end] };
      });

      acc.push(words);

      return acc;
    }, []);
  }, [paragraphs]);

  const opacityOfText = useTransform(
    scrollYProgress,
    [0, 0.5, 0.6],
    [1, 1, 0.2]
  );

  const width = useTransform(scrollYProgress, [0.6, 1], [400, windowWidth]);
  const height = useTransform(scrollYProgress, [0.6, 1], [300, windowHeight]);
  const opacityOfCard = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);

  return (
    <div className="h-[200vh] relative" ref={ref}>
      <div className="sticky top-0 h-screen overflow-clip">
        <div className="space-y-2 pt-12 max-w-3xl mx-auto">
          {paragraphWords.map((paragraph, pIndex) => (
            <motion.p
              key={pIndex}
              className="text-4xl p-3 flex flex-wrap"
              style={{ opacity: opacityOfText }}
            >
              {paragraph.map((word, wIndex) => {
                return (
                  <Word
                    key={wIndex}
                    progress={scrollYProgress}
                    range={word.range}
                  >
                    {word.word}
                  </Word>
                );
              })}
            </motion.p>
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="bg-gray-950 rounded-xl grid place-content-center"
            style={{ width, height, opacity: opacityOfCard }}
          >
            <div className="text-3xl text-white w-[400px] h-[300px] p-10">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC.
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Word = ({
  children,
  progress,
  range,
}: PropsWithChildren<{
  progress: MotionValue<number>;
  range: [number, number];
}>) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <motion.span style={{ opacity: opacity }} className="text-gray-950">
        {children}
      </motion.span>
    </span>
  );
};

const TextReveal = () => {
  return (
    <TextRevealByWord
      paragraphs={[
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      ]}
    />
  );
};

export default TextReveal;
