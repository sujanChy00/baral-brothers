import { getFooter } from "@/lib/queries";

export async function Footer() {
  const footer = await getFooter();
  const footerText =
    footer.data.text ||
    `© ${new Date().getFullYear()} Baral & Brothers. All Rights Reserved.`;
  return (
    <footer className="bg-muted py-4 text-center">
      <p>{footerText}</p>
    </footer>
  );
}
