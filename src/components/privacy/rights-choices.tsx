const items = [
  {
    title: "Access and Correction",
    description:
      "You have the right to access and update your personal information. If any information we hold is incorrect or incomplete, please let us know, and we will update it.",
  },
  {
    title: "Deletion",
    description:
      "You may request that we delete your personal information. Please note that we may retain certain information to comply with legal obligations or for legitimate business purposes.",
  },
  {
    title: "Opt-Out",
    description:
      " If you no longer wish to receive promotional emails from us, you can unsubscribe using the link provided in the email or by contacting us directly.",
  },
];

export const RightsChoices = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h6 className="font-semibold text-lg">5. Your Rights and Choices</h6>
        <p className="text-sm">
          You have certain rights regarding your personal information:
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
