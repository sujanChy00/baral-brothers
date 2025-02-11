import { PageHeader } from "@/components/layout/page-header";
import { PageImage } from "@/components/layout/page-image";
import { SocialIcons } from "@/components/layout/social-icons";
import { Container } from "@/components/ui/container";

const NepaliDining = () => {
  return (
    <Container className="py-10">
      <PageHeader title="Discover the Best Restaurants in Your City and Enjoy Delicious Meals" />
      <PageImage
        src="https://images.unsplash.com/photo-1474898856510-884a2c0be546?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="restaurant image"
      />
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 py-10">
        <div>
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight flex items-start gap-x-1">
            <span className="text-emerald-600">&quot;</span>
            Real comfort, visual and physical, is vital to every room
          </blockquote>
        </div>
        <div className="relative">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            80 days around the world, we&apos;ll find a pot of gold just sitting
            where the rainbow&apos;s ending. Time – we&apos;ll fight against the
            time, and we&apos;ll fly on the white wings of the wind.
          </p>
          <SocialIcons
            urls={[
              {
                type: "facebook",
                url: "",
              },
              {
                type: "instagram",
                url: "",
              },
              {
                type: "linkedIn",
                url: "",
              },
              {
                type: "twitter",
                url: "",
              },
              {
                type: "youtube",
                url: "",
              },
            ]}
          />
        </div>
      </section>
      <div className="mt-4">
        <p className="text-lg ">
          Welcome to our restaurant guide! Here, you will find a curated list of
          the best dining spots in your city. Whether you&apos;re looking for a
          cozy cafe, a fine dining experience, or a quick bite, we&apos;ve got
          you covered. Explore our recommendations and enjoy delicious meals at
          the top restaurants around you.
        </p>
        <ul className="mt-4 list-disc list-inside ">
          <li>Cozy cafes with a warm ambiance</li>
          <li>Fine dining restaurants for special occasions</li>
          <li>Quick bites for a fast and tasty meal</li>
          <li>Family-friendly places with great menus for kids</li>
          <li>Hidden gems known only to locals</li>
        </ul>
      </div>
    </Container>
  );
};

export default NepaliDining;
