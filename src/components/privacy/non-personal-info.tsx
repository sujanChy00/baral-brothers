const items = [
  {
    title: "Data Usage",
    description:
      "Information about how you interact with our website, apps, or physical services, including page views, transaction history, and interactions.",
  },
  {
    title: "Cookies and Tracking Technologies",
    description:
      "We use cookies and similar tracking technologies to enhance your user experience, such as remembering your preferences or tracking website analytics.",
  },
];

export const NonPersonalInfo = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h6 className="font-semibold text-lg">b. Non-Personal Information</h6>
        <p className="text-sm">
          In addition to personal data, we may collect non-personally
          identifiable information such as:
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
