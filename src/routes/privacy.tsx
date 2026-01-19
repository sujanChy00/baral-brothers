import { ChildrensPrivacy } from "@/components/privacy/childrens-privacy";
import { Contact } from "@/components/privacy/contact";
import { DateSecurity } from "@/components/privacy/data-security";
import { Disclaimer } from "@/components/privacy/disclaimer";
import { HowWeShareUserInfo } from "@/components/privacy/how-we-share-user-info";
import { HowWeUseUserInfo } from "@/components/privacy/how-we-use-user-info";
import { NonPersonalInfo } from "@/components/privacy/non-personal-info";
import { PersonalInfo } from "@/components/privacy/personal-info";
import { PrivacyPolicyUpdates } from "@/components/privacy/privacy-policy-updates";
import { RightsChoices } from "@/components/privacy/rights-choices";
import { Separator } from "@/components/separator";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: "Baral Brothers | Privacy Policy",
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <main className="max-w-2xl mx-auto px-4 pb-20">
      <div className="pt-8 pb-4">
        <h1 className="text-[#111418] tracking-tight text-[32px] font-bold leading-tight">
          Privacy Policy
        </h1>
        <p className="text-[#617289] text-sm font-normal mt-2">
          Effective Date: March 25, 2025
        </p>

        <div className="space-y-2 mt-5">
          <p>
            At Baral Brothers, we are committed to protecting and respecting
            your privacy. This Privacy Policy explains how we collect, use,
            disclose, and protect your personal information when you visit or
            use our services, including our restaurant, grocery store, and other
            related services (collectively referred to as the "Services").
          </p>
          <p>
            By using our Services, you agree to the collection and use of
            information in accordance with this policy.
          </p>
        </div>
      </div>
      <Separator className="my-6" />
      <section className="mb-8 space-y-6">
        <h3 className="tracking-tight text-xl font-bold leading-tight mb-3">
          1. Information We Collect
        </h3>
        <p className="leading-relaxed mb-4">
          We collect various types of information to provide and improve our
          Services:
        </p>
        <PersonalInfo />
        <NonPersonalInfo />
      </section>
      <div className="space-y-8">
        <HowWeUseUserInfo />
        <HowWeShareUserInfo />
        <DateSecurity />
        <RightsChoices />
        <ChildrensPrivacy />
        <PrivacyPolicyUpdates />
        <Contact />
        <Disclaimer />
      </div>
    </main>
  );
}
