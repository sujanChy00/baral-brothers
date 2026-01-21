import { Info } from "lucide-react";

export const EmailFailureAlert = ({ message }: { message: string }) => {
  return (
    <div className="border-red-600 border-2 flex items-center justify-center gap-2 text-center p-3 bg-red-100">
      <Info className="text-red-600" />{" "}
      <p className="text-red-600">{message}</p>
    </div>
  );
};
