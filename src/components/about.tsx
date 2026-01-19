import {
  BrushCleaning,
  Building,
  Cable,
  Headphones,
  Landmark,
  Utensils,
} from "lucide-react";
import { Container } from "./container";

const items = [
  {
    title: "Building Maintenance",
    description: "Expert repairs and care.",
    icon: <Building className="text-primary" />,
  },
  {
    title: "Government Facilities",
    description: "Trusted public sector support.",
    icon: <Landmark className="text-primary" />,
  },
  {
    title: "HVAC & Electrical",
    description: "Full technical systems.",
    icon: <Cable className="text-primary" />,
  },
  {
    title: "Janitorial Solutions",
    description: "Immaculate environments.",
    icon: <BrushCleaning className="text-primary" />,
  },
  {
    title: "24/7 Response",
    description: "Always here when needed.",
    icon: <Headphones className="text-primary" />,
  },
  {
    title: "Restaurants & Hotels",
    description: "Professional hotel & restaurant care.",
    icon: <Utensils className="text-primary" />,
  },
];

export const About = () => {
  return (
    <Container id="about" className="py-20">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-display mb-8 font-bold">
              Why Choose Baral Brothers Engineering?
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We believe that great facility management goes beyond just
              maintenance — it creates productive, welcoming, and worry-free
              environments where businesses can thrive.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {item.icon}
                  <div>
                    <h4 className="font-bold text-sm uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
          <img
            alt="Engineer working"
            className="rounded-2xl h-80 w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZj8UFv2D9HsMzZZvicIeF7UhO8Uz2LypxzvP2AnGD0Jv31LCCj9B_nd_UWcJQ-n_ENfopckyVg830KvcsGCuMCMFH4uYYFyqnl5K1LPSpYMI75flocbqLI4fxc0Yzdu5m_Z1nC81u5_feJxP4wioyKZv71LI8PNxuwdoOSgD6WKtuGZnrE6k8veY-LlmxUjp4bvYhZI0Sn1GVP5OSWL3e0DvpaPTg9MRD45jNZ9OLgYAH5Z50QUX5jYCGcN03iEfBjBKLK8cTQA"
          />
          <img
            alt="Construction detail"
            className="rounded-2xl h-80 w-full object-cover mt-8"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtd5I7dOpi13xkEroTQiVtAvT56rPq0V-PA9cKPM1GExwBvoz-QKiv9Uh50dNpzngyREOtkuhCiWxC0iGZggKhItJL_URtiB8rpeS82Rw0-2a9pXfnRwhhi6za7GrC_DDtSjR7dJZuaKPwutea7XPj42NhQA4gtey4o3t79-B8U5FUClxQ-QI1hvSLHvR7qiIj6FU4nOkKELYqcVfwI4IAnbVufKo-6tGyyFazQLIHhn7F9Unw5E8999ZVDdueGPiY-7qeaBb77g"
          />
        </div>
      </div>
    </Container>
  );
};
