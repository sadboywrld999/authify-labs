import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./components/MobileMenu";
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
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-3 font-bold tracking-tight text-lg hover:opacity-80 transition-opacity">
              <div className="relative">
                <Image src={"/logo.png"} alt="Authify Labs" width={160} height={32} className="rounded-sm" />
              </div>
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-6 text-sm">
                <Link
                  href="/services"
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/solutions"
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  Solutions
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/ai-agents"
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  AI Agents
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link
                  href="/case-studies"
                  className="relative text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                >
                  Case Studies
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </div>
              <Button asChild className="group">
                <Link href="/contact" className="font-medium">
                  Discuss Project
                  <span className="ml-2 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
              </Button>
            </nav>

            {/* Mobile Navigation */}
            <MobileMenu />
          </div>
        </header>
        <main className="min-h-[calc(100dvh-4rem)]">{children}</main>
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
