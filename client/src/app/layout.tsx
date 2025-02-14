import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { getHeader } from "@/lib/queries";
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

export const metadata: Metadata = {
  title: "Bral & Brothers",
};

// export const generateMetadata = async (): Promise<Metadata> => {
//   const res = await getHomePage();
//   return {
//     title: res.data?.title || `Bral Brothers`,
//     description: res.data?.description,
//     icons: {
//       icon: res.data?.fav_icon.url || "/favicon.ico",
//     },
//     keywords: res.data?.keywords?.map((keyword) => keyword?.page_keyword) || [],
//     // openGraph: {
//     //   images: [
//     //     {
//     //       url: res.data?.open_graph.image.url || defaultOGImage,
//     //       width: res.data?.open_graph.width || OGwidth,
//     //       height: res.data?.open_graph.height || OGheight,
//     //       alt: res.data?.open_graph.alt || "baral brothers",
//     //     },
//     //   ],
//     //   title: res.data.open_graph?.title,
//     //   description: res.data.open_graph?.description,
//     //   url: process.env.NEXT_PUBLIC_BASE_URL,
//     //   siteName: res.data.open_graph.site_name || siteName,
//     // },
//     // twitter: {
//     //   images: [
//     //     {
//     //       url: defaultOGImage,
//     //       alt: "tetoteto",
//     //       height: OGwidth,
//     //       width: OGheight,
//     //     },
//     //   ],
//     //   title: `tetoteto | ${dictionary.home}`,
//     //   description: dictionary.description,
//     // },
//   };
// };

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
