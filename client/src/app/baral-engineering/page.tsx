import { EngineeringBanner } from "@/components/bara-engineering/engineering-banner";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Grid } from "@/components/ui/grid-with-pattern";
import Image from "next/image";

const BaralEngineering = () => {
  return (
    <div className="pb-10">
      <EngineeringBanner />
      <Container className="py-20 space-y-36">
        <div className="w-full bg-gradient-to-b from-indigo-950 to-black/80 p-8 relative overflow-hidden rounded-xl">
          <div className="max-w-6xl mx-auto flex items-center justify-between relative">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold tracking-tight text-white">
                Prevent costly mistakes
              </h2>
              <p className="text-neutral-600 text-lg">
                Create pre-approved templates and lock all legal information.
              </p>
              <a
                href={`tel:9800000000`}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors animate-shimmer border focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                })}
              >
                Let&apos;s connect
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
          <h3 className="text-5xl font-semibold">Our Top Facilities</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6">
            {grid.map((feature, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-anchor-placement="top-bottom"
                key={feature.title + i}
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
          <h1 className="text-5xl font-semibold">Who are we ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum
            nam blanditiis inventore aliquam tempora aspernatur laborum nostrum
            iste minus. Error fuga facere obcaecati quo voluptas ad ullam enim
            earum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Illo quod cumque ipsa eius officiis repudiandae nostrum
            reprehenderit exercitationem assumenda nesciunt tempora, atque rem
            veritatis blanditiis placeat nisi quo eum, porro aliquam saepe
            suscipit consectetur sit veniam quae. Reprehenderit non, earum dicta
            necessitatibus eius beatae repellendus deleniti amet dignissimos?
            Eaque ipsum, consequuntur molestias voluptate perspiciatis error,
            accusantium quibusdam voluptatem inventore eius illo fugit
            dignissimos modi soluta veniam in officia dolores architecto!
            Cupiditate numquam maiores fugiat, quisquam vel sint odit possimus
            corrupti quis? Officiis recusandae ipsa sequi, excepturi eaque
            voluptatum tempora quasi facere laborum veritatis quam illo sunt
            numquam, eius ut dolor!
          </p>
        </article>
      </Container>
    </div>
  );
};

export default BaralEngineering;

const grid = [
  {
    title: "HIPAA and SOC2 Compliant",
    description:
      "Our applications are HIPAA and SOC2 compliant, your data is safe with us, always.",
  },
  {
    title: "Automated Social Media Posting",
    description:
      "Schedule and automate your social media posts across multiple platforms to save time and maintain a consistent online presence.",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain insights into your social media performance with detailed analytics and reporting tools to measure engagement and ROI.",
  },
  {
    title: "Content Calendar",
    description:
      "Plan and organize your social media content with an intuitive calendar view, ensuring you never miss a post.",
  },
  {
    title: "Audience Targeting",
    description:
      "Reach the right audience with advanced targeting options, including demographics, interests, and behaviors.",
  },
  {
    title: "Social Listening",
    description:
      "Monitor social media conversations and trends to stay informed about what your audience is saying and respond in real-time.",
  },
];
