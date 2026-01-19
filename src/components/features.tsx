import { BadgeCheck, Tag, Truck } from "lucide-react";
import { Container } from "./container";

const list = [
  {
    title: "Fast Service",
    description: "Rapid response for all technical needs.",
    icon: <Truck className="text-primary size-14" />,
  },
  {
    title: "Quality Guarantee",
    description: "Rigorous operational standards applied.",
    icon: <BadgeCheck className="text-primary size-14" />,
  },
  {
    title: "Special Offers",
    description: "Competitive rates for ongoing contracts.",
    icon: <Tag className="text-primary size-14" />,
  },
];

export const Features = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 transition-transform hover:-translate-y-1"
        >
          {item.icon}
          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
          <p className="text-slate-500 text-sm">{item.description}</p>
        </div>
      ))}
    </Container>
  );
};
