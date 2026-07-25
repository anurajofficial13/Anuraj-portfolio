import React from 'react';

export default function Button({ children, className, variant = 'primary', href, ...props }) {
  const baseStyle = "px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-[0.98]";
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/30 shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35",
    secondary: "bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 backdrop-blur-xl",
  };

  const finalClassName = `${baseStyle} ${variants[variant] || ''} ${className || ''}`;

  if (href) {
    return (
      <a href={href} className={finalClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
