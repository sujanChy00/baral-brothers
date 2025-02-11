import { cn } from "@/lib/utils";

interface Props {
  title: string;
  className?: string;
}

// const formatedDate = new Date().toLocaleString("en-US", {
//   day: "2-digit",
//   month: "short",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: true,
// });

export const PageHeader = ({ title, className }: Props) => {
  return (
    <header className={cn("space-y-6 pb-10", className)}>
      {/* <div className="flex items-end gap-x-2">
        <Separator className="bg-primary w-16" />
        <p>Posted {formatedDate}</p>
      </div> */}
      <h1 className="text-6xl font-thin font-lexend">{title}</h1>
    </header>
  );
};
