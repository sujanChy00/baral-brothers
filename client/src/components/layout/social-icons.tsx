import { cn } from "@/lib/utils";
import { IconType } from "@/types/general";
import {
  Facebook,
  Instagram,
  Link,
  Linkedin,
  Music,
  X,
  Youtube,
} from "lucide-react";

type URL = {
  type: IconType;
  url?: string;
};
interface Props {
  urls?: URL[];
  className?: string;
}

export const SocialIcons = ({ urls, className }: Props) => {
  const icons: Record<IconType, React.ReactNode> = {
    facebook: <Facebook />,
    instagram: <Instagram />,
    youtube: <Youtube />,
    linkedIn: <Linkedin />,
    twitter: <X />,
    website: <Link />,
    tiktok: <Music />,
  };
  const iconClassName: Record<IconType, string> = {
    facebook: "bg-blue-600",
    twitter: "bg-blue-400",
    instagram: "bg-pink-500",
    youtube: "bg-red-600",
    linkedIn: "bg-blue-700",
    website: "bg-green-600",
    tiktok: "bg-yellow-500",
  };
  const iconHoverClassName: Record<IconType, string> = {
    facebook: "bg-blue-800",
    twitter: "bg-blue-600",
    instagram: "bg-pink-700",
    youtube: "bg-red-800",
    linkedIn: "bg-blue-900",
    website: "bg-green-700",
    tiktok: "bg-yellow-700",
  };

  if (!urls || urls.length === 0) return null;
  return (
    <div className={cn("space-y-4 absolute top-0 -right-14", className)}>
      {urls.map(
        (item, i) =>
          !!item.url && (
            <a
              target="_blank"
              className={cn(
                "h-10 w-10 flex items-center justify-center rounded-xl relative overflow-hidden group",
                iconClassName[item.type]
              )}
              href={item.url}
              key={i}
            >
              <div
                className={cn(
                  "absolute inset-0 scale-50 opacity-0 group-hover:opacity-100 origin-center transition-all duration-200 ease-in-out group-hover:scale-100",
                  iconHoverClassName[item.type]
                )}
              />
              <div className="relative z-20">{icons[item.type]}</div>
            </a>
          )
      )}
    </div>
  );
};
