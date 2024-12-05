"use client";

import { ReactLenis } from "lenis/react";

import TextReveal from "./components/text-reveal";
import HeresNowText from "./components/heres-now-text";
import HowToBegin from "./components/how-to-begin";
import Anymore from "./components/anymore";
import TheEnd from "./components/the-end";
import Hero from "./components/hero";
import BuildFast from "./components/build-fast";

const Page = () => {
  return (
    <ReactLenis root>
      <Hero />

      <BuildFast />

      <div className="bg-[#F1F1F1]">
        <TextReveal />
      </div>

      <div className="h-screen bg-gray-950 flex items-center justify-center text-white relative">
        <HeresNowText />
      </div>

      <HowToBegin />
      <Anymore />
      <TheEnd />
    </ReactLenis>
  );
};

export default Page;
