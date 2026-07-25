import React from 'react';

export default function SectionTitle({ title, subtitle, center = false, className }) {
  return (
    <div className={`space-y-4 ${center ? 'text-center max-w-2xl mx-auto mb-14' : ''} ${className || ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="text-slate-600 dark:text-slate-400 font-normal text-base md:text-lg leading-relaxed">{subtitle}</p>}
    </div>
  );
}
