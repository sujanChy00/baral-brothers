import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ItemCard } from "./item-card";

export const GroceryItems = () => {
  return (
    <section className="pt-16 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-3xl font-semibold text-secondary-foreground">
          Featured Products
        </h3>
        <a
          href="https://tetoteto.co.jp/shop/sasto-sulav-express"
          target="_blank"
        >
          <Button variant={"ghost"}>
            Visit Shop <ArrowRight />
          </Button>
        </a>
      </div>
      <Carousel
        autoPlay
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, i) => (
            <CarouselItem
              key={i}
              className="xl:basis-1/5 lg:basis-1/4 md:basis-1/3 sm:basis-1/2 basis-full"
            >
              <ItemCard />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-0 h-10 w-10 rounded-lg" />
        <CarouselPrevious className="left-0 h-10 w-10 rounded-lg" />
      </Carousel>
    </section>
  );
};
