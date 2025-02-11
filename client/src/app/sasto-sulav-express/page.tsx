import { AboutShop } from "@/components/grocery/about-shop";
import { GroceryItems } from "@/components/grocery/grocery-items";
import { ShopBanner } from "@/components/grocery/shop-banner";
import { ShopDetails } from "@/components/grocery/shop-details";
import { Container } from "@/components/ui/container";

const SastoSulavExpress = () => {
  return (
    <Container className="py-10">
      <ShopBanner />
      <ShopDetails />
      <GroceryItems />
      <AboutShop />
    </Container>
  );
};

export default SastoSulavExpress;
