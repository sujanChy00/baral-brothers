import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="py-16 bg-slate-900 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Baral Brothers 株式会社
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Providing reliable engineering and facility support services with
              professionalism and safety across Japan.
            </p>
            <div className="flex gap-4 pt-2 items-center">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="size-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="size-4" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="size-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-primary shrink-0 mt-1" />
                <span>1-34-10 Oto, Chuo-ku, Saitama City, 338-0012</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-primary shrink-0" />
                <a
                  href="tel:0487099544"
                  className="hover:text-primary transition-colors"
                >
                  048 709 9544
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href="mailto:jbaral@sierrajapan.com"
                  className="hover:text-primary transition-colors"
                >
                  jbaral@sierrajapan.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Legal</h4>
            <div className="space-y-2 text-sm">
              <p>Corporate Number: T5030001157055</p>
              <Link
                to="/privacy"
                className="hover:text-primary transition-colors inline-block pt-2"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Baral Brothers 株式会社 All rights reserved.</p>
          <p className="tracking-widest uppercase">
            Safety • Quality • Reliability
          </p>
        </div>
      </Container>
    </footer>
  );
};
