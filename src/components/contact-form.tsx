import { compressImage, sendEmail } from "@/utils";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, LoaderCircle, Send, X } from "lucide-react";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container } from "./container";
import { EmailFailureAlert } from "./email-failure-alert";
import { EmailSuccessAlert } from "./email-success-alert";

const items = [
  "Site location",
  "Scope of work",
  "Required timeline",
  "Photos (if available)",
  "Preferred dates for site visit",
];

export const ContactForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onCaptchaChange = (token: string | null): void => {
    setCaptchaVerified(!!token);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) return;
    const formData = new FormData(e.currentTarget);

    try {
      setIsLoading(true);
      const attachmentPromises = selectedFiles.map((file) =>
        compressImage(file),
      );
      const attachments = await Promise.all(attachmentPromises);

      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
        date: formData.get("date") as string,
        newsletter: formData.get("newsletter") === "on",
        attachments: attachments,
      };

      const res = await sendEmail({
        data,
      });
      if (res.error) setErrorMessage(res.error.message);
      if (res.data) {
        setSuccess(true);
        setSelectedFiles([]);
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending your message.");
    } finally {
      setIsLoading(false);
      setCaptchaVerified(false);
    }
  };

  return (
    <div className="bg-slate-50" id="contact">
      <Container className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <section>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Get in Touch
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Please include the following details in your message to help us
                provide an accurate proposal:
              </p>
              <ul className="space-y-4 mb-8">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary size-5 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Name *
                  </label>
                  <input
                    name="name"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-hidden"
                    placeholder="Your name"
                    required
                    type="text"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Email *
                  </label>
                  <input
                    name="email"
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-hidden"
                    placeholder="email@example.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Subject *
                </label>
                <input
                  name="subject"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-hidden"
                  placeholder="How can we help?"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Preferred site visit date (optional)
                </label>
                <input
                  name="date"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-hidden appearance-none"
                  type="date"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-hidden"
                  placeholder="Your message details..."
                  required
                  rows={6}
                />
              </div>
              <div>
                <p className="block text-sm font-semibold mb-2 text-slate-700">
                  Photos (optional)
                </p>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="image"
                    className="w-full flex items-center gap-3"
                  >
                    <span className="py-2 text-white  px-4 rounded-full border-0 text-sm font-semibold bg-primary hover:bg-primary/90 transition-all cursor-pointer">
                      Choose Files
                    </span>
                    <input
                      ref={fileInputRef}
                      name="photo"
                      type="file"
                      multiple
                      id="image"
                      accept="image/*"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                    <span className="text-sm text-slate-600">
                      {selectedFiles.length > 0
                        ? `+${selectedFiles.length} files`
                        : "no choosen files"}
                    </span>
                  </label>

                  {selectedFiles.length > 0 && (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {selectedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="relative group aspect-square"
                        >
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index}`}
                            className="w-full h-full object-cover rounded-lg border border-slate-200"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-1 -right-1 bg-destructive text-white rounded-full p-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity shadow-sm"
                          >
                            <X className="size-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="text-[10px] text-slate-400">
                    You can select multiple images. Supported formats: JPG, PNG,
                    WEBP.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  className="rounded border-slate-300 text-primary focus:ring-primary"
                  id="newsletter"
                  type="checkbox"
                  name="newsletter"
                />
                <label className="text-xs text-slate-500" htmlFor="newsletter">
                  Yes, I want to receive news about promotions.{" "}
                  <Link to="/privacy" className="underline text-amber-600">
                    Read Privacy policy
                  </Link>
                </label>
              </div>
              {!captchaVerified && (
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                  onChange={onCaptchaChange}
                />
              )}
              {errorMessage && <EmailFailureAlert message={errorMessage} />}
              {success && <EmailSuccessAlert />}

              <button
                disabled={!captchaVerified || isLoading}
                className="w-full bg-amber-600 disabled:opacity-50 text-white font-bold py-4 rounded-xl hover:bg-opacity-90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                <span>Send Message</span>{" "}
                {isLoading ? (
                  <LoaderCircle className="animate-spin" />
                ) : (
                  <Send className="size-5" />
                )}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
