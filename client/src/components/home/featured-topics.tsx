import { Badge } from "@/components/ui/badge";
import { FeatureTopics } from "@/types/home";
import Link from "next/link";
import { StrapiImage } from "../ui/strapi-image";

export const FeaturedTopics = ({ topics }: { topics?: FeatureTopics }) => {
  return (
    <section className="py-20 space-y-10">
      <h1 className="text-xl uppercase text-muted-foreground font-semibold text-center">
        {topics?.title}
      </h1>
      <div className="flex flex-wrap justify-center md:w-[80%] mx-auto items-center md:gap-6 gap-3">
        {topics?.topics?.map(
          (t, i) =>
            !!t?.url &&
            t?.title && (
              <Link key={i} href={t?.url || ""}>
                <Badge className="gap-2 md:py-3 py-2 md:px-4 px-3 hover:bg-muted cursor-pointer transition-all ease-in-out duration-300 hover:scale-95 shadow-xl rounded-full font-bold md:text-xl bg-background border border-border text-muted-foreground">
                  <StrapiImage
                    src={t?.icon?.url || ""}
                    height={30}
                    width={30}
                    alt={t?.title || ""}
                    className="rounded-lg"
                  />
                  {t?.title}
                </Badge>
              </Link>
            )
        )}
      </div>
    </section>
  );
};
