import React from 'react';

export default function Badge({ children, className, variant = 'indigo', ...props }) {
  const baseStyle = "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md";
  const variants = {
    indigo: "bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 dark:text-indigo-300",
    project: "px-3 py-1 rounded-full bg-white/5 text-indigo-400 text-[10px] font-bold uppercase tracking-widest border border-white/10"
  };

  const finalClassName = `${variant === 'project' ? variants.project : `${baseStyle} ${variants[variant] || ''}`} ${className || ''}`;

  return (
    <span className={finalClassName} {...props}>
      {children}
    </span>
  );
}
