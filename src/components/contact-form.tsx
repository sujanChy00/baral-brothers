import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import { Link } from "@tanstack/react-router";
import { Mail, Phone, Send } from "lucide-react";
import { Container } from "./container";

export const ContactForm = () => {
  return (
    <div className="bg-slate-50" id="contact">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Connect with us on social media!
            </h2>
            <p className="mb-8 text-lg max-w-md">
              Follow us on Facebook and Instagram for the latest updates,
              contests, and promotions.
            </p>
            <div className="flex gap-4 mb-12">
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Facebook className="size-6" />
              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Twitter className="size-6 [&>path]:fill-black" />
              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Instagram className="size-6" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center rounded-full bg-primary">
                  <Mail className="size-4 text-white" />
                </div>
                <a
                  href="mailto:jbaral@sierrajapan.com"
                  className="hover:text-amber-600 transition-colors hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  jbaral@sierrajapan.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center rounded-full bg-primary">
                  <Phone className="size-4 text-white" />
                </div>
                <a
                  href="tel:0488653396"
                  className="hover:text-amber-600 transition-colors hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  0488653396
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Name *
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Email *
                  </label>
                  <input
                    className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                    placeholder="email@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Subject *
                </label>
                <input
                  className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="How can we help?"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Message *
                </label>
                <textarea
                  className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your message details..."
                  required
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  className=" rounded border-slate-300 text-primary focus:ring-primary"
                  id="newsletter"
                  type="checkbox"
                />
                <label className="text-xs text-slate-500" htmlFor="newsletter">
                  Yes, I want to receive news about promotions.{" "}
                  <Link to="/privacy" className="underline text-amber-600">
                    Read Privacy policy
                  </Link>
                </label>
              </div>
              <button
                className="w-full bg-amber-600 text-white font-bold py-4 rounded-xl hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Send Message</span> <Send />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
