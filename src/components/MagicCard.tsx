"use client";

import { ReactNode } from "react";

interface MagicCardProps {
  children: ReactNode;
  className?: string;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientSize?: number;
  borderWidth?: number;
  borderRadius?: number;
}

export function MagicCard({
  children,
  className = "",
  gradientColor = "#3A6D7C",
  gradientOpacity = 0.5,
  gradientSize = 400,
  borderWidth = 1,
  borderRadius = 12,
}: MagicCardProps) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
        border: `${borderWidth}px solid transparent`,
        background: `linear-gradient(var(--background), var(--background)) padding-box, linear-gradient(45deg, transparent, ${gradientColor}, transparent) border-box`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100"
        style={{
          background: `radial-gradient(${gradientSize}px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${gradientColor}${Math.round(gradientOpacity * 255).toString(16).padStart(2, '0')}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
