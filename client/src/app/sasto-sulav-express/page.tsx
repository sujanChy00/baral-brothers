import { AboutShop } from "@/components/grocery/about-shop";
import { GroceryItems } from "@/components/grocery/grocery-items";
import { ShopBanner } from "@/components/grocery/shop-banner";
import { ShopDetails } from "@/components/grocery/shop-details";
import { Container } from "@/components/ui/container";
import { defaultOGImage, OGheight, OGwidth, siteName } from "@/lib/meta";
import { getGroceryPage } from "@/lib/queries";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getGroceryPage();
  const seo = res.data?.seo;
  return {
    title: seo?.title || `Bral Brothers | Sasto Sulav Express`,
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

const SastoSulavExpress = async () => {
  const data = await getGroceryPage();
  if (!data) return notFound();
  return (
    <Container className="py-10">
      <ShopBanner data={data.data} />
      <ShopDetails data={data.data} />
      <GroceryItems data={data.data} />
      <AboutShop data={data.data} />
    </Container>
  );
};

export default SastoSulavExpress;
