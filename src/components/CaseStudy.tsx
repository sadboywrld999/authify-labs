"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyGrid({ items }: { items: CaseStudy[] }) {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((cs) => (
          <motion.a
            key={cs.id}
            href={`/case-studies/${cs.slug}`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="text-left group rounded-xl border border-border/80 bg-elev-0 hover:bg-elev-1 transition-colors overflow-hidden shadow-sm hover:shadow-md"
          >
            <div className="relative aspect-[16/9]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-accent/25" />
              <motion.div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              >
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
              </motion.div>
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold tracking-tight">{cs.title}</div>
                  <div className="text-sm text-muted mt-1">{cs.teaser}</div>
                </div>
                <motion.span
                  className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-xs text-muted"
                  animate={{ rotate: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  ↗
                </motion.span>
              </div>
              {/* removed explore text per feedback */}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}


