import {
  CheckCircle,
  Settings,
  ShoppingCart,
  Terminal,
  Truck,
  UserCheck,
} from "lucide-react";
import { Container } from "./container";

const items = [
  {
    title: "Facility Engineering & Maintenance",
    description:
      "Reliable maintenance and troubleshooting for high-standard environments.",
    icon: <Settings className="size-24" />,
    features: [
      "Preventive maintenance support",
      "Electrical and lighting support",
      "Plumbing and drainage support",
      "Interior repair support",
    ],
  },
  {
    title: "Installation & Site Support",
    description:
      "On-site coordination, installation scheduling, and field verification.",
    icon: <Truck className="size-24" />,
    features: [
      "Delivery & inside placement",
      "Installation coordination",
      "Field verification / measurements",
      "Removal & cleanup",
    ],
  },
  {
    title: "Project Coordination",
    description:
      "Expert vendor management and site visit planning for complex projects.",
    icon: <UserCheck className="size-24" />,
    features: [
      "Subcontractor coordination",
      "Site visit & escort-ready planning",
      "Progress updates & documentation",
      "Schedule planning",
    ],
  },
  {
    title: "Procurement Support",
    description:
      "Sourcing product options and matching specifications with efficient delivery.",
    icon: <ShoppingCart className="size-24" />,
    features: [
      "Sourcing product options",
      "Quotation preparation",
      "Lead-time confirmation",
      "Delivery planning",
    ],
  },
  {
    title: "Technology Support",
    description:
      "Custom IT solutions and automation frameworks to streamline operations.",
    icon: <Terminal className="size-24" />,
    features: [
      "Custom website development",
      "Automation frameworks",
      "Third-party API integration",
      "Network Solutions",
    ],
  },
];

export const Services = () => {
  return (
    <div className="bg-slate-50" id="services">
      <Container className="py-24">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Services</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100"
            >
              <div className="mb-6 text-primary/80 group-hover:text-primary transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                {item.description}
              </p>
              <ul className="space-y-2 mb-4 text-sm text-slate-500">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-primary size-4 shrink-0" />
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
