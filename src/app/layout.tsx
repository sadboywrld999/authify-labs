import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Authify Labs — World-class engineering to ship faster",
    template: "%s — Authify Labs",
  },
  description:
    "Authify Labs builds scalable, secure, high-quality software for enterprises and venture-backed startups across India, US, and Europe.",
  metadataBase: new URL("https://www.authifylabs.com"),
  openGraph: {
    title: "Authify Labs — World-class engineering to ship faster",
    description:
      "Partner with a senior engineering team that delivers reliable, scalable products and platform transformations.",
    url: "https://www.authifylabs.com",
    siteName: "Authify Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Authify Labs — World-class engineering to ship faster",
    description:
      "Enterprise-grade engineering for modern products: platforms, data, integrations, and cloud-native delivery.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="header">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3 font-semibold tracking-tight">
              <Image src={"/logo.png"} alt="Authify Labs" width={40} height={40} />
              <span>Authify Labs</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/services" className="hover:text-foreground/80 transition-colors">Services</Link>
              <Link href="/solutions" className="hover:text-foreground/80 transition-colors">Solutions</Link>
              <Link href="/case-studies" className="hover:text-foreground/80 transition-colors">Case Studies</Link>
              <Button asChild>
                <Link href="/contact">Discuss your project</Link>
              </Button>
            </nav>
          </div>
        </header>
        <main className="min-h-[calc(100dvh-8rem)]">{children}</main>
        <footer className="border-t border-border/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid gap-6 sm:grid-cols-2 items-center">
            <div className="space-y-2">
              <p className="font-semibold">Authify Labs</p>
              <p className="text-sm text-muted">Enterprise software. Product engineering. Data & integrations.</p>
            </div>
            <div className="flex sm:justify-end gap-6 text-sm flex-wrap">
              <Link href="/privacy" className="hover:text-foreground/80 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-foreground/80 transition-colors">Terms</Link>
              <a href="mailto:admin@authify.tech" className="hover:text-foreground/80 transition-colors">admin@authify.tech</a>
              <a href="tel:+919743057999" className="hover:text-foreground/80 transition-colors">+91 9743057999</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
