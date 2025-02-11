"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export const HomeBanner = () => {
  const router = useRouter();
  return (
    <section className="py-4 h-[60dvh]" data-aos="zoom-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 items-stretch gap-4 h-full">
        <div
          onClick={() => {
            router.push("/baral-engineering");
          }}
          className="col-span-2 sm:col-span-1 md:col-span-2 h-full group overflow-hidden rounded-xl cursor-pointer relative"
        >
          <Image
            fill
            sizes="100vw"
            src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="baral-engineering"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
          />
          <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
          <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
            Baral Engineering
          </h3>
        </div>
        <div className="col-span-2 sm:col-span-1 md:col-span-2 items-stretch h-full space-y-4 flex flex-col">
          <div
            onClick={() => {
              router.push("/nepalese-dining");
            }}
            className="relative group overflow-hidden rounded-xl cursor-pointer flex-grow"
          >
            <Image
              fill
              sizes="100vw"
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="nepelese-dining"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
            />
            <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
            <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
              Nepali Dining
            </h3>
          </div>
          <div
            onClick={() => {
              router.push("/sasto-sulav-express");
            }}
            className="relative group overflow-hidden rounded-xl cursor-pointer flex-grow"
          >
            <Image
              fill
              sizes="100vw"
              src="https://images.unsplash.com/photo-1498579397066-22750a3cb424?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="sasto-sulav-express"
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
            />
            <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
            <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
              Sasto Sulav Express
            </h3>
          </div>
        </div>
        <div
          className="col-span-2 sm:col-span-1 md:col-span-1 h-full group relative overflow-hidden rounded-xl cursor-pointer"
          onClick={() => {
            router.push("/sierra-japan-enterprises");
          }}
        >
          <Image
            fill
            sizes="100vw"
            src="https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sierra-japan-enterprises"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out object-center"
          />
          <div className="absolute inset-0 dark:bg-background/50 bg-background/20 md:opacity-0 group-hover:opacity-100 duration-300 transition-all ease-in-out" />
          <h3 className="z-10 text-2xl font-medium absolute bottom-0 left-0 p-4 xs:text-xl md:text-3xl md:translate-y-full group-hover:translate-y-0 duration-200 delay-100">
            Sierra Japan Enterprises
          </h3>
        </div>
      </div>
    </section>
  );
};
