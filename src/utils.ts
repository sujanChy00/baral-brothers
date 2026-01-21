import { createServerFn } from "@tanstack/react-start";
import { clsx, type ClassValue } from "clsx";
import { Resend } from "resend";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const formatDate = (dateStr: string) => {
  if (!dateStr) return "Not specified";
  const date = new Date(dateStr);
  return date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .toLowerCase();
};

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator(
    (data: {
      name: string;
      email: string;
      subject: string;
      message: string;
      date: string;
      newsletter: boolean;
      attachments?: {
        filename: string;
        content: string;
      }[];
    }) => data,
  )
  .handler(async ({ data }) => {
    try {
      if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY is not set");
      }
      const resend = new Resend(process.env.RESEND_API_KEY);

      const response = await resend.emails.send({
        to: process.env.EMAIL as string,
        from: "onboarding@resend.dev",
        subject: data.subject,
        text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\nPreferred Site Visit Date: ${formatDate(data.date)}\nMessage: ${data.message}\nNewsletter: ${data.newsletter ? "YES" : "NO"}`,
        attachments: data.attachments
          ? data.attachments.map((att) => ({
              filename: att.filename,
              content: Buffer.from(att.content, "base64"),
            }))
          : [],
      });

      if (response.error) {
        console.error("Resend API error:", response.error);
        return { error: { message: response.error.message } };
      }

      return { data: response.data };
    } catch (error: any) {
      console.error("sendEmail server function error:", error);
      return { error: { message: error.message || "Internal server error" } };
    }
  });

export const compressImage = (
  file: File,
): Promise<{ filename: string; content: string }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1920;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = "high";
          ctx.drawImage(img, 0, 0, width, height);
        }

        const dataUrl = canvas.toDataURL("image/jpeg", 0.9);
        const base64 = dataUrl.split(",")[1];
        const uniqueId = Math.random().toString(36).substring(2, 7);
        resolve({
          filename: `${file.name.replace(/\.[^/.]+$/, "")}_${uniqueId}.jpg`,
          content: base64,
        });
      };
      img.onerror = reject;
    };
    reader.onerror = reject;
  });
};
