import { EngineeringBanner } from "@/components/bara-engineering/engineering-banner";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid-with-pattern";
import { getBaralEngineeringPage } from "@/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const BaralEngineering = async () => {
  const data = await getBaralEngineeringPage();
  if (!data) return notFound();
  return (
    <div className="pb-10">
      <EngineeringBanner title={data.data.banner_title} />
      <Container className="py-20 space-y-36">
        <div className="w-full bg-gradient-to-b from-indigo-950 to-black/80 p-8 relative overflow-hidden rounded-xl">
          <div className="max-w-6xl mx-auto flex items-center justify-between relative">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                {data.data.sub_banner.title}
              </h2>
              <p className="text-neutral-600 text-lg">
                {data.data.sub_banner.subtitle}
              </p>
              <a
                href={`tel:9800000000`}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors animate-shimmer border focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                })}
              >
                {data.data.sub_banner.button_text}
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14m-7-7l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-8">
              <div className="relative w-40 h-40">
                <Image
                  fill
                  sizes="100vw"
                  src="https://lexend-nextjs.vercel.app/assets/images/template/talking.svg"
                  alt="Person talking"
                  className="object-contain"
                />
              </div>
              <div className="relative w-40 h-40">
                <Image
                  fill
                  sizes="100vw"
                  src="https://lexend-nextjs.vercel.app/assets/images/template/chatting.svg"
                  alt="Person chatting"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-5xl font-semibold">
            {data.data.facilities.title}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6">
            {data.data.facilities.our_facilities.map((feature, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
              >
                <Grid size={20} />
                <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
                  {feature.title}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <article className="space-y-6">
          <h1 className="text-5xl font-semibold">{data.data.about_us_title}</h1>
          <Markdown className={"markdown"}>{data.data.about_us}</Markdown>
        </article>
      </Container>
    </div>
  );
};

export default BaralEngineering;
