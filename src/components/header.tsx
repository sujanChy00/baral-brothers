import { cn } from "@/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { Container } from "./container";

export const Header = () => {
  const location = useLocation();
  const hash = location.hash;
  return (
    <header className="py-4 border-b border-b-border sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <Container className="flex items-center justify-between">
        <Link to="/">
          <div className="flex flex-col">
            <span className="xs:text-2xl text-xl font-bold tracking-tight text-slate-900">
              Baral Brothers{" "}
              <span className="text-primary xxs:inline hidden">株式会社</span>
            </span>
          </div>
        </Link>
        <div className="flex xs:gap-x-8 gap-x-4 items-center xs:text-base text-sm">
          <a
            className={cn(
              "font-medium hover:text-primary transition-colors",
              hash === "services" && "text-primary underline",
            )}
            href="#services"
          >
            Services
          </a>
          <a
            className={cn(
              "font-medium hover:text-primary transition-colors",
              hash === "about" && "text-primary underline",
            )}
            href="#about"
          >
            About
          </a>
          <a
            className={cn(
              "font-medium hover:text-primary transition-colors",
              hash === "contact" && "text-primary underline",
            )}
            href="#contact"
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
};
