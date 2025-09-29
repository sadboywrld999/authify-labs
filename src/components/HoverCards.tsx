"use client";

import { motion } from "framer-motion";

export function FeatureCard({
  icon,
  title,
  items,
  delay = 0,
}: {
  icon: string;
  title: string;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay, duration: 0.45 }}
    >
      <motion.div whileHover={{ y: -6, scale: 1.01 }} className="card p-6">
        <div className="flex items-center gap-3">
          <span className="text-xl" aria-hidden>{icon}</span>
          <div className="font-semibold">{title}</div>
        </div>
        <ul className="mt-4 space-y-2 text-sm text-muted">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="mt-1 h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--primary)" }}
              />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export function DeliverCard({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: string;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay, duration: 0.4 }}>
      <motion.div whileHover={{ x: 4 }} className="card p-4">
        <div className="flex items-start gap-3">
          <span className="text-lg" aria-hidden>{icon}</span>
          <div>
            <div className="font-medium">{title}</div>
            <div className="text-sm text-muted mt-1">{desc}</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}


