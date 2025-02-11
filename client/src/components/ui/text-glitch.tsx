"use client";
import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  revealText?: React.ReactNode;
  className?: string;
}

const TextGlitch: FC<Props> = ({ children, revealText, className }) => {
  return (
    <div className={cn("group relative overflow-hidden", className)}>
      <span className="invisible">Text Glitch Effect</span>
      <div className="absolute left-0 top-0 transition duration-300 ease-in-out group-hover:-translate-y-[120%]">
        {children}
      </div>
      <span className="absolute left-0 top-0 translate-y-full transition duration-300 ease-in-out group-hover:translate-y-0">
        {revealText}
      </span>
    </div>
  );
};

export default TextGlitch;
