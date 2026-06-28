import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://loweautomation.com"),
  title: {
    default: "Lowe Automation | Custom Software, AI Systems & Business Automation",
    template: "%s | Lowe Automation",
  },
  description:
    "Lowe Automation builds custom software, AI assistants, dashboards, monitoring systems, and workflow automation for businesses that want to save time and work faster.",
  keywords: [
    "business automation",
    "AI systems",
    "custom software",
    "workflow automation",
    "dashboards",
    "monitoring systems",
    "software consulting",
    "AI assistant",
    "automation agency",
  ],
  authors: [{ name: "Lowe Automation" }],
  creator: "Lowe Automation",
  publisher: "Lowe Automation",
  openGraph: {
    title: "Lowe Automation",
    description:
      "Custom software, AI assistants, dashboards, monitoring systems, and business automation.",
    url: "https://loweautomation.com",
    siteName: "Lowe Automation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lowe Automation",
    description:
      "Custom software, AI assistants, dashboards, monitoring systems, and business automation.",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
