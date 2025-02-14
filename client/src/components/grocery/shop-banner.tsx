import { GroceryResponse } from "@/types/grocery";
import { ArrowRight } from "lucide-react";
import { StrapiImage } from "../ui/strapi-image";

export const ShopBanner = ({ data }: { data: GroceryResponse["data"] }) => {
  return (
    <header>
      <a
        href="https://tetoteto.co.jp/shop/sasto-sulav-express"
        target="_blank"
        className="relative h-[60vh] block rounded-3xl overflow-hidden group"
      >
        <div className="h-full w-full bg-background/50 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex items-center justify-center z-50">
          <div className="flex items-center justify-center gap-2 translate-y-6 group-hover:translate-y-0 transition-all ease-in-out duration-500 delay-150">
            <p className="text-3xl text-muted-foreground font-lexend">
              {data?.title_on_hover || "Shop Now"}
            </p>
            <ArrowRight className="text-muted-foreground group-hover:translate-x-3 transition-all ease-in-out duration-500 delay-200" />
          </div>
        </div>
        <StrapiImage
          fill
          sizes="100vw"
          src={data?.banner?.url || ""}
          alt={data?.banner?.alternativeText || ""}
          className="h-full w-full"
        />
      </a>
    </header>
  );
};
