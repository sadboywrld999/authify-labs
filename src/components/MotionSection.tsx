"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type MotionSectionProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function MotionSection({ children, delay = 0, className }: MotionSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}


