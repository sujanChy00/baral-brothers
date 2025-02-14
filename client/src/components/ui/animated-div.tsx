"use client";

import {
  useIntersectionObserver,
  UseIntersectionObserverOptions,
} from "@/lib/use-intersection-observer";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Props = Omit<UseIntersectionObserverOptions, "onChange"> & {
  animate: string;
  className?: string;
  children?: React.ReactNode;
};

export const AnimatedDiv = ({
  animate,
  className,
  children,
  ...props
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref } = useIntersectionObserver({
    onChange(isIntersecting, entry) {
      setIsVisible(isIntersecting);
    },
    freezeOnceVisible: props.freezeOnceVisible || true,
    ...props,
  });
  return (
    <div
      ref={ref}
      className={cn(className, "animate__animated", isVisible && animate)}
    >
      {children}
    </div>
  );
};
