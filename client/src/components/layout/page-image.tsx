"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

type Props = React.ComponentProps<"div"> & {
  url?: string;
  alt: string;
  src?: string;
};

export const PageImage = ({ src, alt, url, ...props }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <div
      className={cn(
        "relative overflow-hidden h-[65dvh] w-full group",
        !!url && "cursor-pointer",
        !isImageLoaded && "animate-pulse bg-secondary",
        props.className
      )}
      style={{
        clipPath: "polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)",
      }}
      onClick={url ? () => window.open(url, "_blank") : undefined}
    >
      {!!url && (
        <div className="inset-0 absolute bg-background/50 z-30 group-hover:opacity-100 opacity-0 transition-all duration-400 ease-in-out" />
      )}
      <Image
        onLoad={() => setIsImageLoaded(true)}
        onError={() => setIsImageLoaded(true)}
        loading="lazy"
        src={src || ""}
        alt={alt}
        className={cn("object-cover object-center h-full w-full")}
        fill
      />
    </div>
  );
};
