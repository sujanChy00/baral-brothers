import { PageHeader } from "@/components/layout/page-header";
import { PageImage } from "@/components/layout/page-image";
import { SocialIcons } from "@/components/layout/social-icons";
import { Container } from "@/components/ui/container";
import { getNepaliDiningPage } from "@/lib/queries";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

const NepaliDining = async () => {
  const data = await getNepaliDiningPage();
  if (!data) return notFound();
  return (
    <Container className="py-10">
      <PageHeader title={data.data.title} />
      <PageImage
        src={data.data.banner.url}
        alt={data.data.banner.alternativeText || "Banner"}
      />
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-10">
        <div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight flex items-start gap-x-1">
            <span className="text-emerald-600">&quot;</span>
            {data.data.subtitle}
          </blockquote>
        </div>
        <div className="relative">
          <Markdown className="markdown text-lg md:text-xl text-muted-foreground leading-relaxed">
            {data.data.description}
          </Markdown>
          <SocialIcons
            urls={data.data.links.map((link) => ({
              type: link.type,
              url: link.url,
            }))}
          />
        </div>
      </section>
      <div className="mt-4">
        <Markdown className={"markdown"}>{data.data.content}</Markdown>
      </div>
    </Container>
  );
};

export default NepaliDining;
