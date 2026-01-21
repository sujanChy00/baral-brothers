import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./container";

const socialIcons = [
  {
    icon: <Facebook className="size-5" />,
    href: "#",
  },
  {
    icon: <Twitter className="size-5 [&>path]:fill-black" />,
    href: "#",
  },
  {
    icon: <Instagram className="size-5" />,
    href: "#",
  },
];

export const ContactDetails = () => {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">We are here to help you.</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin className="text-primary size-5 shrink-0" />
                <span>
                  Baral Brothers 株式会社, Oto 1-34-10, 338-0832
                  <br />
                  Saitama, Japan
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Mail className="text-primary size-5 shrink-0" />
                <a
                  href="mailto:jbaral@sierrajapan.com"
                  className="hover:text-primary hover:underline"
                >
                  jbaral@sierrajapan.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600 text-sm">
                <Phone className="text-primary size-5 shrink-0" />
                <div>
                  <a
                    className="hover:text-primary hover:underline"
                    href="tel:0487099544"
                  >
                    048 709 9544,
                  </a>{" "}
                  <a
                    className="hover:aext-primary hover:underline"
                    href="tel:81488653396"
                  >
                    81 48 865 3396,
                  </a>{" "}
                  <a
                    className="hover:text-primary hover:underline"
                    href="tel:08094161988"
                  >
                    080 9416 1988
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-sm">
              Connect with us
            </h4>
            <div className="flex gap-4">
              {socialIcons.map((icon) => (
                <a
                  href={icon.href}
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all"
                >
                  {icon.icon}
                </a>
              ))}
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-6">Opening Hours.</h3>
          <div className="flex items-center justify-between pb-3 border-b border-b-border">
            <h6 className="font-semibold">Sunday</h6>
            <p className="text-slate-600">09:00 - 21:00</p>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-b-border">
            <h6 className="font-semibold">Monday</h6>
            <div className="bg-destructive rounded-3xl px-2 py-1 text-sm text-destructive-foreground font-medium">
              <span>closed</span>
            </div>
          </div>
          <div className="flex items-center justify-between py-3">
            <h6 className="font-semibold">Tuesday</h6>
            <p className="text-slate-600">09:00 - 21:00</p>
          </div>
        </section>
      </div>
    </Container>
  );
};
