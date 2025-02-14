import { PageHeader } from "@/components/layout/page-header";
import { PageImage } from "@/components/layout/page-image";
import { SocialIcons } from "@/components/layout/social-icons";
import { Container } from "@/components/ui/container";
import { defaultOGImage, OGheight, OGwidth, siteName } from "@/lib/meta";
import { getSierraJapanEnterprisesPage } from "@/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getSierraJapanEnterprisesPage();
  const seo = res.data?.seo;
  return {
    title: seo?.title || `Bral Brothers | Sierra Japan Enterprises`,
    description: seo?.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_NAME || ""),
    icons: {
      icon: seo?.fav_icon.url || "/favicon.ico",
    },
    keywords: seo?.keywords?.map((keyword) => keyword?.page_keyword) || [],
    openGraph: {
      images: [
        {
          url: seo?.open_graph?.image?.url || defaultOGImage,
          width: OGwidth,
          height: OGheight,
          alt: seo?.open_graph?.alt || "baral brothers",
        },
      ],
      title: seo?.title || "Baral & brothers",
      description: seo?.open_graph?.description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: seo?.open_graph?.site_name || siteName,
    },
    twitter: {
      images: [
        {
          url: seo?.open_graph?.image?.url || defaultOGImage,
          alt: seo?.open_graph?.alt || "baral brothers",
          height: OGwidth,
          width: OGheight,
        },
      ],
      title: seo?.title || "Baral & brothers",
      description: seo?.open_graph?.description,
    },
  };
};

const SierraJapanEnterprises = async () => {
  const data = await getSierraJapanEnterprisesPage();
  if (!data) return notFound();
  return (
    <Container className="py-10">
      <PageHeader title={data.data?.title || ""} />
      <PageImage
        src={data.data?.banner?.url || ""}
        alt={data.data?.banner?.alternativeText || "Banner"}
      />
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-10">
        <div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight flex items-start gap-x-1">
            <span className="text-emerald-600">&quot;</span>
            {data.data?.subtitle}
          </blockquote>
        </div>
        <div className="relative">
          <Markdown className="markdown text-lg md:text-xl text-muted-foreground leading-relaxed">
            {data.data?.description}
          </Markdown>
          <SocialIcons
            urls={
              data.data?.links?.map((link) => ({
                type: link.type,
                url: link.url,
              })) || []
            }
          />
        </div>
      </section>
      <div className="mt-4">
        <Markdown className={"markdown"}>{data.data?.content}</Markdown>
      </div>
    </Container>
  );
};

export default SierraJapanEnterprises;
