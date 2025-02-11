"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggler() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      className="flex items-center justify-between w-[4.5rem] h-10 px-2 rounded-full bg-secondary relative z-20"
    >
      <div
        className={cn(
          "absolute h-8 w-8 dark:bg-background bg-gray-400 shadow-inner rounded-full -z-10 transition-all ease-in-out duration-300 left-0.5",
          theme === "light" ? "translate-x-0" : "translate-x-[2.2rem]"
        )}
      />
      <Sun size={18} />
      <Moon size={18} />
    </button>
  );
}
