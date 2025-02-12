import { SocialIcons } from "@/components/layout/social-icons";
import { Container } from "@/components/ui/container";
import { StrapiImage } from "@/components/ui/strapi-image";
import { getAboutPage } from "@/lib/queries";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const AboutPage = async () => {
  const data = await getAboutPage();

  if (!data) return notFound();

  return (
    <Container>
      <article className="py-10 grid grid-cols-12 gap-x-28 items-stretch min-h-[90dvh]">
        <div className="col-span-12 lg:col-span-6 h-full relative">
          <StrapiImage
            src={data.data.banner?.url}
            alt={data.data.banner?.alternativeText || "Banner"}
            className="h-full w-full"
            fill
          />
        </div>
        <div className="col-span-12 lg:col-span-6 ">
          <h1 className="text-6xl font-bold">{data.data?.title}</h1>
          <div className="pt-24 space-y-14">
            {data.data.faq?.map((faq) => (
              <section className="space-y-6" key={faq.id}>
                <div className="flex items-end gap-1">
                  <div className="h-0.5 w-10 bg-primary" />
                  <h3 className="text-4xl font-semibold">{faq?.question}</h3>
                </div>
                <div>
                  <Markdown className={"markdown"}>{faq?.answer}</Markdown>
                  {/* <p className="text-lg">{faq?.answer}</p> */}
                </div>
              </section>
            ))}
            {/* <section className="space-y-6">
              <div className="flex items-end gap-1">
                <div className="h-0.5 w-10 bg-primary" />
                <h3 className="text-4xl font-semibold">What we do ?</h3>
              </div>
              <div>
                <p className="text-lg">
                  we are Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Beatae minus sed aliquam explicabo ipsam error,
                  molestiae aliquid temporibus modi natus unde cumque dicta
                  saepe quo magnam. Adipisci temporibus esse fugit.
                </p>
              </div>
            </section> */}
            <section className="space-y-4">
              <h3 className="text-2xl underline font-semibold">Follow us on</h3>
              <SocialIcons
                className="static flex items-center gap-2 flex-row space-y-0 "
                urls={
                  data.data.links?.map((link) => ({
                    type: link.type,
                    url: link.url,
                  })) || []
                }
              />
            </section>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default AboutPage;
