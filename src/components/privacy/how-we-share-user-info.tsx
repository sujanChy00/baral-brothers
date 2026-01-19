const items = [
  {
    title: "Service Providers",
    description:
      "We may share your information with third-party vendors and service providers who assist us in operating our business, such as payment processors, delivery services, and website hosting providers.",
  },
  {
    title: "Business Transfers",
    description:
      "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
  },
  {
    title: "Legal Obligations",
    description:
      "We may disclose your information to comply with legal obligations, resolve disputes, and enforce our agreements.",
  },
];

export const HowWeShareUserInfo = () => {
  return (
    <section>
      <h3 className="text-[#111418] tracking-tight text-xl font-bold leading-tight mb-3">
        3. How We Share Your Information
      </h3>
      <p className="text-[#111418] text-base font-normal leading-relaxed">
        We do not sell or rent your personal information to third parties.
        However, we may share your information with trusted third parties in the
        following circumstances:
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
