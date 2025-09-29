"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface BentoCardProps {
  Icon?: ReactNode;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  className?: string;
  background?: ReactNode;
}

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

export function BentoCard({
  Icon,
  name,
  description,
  cta,
  className,
  background,
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={cn("col-span-3", className)}
    >
      <Card className="group relative h-full overflow-hidden border-border/50 bg-card backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
        <CardContent className="p-6 h-full flex flex-col justify-between">
          {background}
          <motion.div 
            className="relative z-10 flex flex-col gap-3"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {Icon && (
              <div className="text-primary text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {Icon}
              </div>
            )}
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </motion.div>
          {cta && (
            <motion.div 
              className="mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {cta} →
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[20rem] grid-cols-1 gap-4",
        "sm:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}
