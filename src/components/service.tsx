import { Engineer } from "@/icons/engineer";
import { Terminal } from "@/icons/terminal";
import { CheckCircle } from "lucide-react";
import { Container } from "./container";

const items = [
  {
    title: "Software Engineering",
    description:
      "We develop intelligent systems and automation frameworks to keep your operations ahead of the curve. Specializing in custom website development, third-party API integration, and ongoing technical support.",
    icon: <Terminal className="size-32" />,
    features: [
      "Automation Frameworks",
      "Embedded Technologies",
      "Network Solutions",
    ],
  },
  {
    title: "Facility Management",
    description:
      "Years of hands-on experience in providing reliable, efficient, and tailored facility management. From routine maintenance to HVAC and emergency support for both private and government sectors.",
    icon: <Engineer className="size-32" />,
    features: [
      "Hotels &amp; Restaurants",
      "U.S. Military Bases",
      "24/7 Emergency Support",
    ],
  },
];

export const Services = () => {
  return (
    <div className="bg-slate-50">
      <Container className="py-24">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Core Services</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <ul className="space-y-2 mb-8 text-sm text-slate-500">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-primary size-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
