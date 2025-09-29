"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyShowcase({ items }: { items: CaseStudy[] }) {
  const [active, setActive] = useState<CaseStudy | null>(null);
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cs, idx) => (
          <motion.div
            key={cs.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.45 }}
          >
            <motion.button
              onClick={() => setActive(cs)}
              whileHover={{ y: -4, scale: 1.01 }}
              whileTap={{ scale: 0.985 }}
              className="group w-full text-left rounded-xl overflow-hidden border border-[var(--border)] bg-white shadow-sm hover:shadow-md"
            >
              <div className="aspect-[16/9] bg-gradient-to-tr from-[color:var(--primary)]/15 via-[color:var(--accent-clay)]/10 to-[color:var(--slate-blue)]/15" />
              <div className="p-5">
                <div className="font-semibold h-heading group-hover:underline underline-offset-4">{cs.title}</div>
                <div className="text-sm text-muted mt-2">{cs.teaser}</div>
                <div className="mt-4">
                  <span className="btn btn-outline text-sm">Read more</span>
                </div>
              </div>
            </motion.button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            key={active.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm p-4 sm:p-6"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mx-auto max-w-3xl rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold h-heading">{active.title}</h3>
                  <p className="text-sm text-muted mt-1">{active.teaser}</p>
                </div>
                <button onClick={() => setActive(null)} className="btn btn-outline px-3 py-1.5 text-sm">Close</button>
              </div>

              <div className="mt-6 grid gap-5">
                <section>
                  <div className="font-medium h-heading">Challenge</div>
                  <p className="text-sm text-muted mt-1 whitespace-pre-line">{active.challenge}</p>
                </section>
                <section>
                  <div className="font-medium h-heading">Solution</div>
                  <ul className="text-sm text-muted mt-1 list-disc pl-5 space-y-1">
                    {active.solution.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </section>
                <section>
                  <div className="font-medium h-heading">Impact</div>
                  <p className="text-sm text-muted mt-1">{active.impact}</p>
                </section>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link href={`/case-studies/${active.slug}`} className="btn btn-outline">View full case study</Link>
                <Link href="/contact" className="btn btn-primary">Book a consultation</Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


