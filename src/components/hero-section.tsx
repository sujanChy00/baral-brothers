import { Container } from "./container";

export const HeroSection = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <Container>
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-slate-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-slate-900 ">
            Facility Engineering <br />
            <span className="text-primary italic font-serif">&</span> <br />
            Government Contractor Support in Japan
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            Reliable maintenance, repair, and installation support for U.S. base
            facilities, government-related projects, and commercial clients
            across Japan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </a>
            <a
              href="#contact"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-3 rounded-full font-bold hover:bg-slate-50 transition-all shadow-sm"
            >
              Schedule a Site Visit
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
