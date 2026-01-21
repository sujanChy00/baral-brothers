import { Facebook } from "@/icons/facebook";
import { Instagram } from "@/icons/instagram";
import { Twitter } from "@/icons/twitter";
import { Link } from "@tanstack/react-router";
import { Circle, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Container } from "./container";
import { sendEmail } from "@/utils";
import { EmailFailureAlert } from "./email-failure-alert";
import { EmailSuccessAlert } from "./email-success-alert";

export const ContactForm = () => {
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const onCaptchaChange = (token: string | null): void => {
    setCaptchaVerified(!!token);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!captchaVerified) return;
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      newsletter: formData.get("newsletter") === "on",
    };

    setIsLoading(true);

    try {
      const res = await sendEmail({
        data,
      });
      if (res.error) setErrorMessage(res.error.message);
      if (res.data) setSuccess(true);
    } catch (error) {
      setErrorMessage("An error occurred while sending your message.");
    }
    setIsLoading(false);
    setCaptchaVerified(false);
  };

  return (
    <div className="bg-slate-50" id="contact">
      <Container className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Connect with us on social media!
            </h2>
            <p className="mb-8 text-lg max-w-md">
              Follow us on Facebook and Instagram for the latest updates,
              contests, and promotions.
            </p>
            <div className="flex gap-4 mb-12">
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Facebook className="size-6" />
              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Twitter className="size-6 [&>path]:fill-black" />
              </a>
              <a href="#" rel="noopener noreferrer" target="_blank">
                <Instagram className="size-6" />
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center rounded-full bg-primary">
                  <Mail className="size-4 text-white" />
                </div>
                <a
                  href="mailto:jbaral@sierrajapan.com"
                  className="hover:text-amber-600 transition-colors hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  jbaral@sierrajapan.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-8 flex items-center justify-center rounded-full bg-primary">
                  <Phone className="size-4 text-white" />
                </div>
                <a
                  href="tel:0488653396"
                  className="hover:text-amber-600 transition-colors hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  0488653396
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    Name *
                  </label>
                  <input
                    name="name"
                    className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
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
                    className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
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
                  className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="How can we help?"
                  required
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-slate-700">
                  Message *
                </label>
                <textarea
                  name="message"
                  className="w-full bg-slate-50 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your message details..."
                  required
                  rows={4}
                />
              </div>
              <div className="flex items-center gap-3">
                <input
                  className=" rounded border-slate-300 text-primary focus:ring-primary"
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
                {isLoading ? <Circle className="animate-spin" /> : <Send />}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
