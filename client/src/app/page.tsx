import { FeaturedTopics } from "@/components/home/featured-topics";
import { HomeBanner } from "@/components/home/home-banner";
import { HomeContent } from "@/components/home/home-content";
import { Container } from "@/components/ui/container";
import { getHomePage } from "@/lib/queries";

export default async function Home() {
  const data = await getHomePage();

  return (
    <div>
      <Container>
        <HomeBanner banners={data.data?.banners} />
        <FeaturedTopics topics={data.data?.trending_topics} />
      </Container>
      <HomeContent content={data.data?.content} />
    </div>
  );
}
