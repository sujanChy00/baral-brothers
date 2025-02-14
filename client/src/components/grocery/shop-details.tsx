import { GroceryResponse } from "@/types/grocery";
import { ArrowRight } from "lucide-react";
import Markdown from "react-markdown";
import TextGlitch from "../ui/text-glitch";

export const ShopDetails = ({ data }: { data: GroceryResponse["data"] }) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-10 items-start">
      <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight flex items-start gap-x-1 relative animate__animated animate__slideInLeft animate__faster">
        <span className="text-emerald-600">&quot;</span>
        <TextGlitch
          className="w-full text-primary bg-muted"
          revealText={
            <a
              href="https://tetoteto.co.jp/shop/sasto-sulav-express"
              target="_blank"
              className="flex items-center gap-x-3 group"
            >
              <p>{data?.title_on_hover || "Shop Now"}</p>
              <ArrowRight
                size={32}
                className="group-hover:scale-150 mt-2 delay-200 transition-all ease-in-out duration-500 group-hover:translate-x-5"
              />
            </a>
          }
        >
          {data?.shop_name || "Sasto Sulav Express"}
        </TextGlitch>
      </blockquote>
      <div className="relative animate__animated animate__slideInRight animate__faster">
        <Markdown className="text-lg md:text-xl text-muted-foreground leading-relaxed markdown">
          {data?.shop_description}
        </Markdown>
      </div>
    </section>
  );
};
