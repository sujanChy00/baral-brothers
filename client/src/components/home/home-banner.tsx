"use client";

import { HomeBannersResponse } from "@/types/home";
import { useRouter } from "next/navigation";
import { StrapiImage } from "../ui/strapi-image";

export const HomeBanner = ({ banners }: { banners: HomeBannersResponse[] }) => {
  const router = useRouter();
  return (
    <section className="py-4 h-[60dvh]" data-aos="zoom-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 items-stretch gap-4 h-full">
        <div
          onClick={() => {
            router.push(banners[0].url);
          }}
          className="col-span-2 sm:col-span-1 md:col-span-2 h-full relative group overflow-hidden rounded-xl cursor-pointer"
        >
          <StrapiImage
            fill
            src={banners[0].image.url}
            alt={banners[0].caption || ""}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
          />
          <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
          <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
            {banners[0].caption}
          </h3>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-2 items-stretch h-full space-y-4 flex flex-col">
          <div
            onClick={() => {
              router.push(banners[1].url);
            }}
            className="relative group overflow-hidden rounded-xl cursor-pointer flex-grow"
          >
            <StrapiImage
              fill
              src={banners[1].image.url}
              alt={banners[1].caption || ""}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
            />
            <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
            <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
              {banners[1].caption}
            </h3>
          </div>
          <div
            onClick={() => {
              router.push(banners[2].url);
            }}
            className="relative group overflow-hidden rounded-xl cursor-pointer flex-grow"
          >
            <StrapiImage
              fill
              src={banners[2].image.url}
              alt={banners[2].caption || ""}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
            />
            <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
            <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
              {banners[2].caption}
            </h3>
          </div>
        </div>
        <div
          className="col-span-2 sm:col-span-1 md:col-span-1 h-full group relative overflow-hidden rounded-xl cursor-pointer"
          onClick={() => {
            router.push(banners[3].url);
          }}
        >
          <StrapiImage
            fill
            src={banners[3].image.url}
            alt={banners[3].caption || ""}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
          />
          <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
          <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
            Travel & Tourism
          </h3>
        </div>
      </div>
    </section>
  );
};
