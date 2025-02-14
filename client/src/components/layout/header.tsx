"use client";

import { cn } from "@/lib/utils";
import { HeaderResponse } from "@/types/global";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggler } from "../theme-toggler";
import { MobileSidebar } from "./mobile-sidebar";
import { NavLinks } from "./nav-links";

export const Header = ({ data }: { data: HeaderResponse }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        "flex justify-center z-50 sticky top-0 transition-all ease-in-out duration-200",
        isScrolled && "pt-3"
      )}
    >
      <div
        className={cn(
          "flex xl:w-[1200px] w-full items-center justify-between py-3 rounded-full pl-6 pr-3",
          isScrolled
            ? "shadow border border-border bg-background/50 backdrop-blur"
            : "bg-background"
        )}
      >
        <Link href={"/"} className="text-2xl font-bold relative">
          <div className="h-12 bg-primary w-10 absolute top-1/2 -translate-y-1/2 -left-4 rounded-l-full" />
          <p className="relative z-20">{data.data?.logo_text}</p>
        </Link>
        <NavLinks links={data.data?.links || []} />
        <div className="flex items-center lg:gap-0 gap-3">
          <ThemeToggler />
          <div className="lg:hidden block">
            <MobileSidebar links={data.data?.links || []} />
          </div>
        </div>
      </div>
    </header>
  );
};
