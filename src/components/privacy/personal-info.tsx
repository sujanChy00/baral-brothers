const items = [
  {
    title: "Identity Information",
    description:
      "Name, address, phone number, email address, and other contact details.",
  },
  {
    title: "Payment information",
    description:
      "Credit card details, billing information, and transaction history for purchases made through our services.",
  },
  {
    title: "Account Information",
    description:
      "If you create an account with us, we may collect a username, password, and other necessary credentials.",
  },
  {
    title: "Demographic Information",
    description:
      "Age, gender, and preferences related to our products and services (for example, food preferences in our restaurant or grocery store).",
  },
];

export const PersonalInfo = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h6 className="font-semibold text-lg">a. Personal Information</h6>
        <p className="text-sm">
          When you interact with our Services (whether through visiting our
          restaurant, shopping at our grocery store, using our website, or
          engaging with our customer service team), we may collect the following
          types of personal information:
        </p>
      </div>
      <ul className="space-y-2 list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>
            <span className="font-medium">{item.title}: </span>
            <span className="text-sm">{item.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
