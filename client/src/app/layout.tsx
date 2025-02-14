import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { defaultOGImage, OGheight, OGwidth, siteName } from "@/lib/meta";
import { getHeader, getHomePage } from "@/lib/queries";
import "animate.css";
import type { Metadata } from "next";
import { DM_Sans, Lexend } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const res = await getHomePage();
  const seo = res.data?.seo;
  return {
    title: seo?.title || `Baral & Brothers`,
    description: seo?.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_NAME || ""),
    icons: {
      icon: seo?.fav_icon.url || "/favicon.ico",
    },
    keywords: seo?.keywords?.map((keyword) => keyword?.page_keyword) || [],
    openGraph: {
      images: [
        {
          url: seo?.open_graph?.image?.url || defaultOGImage,
          width: OGwidth,
          height: OGheight,
          alt: seo?.open_graph?.alt || "baral brothers",
        },
      ],
      title: seo?.title || "Baral & brothers",
      description: seo?.open_graph?.description,
      url: process.env.NEXT_PUBLIC_BASE_URL,
      siteName: seo?.open_graph?.site_name || siteName,
    },
    twitter: {
      images: [
        {
          url: seo?.open_graph?.image?.url || defaultOGImage,
          alt: seo?.open_graph?.alt || "baral brothers",
          height: OGwidth,
          width: OGheight,
        },
      ],
      title: seo?.title || "Baral & brothers",
      description: seo?.open_graph?.description,
    },
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = await getHeader();
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${lexend.variable} antialiased font-sans`}
      >
        <ThemeProvider
          defaultTheme="system"
          attribute={"class"}
          storageKey="theme"
          enableSystem
          enableColorScheme
        >
          <Suspense fallback="loading">
            <Header data={header} />
          </Suspense>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
