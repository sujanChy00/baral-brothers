const items = [
  {
    title: "Service Delivery",
    description:
      "To fulfill your orders, reservations, and requests for our restaurant, grocery store, or other services.",
  },
  {
    title: "Payments",
    description:
      "To securely process payments for transactions made through our services.",
  },
  {
    title: "Service Improvement",
    description:
      "To enhance the quality and functionality of our services based on user feedback and usage patterns.",
  },
  {
    title: "Communication",
    description:
      "To send you promotional offers, service updates, or other communications relevant to your interests, provided you have consented to receive such communications.",
  },
  {
    title: "Legal Requirements",
    description:
      "To comply with applicable laws, regulations, and legal processes.",
  },
];

export const HowWeUseUserInfo = () => {
  return (
    <section>
      <h3 className="text-[#111418] tracking-tight text-xl font-bold leading-tight mb-3">
        2. How We Use Your Information
      </h3>
      <p className="text-[#111418] text-base font-normal leading-relaxed">
        Your data allows us to maintain and improve our services. Specifically,
        we use your information to:
      </p>
      <div className="mt-4 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
          >
            <p className="font-semibold text-primary mb-1">{item.title}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
