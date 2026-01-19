import { cn } from "@/utils";

export const Container = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"div">) => {
  return (
    <div
      {...rest}
      className={cn("max-w-300 w-full mx-auto xl:px-0 px-5", className)}
    >
      {children}
    </div>
  );
};
