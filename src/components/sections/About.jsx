import React from 'react';
import Skills from './Skills';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="reveal">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square rounded-[36px] overflow-hidden border border-black/5 dark:border-white/[0.08] relative z-10 shadow-2xl bg-[#0f1117]">
              <img
                src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80&w=1200"
                alt="Anuraj P - Web Developer"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <SectionTitle
              title="WordPress, WooCommerce & Shopify Development."
              subtitle="Web Developer based in Calicut, Kerala with hands-on experience converting Figma designs into responsive websites, custom themes, and optimized e-commerce solutions."
            />
            
            {/* Education & Certifications from CV */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl glass-linear border border-black/5 dark:border-white/[0.08]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">Education</div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100">Bachelor of Science (Electronics)</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Calicut University</div>
              </div>

              <div className="p-5 rounded-2xl glass-linear border border-black/5 dark:border-white/[0.08]">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">Certifications</div>
                <ul className="text-xs font-semibold text-slate-800 dark:text-slate-200 space-y-1.5">
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Certified WordPress Developer</li>
                  <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Python Certification (120+ Hours)</li>
                </ul>
              </div>
            </div>

            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
