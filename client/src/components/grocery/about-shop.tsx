import { GroceryResponse } from "@/types/grocery";
import { MapPin } from "lucide-react";
import Markdown from "react-markdown";
import { SocialIcons } from "../layout/social-icons";
import { AnimatedDiv } from "../ui/animated-div";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { StrapiImage } from "../ui/strapi-image";

export const AboutShop = ({ data }: { data: GroceryResponse["data"] }) => {
  return (
    <article className="pt-28 space-y-6">
      <h3 className="text-3xl font-semibold text-secondary-foreground">
        About
      </h3>
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="md:col-span-8 col-span-12">
          <Markdown className={"markdown"}>{data?.about_shop}</Markdown>
        </div>
        <AnimatedDiv
          animate="animate__flipInY animate__faster"
          className="md:col-span-4 col-span-12"
        >
          <a href={data?.shop_url || ""} target="_blank" className="block">
            <Card className="rounded-3xl dark:bg-neutral-900 bg-gray-200 hover:border-primary border border-transparent">
              <CardHeader className="flex-row items-center gap-4 p-4">
                <div className="h-14 w-14 border-4 rounded-full border-primary relative overflow-hidden">
                  <StrapiImage
                    fill
                    className="object-cover"
                    alt={data?.shop_name}
                    src={data.banner?.url || ""}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">{data?.shop_name}</h3>
                  <p className="text-muted-foreground uppercase font-medium text-sm">
                    {data?.shop_type || "Grocery Store"}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <div className="py-6 leading-7 font-medium text-pretty">
                  <Markdown className={"markdown"}>
                    {data?.shop_card_desc}
                  </Markdown>
                </div>
              </CardContent>
              <CardFooter className="block space-y-3">
                <div className="flex items-center gap-x-3">
                  <MapPin size={22} />
                  <p className="text-lg">{data?.shop_location}</p>
                </div>
                <SocialIcons
                  className="flex items-center gap-4 static space-y-0"
                  urls={data.links?.map((link) => ({
                    type: link.type,
                    url: link.url,
                  }))}
                />
              </CardFooter>
            </Card>
          </a>
        </AnimatedDiv>
      </div>
    </article>
  );
};
