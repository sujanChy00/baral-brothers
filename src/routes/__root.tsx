import { TanStackDevtools } from "@tanstack/react-devtools";
import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import appCss from "../styles.css?url";

const description =
  "Baral Brothers Co., Ltd. provides reliable facility engineering, maintenance, installation support, and government contractor services across Japan. Specialist in U.S. Base facilities and professional project coordination.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content:
          "Baral Brothers Co., Ltd., facility engineering, maintenance, installation support, government contractor services, U.S. Base facilities, professional project coordination",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@baralbrothers",
      },
      {
        name: "twitter:title",
        content: "Baral Brothers Co., Ltd.",
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: "/og-image.png",
      },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Baral Brothers Co., Ltd." },
      { name: "og:description", content: description },
      { name: "og:image", content: "/og-image.png" },
      { name: "og:url", content: "https://baralbrothers.com" },
      { name: "og:image:width", content: "1200" },
      { name: "og:image:height", content: "630" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),

  shellComponent: RootDocument,
  notFoundComponent: () => <p>Not Found</p>,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        {import.meta.env.DEV && (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        )}

        <Scripts />
      </body>
    </html>
  );
}
