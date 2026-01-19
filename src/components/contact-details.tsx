import { MapPin, PhoneCall } from "lucide-react";
import { Container } from "./container";

export const ContactDetails = () => {
  return (
    <Container className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <section>
          <h3 className="text-2xl font-bold mb-6">We are here to help you.</h3>
          <div className="flex items-start gap-4 mb-6">
            <MapPin className="text-primary" />
            <p className="text-slate-600 ">
              Baral Brothers 株式会社, Oto 1-34-10, 338-0832
              <br />
              Saitama, Japan
            </p>
          </div>
          <div className="flex items-start gap-4 mb-6">
            <PhoneCall className="text-primary" />
            <a href="tel:0488653396" className="text-slate-600">
              0488653396
            </a>
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
