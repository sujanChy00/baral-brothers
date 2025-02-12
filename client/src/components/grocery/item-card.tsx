import { truncateString } from "@/lib/truncate-string";
import { cn } from "@/lib/utils";
import { ItemsResponse } from "@/types/grocery";
import Markdown from "react-markdown";
import { Card, CardContent, CardHeader } from "../ui/card";
import { StrapiImage } from "../ui/strapi-image";
import { Tooltip } from "../ui/tooltip";
export interface ItemCardProps {
  tags?: string[];
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function ItemCard({
  className,
  item,
}: {
  item: ItemsResponse;
  className?: string;
}) {
  return (
    <a
      href="https://tetoteto.co.jp/shop/sasto-sulav-express"
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      <Card className={cn("rounded-xl group hover:border-primary", className)}>
        <CardHeader className="h-56 p-0 rounded-t-xl overflow-hidden relative">
          <StrapiImage
            fill
            sizes="100vw"
            alt={item.title}
            src={item.image?.url || ""}
            className="object-cover h-full w-full group-hover:scale-125 transition-all ease-in-out duration-500"
          />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <Tooltip label="Mix Pickle 400g (Ambika)">
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </Tooltip>
          <Markdown className="markdownd text-secondary-foreground">
            {truncateString(item.desc, 40)}
          </Markdown>
        </CardContent>
      </Card>
    </a>
  );
}
