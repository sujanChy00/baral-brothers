import { cn } from "@/lib/utils";
import { HomeContentResponse } from "@/types/home";
import Link from "next/link";
import Markdown from "react-markdown";
import { AnimatedDiv } from "../ui/animated-div";
import { Button } from "../ui/button";
import { Container } from "../ui/container";
import { StrapiImage } from "../ui/strapi-image";

export const HomeContent = ({
  content,
}: {
  content?: HomeContentResponse[];
}) => {
  return (
    <section className="lg:space-y-14">
      <div className="lg:space-y-14 bg-secondary py-20">
        {content?.map((item, i) => {
          const isOdd = i % 2 === 0;
          return (
            <Container
              key={item?.id}
              className="h-[50rem] grid grid-cols-12 lg:gap-8 gap-4 items-center"
            >
              <AnimatedDiv
                animate={`animate__faster ${
                  isOdd ? "animate__fadeInLeft" : "animate__fadeInRight"
                }`}
                className={cn(
                  "col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative",
                  isOdd ? "lg:order-1 order-2" : "lg:order-2 order-1"
                )}
              >
                <StrapiImage
                  fill
                  sizes="100vw"
                  src={item?.image?.url || ""}
                  alt={item?.image?.alternativeText || ""}
                  className="h-full w-full object-cover"
                />
              </AnimatedDiv>
              <AnimatedDiv
                animate="animate__fadeInUp animate__faster"
                className={cn(
                  "col-span-12 lg:col-span-6 space-y-10",
                  isOdd ? "lg:order-2 order-1" : "lg:order-1 order-2"
                )}
              >
                <div className="space-y-6">
                  <h3 className="text-5xl font-semibold">{item?.title}</h3>
                  <Markdown className={"markdown"}>{item?.desc}</Markdown>
                </div>
                <div>
                  <Link href={item?.url || ""}>
                    <Button
                      className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                      variant={"secondary"}
                    >
                      <span className="z-10 pr-2 group-hover:text-white capitalize">
                        {item.button_text}
                      </span>
                      <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                        <div className="mr-3.5 flex items-center justify-center">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-neutral-50"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </AnimatedDiv>
            </Container>
          );
        })}
      </div>
    </section>
  );
};
