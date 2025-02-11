"use client";

import { useTheme } from "next-themes";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Vortex } from "../ui/vortex";

export const EngineeringBanner = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-[55rem] overflow-hidden">
      <Vortex
        key={theme}
        backgroundColor={theme === "dark" ? "#000000" : "#0a0a0a"}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <TextGenerateEffect
          duration={0.4}
          words="  Discover the Latest in Engineering and Technology Innovations and Trends."
          className="text-6xl font-thin font-lexend md:w-[65%] text-center leading-[5.5rem] tracking-wide"
        />
      </Vortex>
    </div>
  );
};
