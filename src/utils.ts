import { createServerFn } from "@tanstack/react-start";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
      newsletter: boolean;
    }) => data,
  )
  .handler(async ({ data }) => {
    const response = await resend.emails.send({
      // to: "jbaral@sierrajapan.com",
      to: process.env.EMAIL as string,
      from: "Acme <onboarding@resend.dev>",
      subject: data.subject,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message},\n Newsletter: ${data.newsletter ? "YES" : "NO"}`,
    });
    return response;
  });
