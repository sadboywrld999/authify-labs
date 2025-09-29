"use client";

import { ReactNode } from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  delayOffset?: number;
  children?: ReactNode;
}

export function BorderBeam({
  className = "",
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  delay = 0,
  delayOffset = 0,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  children,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--border-width": borderWidth,
          "--delay": `${delay + delayOffset}s`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}
    >
      <div
        style={{
          width: "calc(100% * 2)",
          height: "calc(100% * 2)",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          maskImage: `conic-gradient(from 0deg, transparent 0deg, black 360deg)`,
          WebkitMaskImage: `conic-gradient(from 0deg, transparent 0deg, black 360deg)`,
          animation: `spin calc(var(--duration) * 1s) linear infinite`,
          animationDelay: "var(--delay)",
        }}
        className="animate-spin"
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `conic-gradient(from 0deg, var(--color-from), var(--color-to), var(--color-from))`,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          inset: "var(--border-width)",
          background: "hsl(var(--background))",
          borderRadius: "inherit",
        }}
      />

      {children}
    </div>
  );
}
