import { Facebook, Instagram, Linkedin, MapPin, Twitter } from "lucide-react";
import { Avatar } from "../ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Tooltip } from "../ui/tooltip";

export const AboutShop = () => {
  return (
    <article className="pt-28 space-y-6">
      <h3 className="text-3xl font-semibold text-secondary-foreground">
        About
      </h3>
      <div className="grid grid-cols-12 items-start gap-6">
        <div className="md:col-span-8 col-span-12">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            deserunt ipsum dicta voluptas repellat facere magni similique amet,
            sit recusandae maiores distinctio soluta accusantium cupiditate.
            Necessitatibus aspernatur officia quibusdam! Quod. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Rerum, consectetur deleniti
            sit dolorum praesentium minima vel velit illum ullam, similique
            officia expedita, facere nesciunt in eaque temporibus explicabo.
            Obcaecati, quod! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Placeat culpa earum temporibus eaque ipsa autem, mollitia sit
            voluptatem enim officia maiores ad architecto dicta est magnam ut
            deleniti debitis consectetur!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            deserunt ipsum dicta voluptas repellat facere magni similique amet,
            sit recusandae maiores distinctio soluta accusantium cupiditate.
            Necessitatibus aspernatur officia quibusdam! Quod. Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Rerum, consectetur deleniti
            sit dolorum praesentium minima vel velit illum ullam, similique
            officia expedita, facere nesciunt in eaque temporibus explicabo.
            Obcaecati, quod! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Placeat culpa earum temporibus eaque ipsa autem, mollitia sit
            voluptatem enim officia maiores ad architecto dicta est magnam ut
            deleniti debitis consectetur!
          </p>
        </div>
        <div className="md:col-span-4 col-span-12">
          <a
            href="https://tetoteto.co.jp/shop/sasto-sulav-express"
            target="_blank"
            className="block"
          >
            <Card
              className="rounded-3xl dark:bg-neutral-900 bg-gray-200 hover:border-primary border border-transparent"
              data-aos="flip-left"
            >
              <CardHeader className="flex-row items-center gap-4 p-4">
                <Avatar
                  className="h-14 w-14 border-4 border-primary"
                  src={
                    "https://cdn.tetoteto.co.jp/item-images/shop-image/2586825067/2635395597_1.jpg"
                  }
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Sasto Sulav Express</h3>
                  <p className="text-muted-foreground uppercase font-medium text-sm">
                    Grocery Store
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pb-0">
                <div className="py-6 leading-7 font-medium text-pretty">
                  <p>
                    Sasto Sulav provides fresh groceries, quality products, and
                    everyday essentials in Japan. Offering affordability and
                    convenience, it ensures a delightful shopping experience for
                    all customers.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="block space-y-3">
                <div className="flex items-center gap-x-3">
                  <MapPin size={22} />
                  <p className="text-lg">Japan, Asia</p>
                </div>
                <div className="flex items-center gap-4">
                  <Tooltip label="Follow us on">
                    <Twitter size={22} />
                  </Tooltip>
                  <Tooltip label="Follow us on">
                    <Facebook size={22} />
                  </Tooltip>
                  <Tooltip label="Follow us on">
                    <Instagram size={22} />
                  </Tooltip>
                  <Tooltip label="Follow us on">
                    <Linkedin size={22} />
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          </a>
        </div>
      </div>
    </article>
  );
};
