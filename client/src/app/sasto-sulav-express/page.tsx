import { AboutShop } from "@/components/grocery/about-shop";
import { GroceryItems } from "@/components/grocery/grocery-items";
import { ShopBanner } from "@/components/grocery/shop-banner";
import { ShopDetails } from "@/components/grocery/shop-details";
import { Container } from "@/components/ui/container";
import { getGroceryPage } from "@/lib/queries";
import { notFound } from "next/navigation";

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
