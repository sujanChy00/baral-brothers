import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tooltip } from "../ui/tooltip";
export interface ItemCardProps {
  tags?: string[];
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

export function ItemCard({ className }: { className?: string }) {
  return (
    <a
      href="https://tetoteto.co.jp/shop/sasto-sulav-express"
      target="_blank"
      rel="noreferrer"
      className="block"
    >
      <Card className={cn("rounded-xl group hover:border-primary", className)}>
        <CardHeader className="h-56 p-0 rounded-t-xl overflow-hidden relative">
          <Image
            fill
            sizes="100vw"
            alt="image"
            src="https://cdn.tetoteto.co.jp/item-images/a927942/a927942_1_1671590215517.jpeg"
            className="object-cover h-full w-full group-hover:scale-125 transition-all ease-in-out duration-500"
          />
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <Tooltip label="Mix Pickle 400g (Ambika)">
            <h3 className="text-xl font-semibold">Mix Pickle 400g (Ambika)</h3>
          </Tooltip>
          <p className="text-secondary-foreground">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit...
          </p>
        </CardContent>
      </Card>
    </a>
  );
}
