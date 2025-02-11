import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Container = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "xl:w-[1200px] w-full mx-auto xl:px-0 px-5",
        props.className
      )}
    />
  );
};
