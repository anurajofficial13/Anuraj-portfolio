import React from 'react';
import { scrollToSection } from '../../utils/scroll';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/[0.08] px-6 bg-[#08090a]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-500 dark:text-slate-500">
          &copy; 2026 ANURAJ P. WEB DEVELOPER | WORDPRESS, WOOCOMMERCE & SHOPIFY SPECIALIST.
        </p>
        <div className="flex gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors cursor-pointer focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
