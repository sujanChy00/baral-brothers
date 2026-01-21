import { BadgeCheck, Globe, Shield, Zap } from "lucide-react";
import { Container } from "./container";

const list = [
  {
    title: "Clear Communication",
    description: "Professional support in both English & Japanese.",
    icon: <Globe className="text-primary size-12 mb-4" />,
  },
  {
    title: "Safety & Standards",
    description: "Safety-minded operations with professional standards.",
    icon: <Shield className="text-primary size-12 mb-4" />,
  },
  {
    title: "Fast Response",
    description: "Strong coordination capability for rapid service.",
    icon: <Zap className="text-primary size-12 mb-4" />,
  },
  {
    title: "Compliance & Quality",
    description: "Focus on quality, compliance, and client satisfaction.",
    icon: <BadgeCheck className="text-primary size-12 mb-4" />,
  },
];

export const Features = () => {
  return (
    <Container className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-slate-50"
        >
          {item.icon}
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </Container>
  );
};
