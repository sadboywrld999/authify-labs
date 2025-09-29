"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

function Section({ cs, reverse = false, index }: { cs: CaseStudy; reverse?: boolean; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.7, 1]);

  return (
    <section ref={ref} className="py-16 sm:py-24">
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:gap-16 items-center ${reverse ? "lg:grid-cols-[1fr_1.1fr]" : "lg:grid-cols-[1.1fr_1fr]"}`}>
        {!reverse && (
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold h-heading">{cs.title}</h3>
            <p className="mt-3 text-muted max-w-xl">{cs.teaser}</p>
            <div className="mt-6 flex gap-3">
              <Link href={`/case-studies/${cs.slug}`} className="btn btn-primary">Read more</Link>
              <Link href="/contact" className="btn btn-outline">Discuss your project</Link>
            </div>
          </motion.div>
        )}

        <div className="relative h-[260px] sm:h-[320px] lg:h-[360px] overflow-hidden rounded-2xl border" style={{ borderColor: "var(--border)" }}>
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-[color:var(--primary)]/20 via-[color:var(--accent-clay)]/15 to-[color:var(--slate-blue)]/20"
            style={{ y: yBg, opacity: opacityBg }}
          />
          <div className="absolute inset-0 grid place-items-center text-muted text-sm">Illustration / mockup placeholder</div>
        </div>

        {reverse && (
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold h-heading">{cs.title}</h3>
            <p className="mt-3 text-muted max-w-xl">{cs.teaser}</p>
            <div className="mt-6 flex gap-3">
              <Link href={`/case-studies/${cs.slug}`} className="btn btn-primary">Read more</Link>
              <Link href="/contact" className="btn btn-outline">Discuss your project</Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function CaseStudySections({ items }: { items: CaseStudy[] }) {
  return (
    <div>
      {items.map((cs, i) => (
        <Section key={cs.id} cs={cs} reverse={i % 2 === 1} index={i} />
      ))}
    </div>
  );
}


