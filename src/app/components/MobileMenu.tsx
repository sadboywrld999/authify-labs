"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden hover:bg-primary/10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="fixed top-16 right-0 w-[300px] h-[calc(100vh-4rem)] bg-background border-l border-border/50 shadow-xl z-50 md:hidden">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="inline-flex items-center gap-3 font-bold tracking-tight text-lg">
                <Image src={"/logo.png"} alt="Authify Labs" width={24} height={24} className="rounded-sm" />
                <span>Authify Labs</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/services"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/solutions"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/ai-agents"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  AI Agents
                </Link>
                <Link
                  href="/case-studies"
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>
                <div className="pt-4 border-t border-border/50">
                  <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Discuss Your Project</Link>
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
