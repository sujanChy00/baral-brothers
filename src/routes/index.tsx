import { ContactDetails } from "@/components/contact-details";
import { Features } from "@/components/features";
import { HeroSection } from "@/components/hero-section";
import { Services } from "@/components/service";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Services />
      <ContactDetails />
    </main>
  );
}
