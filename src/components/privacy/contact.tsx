import { Separator } from "../separator";

export const Contact = () => {
  return (
    <div>
      <h3 className="text-[#111418] tracking-tight text-xl font-bold leading-tight mb-3">
        9. Contact Us
      </h3>
      <div className="mt-4 space-y-2 text-sm text-[#111418] font-normal leading-relaxed">
        <p>
          If you have any questions or concerns about this Privacy Policy, or if
          you wish to exercise your rights regarding your personal information,
          please contact us at:
        </p>
        <div>
          <h6 className="font-bold">Baral Brothers</h6>
          <p>338-0012 Saitama, Chuo Ward, Oto 1-34-10, Saitama, Japan</p>
        </div>
        <Separator className="h-0.5 bg-zinc-500" />
      </div>
    </div>
  );
};
