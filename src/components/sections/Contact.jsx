import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { socialLinks } from '../../data/socialLinks';
import SectionTitle from '../ui/SectionTitle';

export default function Contact() {
  return (
    <section id="contact" className="reveal">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto space-y-12">
          <SectionTitle
            title={
              <>
                Let's Build Something <span className="text-indigo-500">Together.</span>
              </>
            }
            subtitle="Get in touch for WordPress, WooCommerce, Shopify, or custom web development projects."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {/* Email */}
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-7 rounded-[28px] glass-linear border border-black/5 dark:border-white/[0.08] transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">Direct Email</div>
              <div className="font-bold truncate text-xs sm:text-sm text-slate-900 dark:text-slate-100">{socialLinks.email}</div>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-[28px] glass-linear border border-black/5 dark:border-white/[0.08] transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">LinkedIn</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">linkedin.com/in/anurajofficial</div>
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-[28px] glass-linear border border-black/5 dark:border-white/[0.08] transition-all duration-300 group hover:-translate-y-1.5"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                <Github className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">GitHub</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">@anurajofficial13</div>
            </a>

            {/* Location */}
            <div className="p-7 rounded-[28px] glass-linear border border-black/5 dark:border-white/[0.08] transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-1.5">Location</div>
              <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100">{socialLinks.location}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
