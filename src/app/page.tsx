"use client";

import { ReactLenis } from "lenis/react";

import TextReveal from "./components/text-reveal";
import HeresNowText from "./components/heres-now-text";
import HowToBegin from "./components/how-to-begin";
import Anymore from "./components/anymore";
import TheEnd from "./components/the-end";
import Hero from "./components/hero";
import BuildFast from "./components/build-fast";
import { useEffect, useRef } from "react";
import AnchorMenu from "./components/anchor-menu";
import TextMarquee from "./components/text-marquee";

const Page = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const buildFastRef = useRef<HTMLDivElement>(null);
  const textRevealRef = useRef<HTMLDivElement>(null);
  const heresNowTextRef = useRef<HTMLDivElement>(null);
  const howToBeginRef = useRef<HTMLDivElement>(null);
  const anymoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // prevent history restore position
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <ReactLenis root>
      <div ref={heroRef}>
        <Hero />
        <TextMarquee />
      </div>
      <div ref={buildFastRef}>
        <BuildFast />
      </div>
      <div ref={textRevealRef}>
        <TextReveal />
      </div>
      <div ref={heresNowTextRef}>
        <HeresNowText />
      </div>
      <div ref={howToBeginRef}>
        <HowToBegin />
      </div>
      <div ref={anymoreRef}>
        <Anymore />
      </div>
      <TheEnd />

      <div className="hidden md:block">
        <AnchorMenu
          heroRef={heroRef}
          buildFastRef={buildFastRef}
          textRevealRef={textRevealRef}
          heresNowTextRef={heresNowTextRef}
          howToBeginRef={howToBeginRef}
          anymoreRef={anymoreRef}
        />
      </div>
    </ReactLenis>
  );
};

export default Page;
