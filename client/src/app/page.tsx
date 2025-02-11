import { FeaturedTopics } from "@/components/home/featured-topics";
import { HomeBanner } from "@/components/home/home-banner";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const base_url = "http://localhost:1337";
  const path = "api/home-page";
  const url = new URL(path, base_url);
  const response = await fetch(url.href);
  const data = await response.json();
  console.log(data.data);
  return (
    <div>
      <Container>
        <HomeBanner />
        <FeaturedTopics />
      </Container>
      <section className="lg:space-y-14">
        <div className="lg:space-y-14 bg-secondary py-20">
          <Container className="h-[50rem] grid grid-cols-12 lg:gap-8 gap-4 items-center">
            <div
              className="col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative lg:order-1 order-2"
              data-aos="fade-right"
            >
              <Image
                fill
                sizes="100vw"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="technology"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="col-span-12 lg:col-span-6 space-y-10 lg:order-2 order-1"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold">Baral Engineering</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vel, sequi facilis perferendis recusandae deserunt deleniti ea
                  repudiandae velit aperiam incidunt cumque similique dicta
                  excepturi nesciunt sint, esse odio maiores?
                </p>
              </div>
              <div>
                <Link href="/sasto-sulav-express">
                  <Button
                    className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                    variant={"secondary"}
                  >
                    <span className="z-10 pr-2 group-hover:text-white">
                      Know More
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
            </div>
          </Container>
          <Container className="h-[50rem] grid grid-cols-12 gap-8 items-center">
            <div
              className="col-span-12 lg:col-span-6 space-y-10"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold">Sasto Sulav Express</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vel, sequi facilis perferendis recusandae deserunt deleniti ea
                  repudiandae velit aperiam incidunt cumque similique dicta
                  excepturi nesciunt sint, esse odio maiores?
                </p>
              </div>
              <div>
                <Link href="/sasto-sulav-express">
                  <Button
                    className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                    variant={"secondary"}
                  >
                    <span className="z-10 pr-2 group-hover:text-white">
                      Know More
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
            </div>
            <div
              className="col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative"
              data-aos="fade-left"
            >
              <Image
                fill
                sizes="100vw"
                src="https://plus.unsplash.com/premium_photo-1664551734602-49640bd82eba?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="technology"
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        </div>
        <div className="space-y-14 pb-20">
          {/* <Container className="h-[50rem] grid grid-cols-12 gap-8 items-center">
            <div
              className="col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative"
              data-aos="fade-right"
            >
              <Image
                fill
                sizes="100vw"
                src="https://plus.unsplash.com/premium_photo-1676321688607-2d18ba129dbd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="technology"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="col-span-12 lg:col-span-6 space-y-10"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold">Hotels</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vel, sequi facilis perferendis recusandae deserunt deleniti ea
                  repudiandae velit aperiam incidunt cumque similique dicta
                  excepturi nesciunt sint, esse odio maiores?
                </p>
              </div>
              <div>
                <Link href="/engineering-technology">
                  <Button
                    className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                    variant={"secondary"}
                  >
                    <span className="z-10 pr-2 group-hover:text-white">
                      Know More
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
            </div>
          </Container> */}
          <Container className="h-[50rem] grid grid-cols-12 gap-8 items-center">
            <div
              className="col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative lg:order-1 order-2"
              data-aos="fade-left"
            >
              <Image
                fill
                sizes="100vw"
                src="https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="technology"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="col-span-12 lg:col-span-6 space-y-10 lg:order-2 order-1"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold">Nepali Dining</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vel, sequi facilis perferendis recusandae deserunt deleniti ea
                  repudiandae velit aperiam incidunt cumque similique dicta
                  excepturi nesciunt sint, esse odio maiores?
                </p>
              </div>
              <div>
                <Link href="/nepali-dining">
                  <Button
                    className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                    variant={"secondary"}
                  >
                    <span className="z-10 pr-2 group-hover:text-white">
                      Know More
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
            </div>
          </Container>
          <Container className="h-[50rem] grid grid-cols-12 gap-8 items-center">
            <div
              className="col-span-12 lg:col-span-6 space-y-10"
              data-aos="fade-up"
            >
              <div className="space-y-6">
                <h3 className="text-5xl font-semibold">
                  Sierra Japan Enterprises
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
                  vel, sequi facilis perferendis recusandae deserunt deleniti ea
                  repudiandae velit aperiam incidunt cumque similique dicta
                  excepturi nesciunt sint, esse odio maiores?
                </p>
              </div>
              <div>
                <Link href="/sierra-japan-enterprises">
                  <Button
                    className="group relative h-[calc(48px+8px)] rounded-full border border-primary py-1 pr-14 font-medium"
                    variant={"secondary"}
                  >
                    <span className="z-10 pr-2 group-hover:text-white">
                      Know More
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
            </div>
            <div
              className="col-span-12 lg:col-span-6 h-full overflow-hidden p-0 relative"
              data-aos="fade-right"
            >
              <Image
                fill
                sizes="100vw"
                src="https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="technology"
                className="h-full w-full object-cover"
              />
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
}
