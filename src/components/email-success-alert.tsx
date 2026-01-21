import { CheckCircle } from "lucide-react";

export const EmailSuccessAlert = () => {
  return (
    <div className="border-green-600 border-2 flex items-center justify-center gap-2 text-center p-3 bg-green-100">
      <CheckCircle className="text-green-600" />{" "}
      <p className="text-green-600">Email sent successfully!</p>
    </div>
  );
};
