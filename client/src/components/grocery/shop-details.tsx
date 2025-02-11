import { ArrowRight } from "lucide-react";
import TextGlitch from "../ui/text-glitch";

export const ShopDetails = () => {
  return (
    <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-10 items-start">
      <blockquote
        data-aos="fade-right"
        className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight flex items-start gap-x-1 relative"
      >
        <span className="text-emerald-600">&quot;</span>
        <TextGlitch
          className="w-full text-primary bg-muted"
          revealText={
            <a
              href="https://tetoteto.co.jp/shop/sasto-sulav-express"
              target="_blank"
              className="flex items-center gap-x-3 group"
            >
              <p>Shop Now</p>
              <ArrowRight
                size={32}
                className="group-hover:scale-150 mt-2 delay-200 transition-all ease-in-out duration-500 group-hover:translate-x-5"
              />
            </a>
          }
        >
          Sasto Sulav Express
        </TextGlitch>
      </blockquote>
      <div className="relative" data-aos="fade-left">
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Sasto Sulav, your one-stop grocery store in Japan, offers fresh
          produce, quality goods, and unbeatable prices to make every shopping
          trip convenient and affordable for you.
        </p>
      </div>
    </section>
  );
};
