import { Badge } from "@/components/ui/badge";
import { Airplay, Plane, ShoppingBasket, Wine } from "lucide-react";
import Link from "next/link";

const topics = [
  {
    content: "Technology",
    icon: <Airplay className="md:h-6 h-5 md:w-6 w-5" />,
    url: "/engineering-technology",
  },
  {
    icon: <Plane className="md:h-6 h-5 md:w-6 w-5" />,
    content: "Travel",
    url: "/travel-tourism",
  },
  {
    icon: <ShoppingBasket className="md:h-6 h-5 md:w-6 w-5" />,
    content: "Grocery Shopping",
    url: "/grocery",
  },
  // {
  //   icon: <BedDouble className="md:h-6 h-5 md:w-6 w-5" />,
  //   content: "Hotels",
  //   url: "/hotels",
  // },
  {
    icon: <Wine className="md:h-6 h-5 md:w-6 w-5" />,
    content: "Nepalese Dining",
    url: "/nepali-dining",
  },
  // {
  //   icon: <Flame />,
  //   content: "Trends",
  // },
  // {
  //   icon: <ChartNoAxesCombined />,
  //   content: "Startups",
  // },
  // {
  //   icon: <StickyNote />,
  //   content: "News",
  // },
];

export const FeaturedTopics = () => {
  return (
    <section className="py-20 space-y-10">
      <h1 className="text-xl uppercase text-muted-foreground font-semibold text-center">
        Explore Featured Topics
      </h1>
      <div className="flex flex-wrap justify-center md:w-[80%] mx-auto items-center md:gap-6 gap-3">
        {topics.map((t, i) => (
          <Link key={i} href={t.url}>
            <Badge className="gap-2 md:py-3 py-2 md:px-4 px-3 hover:bg-muted cursor-pointer transition-all ease-in-out duration-300 hover:scale-95 shadow-xl rounded-full font-bold md:text-xl bg-background border border-border text-muted-foreground">
              {t.icon}
              {t.content}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
};
