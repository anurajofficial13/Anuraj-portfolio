import React from 'react';

export default function Card({ children, className, hoverEffect = true, ...props }) {
  const baseStyle = "bg-white/80 dark:bg-[#0f1117]/80 backdrop-blur-xl border border-black/5 dark:border-white/[0.08] shadow-sm";
  const hoverStyle = hoverEffect ? "transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-500/30 hover:shadow-glow-sm" : "";
  return (
    <div className={`${baseStyle} ${hoverStyle} ${className || ''}`} {...props}>
      {children}
    </div>
  );
}
