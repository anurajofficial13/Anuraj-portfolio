import React from 'react';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-black/5 dark:border-white/[0.08] px-6 bg-[#08090a]">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] font-semibold text-slate-500 dark:text-slate-500">
          &copy; 2026 ANURAJ P. WEB DEVELOPER | WORDPRESS, WOOCOMMERCE & SHOPIFY SPECIALIST.
        </p>
        <div className="flex gap-7">
          <a
            href="#home"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-500 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
