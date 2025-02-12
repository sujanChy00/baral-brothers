"use client";

import { cn } from "@/lib/utils";
import { HeaderResponse } from "@/types/global";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLinks = ({
  className,
  links,
}: {
  className?: string;
  links: HeaderResponse["data"]["links"];
}) => {
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
        {links.map(({ label, url, id }) => (
          <li
            key={id + url}
            className={cn(
              "py-2 px-3 rounded-xl hover:bg-secondary uppercase",
              pathname === url && active
            )}
          >
            <Link
              // className={"py-2 px-3 rounded-xl hover:bg-secondary"}
              href={url}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
