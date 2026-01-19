import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const Footer = () => {
  return (
    <footer className="py-10 bg-slate-900">
      <Container className="flex flex-col md:flex-row justify-between md:items-start items-center gap-6">
        <h3 className="text-sm font-medium text-slate-200 ">
          Baral Brothers 株式会社 <span className="mx-2">|</span>{" "}
          <a
            href="tel:0488653396"
            className="hover:text-primary transition-colors hover:underline"
          >
            0488653396
          </a>
        </h3>
        <section className="flex flex-col items-center gap-4">
          <div className="flex gap-4 items-center">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <Facebook className="size-6" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <Twitter className="size-5" />
            </a>
            <a href="#" rel="noopener noreferrer" target="_blank">
              <Instagram className="size-6" />
            </a>
          </div>
          <p className="text-center text-xs text-slate-200">
            © 2024 Baral Brothers Engineering. All rights reserved.
          </p>
        </section>
        <section className="text-xs text-slate-200 uppercase tracking-widest">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
        </section>
      </Container>
    </footer>
  );
};
