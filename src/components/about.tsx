import { CheckCircle2 } from "lucide-react";
import { Container } from "./container";

const industries = [
  "U.S. Base Facilities & Government-Related Projects",
  "Hotels, restaurants, and hospitality facilities",
  "Commercial buildings and retail sites",
];

export const About = () => {
  return (
    <Container id="about" className="py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900">
              Who We Are
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Baral Brothers Co., Ltd. is a Japan-based engineering and facility
              support company providing reliable project coordination and
              on-site services.
            </p>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8 italic text-slate-700 leading-relaxed relative">
              <span className="absolute top-4 left-4 text-4xl text-primary/20 font-serif">
                &ldquo;
              </span>
              Our mission is to provide reliable engineering and facility
              support services with professionalism, safety, and clear
              communication. We are committed to supporting our clients through
              responsive coordination, quality workmanship, and timely delivery.
              <br />
              <br />
              With experience in hospitality and facility operations in Japan,
              we understand the importance of maintaining high standards while
              minimizing disruption to daily operations. We value long-term
              partnerships built on trust, integrity, and results.
              <div className="mt-6 not-italic font-bold text-slate-900">
                — Janak Baral, CEO
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4 text-slate-900">
              Industries We Support
            </h3>
            <ul className="space-y-3 mb-8">
              {industries.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-slate-600"
                >
                  <CheckCircle2 className="text-primary size-5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-500">
                <div>
                  <span className="font-bold text-slate-900">
                    Corporate Number:
                  </span>{" "}
                  T5030001157055
                </div>
                <div>
                  <span className="font-bold text-slate-900">Location:</span>{" "}
                  Saitama City, Japan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <img
              alt="Professional facility support"
              className="rounded-2xl h-64 w-full object-cover shadow-lg"
              src="/coding.avif"
            />
            <img
              alt="Commercial maintenance"
              className="rounded-2xl h-64 w-full object-cover shadow-lg mt-8"
              src="/engineers.avif"
            />
          </div>
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h4 className="text-xl font-bold mb-4">Our Commitment</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              We support clients with facility maintenance, repair work,
              installation coordination, and procurement support, with strong
              experience working in professional environments requiring strict
              safety, schedule control, and communication.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col items-center gap-1">
                <span className="text-primary font-bold text-2xl">Japan</span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Based
                </span>
              </div>
              <div className="w-px h-10 bg-slate-700"></div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-primary font-bold text-2xl">24/7</span>
                <span className="text-xs uppercase tracking-wider text-slate-400">
                  Support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
