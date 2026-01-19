import { Link } from "@tanstack/react-router";
import { Container } from "./container";

export const Header = () => {
  return (
    <header className="py-4 border-b border-b-border sticky top-0 z-50 bg-white/10 backdrop-blur">
      <Container className="flex items-center justify-between">
        <Link to="/">
          <h1>
            <span className="xs:text-2xl text-xl font-bold tracking-tight">
              Baral Brothers{" "}
              <span className="text-primary xxs:inline hidden">株式会社</span>
            </span>
          </h1>
        </Link>
        <div className="flex xs:gap-x-8 gap-x-4 items-center xs:text-base text-sm">
          <a
            className="font-medium hover:underline hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="font-medium hover:underline hover:text-primary transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </Container>
    </header>
  );
};
