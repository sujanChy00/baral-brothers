import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as React from "react";

import { getAvatarName } from "@/lib/get-avatar-name";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

type AvatarProps = React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>;

const AvatarContent = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
AvatarContent.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = ({
  fallback,
  src,
  alt,
  className,
  fallbackClassName,
  imageClassName,
  ...props
}: {
  fallback?: string;
  src?: string | null;
  alt?: string;
  className?: HTMLDivElement["className"];
  fallbackClassName?: HTMLDivElement["className"];
  imageClassName?: HTMLDivElement["className"];
} & AvatarProps) => {
  return (
    <AvatarContent
      {...props}
      className={cn(
        "items-center justify-center",
        !fallback && !src && "bg-slate-100",
        className
      )}
    >
      {!src && !fallback && <User className="text-gray-600" />}
      {!!src && <AvatarImage src={src} alt={alt} className={imageClassName} />}
      {!!fallback && (
        <AvatarFallback
          className={cn("text-gray-400 uppercase", fallbackClassName)}
        >
          {getAvatarName(fallback)}
        </AvatarFallback>
      )}
    </AvatarContent>
  );
};

export { Avatar, AvatarFallback, AvatarImage };
