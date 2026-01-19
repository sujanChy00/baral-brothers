import { cn } from "@/utils";

export const Separator = ({ className }: { className?: string }) => {
  return <div className={cn("h-px bg-border", className)} />;
};
