"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/caseStudies";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudySticky({ items = caseStudies }: { items?: CaseStudy[] } = {}) {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const ratiosRef = useRef<number[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    sectionRefs.current.forEach((el, idx) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          const ratio = entries[0]?.intersectionRatio ?? 0;
          ratiosRef.current[idx] = ratio;
          let bestIdx = 0;
          let bestRatio = -1;
          for (let i = 0; i < ratiosRef.current.length; i += 1) {
            const r = ratiosRef.current[i] ?? 0;
            if (r > bestRatio) {
              bestRatio = r;
              bestIdx = i;
            }
          }
          setActive((currentActive) => {
            return bestIdx !== currentActive ? bestIdx : currentActive;
          });
        },
        { root: null, rootMargin: "-30% 0px -30% 0px", threshold: thresholds }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [items.length]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="grid gap-16">
          {items.map((cs, idx) => (
            <article
              key={cs.id}
              ref={(el) => {
                sectionRefs.current[idx] = el;
              }}
              className="min-h-[60vh] flex items-center"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold h-heading">{cs.title}</h3>
                <p className="mt-3 text-muted max-w-xl">{cs.teaser}</p>
                <div className="mt-6 flex gap-3">
                  <Link href={`/case-studies/${cs.slug}`} className="btn btn-primary">Read more</Link>
                  <Link href="/contact" className="btn btn-outline">Discuss your project</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:block sticky top-24 h-[70vh] rounded-2xl border" style={{ borderColor: "var(--border)", backgroundColor: "var(--sand)" }}>
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {(() => {
                  const title = items[active]?.id;
                  const src =
                    title === "wellness-infra" ? "/wellness.png" :
                    title === "urban-gardening-d2c" ? "/gardening.png" :
                    title === "radar-smart-cities" ? "/radar.png" :
                    "/atheryn.png";
                  return (
                    <Image src={src} alt={items[active]?.title || "Case"} fill className="object-cover" />
                  );
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


