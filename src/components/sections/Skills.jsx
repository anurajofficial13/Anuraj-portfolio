import React from 'react';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <div className="pt-2">
      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-3">Technical Expertise</div>
      <div className="flex flex-wrap gap-2.5" id="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-linear border border-black/5 dark:border-white/[0.08] hover:border-indigo-500/40 hover:scale-[1.03] transition-all duration-300 group cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-indigo-400 group-hover:scale-125 group-hover:bg-indigo-300 transition-all shrink-0"></div>
            <span className="font-semibold text-xs text-slate-800 dark:text-slate-200 tracking-wide">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
