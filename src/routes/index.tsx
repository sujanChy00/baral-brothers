import { About } from "@/components/about";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { Services } from "@/components/service";
import { ShopMap } from "@/components/shop-map";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
  head: () => ({
    meta: [
      {
        title: "Baral Brothers Engineering",
      },
    ],
  }),
});

function App() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Services />
      <About />
      <ContactForm />
      <ContactDetails />
      <ShopMap />
    </main>
  );
}
