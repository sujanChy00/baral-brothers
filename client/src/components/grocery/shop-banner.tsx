import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const ShopBanner = () => {
  return (
    <header data-aos="fade-up">
      <a
        href="https://tetoteto.co.jp/shop/sasto-sulav-express"
        target="_blank"
        className="relative h-[60vh] block rounded-3xl overflow-hidden group"
      >
        <div className="h-full w-full bg-background/50 absolute inset-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500 flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 translate-y-6 group-hover:translate-y-0 transition-all ease-in-out duration-500 delay-150">
            <p className="text-3xl text-muted-foreground font-lexend">
              Shop Now
            </p>
            <ArrowRight className="text-muted-foreground group-hover:translate-x-3 transition-all ease-in-out duration-500 delay-200" />
          </div>
        </div>
        <Image
          fill
          sizes="100vw"
          src="https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="shop"
          className="h-full w-full"
        />
      </a>
    </header>
  );
};
