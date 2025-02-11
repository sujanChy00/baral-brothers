"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/nepali-dining",
    label: "NEPALESE DINING",
  },
  {
    href: "/baral-engineering",
    label: "BARAL ENGINEERING",
  },
  {
    href: "/sierra-japan-enterprises",
    label: "Sierra Japan Enterprises",
  },
  {
    href: "/sasto-sulav-express",
    label: "Sasto Sulav Express",
  },
  {
    href: "/about",
    label: "ABOUT",
  },
];

export const NavLinks = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const active = "bg-secondary";

  return (
    <nav>
      <ul
        className={cn(
          "lg:flex items-center font-medium text-sm hidden",
          className
        )}
      >
        {links.map(({ href, label }) => (
          <li
            key={href}
            className={cn(
              "py-2 px-3 rounded-xl hover:bg-secondary uppercase",
              pathname === href && active
            )}
          >
            <Link
              // className={"py-2 px-3 rounded-xl hover:bg-secondary"}
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
