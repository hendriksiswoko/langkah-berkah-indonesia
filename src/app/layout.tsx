import type { Metadata } from "next";
import "./globals.css";
import { bodyFont, headingFont } from "@/config/fonts";
import { themeToCss } from "@/config/theme";
import { isDemo } from "@/config/mode";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  icons: { icon: site.seo.favicon },
  robots: isDemo ? { index: false, follow: false } : undefined,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    siteName: site.company.brand,
    locale: site.seo.locale,
    type: "website",
    images: [{ url: site.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeToCss() }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
